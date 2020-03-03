<template>
  <div id="app">
    <b-navbar toggleable="sm" type="dark" variant="primary" v-if="!$auth.loading">
      <b-navbar-brand href="#">ETA</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav v-if="$auth.isAuthenticated" >
          <b-nav-item to="/">Dashboard</b-nav-item>
          <b-nav-item to="/help">Help</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav v-if="!$auth.isAuthenticated" >
          <b-nav-item href="/">Sign In</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav v-if="$auth.isAuthenticated" class="ml-auto">
          <b-nav-text>Welcome {{ $auth.user.name }}!</b-nav-text>
          <b-nav-form>
            <img :src="$auth.user.picture" class="rounded-circle" width="32px" height="32px" style="margin-left:16px">
            <b-button size="ml" class="ml-sm-2" variant="primary" @click="signout">Sign Out</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <p></p>

    <b-container v-if="!$auth.isAuthenticated && !$auth.loading">
      <b-row class="justify-content-lg-center">
        <b-col lg="6">
          <b-card border-variant="primary" header="Sign In" header-tag="h4">
            <b-card-text>
              In order to use ETA you have to sign in first.
            </b-card-text>
            <b-button variant="success" @click="signin">Sign In with OAuth0</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>

    <div v-if="$auth.loading" class="d-flex min-vh-100 align-items-center justify-content-center">
        <b-spinner type="grow" label="Loading..."></b-spinner>
    </div>

    <router-view v-if="$auth.isAuthenticated" />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    signin() {
      this.$auth.loginWithRedirect();
    },
    signout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
}
</script>
