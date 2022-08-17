<template>
  <main class="page">
    <div class="screen">
      <Background/>
      <div class="screen__container">
        <Logo/>
        <div class="screen__body">
          <Doves/>
          <h2 class="screen__subtitle">История</h2>
          <div class="screen__content">
            <p class="screen__text">
              Первое письменное упоминание о домашних голубях зафиксировано ещё в «Повести временных лет». Долгое время гон голубей или «голубиная охота» были
              одной из любимых забав русского дворянства.
            </p>
            <p class="screen__text">
              В литературе XVI века упоминаются ярославские чистые породы: во времена правления Екатерины Второй – серые турманы, а в XVIII веке стали
              известны исконно русские породы, выведенные графом Алексеем Григорьевичем Орловым близ Москвы:
            </p>
            <ul class="screen__text">
              <li>графский короткоклювый турман;</li>
              <li>бородун;</li>
              <li>кружастый;</li>
              <li>пестряк.</li>
            </ul>
            <p class="screen__text">
              Примерно в то же время стала известна коллекция ржевских ленточных голубей. В XIX веке большой популярностью пользовались московские турманы,
              которых начали вывозить на международные выставки.
            </p>
            <p class="screen__text">К середине XIX века разведение голубей перестаёт быть прерогативой знати и приобретает государственное значение.</p>
            <p class="screen__text">
              Организуется служба голубиной почты, при Московском университете открывается первый голубиный питомник, начинают издаваться книги и журналы,
              посвященные голубиной охоте, организуются выставки.
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
  name: "Page-1",
  data() {
    return {
      pageNext: 'page-2',
      pagePrev: 'home'
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