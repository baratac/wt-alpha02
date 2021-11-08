# Vue.js SSR project


## Project setup
```
yarn install
```

### Run solution
```
yarn build
```

## Goals
* Create a AMP valid page (/amp-valid)
* Implement the amp component “amp-list” inside a vue component
    * With Static data
    * With Remote data - Use GraphQL endpoint to retrieve data

## Guide Lines
### Vue.js SSR
Use the framework bellow
* [SSR Vue](https://ssr.vuejs.org/)

### AMP
* [AMP project](https://amp.dev/)

* [Extension to check if a page is amp valid or not](https://chrome.google.com/webstore/detail/amp-validator/nmoffdblmcmgeicmolmhobpoocbbmknc)

### GraphQL demo API for listing
* [Github project](https://github.com/trevorblades/countries)
* [Online demo](https://countries.trevorblades.com/)


## Resolution

All challenges are solved in the code the only way I was able to achieve, using Vue features, to place dynamic AMP elements inside vue without breaking it.

Three techniques could be found to change the way HTML is manage by vue two are based on directives, v-pre and v-html, only the latter proved to be usefull as v-pre just blindly delivers the content of the tag without processing its contents and we need to use vue feature to update information, so the other option is to change compiler options to accept AMP tags (check vue.config.js) the problem with this last approach is it's usefulness in more complex tags such as AMP-LIST :

````html
<amp-list
  width="auto"
  height="100"
  layout="fixed-height"
  src="/static/inline-examples/data/amp-list-urls.json"
>
  <template type="amp-mustache">

    <div class="url-entry">
      <a href="{{url}}">{{title}}</a>
    </div>
  </template>
</amp-list>
````

In this case the div inside is not correctly processed by vue that interferes with the internal mustache...

So the only solution I could found in the time of the challenge was th build the string on a method and introduce using v-html directive.


## Project setup
```
yarn install
```

### Run solution
```
yarn build
```

