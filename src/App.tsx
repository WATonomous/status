import { useState } from 'react'
import useSWR from 'swr'
import './App.css'
import { healthchecksioFetcher, sentryFetcher } from './utils'
// import viteLogo from '/vite.svg'
import watcloudLogo from '/favicon-dark.svg'

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
        <a href="https://cloud.watonomous.ca" target="_blank">
          <img src={watcloudLogo} className="logo" alt="WATcloud logo" />
        </a>
      </div>
      <h1>WATcloud Status</h1>
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
