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
              <div style="width: 480px; height: 580px" class="screen__image screen__image-ibg">
                <img src="img/20.jpg" alt="" />
              </div>
            </div>
            <h2 class="screen__subtitle screen__subtitle_center screen__subtitle_h3">10. Русский спортивный голубь</h2>
            <p class="screen__text screen__text_center">
              Разводился в виде почтовых голубей с 70-х годов XIX века в крупных российских городах. После войны порода была восстановлена в 60-х годах XX
              века за счёт коллекции чешских спортивных голубей.
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
  name: "Page-31",
  data() {
    return {
      pagePrev: 'page-30',
      pageNext: 'page-32',
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