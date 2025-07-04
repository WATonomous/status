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
    <div className="max-w-6xl mx-auto">
      <div className="mb-12 text-center">
        <div className="mb-6">
          <a href="https://cloud.watonomous.ca" target="_blank" className="main-logo">
            <WATcloudLogo className="inline" />
          </a>
        </div>
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-gray-900 dark:text-white">Infrastructure Status</h1>
          <h2 className="text-xl text-gray-600 dark:text-gray-400">An overview of the health of WATcloud</h2>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 max-w-3xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-3 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2 text-center text-gray-900 dark:text-white">Quick Links</h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <a href="https://cloud.watonomous.ca/docs/compute-cluster/support-resources" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Support</a>
            <span className="text-gray-400">•</span>
            <a href="https://groups.google.com/a/watonomous.ca/g/watcloud-compute-cluster-announcements" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Announcements</a>
            <span className="text-gray-400">•</span>
            <a href="https://cloud.watonomous.ca" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">Docs</a>
            <span className="text-gray-400">•</span>
            <a href={`./legacy.html${theme == "auto" ? "" : `#theme=${theme}`}`} className="text-blue-600 dark:text-blue-400 hover:underline">Legacy</a>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-3 border border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold mb-2 text-center text-gray-900 dark:text-white">Options</h2>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Theme:</span>
              <OptionGroup
                options={THEMES}
                selected={theme}
                onChange={setTheme}
                className=""
                optionClassName="text-gray-900 bg-white dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                selectedClassName="bg-blue-500 text-white"
              />
            </div>
            <div className="flex items-center justify-center">
              <input type="checkbox" id="show-internal" checked={showInternal} onChange={() => setShowInternal(!showInternal)} className="mr-2" />
              <label htmlFor="show-internal" className="text-sm text-gray-600 dark:text-gray-400">Show internal checks</label>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Scheduled Maintenance</h2>
          <h3 className="text-base text-gray-600 dark:text-gray-400 mb-4">Planned maintenance windows and outages</h3>
          <MaintenanceWindows />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Healthchecks.io</h2>
          <h3 className="text-base text-gray-600 dark:text-gray-400 mb-4">Monitoring data from healthchecks.io</h3>
          <HealthchecksioStatus {...healthchecksioParams} />
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Sentry</h2>
          <h3 className="text-base text-gray-600 dark:text-gray-400 mb-4">Monitoring data from watonomous.sentry.io</h3>
          <SentryStatus {...sentryParams} />
        </div>
      </div>
    </div>
  )
}

export default App
