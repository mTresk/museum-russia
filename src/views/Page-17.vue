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
              <div style="width: 445px; height: 500px" class="screen__image screen__image-ibg">
                <img src="img/13.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">3. Смоленский короткоклювый турман</h2>
                <p class="screen__text">Редкая русская порода, славящаяся сложностью разведения и высокими требованиями к содержанию.</p>
                <p class="screen__text">История разведения - более 150 лет.</p>
                <p class="screen__text">
                  Имеет старые названия «лобач» и «грач» из-за широкого лба и чёрно-смолистого цвета. Известны кофейные и палевые цвета, появившиеся в
                  результате селекции.
                </p>
              </div>
            </div>
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
  name: "Page-17",
  data() {
    return {
      pagePrev: 'page-16',
      pageNext: 'page-18',
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