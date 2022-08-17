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
                  <li>крепкое мускулистое тело;</li>
                  <li>широкая, хорошо развитая грудь;</li>
                  <li>оперение сизое или чёрное, редко - красное, с тёмной поперечной лентой на хвосте;</li>
                  <li>щитки сизые;</li>
                  <li>чёрные пояса на щитках.</li>
                </ul>
              </div>
              <div style="margin-left: 60px" class="screen__info screen__info_right">
                <p class="screen__text">Плюсы:</p>
                <ul class="screen__text">
                  <li>неприхотливость в содержании;</li>
                  <li>порода нетребовательна к корму;</li>
                  <li>родительские качества;</li>
                  <li>отличные групповые и индивидуальные лётные свойства.</li>
                </ul>
                <p class="screen__text">Минусы:</p>
                <ul class="screen__text">
                  <li>возможность потери птицы при кувырках на низких высотах;</li>
                  <li>потеря ориентации на низких высотах;</li>
                  <li>потери особей на большой высоте в ветреный день.</li>
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
  name: "Page-26",
  data() {
    return {
      pagePrev: 'page-25',
      pageNext: 'page-27',
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