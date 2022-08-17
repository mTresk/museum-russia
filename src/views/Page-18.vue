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
                  <li>блестящее чёрное оперение;</li>
                  <li>квадратная голова с широким лбом;</li>
                  <li>серебристые или белые глаза;</li>
                  <li>широкие светлые веки;</li>
                  <li>толстый и короткий клюв, чуть загнутый вниз, с хорошо развитой восковицей;</li>
                  <li>средняя вертикально посаженная шея;</li>
                  <li>небольшая грудь;</li>
                  <li>крылья средние, их концы опущены ниже хвоста;</li>
                  <li>щитков и поясов нет;</li>
                  <li>крепкие неоперённые ноги.</li>
                </ul>
              </div>
              <div style="margin-left: 60px" class="screen__info screen__info_right">
                <p class="screen__text">Плюсы:</p>
                <ul class="screen__text">
                  <li>уникальная русская порода с историей;</li>
                  <li>красота птиц и их полёта;</li>
                  <li>высокая плодовитость самок;</li>
                  <li>способность к самостоятельному выведению и воспитанию птенцов.</li>
                </ul>
                <p class="screen__text">Минусы:</p>
                <ul class="screen__text">
                  <li>трудности в восстановлении породы из-за отсутствия достаточного количества особей;</li>
                  <li>высокая требовательность к условиям содержания и корму;</li>
                  <li>слабая жизнестойкость молодняка;</li>
                  <li>проявление признаков турманов после второго года жизни.</li>
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
  name: "Page-18",
  data() {
    return {
      pagePrev: 'page-17',
      pageNext: 'page-19',
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