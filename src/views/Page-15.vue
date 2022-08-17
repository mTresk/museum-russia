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
                <img src="img/12.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">2. Краснопоясной пестряк-космач</h2>
                <p class="screen__text">Имеет предков среди представителей питомников Ярославля.</p>
                <p class="screen__text">История разведения породы насчитывает более ста лет.</p>
                <p class="screen__text">
                  Пестряк-космач относился к гонной птице с хорошими лётными качествами. Но желание сохранить внешние признаки породы привело к переходу
                  голубей в разряд декоративных.
                </p>
                <p class="screen__text">Порода разделяется на два вида: голоногие и космачи (они имеют ножное оперение до 12 сантиметров).</p>
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
  name: "Page-15",
  data() {
    return {
      pagePrev: 'page-14',
      pageNext: 'page-16',
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