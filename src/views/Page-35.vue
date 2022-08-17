<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 style="margin-bottom: 40px" class="screen__subtitle screen__subtitle_h3">Русский спортивный голубь входит в ТОП-5 мирового рейтинга</h2>
          <div class="screen__content">
            <div class="screen__images">
              <div style="width: 800px; height: 500px" class="screen__image screen__image-ibg">
                <img src="img/21.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">1 место. Бельгийский</h2>
                <p class="screen__text">Порода выведена в Бельгии в XV-XVI веках, в XIX веке улучшена породами гомер и турбит.</p>
                <p class="screen__text">
                  Внешность простая, скромная, у птиц хорошо развита грудь, крылья и средней длины хвост. По размеру голуби небольшие, ноги у них
                  короткие, перья укороченные. Оперение с шелковистой текстурой, различного окраса. Эти птицы являются рекордсменами мира по дальности и
                  скорости полёта, отличаются феноменальной манёвренностью. Требуют тщательного ухода и регулярных тренировок. Не подходят для разведения
                  начинающими заводчиками.
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
  name: "Page-35",
  data() {
    return {
      pagePrev: 'page-34',
      pageNext: 'page-36',
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