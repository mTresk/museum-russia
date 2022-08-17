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
                  <li>продолговатая голова с крутым лбом и затылком;</li>
                  <li>тёмно-коричневые глаза;</li>
                  <li>тёмные веки;</li>
                  <li>светлый клюв с чуть загнутым кончиком;</li>
                  <li>средняя шея;</li>
                  <li>небольшая грудь;</li>
                  <li>неширокая спина;</li>
                  <li>крылья имеют первичные белые маховые перья;</li>
                  <li>голубые щитки;</li>
                  <li>пояса: оранжевые, красные;</li>
                  <li>низкие малооперённые ноги у голоногих;</li>
                  <li>полностью оперённые, вплоть до пальцев, ноги у космачей.</li>
                </ul>
              </div>
              <div style="margin-left: 60px" class="screen__info screen__info_right">
                <p class="screen__text">Плюсы:</p>
                <ul class="screen__text">
                  <li>уникальная русская порода со столетней историей;</li>
                  <li>красивый внешний вид космачей;</li>
                  <li>хорошая жизнестойкость;</li>
                  <li>хорошая плодовитость;</li>
                  <li>способность к самостоятельному выведению и воспитанию птенцов;</li>
                  <li>красивый лёгкий полёт у голоногих;</li>
                  <li>длительные полёты голоногих на большие расстояния.</li>
                </ul>
                <p class="screen__text">Минусы:</p>
                <ul class="screen__text">
                  <li>необходимость следить за ножным оперением космачей;</li>
                  <li>частая замена подстилки у космачей;</li>
                  <li>медленный некрасивый полёт космачей.</li>
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
  name: "Page-16",
  data() {
    return {
      pagePrev: 'page-15',
      pageNext: 'page-17',
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