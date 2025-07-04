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
        <p className="text-gray-500 text-center py-8">
          No scheduled maintenance windows at this time.
        </p>
      </div>
    );
  }

  return (
    <div className="my-4">
      <div className="space-y-4">
        {maintenanceWindows.map((window) => (
          <div
            key={window.id}
            className={cn(
              "border rounded-lg p-4",
              getStatusClassName(window.status)
            )}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl" title={window.status}>
                    {MAINTENANCE_SYMBOLS[window.status]}
                  </span>
                  <h4 className="text-lg font-semibold">{window.title}</h4>
                  <span className={cn(
                    "px-2 py-1 rounded-full text-xs font-medium capitalize",
                    getStatusTextClassName(window.status)
                  )}>
                    {window.status}
                  </span>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {window.description}
                </p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex flex-wrap gap-4">
                    <div>
                      <span className="font-medium">Start:</span> {formatDateTime(window.startTime)}
                    </div>
                    <div>
                      <span className="font-medium">End:</span> {formatDateTime(window.endTime)}
                    </div>
                    <div>
                      <span className="font-medium">Duration:</span> {formatDuration(window.startTime, window.endTime)}
                    </div>
                  </div>
                  
                  {window.status === MaintenanceStatus.Upcoming && (
                    <div>
                      <span className="font-medium">Starts in:</span> {timeUntil(window.startTime)}
                    </div>
                  )}
                  
                  {window.status === MaintenanceStatus.Ongoing && (
                    <div>
                      <span className="font-medium">Ends in:</span> {timeUntil(window.endTime)}
                    </div>
                  )}
                  
                  {window.affectedServices && window.affectedServices.length > 0 && (
                    <div>
                      <span className="font-medium">Affected Services:</span>{" "}
                      {window.affectedServices.join(", ")}
                    </div>
                  )}
                </div>
              </div>
              
              {window.detailsUrl && (
                <div className="ml-4">
                  <a
                    href={window.detailsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                  >
                    More Details →
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