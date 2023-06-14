<script>
import PageHeader from './components/PageHeader.vue';
import PageMain from './components/PageMain.vue';
import PageFooter from './components/PageFooter.vue';
import {store} from "./store.js"

export default {
  components : {
    PageHeader,
    PageMain,
    PageFooter
  },
  data() {
    return{
      store
    }
  }
}

</script>

<template>

  <PageHeader :details="store.headerInfo" />
  <PageMain/>
  <PageFooter :detailsFooter="store.footerInfo"/>

</template>

<style lang="scss">

  // FOGLIO DI STILE GENERICO
  @use './styles/general.scss' as *;

</style>
