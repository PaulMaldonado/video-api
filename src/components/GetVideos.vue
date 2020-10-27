<template>
  <div>
     <div class="container">
         <div class="row">
             <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 mx-auto">
                 <div class="card mt-2" v-for="videos in addVideos" :key="videos.id">
                     <img :src="videos.thumbnail" alt="imagen" class="card-img-top img-responsive">
                     <div class="card-body">
                         <h5 class="card-title">{{ videos.title }}</h5>
                         <p class="card-text">{{ time(videos.date) }}</p>
                         <video-embed :params="{autoplay: 1}" :src="videos.url"></video-embed>
                     </div>
                 </div>
             </div>
         </div>
     </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    data() {
        return {
            addVideos: [],
            url: 'https://www.scorebat.com/video-api/v1/'
        }
    },

    mounted() {
        this.getVideos();
    },

    methods: {
        getVideos() {
            axios.get(this.url)
                .then(res => {
                    this.addVideos = res.data;

                    console.log(res);
                })
                .catch(error => console.error(error));
        },

        time(date) {
            return moment().subtract(date, 'days').calendar();
        }
    }
}
</script>

<style>

</style>