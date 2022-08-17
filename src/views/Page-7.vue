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
                <img src="img/5.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">Армавирские белоголовые космачи</h2>
                <p class="screen__text">Работа по выведению породы велась в Армавире с конца XVII века.</p>
                <p class="screen__text">
                  Исходным материалом выступали северокавказские длинноклювые космачи. Армавирские белоголовые космачи входят в Международные каталоги
                  пород голубей и считаются красивой, элитной и довольно дорогой разновидностью.
                </p>
                <p class="screen__text">Характерная особенность птиц — богатое обильное оперение на ногах (космы). Различают чубатый и безчубый подвиды.</p>
                <p class="screen__text">Обязательные параметры:</p>
                <ul class="screen__text">
                  <li>высокие оперённые ноги с длинными шпорами;</li>
                  <li>птицы статные, с горделивой осанкой;</li>
                  <li>длинный белый клюв;</li>
                  <li>
                    интенсивный окрас — жёлтый, чёрный с красным отливом (горелый), красный, чёрный, серый со слабым желтоватым или красноватым оттенком
                    (воробьиный) - в сочетании с белым оперением на голове и крыльях;
                  </li>
                  <li>по краю перьев с широким опахалом имеется более тёмная каёмка — чешуйка;</li>
                  <li>сходящиеся к спине длинные крылья.</li>
                </ul>
                <p class="screen__text">
                  Летают до полутора часов на высоте 50-100 м. Стиль полёта плавный, с лёгким наплывом, входом в вертикальный десятиметровый столб с
                  громким, сухим боем, с 3-5 переворотами и с 2-9 переворотами при спуске. Армавирские белоголовые (лысые) входят в группу бойцовых
                  голубей.
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
  name: "Page-7",
  data() {
    return {
      pagePrev: 'page-6',
      pageNext: 'page-8',
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