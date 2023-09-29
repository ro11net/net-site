<template>
  <div id="app">
  <v-app>
    <v-app-bar class="bg-grey-darken-4">
      <v-btn :to="{ name: 'home' }">KR8TOS</v-btn>
      <v-spacer></v-spacer>
      <v-btn :to="{ name: 'about' }">About</v-btn>
      <v-btn :to="{ name: 'contact' }">Contact</v-btn>
      <v-btn class="bg-grey-darken-4" href="https://www.linkedin.com/company/kr8tos/">
        <v-icon rounded="xl" color="white" icon="mdi-linkedin" size="30"></v-icon>
      </v-btn>
    </v-app-bar>
    <v-main class="bg-grey-darken-2">

      <router-view />

    </v-main>
    <v-footer class="bg-grey-darken-4">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="`${link.label}-footer-link`"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
          :to="link.url"
        >
          {{ link.label }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>KR8TOS</strong>
        </v-col>
        <v-btn class="bg-grey-darken-4" href="https://www.linkedin.com/company/kr8tos/">
          <v-icon rounded="xl" color="white" icon="mdi-linkedin" size="30"></v-icon>
        </v-btn>
      </v-row>
    </v-footer>
  </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    //
  },
  data () {
    return {
      showPassword: false,
      links: [
        {
          label: 'Home',
          url: '/'
        },
        {
          label: 'About',
          url: '/about'
        },
        {
          label: 'Contact',
          url: '/contact'}
      ]
    }
  }
}
</script>


