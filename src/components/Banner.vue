<template>
  <div>
      <div id="hero-banner">
          <div class="container">
              <div class="row">
                  <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 text-lg-left text-center ml-auto mr-auto">
                      <h1 class="title-banner mt-4">Futbol Total, encuentra todos los resultados
                          de todas las ligas del mundo del FutBol.
                      </h1>

                      <button class="btn btn-dark btn-lg mt-4">Más información</button>
                  </div>

                  <div class="col-md-8 col-sm-12 col-lg-8 col-xl-8 d-lg-block d-none">
                      <img src="../assets/img/soccer.svg" alt="Soccer" class="img-responsive img-soccer">
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    #hero-banner {
        background: #373B44;
        background: -webkit-linear-gradient(to right, #4286f4, #373B44);
        background: linear-gradient(to right, #4286f4, #373B44);
        max-width: 100%;
        min-width: 100%;
        height: 80vh;
    }

    .title-banner {
        color: white;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 3em;
    }

    .img-soccer {
        margin-top: 20px;
        max-width: 100%;
        min-width: 100%;
    }
</style>