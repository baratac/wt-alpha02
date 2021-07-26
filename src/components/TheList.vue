<template>
  <div>
    <h1>The List IS HERE</h1>
    <div v-for="data in theList"  :key="data.code">{{data.name}}</div>
  </div>
</template>

<script>
  import countryList from '../assets/countries.json'
export default {
  name: 'TheList',
  data () {
    return {
      theList: countryList.data.countries
    }
  }
}
</script>
