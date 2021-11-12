# WorkAround App

[![Netlify Status](https://api.netlify.com/api/v1/badges/d4dead3a-cb33-46f8-a1f2-6ad5c183aa99/deploy-status)](https://app.netlify.com/sites/app-workaround/deploys)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?label=License&color=ffffff)](https://github.com/WorkAroundHQ/app/blob/main/LICENSE)
[![WorkAroundHQ](https://img.shields.io/twitter/follow/workaroundhq?label=Follow)](https://twitter.com/workaroundhq)

The WorkAround application is a platform for digital nomads who call the world their home. With WorkAround, digital nomads can pick their next ideal destination and connect with the community there.

## Run Locally

1. Clone repository:

```zsh
git clone git@github.com:WorkAroundHQ/app.git
```

2. Change directory:

```zsh
cd app
```

3. Install packages:

```zsh
yarn
```

3. Add values to `.env` file (see `sample.env`):

4. Start development server:

```zsh
yarn start
```

## Automated Testing

Run automated tests:

> These tests also get executed with GitHub Actions on PRs onto `main`!

```zsh
yarn test
```

Run cypress tests:

1. Add values to `cypress.env.json` (see `sample.cypress.env.json`)

2. Start cypress:

```zsh
yarn cy
```

## Deployment

The deployment process is simple:

- Every push on `main` triggers a build on Netlify
- Every open pull request with target `main`, creates a deploy preview on Netlify

## Tech Stack

Frontend: [React](https://reactjs.org), [SCSS](https://sass-lang.com)

Backend: [Supabase](https://supabase.io)

Hosting: [Netlify](https://www.netlify.com)

## Feedback

If you have any feedback, please reach out to us [@WorkAroundHQ](https://twitter.com/workaroundhq)

## Authors

[@mrcgrhrdt](https://www.github.com/mrcgrhrdt)

## License

[Mozilla Public License Version 2.0](https://github.com/WorkAroundHQ/app/blob/main/LICENSE)

Made with ❤️ and ☕️
