import { MaintenanceWindow, MaintenanceStatus, MAINTENANCE_SYMBOLS } from "./constants";
import { timeUntil, cn } from "./utils";

// Sample maintenance windows data - in a real implementation, this could come from an API
const SAMPLE_MAINTENANCE_WINDOWS: MaintenanceWindow[] = [
  {
    id: "maint-001",
    title: "Scheduled Network Maintenance",
    description: "Upgrading network infrastructure in the compute cluster. Some services may experience brief interruptions.",
    startTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // 2 days from now
    endTime: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000 + 4 * 60 * 60 * 1000), // 4 hours later
    status: MaintenanceStatus.Upcoming,
    affectedServices: ["Compute Cluster", "File Storage"],
    detailsUrl: "https://cloud.watonomous.ca/docs/compute-cluster/announcements"
  },
  {
    id: "maint-002", 
    title: "Database Optimization",
    description: "Performing routine database maintenance and optimization tasks.",
    startTime: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    endTime: new Date(Date.now() + 1 * 60 * 60 * 1000), // 1 hour from now
    status: MaintenanceStatus.Ongoing,
    affectedServices: ["Web Dashboard", "API"],
  }
];

function getMaintenanceStatus(window: MaintenanceWindow): MaintenanceStatus {
  const now = new Date();
  if (now < window.startTime) {
    return MaintenanceStatus.Upcoming;
  } else if (now > window.endTime) {
    return MaintenanceStatus.Completed;
  } else {
    return MaintenanceStatus.Ongoing;
  }
}

function getStatusClassName(status: MaintenanceStatus): string {
  switch (status) {
    case MaintenanceStatus.Upcoming:
      return "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-950";
    case MaintenanceStatus.Ongoing:
      return "border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950";
    case MaintenanceStatus.Completed:
      return "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-950";
    default:
      return "border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900";
  }
}

function getStatusTextClassName(status: MaintenanceStatus): string {
  switch (status) {
    case MaintenanceStatus.Upcoming:
      return "text-blue-800 dark:text-blue-200";
    case MaintenanceStatus.Ongoing:
      return "text-amber-800 dark:text-amber-200";
    case MaintenanceStatus.Completed:
      return "text-green-800 dark:text-green-200";
    default:
      return "text-gray-800 dark:text-gray-200";
  }
}

function formatDateTime(date: Date): string {
  return date.toLocaleString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });
}

function formatDuration(startTime: Date, endTime: Date): string {
  const durationMs = endTime.getTime() - startTime.getTime();
  const hours = Math.floor(durationMs / (1000 * 60 * 60));
  const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));
  
  if (hours > 0) {
    return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`;
  }
  return `${minutes}m`;
}

interface MaintenanceWindowsProps {
  showCompleted?: boolean;
}

export function MaintenanceWindows({ showCompleted = false }: MaintenanceWindowsProps) {
  // Filter maintenance windows based on preferences and update their status
  const maintenanceWindows = SAMPLE_MAINTENANCE_WINDOWS
    .map(window => ({
      ...window,
      status: getMaintenanceStatus(window)
    }))
    .filter(window => showCompleted || window.status !== MaintenanceStatus.Completed)
    .sort((a, b) => {
      // Sort by status priority (ongoing first, then upcoming, then completed)
      const statusPriority = {
        [MaintenanceStatus.Ongoing]: 0,
        [MaintenanceStatus.Upcoming]: 1,
        [MaintenanceStatus.Completed]: 2
      };
      
      if (statusPriority[a.status] !== statusPriority[b.status]) {
        return statusPriority[a.status] - statusPriority[b.status];
      }
      
      // Within same status, sort by start time
      return a.startTime.getTime() - b.startTime.getTime();
    });

  if (maintenanceWindows.length === 0) {
    return (
      <div className="my-4">
        <div className="max-w-2xl mx-auto bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full mb-4">
            <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-lg font-medium text-green-800 dark:text-green-200">
            No scheduled maintenance windows at this time.
          </p>
          <p className="text-green-600 dark:text-green-400 mt-2">
            All systems are operating normally.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {maintenanceWindows.map((window) => (
          <div
            key={window.id}
            className={cn(
              "border rounded-xl p-6 shadow-lg transition-all duration-200 hover:shadow-xl",
              getStatusClassName(window.status)
            )}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl" title={window.status}>
                    {MAINTENANCE_SYMBOLS[window.status]}
                  </span>
                  <div>
                    <h4 className="text-xl font-bold mb-1">{window.title}</h4>
                    <span className={cn(
                      "px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wide",
                      getStatusTextClassName(window.status),
                      window.status === MaintenanceStatus.Ongoing && "bg-amber-200 dark:bg-amber-800",
                      window.status === MaintenanceStatus.Upcoming && "bg-blue-200 dark:bg-blue-800",
                      window.status === MaintenanceStatus.Completed && "bg-green-200 dark:bg-green-800"
                    )}>
                      {window.status}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg leading-relaxed">
                  {window.description}
                </p>
                
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <span className="block font-semibold text-gray-900 dark:text-white mb-1">Start Time</span>
                      <span className="text-gray-600 dark:text-gray-400">{formatDateTime(window.startTime)}</span>
                    </div>
                    <div className="text-center">
                      <span className="block font-semibold text-gray-900 dark:text-white mb-1">End Time</span>
                      <span className="text-gray-600 dark:text-gray-400">{formatDateTime(window.endTime)}</span>
                    </div>
                    <div className="text-center">
                      <span className="block font-semibold text-gray-900 dark:text-white mb-1">Duration</span>
                      <span className="text-gray-600 dark:text-gray-400">{formatDuration(window.startTime, window.endTime)}</span>
                    </div>
                  </div>
                  
                  {(window.status === MaintenanceStatus.Upcoming || window.status === MaintenanceStatus.Ongoing) && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        {window.status === MaintenanceStatus.Upcoming ? "Starts in: " : "Ends in: "}
                      </span>
                      <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {window.status === MaintenanceStatus.Upcoming 
                          ? timeUntil(window.startTime) 
                          : timeUntil(window.endTime)}
                      </span>
                    </div>
                  )}
                  
                  {window.affectedServices && window.affectedServices.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <span className="block font-semibold text-gray-900 dark:text-white mb-2 text-center">Affected Services</span>
                      <div className="flex flex-wrap justify-center gap-2">
                        {window.affectedServices.map((service, index) => (
                          <span key={index} className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {window.detailsUrl && (
                <div className="ml-6">
                  <a
                    href={window.detailsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-200 font-medium"
                  >
                    More Details 
                    <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}