# nycu.me

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Some Configuration

### src/share/config.js

paste the code like following

```javascript
let homepageURL = "http://localhost:8080"

export default {
    getHomepageURL: function() {
        return homepageURL
    }
}
```

And change homepageURL variable(ex: https://www.nycu.me)
