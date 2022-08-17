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
                <img src="img/22.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">2 место. Русский</h2>
                <p class="screen__text">Выведен птицеводами России, отличается изящным привлекательным внешним видом.</p>
                <p class="screen__text">Ноги - длинные, голова — небольшая, с острым изогнутым клювом.</p>
                <p class="screen__text">
                  На вытянутых крыльях и хвосте имеется загиб, помогающий маневрировать во время полёта. Цвет оперения чаще всего белый, встречается
                  пёстрый.
                </p>
                <p class="screen__text">
                  Русского голубя принято считать эталоном среди спортивных голубей, особи регулярно занимают на соревнованиях призовые места.
                </p>
                <p class="screen__text">Прихотлив в уходе, подвержен инфекционным заболеваниям.</p>
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
  name: "Page-36",
  data() {
    return {
      pagePrev: 'page-35',
      pageNext: 'page-37',
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