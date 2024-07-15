import * as Sentry from "@sentry/react";
import { SENTRY_DSN, SENTRY_TUNNEL } from "./constants";

if (process.env.NODE_ENV === 'production') {
  Sentry.init({
    dsn: SENTRY_DSN,
    integrations: [],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for tracing.
    tracesSampleRate: 1.0,

    // Set `tracePropagationTargets` to control for which URLs trace propagation should be enabled
    tracePropagationTargets: ['localhost', /^\//, /watonomous\.ca/],

    // Capture Replay for 10% of all sessions,
    // plus for 100% of sessions with an error
    replaysSessionSampleRate: 1.0,
    replaysOnErrorSampleRate: 1.0,

    tunnel: SENTRY_TUNNEL,
  });

  // Lazy-load the Sentry Replay integration
  // https://docs.sentry.io/platforms/javascript/session-replay/#lazy-loading-replay
  import('@sentry/react').then(({ replayIntegration }) => {
    Sentry.addIntegration(replayIntegration());
  })
}