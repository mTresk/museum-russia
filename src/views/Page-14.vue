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
                  <li>небольшое удлинённое тело;</li>
                  <li>белое оперение. Допустимы рябые тёмные пятна с синим отливом;</li>
                  <li>тёмные глаза;</li>
                  <li>тонкие светлые веки;</li>
                  <li>белый тонкий клюв с загнутым кончиком;</li>
                  <li>тонкая длинная шея;</li>
                  <li>небольшая грудь;</li>
                  <li>неширокая спина;</li>
                  <li>крылья длиной 10 сантиметров прилегают к телу и имеют первичные белые маховые перья;</li>
                  <li>узкий хвост;</li>
                  <li>пояса: чёрные, поперечные красно- и серо-коричневые;</li>
                  <li>низкие малооперённые ноги.</li>
                </ul>
              </div>
              <div class="screen__info screen__info_right">
                <p class="screen__text">Плюсы:</p>
                <ul class="screen__text">
                  <li>уникальность истинно русской породы, возрастом около 400 лет;</li>
                  <li>красивый внешний вид;</li>
                  <li>высокая жизнестойкость;</li>
                  <li>высокая плодовитость;</li>
                  <li>способность к самостоятельному выведению и воспитанию птенцов;</li>
                  <li>полёт кругами малого радиуса в левую или правую стороны.</li>
                </ul>
                <p class="screen__text">Минусы:</p>
                <ul class="screen__text">
                  <li>сложные тренировки по определению и поддержанию «кружастых» способностей;</li>
                  <li>стремление к поддержанию внешних признаков экстерьера приводит к потере лётных качеств.</li>
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
  name: "Page-14",
  data() {
    return {
      pagePrev: 'page-13',
      pageNext: 'page-15',
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