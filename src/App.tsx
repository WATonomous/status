import { useState } from 'react'
import useSWR from 'swr'
import './App.css'
import reactLogo from './assets/react.svg'
import { healthchecksioFetcher, sentryFetcher } from './utils'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  const { data: hcData, error: hcError, isLoading: hcIsLoading } = useSWR('/api/v2/checks/', healthchecksioFetcher);
  const { data: sentryData, error: sentryError, isLoading: sentryIsLoading } = useSWR('/api/0/organizations/watonomous/monitors/', sentryFetcher);

  console.log(hcData, hcError, hcIsLoading);
  console.log(sentryData, sentryError, sentryIsLoading);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
