# React Testing Library Custom Render
This project demonstrates how you can make a reusable custom render function for testing components that rely on React's Context, with the flexibility of using default context, or the specified context in an individual test senario, and with the further added benefit of setting up a user object for user events.

<!-- Link to my Medium article detailing the thought process behind having this custom render method:  -->
## TLDR
You can find the custom render function [here](/src/test_utils.tsx)
You can find an example using React's Context [here](/src/components/ThemeExample.test.tsx)
You can find an example using react-router-dom [here](/src/components/RouterExample.test.tsx)
You can find an example using React Query [here](/src/components/QueryExample.test.tsx)

## How to run
This project is built using Vite and can be run using the following scripts:
### Clone the repo
```
git clone https://github.com/d3v-g/medium-custom-render
```
### Install dependencies
```
npm install
```
### Run app in development mode
```
npm run dev
```
### Run tests with Vitest
```
npm run test
```
### Run eslint
```
npm run lint
```
### Format code using Prettier
```
npm run format
```
### Build for production
```
npm run build
```
### Production Preview
```
npm run preview
```