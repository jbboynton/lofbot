# ![#livelaughlof](./selfie.png) lofbot

The LOF Discord bot, which does useful (?) things.

## Getting started

You're going to need a fairly recent version of Node installed. Then:

1. Join the `lofbot_dev` Discord, or create your own test server
1. Use `.env.sample` to create `.env.dev` and `.env` and set values accordingly
1. Install dependencies: `yarn`
1. Run: `yarn dev`

### Noteworthy

All changes are pushed to Discord **every time a file is written**. When `DEV`
is set, changes will push to the test Discord server. **Running `yarn build`
will push changes to the actual LOF Discord.**
