<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Общие характеристики</h2>
          <div class="screen__content">
            <p class="screen__text">У голубей, которые приучены к коротким дистанциям, строение крыла жёсткое, без выступов.</p>
            <p class="screen__text">
              У голубей, летающих на длинные дистанции, крылья имеют такое строение, при котором воздух свободно проходит сквозь перья.
            </p>
            <p class="screen__text">
              Каждый спортсмен имеет своё родовое кольцо, аналог человеческого паспорта. Самыми быстрыми считаются голуби с серебристым и красным цветом глаз.
            </p>
            <p class="screen__text">
              Все они необыкновенно выносливые, развивают большие скорости, преодолевают длинные расстояния, находят дорогу домой, несмотря на препятствия.
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
  name: "Page-34",
  data() {
    return {
      pagePrev: 'page-33',
      pageNext: 'page-35',
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