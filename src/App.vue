<template>
  <div id="app">
    <header>
      <img src="@/assets/images/teltech-logo-2019.png" alt="Teltech Logo">
      <span>Marino Troskot  <span :class="['language', { 'active' : $i18n.locale === 'hr' }]"  @click="setLocale('hr')">HR</span> | <span :class="['language', { 'active' : $i18n.locale === 'en' }]" @click="setLocale('en')">EN</span></span>
    </header>
    <router-view/>
    <footer>
      <span>© {{ new Date().getFullYear() }} TELTECH.CO</span>
      <div class="social-icons">
        <a href="https://www.facebook.com/teltech">
          <span class="icon-facebook">
            <i class="fa fa-facebook-f"></i>
          </span>
        </a>
        <a href="https://www.instagram.com/teltech/">
          <span class="icon-instagram">
            <i class="fa fa-instagram"></i>
          </span>
        </a>
        <a href="https://twitter.com/teltech">
          <span class="icon-twitter">
            <i class="fa fa-twitter"></i>    
          </span>
        </a>
        <a href="https://www.linkedin.com/company/teltech-systems/">
          <span class="icon-linkedin">
            <i class="fa fa-linkedin"></i>
          </span>
        </a>
      </div>
    </footer>
  </div>
</template>
<script lang="ts">
import { mapActions } from 'vuex'

export default {
    data () {
        return {}
    },
    created () {
        // Loading Employees data
        this.getEmployeesList()
    },
    methods: {
      ...mapActions([
          'getEmployeesList'
      ]),
      setLocale(locale: String) {
        this.$i18n.locale = locale
      }
    }
}
</script>
<style lang="scss">
@import "assets/scss/app";
</style>
