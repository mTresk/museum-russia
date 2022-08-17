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
                  <li>сорочий окрас тела, где вместо чёрного присутствует тёмно-красный и ярко-красный цвета;</li>
                  <li>округлая голова с высоким, крутым и широким лбом;</li>
                  <li>большие тёмные глаза;</li>
                  <li>широкие белые веки;</li>
                  <li>короткий, тупой и толстый белый клюв, немного загнутый вниз;</li>
                  <li>длинные, низко сидящие крылья, кончики которых не достают до земли;</li>
                  <li>стройная шея;</li>
                  <li>выпуклая широкая грудь;</li>
                  <li>длинная спина с сужением к хвосту;</li>
                  <li>щитки соответствуют окрасу тела;</li>
                  <li>поясов нет;</li>
                  <li>хвост длинный, с 16 рулевыми перьями.</li>
                </ul>
              </div>
              <div style="margin-left: 60px" class="screen__info screen__info_right">
                <p class="screen__text">Плюсы:</p>
                <ul class="screen__text">
                  <li>уникальная старая русская порода;</li>
                  <li>красивый необычный вид, порода носит декоративный характер;</li>
                  <li>кроме кувырков отдельные особи могут исполнять трюки «катунов»;</li>
                  <li>хорошая плодовитость;</li>
                  <li>способность высиживать и выращивать птенцов.</li>
                </ul>
                <p class="screen__text">Минусы:</p>
                <ul class="screen__text">
                  <li>невысокие лётные качества, связанные с быстрой утомляемостью во время полёта;</li>
                  <li>слабая способность к исполнению трюков.</li>
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
  name: "Page-22",
  data() {
    return {
      pagePrev: 'page-21',
      pageNext: 'page-23',
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