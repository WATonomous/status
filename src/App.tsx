import useSWR from 'swr'
import './App.css'
import { sentryFetcher } from './utils'
import WATcloudLogo from './assets/watcloud-logo'
import { HealthchecksioStatus } from './healthchecksio'
import { useState } from 'react'

function App() {
  // Parse options from the URL
  const options = new URLSearchParams(document.location.search);
  const globalOptions = {
    showInternal: options.get('showInternal') === 'true' || false,
  }
  const healthchecksioOptions: Record<string, string> = {}
  const sentryOptions: Record<string, string> = {}
  for (const [key, value] of options.entries()) {
    if (key.startsWith('hc_')) {
      healthchecksioOptions[key.substring('hc_'.length)] = value;
    } else if (key.startsWith('sentry_')) {
      sentryOptions[key.substring('sentry_'.length)] = value;
    }
  }

  const [showInternal, setShowInternal] = useState(globalOptions.showInternal);
  const { data: sentryDataRaw, error: sentryError, isLoading: sentryIsLoading } = useSWR('/api/0/organizations/watonomous/monitors/', sentryFetcher, { refreshInterval: 5000 });

  console.log("==================")
  console.log(sentryDataRaw, sentryError, sentryIsLoading);

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
        <h2 className="text-xl">Options</h2>
        <span className="text-sm text-gray-500 flex items-center justify-center">
          <input type="checkbox" id="show-internal" checked={showInternal} onChange={() => setShowInternal(!showInternal)} />
          <label htmlFor="show-internal" className="ml-1">Show internal checks</label>
        </span>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl">Healthchecks.io</h2>
        <HealthchecksioStatus showInternal={showInternal} {...healthchecksioOptions} />
      </div>
      <div className="mb-8">
        <h2 className="text-2xl">Sentry</h2>
        {sentryIsLoading && <p className='text-gray-500'>Loading...</p>}
        {sentryError && <p className='text-red-500'>Error: {sentryError.message}. Is your adblocker blocking the request?</p>}
      </div>
    </>
  )
}

export default App
