<template>
  <div>
    <Banner />
    <NewSection />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner'
import NewSection from '@/components/NewSection'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Banner,
    NewSection,
    Footer
  }
}
</script>
