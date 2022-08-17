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
                <img src="img/7.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">Волжские ленточные голуби</h2>
                <p class="screen__text">
                  Волжские ленточные голуби родом из средней полосы России. Формировали породу вислокрылые голуби из Сызрани и Ржева. Декоративные
                  качества и окрас привнесли волжские красногрудые. При правильном содержании и регулярных тренировках голуби показывают хорошие лётные
                  качества. Способны до трёх часов медленно летать по широкому и высокому кругу. Отличаются нежностью и верностью по отношению к
                  выбранному партнёру, это хорошие заботливые родители.
                </p>
                <p class="screen__text">Их стандарт схож со стандартом волжских красногрудых:</p>
                <ul class="screen__text">
                  <li>вишнёво-белый или лимонно-белый окрас оперения;</li>
                  <li>широкий приподнятый плоский хвост украшает белая полоса шириной до полутора сантиметров;</li>
                  <li>голова круглая, с плоским теменем и широким лбом;</li>
                  <li>глаза тёмного цвета;</li>
                  <li>светло-розовый клюв широкий у основания, короткий, заостренный к концу;</li>
                  <li>горделиво выгнутая толстая шея средней длины;</li>
                  <li>туловище укороченное, с широкой грудью и спиной;</li>
                  <li>крылья длинные, опущены ниже хвостового оперения;</li>
                  <li>короткие ноги оперены;</li>
                  <li>осанка величавая;</li>
                  <li>птицы отличаются степенным нравом.</li>
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
  name: "Page-9",
  data() {
    return {
      pagePrev: 'page-8',
      pageNext: 'page-10',
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