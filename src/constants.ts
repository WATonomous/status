// read-only API key for the healthchecks.io project. Obtained from 
// https://healthchecks.io/projects/7acc2ad3-f672-40c9-a061-12c8fd128f8b/settings/
export const HEALTHCHECKSIO_API_KEY = 'tCsst0GSKpfvslmpmlsmivRrUCRuv6Iv'

// read-only API key with the "org scope" for Sentry. Obtained by creating an internal integration:
// https://watonomous.sentry.io/settings/developer-settings/statuswatonomousca-be7323/
// 
// "Authorized JavaScript Origins" is set to:
// - localhost
// - status.watonomous.ca
// - developer-specific domains like abcd.use.devtunnels.ms
// We'd get a 400 error with the message "Invalid origin" otherwise.
// https://github.com/getsentry/sentry/issues/15310#issuecomment-650443556
export const SENTRY_API_KEY = '53ab13b4337a937bc66eec3a4b3f836b14dd51890fde15fd51b9523eb598382c'

// Sentry DSN for reporting usage data. Generated using the internal monorepo: https://github.com/WATonomous/infra-config
export const SENTRY_DSN = 'https://e51c6bb086f672432a4d6ce135b6a737@o4505843678773248.ingest.us.sentry.io/4507608183865345'

// Sentry tunnel for proxying requests to the Sentry API.
export const SENTRY_TUNNEL = 'https://stunnel.watonomous.ca/tunnel'

export enum Status {
  Good = 'good',
  Neutral = 'neutral',
  Bad = 'bad',
}

export const STATUS_SYMBOLS = {
  [Status.Good]: '🟢',
  [Status.Neutral]: '🟡',
  [Status.Bad]: '🔴',
} as const;