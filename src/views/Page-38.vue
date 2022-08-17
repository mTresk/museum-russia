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
                <img src="img/24.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">4 место. Немецкий спортивный голубь</h2>
                <p class="screen__text">Отличаются высокой скороспелостью и хорошими лётными качествами.</p>
                <p class="screen__text">
                  Выведен в Германии путём селекции английских карьеров и голландских голубей. Птицы небольшие, с коротким клювом и небольшим хвостом.
                </p>
                <p class="screen__text">
                  Не подходят начинающим голубеводам, так как требуют регулярных тренировок, без которых могут легко потерять лётные качества.
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
  name: "Page-38",
  data() {
    return {
      pagePrev: 'page-37',
      pageNext: 'page-39',
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