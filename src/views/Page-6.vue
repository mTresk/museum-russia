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
                <img src="img/4.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">Камышинские голуби</h2>
                <p class="screen__text">
                  Камышинские голуби - или камыши - родом из поволжского Камышина. Породная группа сформировалась к концу XIX века на основе сизых
                  голубей. Камыши выводились для излюбленной дворянской утехи — «гона» - и относятся к группе статных голубей.
                </p>
                <p class="screen__text">
                  Лётные качества этих голубей превосходны. Они преданы дому, всегда находят дорогу к гнезду, прекрасно ориентируются. Летают по одиночке
                  или в стае по высокому кругу.
                </p>
                <p class="screen__text">Обязательные параметры:</p>
                <ul class="screen__text">
                  <li>вислокрылые пропорциональные птицы с длиной корпуса 35-38 см;</li>
                  <li>
                    основной окрас - чисто чёрный, но встречаются местные подвиды с жёлтым, синим, палевым, кофейным, красным оперением, стандартом
                    допускается металлический отлив на шее и груди, соответствующий по оттенку основному окрасу, крылья при любом основном окрасе -
                    чисто белые;
                  </li>
                  <li>оперение плотно прилегает к телу;</li>
                  <li>узкая голова овальная, слегка удлинённая, гладкая, с пологим любом;</li>
                  <li>крупные глаза розовато-серые или желтоватые, большие, с узкими сероватыми веками;</li>
                  <li>клюв средний, плотно смыкающийся, розовый;</li>
                  <li>ноги голые, короткие, малиновые, коготки белого цвета;</li>
                  <li>крылья сильные, длинные;</li>
                  <li>щитков и поясов нет;</li>
                  <li>хвост плоской формы, приподнятый, без белой ленточки на конце.</li>
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
  name: "Page-6",
  data() {
    return {
      pagePrev: 'page-5',
      pageNext: 'page-7',
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