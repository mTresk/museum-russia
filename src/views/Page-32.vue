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
              <div class="screen__info screen__info_right">
                <p class="screen__text">Внешний вид:</p>
                <ul class="screen__text">
                  <li>среднего размера тело обтекаемой формы;</li>
                  <li>плотное густое оперение из пуха и кроющего пера;</li>
                  <li>различная расцветка тела;</li>
                  <li>скруглённая голова с плоским теменем;</li>
                  <li>среднего размера глаза. Цвет не имеет значения;</li>
                  <li>широкая грудь, ровная спина;</li>
                  <li>крылья плотные, с большими маховыми перьями;</li>
                  <li>цвет щитков и тела совпадают;</li>
                  <li>поясов нет;</li>
                  <li>ноги средние;</li>
                  <li>хвост длиннее крыльев.</li>
                </ul>
              </div>
              <div style="margin-left: 60px" class="screen__info screen__info_right">
                <p class="screen__text">Плюсы:</p>
                <ul class="screen__text">
                  <li>отдельные представители породы являются абсолютными чемпионами мировых соревнований;</li>
                  <li>хорошая выносливость;</li>
                  <li>высокая скорость полёта;</li>
                  <li>способность преодолевать расстояния свыше 1 000 км;</li>
                  <li>способность самостоятельно высиживать птенцов.</li>
                </ul>
                <p class="screen__text">Минусы:</p>
                <ul class="screen__text">
                  <li>сложный процесс тренировок, недоступный новичку;</li>
                  <li>особые условия содержания и питания;</li>
                  <li>малое количество потомства.</li>
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
  name: "Page-32",
  data() {
    return {
      pagePrev: 'page-31',
      pageNext: 'page-33',
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