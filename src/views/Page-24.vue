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
                  <li>вертикально расположенное тело, чуть наклонённое вперёд;</li>
                  <li>белое оперение. Чёрный окрас головы и кончика хвоста;</li>
                  <li>голова узкая и удлинённая;</li>
                  <li>круглый затылок с чубом;</li>
                  <li>средние выразительные глаза с тёмным зрачком и белой радужкой;</li>
                  <li>узкие веки светлого цвета;</li>
                  <li>тонкий белый или светлый клюв длиной до 17 мм с плотной продолговатой белой восковицей;</li>
                  <li>тонкая шея с гривой, расположенной сзади;</li>
                  <li>широкая круглая грудь;</li>
                  <li>длинная прямая спина;</li>
                  <li>длинные крылья лежат на хвосте без перекрещивания;</li>
                  <li>хвост длинный, широкий, с 12 рулевыми перьями;</li>
                  <li>щитки белые;</li>
                  <li>поясов нет;</li>
                  <li>ноги средние, светло-красные.</li>
                </ul>
              </div>
              <div style="margin-left: 60px" class="screen__info screen__info_right">
                <p class="screen__text">Плюсы:</p>
                <ul class="screen__text">
                  <li>красивый внешний вид;</li>
                  <li>неприхотливость;</li>
                  <li>родительские качества.</li>
                </ul>
                <p class="screen__text">Минусы:</p>
                <ul class="screen__text">
                  <li>средние лётные качества;</li>
                  <li>неспособность к длительным полётам.</li>
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
  name: "Page-24",
  data() {
    return {
      pagePrev: 'page-23',
      pageNext: 'page-25',
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