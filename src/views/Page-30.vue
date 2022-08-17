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
                  <li>широкое и массивное тело длиной до 40 сантиметров;</li>
                  <li>рыхлое оперение разнообразной расцветки: чёрное, сизое, белое, красное, палевое;</li>
                  <li>широкая голова с двумя чубами;</li>
                  <li>жемчужные или оранжевые глаза;</li>
                  <li>цвет век не отличается от цвета тела;</li>
                  <li>светлый или тёмный цвет небольшого клюва идентичен цвету головы;</li>
                  <li>толстая шея;</li>
                  <li>широкие грудь и спина;</li>
                  <li>крылья длинные, концы лежат на хвосте.</li>
                </ul>
              </div>
              <div style="margin-left: 60px" class="screen__info screen__info_right">
                <p class="screen__text">Плюсы:</p>
                <ul class="screen__text">
                  <li>высокая жизнеспособность;</li>
                  <li>хорошая подвижность;</li>
                  <li>приспособляемость к любому климату;</li>
                  <li>хорошая выживаемость потомства.</li>
                </ul>
                <p class="screen__text">Минусы:</p>
                <ul class="screen__text">
                  <li>плохие лётные качества;</li>
                  <li>полёт без индивидуальных особенностей;</li>
                  <li>при недостатке воды и корма у птиц проявляет драчливый характер.</li>
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
  name: "Page-30",
  data() {
    return {
      pagePrev: 'page-29',
      pageNext: 'page-31',
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