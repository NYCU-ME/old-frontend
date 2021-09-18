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

paste some code like following

```
let currentUrl = "http://localhost:8080"

export default {
    getCurrentUrl: function() {
        return currentUrl
    }
}

```

And change currentUrl to your home page url (ex: https://www.nycu.me)
