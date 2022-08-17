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
              <div style="width: 480px; height: 500px" class="screen__image screen__image-ibg">
                <img src="img/25.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">5 место. Чешский спортивный голубь</h2>
                <p class="screen__text">
                  Порода выведена в Чехии. Голуби отличаются выносливостью, показывают хорошие лётные качества на небольших дистанциях. Птицы изящные,
                  гармоничные, отличаются небольшим наростом на клюве. Оперение у них плотное, окрас - от белого до серого, встречается рыжий оттенок.
                </p>
                <p class="screen__text">Чешский спортивный голубь требует большой физической активности. Не годится для полётов на дальние дистанции.</p>
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
  name: "Page-39",
  data() {
    return {
      pagePrev: 'page-38',
      pageNext: 'page-40',
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