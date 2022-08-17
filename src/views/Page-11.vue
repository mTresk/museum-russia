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
                <img src="img/9.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">Кофейные турманы</h2>
                <p class="screen__text">
                  Родина кофейных турманов - город Тула. По сути, это подвид тульских жуков. Точное происхождение породы не установлено. Среди голубеводов
                  существует мнение, что в её формировании участвовали смоленские чубатые грачи (лобачи).
                </p>
                <p class="screen__text">К расовым признакам относят:</p>
                <ul class="screen__text">
                  <li>характерную для отечественных турманов широкую гранёную кубическую голову с широким лбом;</li>
                  <li>большие светло-серебристые влажные глаза с белыми веками;</li>
                  <li>широкий чуб;</li>
                  <li>красно-бурую масть разных оттенков: от тёмно-кофейного до палевого;</li>
                  <li>перья с зелёным отливом на шее;</li>
                  <li>мощный, толстый, короткий клюв;</li>
                  <li>кожистый ободок вокруг глаз светло-кремового цвета шириной около 2 мм.</li>
                </ul>
                <p class="screen__text">
                  Поголовье кофейных турманов невелико. Птица требует тщательного ухода, привередлива к условиям содержания и кормам.
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
  name: "Page-11",
  data() {
    return {
      pagePrev: 'page-10',
      pageNext: 'page-12',
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