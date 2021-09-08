<template>
  <span class="openhours-root">
    <div class="mobile-toggle-button" v-if="isMobile" @click="toggleIsOpen()">
      <p>Nyitvatartás</p>
      <font-awesome-icon
        v-bind:class="`icon-${getAccordionClass()}`"
        icon="arrow-down"
      />
    </div>
    <div class="openhours-container" v-bind:class="getAccordionClass()">
      <div class="openhour" v-for="(openHour,index) in openHours" :key="index" >
        <p>{{openHour.day}}</p>
        <p>Nyitás: {{openHour.open}}</p>
        <p>Zárás: {{openHour.close}}</p>
      </div>
    </div>
  </span>
</template>
<script>
import mobileMixin from "../mixins/mobile-mixin";
import accordionMixin from "../mixins/accordion-mixin";
export default {
  name: "OpenHours",
  mixins: [mobileMixin, accordionMixin],
  props: {
    openHours: Array,
  },
  created() {
    this.onResize();
  },
};
</script>
<style scoped>
.openhours-container {
  width: 90%;
  border-radius: 16px;
}
.openhour {
  display: grid;
  padding: 0 10px 0 10px;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
}
.mobile-toggle-button {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 95vw;
}
.mobile-toggle-button > p {
  margin-left: 35px;
  margin-right: 20px;
}
.open {
  display: block;
}
.close {
  display: none;
}
.icon-open {
  transition: 0.3s;
  transform: rotate(180deg);
}
.icon-close {
  transition: 0.3s;
  transform: rotate(360deg);
}
@media screen and (max-width: 1024px) {
  .openhours-container {
    width: 100%;
    border-radius: 0;
  }
  .openhours-root {
    background-color: white;
    border-radius: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
}
</style>