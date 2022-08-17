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
              <div class="screen__info screen__info_right">
                <p class="screen__text">Внешний вид:</p>
                <ul class="screen__text">
                  <li>крупное, но компактное, немного удлинённое тело;</li>
                  <li>густое плотное оперение разных цветов;</li>
                  <li>скруглённая голова с чубом;</li>
                  <li>крупные чёрные или серые выпуклые глаза;</li>
                  <li>широкие белые веки;</li>
                  <li>толстый короткий клюв с загибом вниз;</li>
                  <li>короткая шея;</li>
                  <li>выпуклая широкая грудь;</li>
                  <li>длинная спина;</li>
                  <li>плотно прижатые к телу длинные крылья;</li>
                  <li>щитки жёлтого и красного цветов;</li>
                  <li>поясов нет;</li>
                  <li>ноги короткие, с космами или с «ястребиным» оперением.</li>
                </ul>
              </div>
              <div style="margin-left: 60px" class="screen__info screen__info_right">
                <p class="screen__text">Плюсы:</p>
                <ul class="screen__text">
                  <li>отличные лётные свойства, качественный высотный «бой» крыльями;</li>
                  <li>хорошая выводимость птенцов;</li>
                  <li>отличная ориентация в полёте.</li>
                </ul>
                <p class="screen__text">Минусы:</p>
                <ul class="screen__text">
                  <li>необходимость заботы о «космах» – своевременная стрижка;</li>
                  <li>необходимость ежедневной смены подстилки в голубятне для предотвращения загрязнения ножного оперения;</li>
                  <li>необходимость создания в голубятне индивидуальных насестов.</li>
                </ul>
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
  name: "Page-28",
  data() {
    return {
      pagePrev: 'page-27',
      pageNext: 'page-29',
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