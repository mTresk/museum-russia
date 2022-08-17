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
                <img src="img/6.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">Волжские красногрудые</h2>
                <p class="screen__text">
                  Порода выведена волжскими селекционерами на базе казанских трясунов, ржевских голубей и северокавказских цветных качунов. Голуби
                  разводятся как декоративная порода, хотя некоторые особи показывают хорошие лётные качества.
                </p>
                <p class="screen__text">Среди расовых признаков волжских красногрудых:</p>
                <ul class="screen__text">
                  <li>небольшое, короткое тело, по строению сходное с качунами;</li>
                  <li>высоко поднятый широкий хвост из 16-18 перьев с поперечной белой полосой;</li>
                  <li>эффектная вишнёво-белая масть;</li>
                  <li>голова, основная часть туловища и хвост насыщенно-вишнёвые, блестящие, на груди и шее имеются пёрышки с фиолетовым отливом;</li>
                  <li>щёчки, горло в верхней части, подклювье, живот, ноги, крылья и ноги ровного белого цвета;</li>
                  <li>короткие ноги с оперением в виде колокольчика;</li>
                  <li>круглая гладкая голова;</li>
                  <li>глаза розоватые, с тёмными вкраплениями и зрачком;</li>
                  <li>толстый небольшой палево-розовый клюв;</li>
                  <li>шея с красивым горделивым изгибом, голубь трясет ею, оправдывая принадлежность к группе трясунов;</li>
                  <li>массивный розовый клюв;</li>
                  <li>щитки по цвету совпадают с основным окрасом.</li>
                </ul>
                <p class="screen__text">Стандартом допускается жёлтый окрас с белой полосой на хвосте и чисто чёрный, без белого хвостового украшения.</p>
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
  name: "Page-8",
  data() {
    return {
      pagePrev: 'page-7',
      pageNext: 'page-9',
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