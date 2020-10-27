<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-4">
          <a href="#" class="navbar-brand">{{ this.title.toUpperCase() }}</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="NavbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <router-link to="/" class="nav-link">{{ this.home.toUpperCase() }}</router-link>
              </li>

              <li class="nav-item active">
                <router-link to="/videos" class="nav-link">{{ this.videos.toUpperCase() }}</router-link>
              </li>
            </ul>
          </div>
      </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: 'Inicio',
      videos: 'Videos',
      title: 'Futbol Total'
    }
  }
}
</script>

<style>

</style>