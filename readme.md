# Vue-List
A Vue.js component designed to handle common functionality needed when handling lists of data
## Setup

### bootstrap.js file
```javascript
/**
 * Vue is a modern JavaScript library for building interactive web interfaces
 * using reactive data binding and reusable components. Vue's API is clean
 * and simple, leaving you to focus on building your next great project.
 */
window.Vue = require('vue/dist/vue.js');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common = {
    'X-CSRF-TOKEN': window.Laravel.csrfToken,
    'X-Requested-With': 'XMLHttpRequest'
};

Vue.prototype.$http = axios;
```

### app.js
```javascript
var app = new Vue({
    el: '#app',
}).$mount();
```

## Usage In Component
```javascript
    import List from 'vue-list';

    export default {
        mixins: [List],
        mounted() {
            this.fetch(this.url)
        }
    });
```

### Props
| Name | Type   |
|------|--------|
| url  | String |

### Data
| Name       | Type   |
|------------|--------|
| items      | Array  |
| pagination | Object |

### Available Methods
| Methods          | Parameters | Events Fired                  |
|------------------|------------|-------------------------------|
| fetch            | url        | fetch:success, fetch:failed   |
| store            | item, url  | store:success, store:failed   |
| update           | item, url  | update:success, update:failed |
| remove           | item, url  | delete:success, delete:failed |
| next             | none       | none                          |
| prev             | none       | none                          |
| updatePagination | data       | none                          |
