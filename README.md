# WATonomous Status

Still trying to see what this repo will be about. For now it's a barebones status page running on GitHub pages and using the healthchecks.io API. We can probably combine this with what's behind http://vm-status.watonomous.ca.

- `index.html` is adapted from [healthchecks-front](https://github.com/nicoandrade/healthchecks-front). The source code is in `./healthchecks-front`. This only supports one Healthchecks.io project.
- `all.html` is adapted from [healthchecks/dashboard](https://github.com/healthchecks/dashboard). This supports multiple Healthchecks.io projects, but the UI is not as intuitive as `index.html` at first glance.

Both are experimental MVPs and can be replaced without worrying about losing existing work.


## healthchecks-front

### Development

To start a development server:

```bash
cd healthchecks-front
npm ci # install dependencies without updating them
next dev
```

### Deployment

We deploy healthchecks-front by [exporting the Next.js application as static HTML](https://nextjs.org/docs/advanced-features/static-html-export), then hosting it with [GitHub Pages](https://pages.github.com).

The HTML-generation process is currently manual. However, it can be easily automated with [Github Actions](https://github.com/features/actions).

```bash
cd healthchecks-front
npm ci # install dependencies without updating them
npm run build
npm run export
cp -r out/* ..
cd ..
```

To verify that the static export is working, do this in the root of the project:

```bash
python3 -m http.server 8082
```

Then head to http://localhost:8082 to ensure that the changes are as expected.

