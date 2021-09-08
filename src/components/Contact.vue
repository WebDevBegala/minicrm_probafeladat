<template>
  <span class="contact-root">
    <div class="mobile-toggle-button" v-if="isMobile" @click="toggleIsOpen()">
      <p>Elérhetőség</p>
      <font-awesome-icon
        v-bind:class="`icon-${getAccordionClass()}`"
        icon="arrow-down"
      />
    </div>
    <div class="contact-container" v-bind:class="getAccordionClass()">
      <div class="contact">
        <font-awesome-icon class="icon" icon="mobile" />
        <p>{{storeDetail.mobile}}</p>
      </div>
      <div class="contact">
        <font-awesome-icon class="icon" icon="envelope" />
        <p>{{storeDetail.email}}</p>
      </div>
      <div class="contact">
        <font-awesome-icon class="icon" icon="map-marker-alt" />
        <p>{{storeDetail.address}}</p>
      </div>
      <div class="contact">
        <font-awesome-icon class="icon" icon="globe" />
        <p>{{storeDetail.website}}</p>
      </div>
    </div>
  </span>
</template>
<script>
import accordionMixin from "../mixins/accordion-mixin";
import mobileMixin from "../mixins/mobile-mixin";
export default {
  name: "Contact",
  mixins: [mobileMixin, accordionMixin],
  props:{
    storeDetail: Object
  },
  created() {
    this.onResize();
  },
};
</script>
<style scoped>
.contact-container {
  font-size: 17px;
}
.contact {
  display: flex;
  align-items: center;
}
.contact > .icon {
  margin-right: 20px;
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
.icon{
  width: 1em;
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
  .contact-root {
    background-color: white;
    border-radius: 10px;
    margin-bottom: 30px;
  }
  .contact {
    margin-left: 30px;
  }
}
</style>