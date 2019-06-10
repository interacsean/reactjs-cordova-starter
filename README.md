This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

It has been ejected and made had minimal changes to make the project compatible with cordova for compiling to hybrid app.

### Developing in browser

```
npm install
npm run start
```

### Developing in iOS

Examples in iOS.  Follow similar steps for Android.

```
npx cordova platform add ios
npx cordova emulate ios
```

(`npx` is used to run the cordova binary.  This is automatically available with npm versions 5.2+.  Cordova can also be run with yarn – `yarn cordova platorm add ios`; installed globally via `npm i -g cordova` – `cordova platform add ios`; or simply run from node_modules/.bin – `./node_modules/.bin/cordova platform add ios`)

### Publising to iOS

```
npm run build
npx cordova build ios
```

## Using Onsenui

For an example with Onsenui, a forerunning framework in native-like PWA experience, please checkout the branch `with-onsenui`.

It has been excluded from master only as some users may with to start without an opinionated UI framework.

---

The following guide was used to add cordova to the CRA base:

https://github.com/johnkmzhou/cordova-create-react-app


For CRA features, refer to the online version of CRA's README.  You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
