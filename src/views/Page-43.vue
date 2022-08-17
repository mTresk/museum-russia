<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Проведение соревнований</h2>
          <div class="screen__content">
            <p class="screen__text">К соревнованиям на большие расстояния привлекают голубей в возрасте не моложе трёх лет.</p>
            <p class="screen__text">Спортивные голуби соревнуются:</p>
            <ul class="screen__text">
              <li>на скорость полёта на расстояниях свыше 100 километров, до 500 километров, свыше 500 километров;</li>
              <li>в многоборье среди годовиков, самок и самцов;</li>
            </ul>
            <p class="screen__text">
              Существуют так же Кубковые полёты. Для получения Кубка федерации необходимо заявить от каждого голубевода по 5 спортсменов на следующих
              дистанциях:
            </p>
            <ul class="screen__text">
              <li>категория А (расстояние от 100 до 400 километров);</li>
              <li>категория Б (расстояние от 300 до 600 километров);</li>
              <li>категория С (расстояние свыше 500 километров).</li>
            </ul>
            <p class="screen__text">В международных соревнованиях к указанным категориям добавляется категория Д с аналогичными расстояниями.</p>
            <p class="screen__text">
              Если в первых трёх категориях могут принимать участие разные голуби от клуба или голубевода, то в категории Д одни и те же голуби должны
              соревноваться на всех дистанциях.
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
  name: "Page-43",
  data() {
    return {
      pagePrev: 'page-42',
      pageNext: 'home',
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