# TwilioQuest Slideshow Slides Server

This repository accompanies the [twilioquest-slideshow](https://github.com/TwilioQuest/twilioquest-slideshow) extension. The extension uses the IFrameOverlay component to display pages on a locally running web server.

This is a small [Next.js](https://nextjs.org/) server application bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This server should be run from a terminal while the slideshow extension is being played with the command:

```bash
npm run dev
```

Any kind of local or remotely hosted server that can be opened by an iFrame could be used instead of this demo application.

If you got an error when you run the server try these steps

```bash
npm cache clear --force
del package-lock.json
npm install
npm run dev
```
