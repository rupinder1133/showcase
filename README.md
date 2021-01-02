### Hello visitor ! 

##[Click Here to visit](https://showcase-rs.herokuapp.com/)

#### Development
```
    npm install
    npm start
```

#### Heroku deployment
Steps to deploy on heroku
1. Set config var `JS_RUNTIME_TARGET_BUNDLE=/app/dist/*.js` required for [custom build location](https://github.com/mars/create-react-app-buildpack#web-server)
2. Use buildpack [mars/create-react-app](https://github.com/mars/create-react-app-buildpack)
3. Customise static.json for [heroku-build-static](https://github.com/heroku/heroku-buildpack-static#configuration)
   ```
   // static.json in project root
   {
     "root": "dist/",
     "routes": {
       "/**": "index.html"
     }
   }
   ```
