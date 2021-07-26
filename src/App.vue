<template>
  <HelloWorld />
  <amp-img src="https://unsplash.it/300/200/?image=100" width="300" height="200" alt="Example image"></amp-img>
  <div v-html="getMyHtml()"> </div>
  <div v-html="getInter()"> </div>
  <hr>
  <div v-html="getStaticList()"> </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
// import TheList from './components/TheList.vue'
  const refHtml = '<h2> TEST Inner HTML</h2>'
export default {
  name: 'App',
  data() {
    return {
      myHtml: refHtml
    }
  },
  methods: {
    getMyHtml() {
      return '<h2> TEST Inner HTML from Met</h2>' // + '<amp-img src="https://unsplash.it/300/200/?image=100" width="300" height="200" alt="Example image">'
    },
    getInter() {
      //
      // Couldn't find any other way for this example to work v-pre fails not able to process [text] attribute...
      // ...and the solution on changing the compiler options only works if we can select the html tags (not possible here)
      //
      return '<p [text]="\'Hello \' + foo">Hello World</p> <button on="tap:AMP.setState({foo: \'Interactivity\'})"> Say "Hello Interactivity"</button>'
    },
    getStaticList() {

          // Not able to use this tags using v-pre or using vue-loader config option to ignore amp tags
          /* Version using state because couldn't find root path for local json file */
          /*
          const sStart = '<amp-state id="staticList"> <script type="application/json">'
          const sTable = '{ "items": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}' // '{ "items": [ { "id": 1, "title": "ONE"}, {"id": 2, "title": "Two"} ] }' //
          const sWord = 'script';
          const sEnd = '</' + sWord + '> </amp-state>'
          const stateInfo = sStart + sTable + sEnd

          const lStart = '<amp-list binding="no" layout="fixed-height" height="126" items="items"  src="amp-state:staticList">' // src="/assets/countries.json">' // src="amp-state:staticList">'
          const lTemplate =' <template type="amp-mustache"> <div>{{.}}</div> </template>'
          const lEnd = '</amp-list>'
          return   stateInfo + lStart + lTemplate + lEnd;
          */
          const srcUrl = 'https://countries.trevorblades.com?query={ countries {name code capital}}'
          const lStart = '<amp-list binding="no" layout="fixed-height" height="126" items="data.countries" src="' + srcUrl + '">' // src="./assets/countries.json">' // src="amp-state:staticList">'

          const lTemplate =' <template type="amp-mustache"> <div>#LIVE# {{ code }} - {{name}}  - {{ capital }}</div> </template>'
          const lEnd = '</amp-list>'
          return lStart + lTemplate + lEnd;
    }
  },
  components: {
    // TheList,
    HelloWorld
  }
}
</script>
