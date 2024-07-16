import './App.css'
import WATcloudLogo from './assets/watcloud-logo'
import { HealthchecksioStatus } from './healthchecksio'
import { useState } from 'react'
import { SentryStatus } from './sentry'

function updateQueryParams(key: string, val: string, queryParams: URLSearchParams) {
  queryParams.set(key, val);
  const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${queryParams.toString()}`;
  window.history.replaceState(null, '', newUrl);
}

function App() {
  // Parse queryOptions from the URL
  const queryParams = new URLSearchParams(document.location.search);
  const globalOptions = {
    showInternal: queryParams.get('showInternal') === 'true' || false,
  }
  const healthchecksioParams: Record<string, string | boolean | Function> = {
    showInternal: globalOptions.showInternal,
    updateQueryParams: (key: string, val: string) => updateQueryParams(`hc_${key}`, val, queryParams),
  }
  const sentryParams: Record<string, string | boolean | Function> = {
    showInternal: globalOptions.showInternal,
    updateQueryParams: (key: string, val: string) => updateQueryParams(`sentry_${key}`, val, queryParams),
  }
  for (const [key, value] of queryParams.entries()) {
    if (key.startsWith('hc_')) {
      healthchecksioParams[key.substring('hc_'.length)] = value;
    } else if (key.startsWith('sentry_')) {
      sentryParams[key.substring('sentry_'.length)] = value;
    }
  }

  const [showInternal, _setShowInternal] = useState(globalOptions.showInternal);

  function setShowInternal(val: boolean) {
    _setShowInternal(val);
    updateQueryParams('showInternal', val.toString(), queryParams);
  }

  return (
    <>
      <div className="grid lg:grid-cols-2 lg:divide-x mb-8">
        <div className="lg:text-right lg:pr-8">
          <a href="https://cloud.watonomous.ca" target="_blank" className="main-logo">
            <WATcloudLogo className="inline" />
          </a>
        </div>
        <div className="lg:text-left lg:pl-8 py-2">
          <h1 className="text-3xl">Infrastructure Status</h1>
          <h2 className="text-lg text-gray-500">An overview of the health of WATcloud</h2>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl">Useful Links</h2>
        <ul>
          <li><a href="https://cloud.watonomous.ca" target="_blank">Documentation</a></li>
          <li><a href="https://github.com/WATonomous/infrastructure-support/discussions" target="_blank">Announcements</a></li>
          <li><a href="./legacy.html">Legacy Status Page</a></li>
          <li><a href="https://github.com/WATonomous/status">Source Code</a></li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl">Options</h2>
        <span className="text-sm text-gray-500 flex items-center justify-center">
          <input type="checkbox" id="show-internal" checked={showInternal} onChange={() => setShowInternal(!showInternal)} />
          <label htmlFor="show-internal" className="ml-1">Show internal checks</label>
        </span>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl">Healthchecks.io</h2>
        <h3 className="text-lg text-gray-500">Monitoring data from healthchecks.io</h3>
        <HealthchecksioStatus {...healthchecksioParams} />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl">Sentry</h2>
        <h3 className="text-lg text-gray-500">Monitoring data from watonomous.sentry.io</h3>
        <SentryStatus {...sentryParams} />
      </div>
    </>
  )
}

export default App
