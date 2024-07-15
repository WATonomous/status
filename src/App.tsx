import { useState } from 'react'
import useSWR from 'swr'
import './App.css'
import { healthchecksioFetcher, sentryFetcher } from './utils'
import WATcloudLogo from './assets/watcloud-logo'

function App() {
  const [count, setCount] = useState(0)

  const { data: hcData, error: hcError, isLoading: hcIsLoading } = useSWR('/api/v2/checks/', healthchecksioFetcher, { refreshInterval: 5000 });
  const { data: sentryData, error: sentryError, isLoading: sentryIsLoading } = useSWR('/api/0/organizations/watonomous/monitors/', sentryFetcher, { refreshInterval: 5000 });

  console.log("==================")
  console.log(hcData, hcError, hcIsLoading);
  console.log(sentryData, sentryError, sentryIsLoading);

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
