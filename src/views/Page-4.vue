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
                <img src="img/2.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">Чёрно-пегий турман</h2>
                <p class="screen__text">
                  Происхождение чёрно-пегие (чёрно-чалые, калужские) турманы ведут от орловских бородунов и орловских белых голубей, серых турманов.
                </p>
                <p class="screen__text">Стандарт официально утвержден в 1912 году:</p>
                <ul class="screen__text">
                  <li>размер птицы средний, 34-36 см;</li>
                  <li>длинные крылья размашистые, концы спускаются ниже хвоста;</li>
                  <li>корпус широкий, вытянутый;</li>
                  <li>округлая или гранистая голова с выпуклым высоким лбом, небольшая;</li>
                  <li>глаза крупные, выразительные, тёмные, выпуклые;</li>
                  <li>белый клюв, немного изогнутый книзу, короткий, крепкий;</li>
                  <li>окрас чёрный, с зелёным отливом и сорочьим рисунком;</li>
                  <li>брюшко, бедра, щёчки, подбородок, крылья в обрез — белые;</li>
                  <li>в чёрном хвосте насчитывается 12 рулевых перьев;</li>
                  <li>неоперённые ноги короткие;</li>
                  <li>стандарт допускает как наличие, так и отсутствие чуба.</li>
                </ul>
                <p class="screen__text">
                  Первоначальные превосходные лётные качества орловцев в ходе селекции утеряны, продолжительность их полёта небольшая, птица тяжело
                  разворачивается.
                </p>
                <p class="screen__text">Характерен полёт по широкому высокому кругу с сериями кувырков (катов).</p>
                <p class="screen__text">
                  Известен подвид чёрно-пегий, жемчужный по чёрному фону, отличающийся чёрными щеками, подбородком, грудью, бедром.
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
  name: "Page-4",
  data() {
    return {
      pagePrev: 'page-3',
      pageNext: 'page-5',
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