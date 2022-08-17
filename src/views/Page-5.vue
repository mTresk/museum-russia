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
                <img src="img/3.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">Дубовские голуби</h2>
                <p class="screen__text">
                  Название получили от волжского города Дубовка, в котором были выведены. Бытует ещё одно местное название — кондратьевские.
                </p>
                <p class="screen__text">Главная характерная черта дубовских голубей — протяжное приглушённое утробное воркование.</p>
                <p class="screen__text">
                  Относятся к высоколётным голубям. Летают по маленькому кругу, на большой высоте. Дубовцы могут находиться в воздухе до 8 часов, обладают
                  развитой пространственной ориентацией.
                </p>
                <p class="screen__text">В описаниях дубовских голубей указываются обязательные параметры:</p>
                <ul class="screen__text">
                  <li>вислокрылая птица средних размеров с немного приподнятым хвостом;</li>
                  <li>посадка низкая, голые неоперённые ноги короткие, красные (малиновые);</li>
                  <li>голова без чуба, продолговатой формы, с небольшим невысоким лбом, затылком в виде бугорка и плоским темечком;</li>
                  <li>слегка изогнутая шея средней величины;</li>
                  <li>туловище немного удлинённое, с широкой и хорошо развитой грудью;</li>
                  <li>длинный, до 24 мм, прямой белый клюв;</li>
                  <li>окрас корпуса, хвоста, головы, шеи сорочий, серо-белый, чисто-белый, серо-голубой (сизый), красный;</li>
                  <li>крылья с цветными пёрышками-эполетами на плечах;</li>
                  <li>хвост длиной до 24 мм из 12-14 перьев, с обозначенной на конце тёмной лентой;</li>
                  <li>глаза светлые, серебристые.</li>
                </ul>
                <p class="screen__text">В содержании неприхотливы. Обладают развитым родительским инстинктом.</p>
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
  name: "Page-5",
  data() {
    return {
      pagePrev: 'page-4',
      pageNext: 'page-6',
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