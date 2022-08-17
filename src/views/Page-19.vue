<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <div class="screen__content">
            <div class="screen__images">
              <div style="width: 800px; height: 500px" class="screen__image screen__image-ibg">
                <img src="img/14.jpg" alt="" />
              </div>
            </div>
            <h2 class="screen__subtitle screen__subtitle_center screen__subtitle_h3">4. Орловский белый турман</h2>
            <p class="screen__text screen__text_center">
              Старейшая русская порода, известная чуть менее 400 лет. <br />Использовалась для разведения бородуна орловской породы и ленточного красного
              голубя
            </p>
          </div>
          <Navigation :page-next="pageNext" :page-prev="pagePrev"/>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {mapActions} from 'vuex'
import Navigation from "@/components/Navigation";
import Doves from "@/components/Doves";
import Logo from "@/components/Logo";
import Background from "@/components/Background";

export default {
  name: "Page-19",
  data() {
    return {
      pagePrev: 'page-18',
      pageNext: 'page-20',
    }
  },
  components: {
    Doves,
    Logo,
    Background,
    Navigation
  },
  mounted() {
    this.animate()
  },
  methods: {
    ...mapActions([
      'animate'
    ]),
  }
}
</script>