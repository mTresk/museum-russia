<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Разновидности</h2>
          <div class="screen__content">
            <div class="screen__images">
              <div style="width: 800px; height: 500px" class="screen__image screen__image-ibg">
                <img src="img/1.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">Гривуны</h2>
                <p class="screen__text">
                  Гривуны (пермяки) — одна из старых русских пород. В напечатанной в 1888 году в журнале «Природа и охота» статье утверждалось, что порода
                  сформировалась и распространилась к началу XIX века. Её автор назвал «родителями» гривунов голубого дубовского, камышинского голубей и
                  белого пензенского турмана.
                </p>
                <p class="screen__text">Внешний вид, сложение гривунов свидетельствуют о прекрасных лётных качествах:</p>
                <ul class="screen__text">
                  <li>длина тела 35-47 см;</li>
                  <li>голова округлая, средняя по величине, гладкая;</li>
                  <li>глаза ясные, тёмные;</li>
                  <li>оперение плотное.</li>
                </ul>
                <p class="screen__text">
                  В наше время разводят несколько разновидностей гривунов, различающихся по окрасу и лётным характеристикам.
                  Пермяки — белые птицы с синей, чёрной или красной гривкой. Превосходные летуны с развитой пространственной ориентацией. Способны
                  находиться в воздухе до 10 часов, особенно сильные особи — до 12 часов. Летают эти птицы даже в условиях разряженной атмосферы на
                  большой высоте.
                  Южные гривуны (кировские, николаевские) — более мелкие птицы с шеей и спинкой жёлтого, чёрного (чубарики) или красного цвета. Отличаются
                  манерой полёта: за 2-4 часа голубь несколько раз опускается, а затем вновь набирает первоначальную высоту.
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
import Background from "@/components/Background";
import Logo from "@/components/Logo";
import Doves from "@/components/Doves";

export default {
  name: "Page-3",
  data() {
    return {
      pagePrev: 'page-2',
      pageNext: 'page-4',
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