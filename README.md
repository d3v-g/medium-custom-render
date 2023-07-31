# React Testing Library Custom Render
This project demonstrates how you can make a reusable custom render function for testing components that rely on React's Context, with the flexibility of using default context, or the specified context in an individual test senario.

Link to my Medium article: https://medium.com/@janesfrontenddiary/a-reusable-way-to-test-react-components-that-make-use-of-react-context-a82150344c46

## TLDR
You can find the custom render function [here](/src/test-utils.tsx).  
You can find an example using React's Context [here](/src/examples/ThemeExample.test.tsx).  
You can find an example using react-router-dom [here](/src/examples/RouterExample.test.tsx).  
You can find an example using React Query [here](/src/examples/QueryExample.test.tsx).

## Tech stack
- React(v18) + Vite
- Typescript
- Tailwind CSS
- Vitest + React Testing Library

## Tooling
- Eslint
- Prettier, Prettier Tailwind plugin

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

## Scripts
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