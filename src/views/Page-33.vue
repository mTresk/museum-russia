<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Спортивное голубеводство</h2>
          <div class="screen__content">
            <p class="screen__text">
              История почтовых голубей насчитывает более 5 тысяч лет. Об использовании голубей в качестве почтальонов есть упоминания в трудах римского
              историка Плиния.
            </p>
            <p class="screen__text">
              Из-за развития телеграфа, телефона и других способов связи необходимость голубиной почты отпала, но желание сохранить выносливую птицу,
              способную летать на расстояния 500, 1 000 и более километров со скоростью 60-70 километров в час, заставило голубеводов перевести почтовых
              голубей в разряд спортивных.
            </p>
            <p class="screen__text">
              Спортивные голуби используются только в соревнованиях. Птицу отвозят далеко от места жительства, а она должна самостоятельно найти дорогу домой,
              вернуться в свое родовое гнездо.
            </p>
            <p class="screen__text">
              Во время Первой мировой и Великой Отечественной войны голуби были практически уничтожены. Только с наступлением мира началось возрождение
              российского голубеводства. По всей стране создавались любительские и общественные клубы, секции голубеводов, проводились спортивные чемпионаты.
            </p>
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
  name: "Page-33",
  data() {
    return {
      pagePrev: 'page-32',
      pageNext: 'page-34',
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