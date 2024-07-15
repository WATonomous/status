import { useState } from 'react'
import useSWR from 'swr'
import './App.css'
import { healthchecksioFetcher, sentryFetcher } from './utils'
import WATcloudLogo from './assets/watcloud-logo'

function processHCData(data: any) {
  if (!data) {
    return null;
  }
  return data.checks?.map((check: any) => {
    const tags = check.tags.split(' ');

    const additionalAttributes: Record<string, string> = {};
    for (const tag of tags) {
      if (!tag.includes('=')) {
        continue;
      }
      const [key, value] = tag.split('=');
      additionalAttributes[key] = value;
    }

    return {
      ...check,
      ...additionalAttributes,
    };
  });
}

function App() {
  const { data: hcDataRaw, error: hcError, isLoading: hcIsLoading } = useSWR('/api/v2/checks/', healthchecksioFetcher, { refreshInterval: 5000 });
  const { data: sentryDataRaw, error: sentryError, isLoading: sentryIsLoading } = useSWR('/api/0/organizations/watonomous/monitors/', sentryFetcher, { refreshInterval: 5000 });

  const hcData = processHCData(hcDataRaw);

  console.log("==================")
  console.log(hcDataRaw, hcData, hcError, hcIsLoading);
  console.log(sentryDataRaw, sentryError, sentryIsLoading);

  return (
    <>
      <div className="grid lg:grid-cols-2 lg:divide-x mb-8">
        <div className="lg:text-right lg:pr-8">
          <a href="https://cloud.watonomous.ca" target="_blank"v className="main-logo">
            <WATcloudLogo className="inline" />
          </a>
        </div>
        <div className="lg:text-left lg:pl-8 py-2">
          <h1 className="text-3xl">Infrastructure Status</h1>
          <h2 className="text-lg text-gray-500">An overview of the health of WATcloud services</h2>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl">Healthchecks.io</h2>
        {hcIsLoading && <p className='text-gray-500'>Loading...</p>}
        {hcError && <p className='text-red-500'>Error: {hcError.message}</p>}
        <h3 className="text-xl">Group by host</h3>
        <div className="flex">
        </div>
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
