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
                <img src="img/17.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">7. Курский высоколётный</h2>
                <p class="screen__text">Порода создана в XIX веке в результате селекции чеграшей из Воронежа и курских турманов.</p>
                <p class="screen__text">Имеет четыре типа окраски:</p>
                <ul class="screen__text">
                  <li>чёрно-белый;</li>
                  <li>чёрный с белыми маховыми крыльями;</li>
                  <li>сизый;</li>
                  <li>сорочий.</li>
                </ul>
                <p class="screen__text">Представители всех типов имеют небольшие различия в размерах тела.</p>
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
  name: "Page-25",
  data() {
    return {
      pagePrev: 'page-24',
      pageNext: 'page-26',
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