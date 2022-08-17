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
                <img src="img/8.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">Воронежские белозобые голуби</h2>
                <p class="screen__text">
                  Воронежские белозобые (воронежские белозобые-белопоясные, бородатые) одна из старейших отечественных пород, известная со времен
                  Екатерины II. Они относятся к породной группе воронежских чистых голубей.
                  Выделяются среди других пород стилем полёта. Не делая кругов, плотная группа птиц уверенно набирает высоту, замедляет полёт и через
                  короткое время разворачивается на месте, поднимаясь выше. На большой высоте стая растягивается в цепочку, иногда птицы «идут в качку» —
                  покачиваются из стороны в сторону. Летают до 2 часов. К голубятне спускаются кругами.
                </p>
                <p class="screen__text">К породным признакам относят:</p>
                <ul class="screen__text">
                  <li>сухое, крепкое сложение, развитую мускулатуру;</li>
                  <li>длину тела 32-34 см;</li>
                  <li>выпуклую широкую грудь;</li>
                  <li>плотное, богатое оперение основного светлого серо-голубого цвета с блеском;</li>
                  <li>светло-серую или белую голову и шею;</li>
                  <li>удлиненную форму головы, украшенную бородкой, плоским небольшим чубом и цветным лбом;</li>
                  <li>тёмные, блестящие глаза;</li>
                  <li>тонкий длинный клюв тёмного цвета;</li>
                  <li>длинные, хорошо развитые, плотно прилегающие к корпусу крылья;</li>
                  <li>ноги с опускающимися до пальцев перьями;</li>
                  <li>прямой полный хвост.</li>
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
  name: "Page-10",
  data() {
    return {
      pagePrev: 'page-9',
      pageNext: 'page-11',
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