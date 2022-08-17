<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">ТРЕНИРОВКИ</h2>
          <div class="screen__content">
            <p class="screen__text">
              Первые тренировки молодняка начинаются с трёхмесячного возраста, когда птенцы полностью оперятся, или через три дня после их прибытия на
              постоянное место жительства.
            </p>
            <p class="screen__text">Сначала их учат летать вокруг голубятни, запоминать местность вблизи неё и приучают к крыше.</p>
            <p class="screen__text">
              Когда они научатся самостоятельно летать в течение 10 минут без отдыха, их приучают держаться в воздухе стайкой, тренируют выносливость. Только
              после того, как молодняк научится держаться в воздухе без отдыха в течение получаса, его можно начинать тренировать для полётов на расстояния.
              Увозя подальше от дома, птицу учат находить дорогу назад. Расстояния увеличивают постепенно.
            </p>
            <p class="screen__text">Лучшее время для тренировок — с апреля по октябрь.</p>
            <p class="screen__text">
              Одиноких голубей на дальние расстояния выпускать не желательно, так как они могут себе найти пару в другом месте, и тогда домой не вернуться.
            </p>
            <p class="screen__text">
              Ловить голубей для перевозок на длительные расстояния для тренировок лучше в ночное время, когда они заторможенные и легко даются в руки.
            </p>
            <p class="screen__text">Ловля днем может их сильно испугать и отбить охоту возвращаться домой.</p>
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
  name: "Page-40",
  data() {
    return {
      pagePrev: 'page-39',
      pageNext: 'page-41',
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