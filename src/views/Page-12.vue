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
                <img src="img/10.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">Спартак</h2>
                <p class="screen__text">
                  Спартаки - сравнительно новая порода. Выведена башкирскими голубеводами в начале XX века на базе староуфимской чёрно-белой породы.
                </p>
                <p class="screen__text">Стандарт породы принят в 1981 году:</p>
                <ul class="screen__text">
                  <li>размер тела 33-35 см;</li>
                  <li>конституция крепкая, изящная, сложение крепкое;</li>
                  <li>окрас насыщенный, двухцветный, с блеском;</li>
                  <li>основной тон - чёрный, сизый, красный;</li>
                  <li>белый цвет оперения встречается только на брюшке;</li>
                  <li>между основанием клюва и глазами имеются «серёжки» — цветные перышки;</li>
                  <li>голова круглая, с небольшим невысоким лбом и чубом-гребнем высотой до 5 мм на затылочной части;</li>
                  <li>глаза блестящие, жёлто-красные, с желто-розовыми веками;</li>
                  <li>средний по величине прямой белый клюв, надклювье серое (роговое);</li>
                  <li>шея сильная, толстая;</li>
                  <li>хорошо развитые сильные крылья , плотно прилегающие к корпусу, концы доходят до хвостового оперения;</li>
                  <li>цветные щитки;</li>
                  <li>короткие ноги оперённые «чулочками»;</li>
                  <li>узкий хвост из 12 рулевых перьев.</li>
                </ul>
                <p class="screen__text">
                  Относятся к группе высоколётных голубей. Полёт их продолжительный, высокий, по небольшому кругу. Спартаки всегда летают плотной стаей и
                  «держат строй».
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
  name: "Page-12",
  data() {
    return {
      pagePrev: 'page-11',
      pageNext: 'page-13',
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