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
              <div style="width: 480px; height: 500px" class="screen__image screen__image-ibg">
                <img src="img/23.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">3 место. КАРЬЕР</h2>
                <p class="screen__text">
                  Родиной считаются Древний Египет и сопредельные с ним страны. В XVI веке был завезён в Голландию, а позже попал в Англию.
                </p>
                <p class="screen__text">Обладает экстраординарной внешностью и отличными лётными качествами.</p>
                <p class="screen__text">Отличительная черта – толстый прямой клюв с небольшими наростами.</p>
                <p class="screen__text">Эти птицы плохо приручаются и крайне пугливы.</p>
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
  name: "Page-37",
  data() {
    return {
      pagePrev: 'page-36',
      pageNext: 'page-38',
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