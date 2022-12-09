## DEMO

[Age of Emprires Unit Builder](https://aoe-unit-builder.vercel.app)

## Description
Welcome to Age of Empires Unit Builder App.
You can view and filter the units available in Age of Empires by visiting Units from the navigation bar.
This App built with react, react-redux (saga), react-router and material-ui.

## App Tree
```
├── ./package.json
├── ./package-lock.json
├── ./public
├── ./README.md
├── ./src
│   ├── ./src/app
│   │   └── ./src/app/store.js
│   ├── ./src/App.css
│   ├── ./src/App.js
│   ├── ./src/App.test.js
│   ├── ./src/components
│   │   ├── ./src/components/global
│   │   ├── ./src/components/Timeline
│   │   ├── ./src/components/UnitAgeFilter.jsx
│   │   ├── ./src/components/UnitCostFilter.jsx
│   │   └── ./src/components/UnitTable.jsx
│   ├── ./src/features
│   │   ├── ./src/features/features.js
│   │   ├── ./src/features/unitDetailSlice.js
│   │   └── ./src/features/unitSlice.js
│   ├── ./src/index.css
│   ├── ./src/index.js
│   ├── ./src/logo.svg
│   ├── ./src/modules
│   │   ├── ./src/modules/modules.js
│   │   ├── ./src/modules/unitDetailsSaga.js
│   │   └── ./src/modules/unitSaga.js
│   ├── ./src/pages
│   │   ├── ./src/pages/Homepage.jsx
│   │   ├── ./src/pages/UnitDetails.jsx
│   │   └── ./src/pages/Unit.jsx
│   ├── ./src/reportWebVitals.js
│   ├── ./src/setupTests.js
│   ├── ./src/styles
│   │   └── ./src/styles/AgeTimeline.module.scss
│   └── ./src/utils
│       ├── ./src/utils/api.js
│     └── ./src/utils/data
└── ./test.txt
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

