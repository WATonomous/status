# Maintenance Windows Feature

This document describes the maintenance windows feature added to the WATcloud status page.

## Overview

The maintenance windows feature displays scheduled maintenance, ongoing maintenance, and completed maintenance windows on the status page. This helps users understand when planned outages or service interruptions might occur.

## Components

### MaintenanceWindows Component (`src/maintenance.tsx`)

The main component that displays maintenance window information with:

- **Visual Status Indicators**: Different emoji icons for each status type
- **Status-based Styling**: Color-coded backgrounds and text
- **Responsive Design**: Works on desktop and mobile devices
- **Dark Mode Support**: Adapts to the theme selection
- **Time Calculations**: Shows relative time ("starts in", "ends in")
- **Sorting**: Prioritizes ongoing maintenance, then upcoming, then completed

### Types and Constants (`src/constants.ts`)

Added the following types and enums:

- `MaintenanceStatus`: Enum for upcoming, ongoing, completed
- `MaintenanceWindow`: Interface defining the data structure
- `MAINTENANCE_SYMBOLS`: Emoji symbols for each status

### Utility Functions (`src/utils.ts`)

Added `timeUntil()` function to calculate time until a future date.

## Data Structure

Each maintenance window contains:

```typescript
interface MaintenanceWindow {
  id: string;                    // Unique identifier
  title: string;                 // Display title
  description: string;           // Detailed description
  startTime: Date;              // When maintenance starts
  endTime: Date;                // When maintenance ends
  status: MaintenanceStatus;    // Current status (calculated)
  affectedServices?: string[];  // Optional list of affected services
  detailsUrl?: string;          // Optional link to more details
}
```

## Features

1. **Automatic Status Detection**: Status is calculated based on current time vs. start/end times
2. **Smart Sorting**: Ongoing maintenance appears first, then upcoming, then completed
3. **Responsive Design**: Adapts to different screen sizes
4. **Theme Support**: Works with light, dark, and auto themes
5. **Empty State**: Shows appropriate message when no maintenance is scheduled
6. **External Links**: Optional "More Details" links to announcements
7. **Time Display**: Shows both absolute times and relative times
8. **Service Information**: Lists affected services when available

## Usage

The component is automatically included in the main status page. To modify maintenance windows:

1. **For Demo/Testing**: Update the `SAMPLE_MAINTENANCE_WINDOWS` array in `src/maintenance.tsx`
2. **For Production**: Replace the sample data with an API call or external data source

## Integration Points

- Integrated into `App.tsx` between the Options and Healthchecks.io sections
- Uses existing utility functions and styling patterns
- Follows the same design language as other status sections

## Future Enhancements

The current implementation uses static sample data. Future enhancements could include:

- Integration with a calendar service (Google Calendar, Outlook, etc.)
- API endpoint for dynamic maintenance window management
- Admin interface for adding/editing maintenance windows
- Email notifications for upcoming maintenance
- Integration with existing monitoring tools