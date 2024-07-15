import { useState } from 'react'
import useSWR from 'swr'
import './App.css'
import { healthchecksioFetcher, sentryFetcher } from './utils'
import WATcloudLogo from './assets/watcloud-logo'

function processHCData(data: any) {
  return data.checks.map((check: any) => {
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
  const [count, setCount] = useState(0)

  const { data: hcDataRaw, error: hcError, isLoading: hcIsLoading } = useSWR('/api/v2/checks/', healthchecksioFetcher, { refreshInterval: 5000 });
  const { data: sentryDataRaw, error: sentryError, isLoading: sentryIsLoading } = useSWR('/api/0/organizations/watonomous/monitors/', sentryFetcher, { refreshInterval: 5000 });

  console.log("==================")
  console.log(hcDataRaw, processHCData(hcDataRaw), hcError, hcIsLoading);
  console.log(sentryDataRaw, sentryError, sentryIsLoading);

  return (
    <>
      <div>
        <a href="https://cloud.watonomous.ca" target="_blank" className="main-logo">
          <WATcloudLogo className="inline" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
