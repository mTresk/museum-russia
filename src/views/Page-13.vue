<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">10 самых известных русских пород голубей</h2>
          <div class="screen__content">
            <div class="screen__images">
              <div style="width: 800px; height: 500px" class="screen__image screen__image-ibg">
                <img src="img/11.jpg" alt="" />
              </div>
              <div class="screen__info screen__info_right">
                <h2 class="screen__subtitle screen__subtitle_h3">1. Старорусский кружастый голубь</h2>
                <p class="screen__text">Относится к древним породам, ведущим свою родословную от ярославских чистых голубей XVI века.</p>
                <p class="screen__text">
                  Тренировки этой породы имеют особенности. Только опытный мастер-голубовед может знать все требования и четко соблюдать их:
                </p>
                <ul class="screen__text">
                  <li>предварительное определение состояния здоровья птицы;</li>
                  <li>разделение голубей на две группы: правокружные и левокружные;</li>
                  <li>раздельные тренировки для групп;</li>
                  <li>выявление «катунов», способных к быстрому и крутому развороту в воздухе;</li>
                  <li>селекция.</li>
                </ul>
                <p class="screen__text">
                  Уникальные лётные качества теряются из-за низкого качества тренировок, поэтому в последнее время основное внимание уделяется
                  декоративности породы.
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
  name: "Page-13",
  data() {
    return {
      pagePrev: 'page-12',
      pageNext: 'page-14',
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