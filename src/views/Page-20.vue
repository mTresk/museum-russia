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
                  <li>белое оперение;</li>
                  <li>небольшая квадратная голова с широким лбом;</li>
                  <li>большие тёмно-коричневые глаза;</li>
                  <li>широкие белые веки;</li>
                  <li>светлый, толстый и короткий клюв чуть загнут вниз, имеет развитую восковицу;</li>
                  <li>длинная красивая шея;</li>
                  <li>хвост с 12 рулевыми перьями;</li>
                  <li>крылья компактные, их концы опущены ниже хвоста;</li>
                  <li>щитков нет;</li>
                  <li>поясов нет;</li>
                  <li>короткие красные неоперённые ноги.</li>
                </ul>
              </div>
              <div style="margin-left: 60px" class="screen__info screen__info_right">
                <p class="screen__text">Плюсы:</p>
                <ul class="screen__text">
                  <li>уникальная русская порода;</li>
                  <li>красивый внешний вид;</li>
                  <li>хороший отклик на регулярные тренировки;</li>
                  <li>высокая плодовитость самок;</li>
                  <li>способность к самостоятельному выведению и воспитанию птенцов.</li>
                </ul>
                <p class="screen__text">Минусы:</p>
                <ul class="screen__text">
                  <li>малочисленность качественной птицы, отвечающей строгим требованиям стандарта;</li>
                  <li>требовательность к условиям содержания и корму;</li>
                  <li>быстрая потеря признаков породы при селекции;</li>
                  <li>проявление признаков турманов на втором году жизни.</li>
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
  name: "Page-20",
  data() {
    return {
      pagePrev: 'page-19',
      pageNext: 'page-21',
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