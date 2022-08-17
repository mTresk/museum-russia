<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <div class="screen__content">
            <p class="screen__text">К началу ХХ века были сформированы многие русские породы голубей.</p>
            <p class="screen__text">После революции голубеводство пошло на спад.</p>
            <p class="screen__text">
              В 30-е годы поголовье голубей резко сократилось. Владельцев голубей обвиняли в шпионаже, передаче секретных данных голубиной почтой. Птиц
              уничтожали, хозяев отправляли в лагеря. Еще сильнее поголовье птиц сократилось во время Великой Отечественной войны. Большое число исконных
              русских пород исчезло навсегда.
            </p>
            <p class="screen__text">В послевоенные годы любители и профессиональные селекционеры начали возрождать любимые породы.</p>
            <p class="screen__text">
              Сегодня в стране насчитывается более двухсот зарегистрированных отечественных пород, многие из которых признаны международными сообществами
              голубеводов.
            </p>
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
  name: "Page-2",
  data() {
    return {
      pagePrev: 'page-1',
      pageNext: 'page-3',
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