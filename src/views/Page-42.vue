<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">Голубятня</h2>
          <div class="screen__content">
            <p class="screen__text">
              Простой домик голубям не подойдёт. Нужен целый комплекс, состоящий из помещения для отдыха, выгула и вольера, при этом есть особые требования.
            </p>
            <p class="screen__text">У каждого голубя должна быть индивидуальная площадка/домик для возвращения после полётов.</p>
            <p class="screen__text">Индивидуальный характер носит и кормление каждой птицы.</p>
            <p class="screen__text">
              Преобладать в рационе должны зерно и бобовые, которые обеспечат организм спортсменов необходимой клетчаткой, углеводами и белками. Рацион должен
              быть разнообразным и включать минеральные добавки с витаминными комплексами. Кормление вне соревновательного периода производится два раза в
              сутки, утром и вечером. Утреннее кормление осуществляется минимум за час до тренировки - для усвоения пищи. Состоит завтрак преимущественно из
              углеводов (зерновые смеси). Вечернее кормление производится спустя час после полётов. Ужин содержит повышенное количество белка (бобовых) и
              клетчатки.
            </p>
            <p class="screen__text">Голубей желательно поить через автоматические поилки, в зависимости от их потребностей в воде.</p>
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
  name: "Page-42",
  data() {
    return {
      pagePrev: 'page-41',
      pageNext: 'page-43',
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