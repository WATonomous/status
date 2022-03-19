# WATonomous Status

Still trying to see what this repo will be about. For now it's a barebones status page running on GitHub pages and using the healthchecks.io API. We can probably combine this with what's behind http://vm-status.watonomous.ca.

- `index.html` is adapted from [healthchecks-front](https://github.com/nicoandrade/healthchecks-front). This only supports one Healthchecks.io project.
- `all.html` is adapted from [healthchecks/dashboard](https://github.com/healthchecks/dashboard). This supports multiple Healthchecks.io projects, but the UI is not as intuitive as `index.html` at first glance.

### Development

To start a development server:

```bash
npm ci # install dependencies without updating them
npm run dev
```

### Testing

To verify that the static export is working, do this in the root of the project:

```bash
npm run export
cd out
python3 -m http.server 8082
```

Then head to http://localhost:8082 to ensure that the changes are as expected. \
Note: Go to http://localhost:8082/all.html to view to page to `/all`

### Deployment

We deploy healthchecks-front by [exporting the Next.js application as static HTML](https://nextjs.org/docs/advanced-features/static-html-export), then hosting it with [GitHub Pages](https://pages.github.com).

The HTML-generation process is currently automated with Github Actions. Any changes committed to `main` will trigger the [deployment process](https://github.com/WATonomous/status/actions/workflows/deploy.yml).
