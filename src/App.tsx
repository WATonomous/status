import './App.css'
import WATcloudLogo from './assets/watcloud-logo'
import { HealthchecksioStatus } from './healthchecksio'
import { useState } from 'react'
import { SentryStatus } from './sentry'
import { OptionGroup } from './option-group'
import { MaintenanceWindows } from './maintenance'

function updateQueryParams(key: string, val: string, queryParams: URLSearchParams) {
  queryParams.set(key, val);
  const newUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}?${queryParams.toString()}`;
  window.history.replaceState(null, '', newUrl);
}

const THEMES = ['light', 'dark', 'auto'] as const;

function App() {
  // Parse queryOptions from the URL
  const queryParams = new URLSearchParams(document.location.search);
  const globalOptions = {
    showInternal: queryParams.get('showInternal') === 'true' || false,
    theme: THEMES.includes(queryParams.get('theme') as typeof THEMES[number]) ? queryParams.get('theme') as typeof THEMES[number] : 'auto',
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

  const [theme, _setTheme] = useState(globalOptions.theme as typeof THEMES[number]);
  function setTheme(val: typeof THEMES[number]) {
    _setTheme(val);
    updateQueryParams('theme', val, queryParams);

    if (val === 'light') {
      document.documentElement.classList.toggle('dark', false);
      document.documentElement.style.setProperty('color-scheme', 'light');
    } else if (val === 'dark') {
      document.documentElement.classList.toggle('dark', true);
      document.documentElement.style.setProperty('color-scheme', 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.toggle('dark', true);
      document.documentElement.style.setProperty('color-scheme', 'dark');
    }
  }

  return (
    <>
      <div className="mb-8">
        <div>
          <a href="https://cloud.watonomous.ca" target="_blank" className="main-logo">
            <WATcloudLogo className="inline" />
          </a>
        </div>
        <div>
          <h1 className="text-3xl">Infrastructure Status</h1>
          <h2 className="text-lg text-gray-500">An overview of the health of WATcloud</h2>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 mb-8">
        <div>
          <h2 className="text-xl">Quick Links</h2>
          <ul className="text-sm">
            <li><a href="https://cloud.watonomous.ca/docs/compute-cluster/support-resources" target="_blank">Support Resources</a></li>
            <li><a href="https://groups.google.com/a/watonomous.ca/g/watcloud-compute-cluster-announcements" target="_blank">Announcements</a></li>
            <li><a href="https://cloud.watonomous.ca" target="_blank">Documentation</a></li>
            <li><a href={`./legacy.html${theme == "auto" ? "" : `#theme=${theme}`}`}>Legacy Status Page</a></li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl">Options</h2>
          <div>
            <span className="text-xs text-gray-500 flex items-center justify-center mb-1">Theme:</span>
            <OptionGroup
              options={THEMES}
              selected={theme}
              onChange={setTheme}
              className="mb-2"
              optionClassName="text-gray-900 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white text-xs px-2 py-1"
              selectedClassName="bg-blue-500 text-white"
            />
          </div>
          <span className="text-xs text-gray-500 flex items-center justify-center">
            <input type="checkbox" id="show-internal" checked={showInternal} onChange={() => setShowInternal(!showInternal)} />
            <label htmlFor="show-internal" className="ml-1">Show internal checks</label>
          </span>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Scheduled Maintenance</h2>
          <h3 className="text-base text-gray-600 dark:text-gray-400 mb-4">Planned maintenance windows and outages</h3>
          <MaintenanceWindows />
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
      </div>
    </>
  )
}

export default App
