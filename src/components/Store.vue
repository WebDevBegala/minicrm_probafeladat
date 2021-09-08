<template>
  <div class="store_detail-root">
    <div class="top-block">
      <div class="image-root">
        <img class="store-image" :src="storeDetail.image" alt="" />
      </div>
      <div class="description" v-if="isMobile">
        <detail :storeDetail="storeDetail" />
      </div>
      <div class="openhours" v-else>
        <open-hours :openHours="storeDetail.openHours" />
      </div>
    </div>
    <div class="bottom-block">
      <div class="openhours" v-if="isMobile">
        <open-hours :openHours="storeDetail.openHours" />
      </div>
      <div class="description" v-else>
        <detail :storeDetail="storeDetail" />
      </div>
      <div class="contact">
        <contacts :storeDetail="storeDetail" />
      </div>
    </div>
  </div>
</template>
<script>
import Contact from "./Contact.vue";
import Detail from "./Detail.vue";
import OpenHours from "./OpenHours.vue";
import mobileMixin from "../mixins/mobile-mixin";

export default {
  name: "StoreDetails",
  mixins: [mobileMixin],
  components: {
    "open-hours": OpenHours,
    "contacts": Contact,
    "detail": Detail,
  },
  props: {
    storeDetail: Object,
  },
  created() {
    this.onResize();
  },
};
</script>
<style scoped>
.store_detail-root {
  display: grid;
  grid-template-rows: 6fr 4fr;
  height: 90vh;
  overflow-y: scroll;
}
.image-root {
  display: flex;
  justify-content: center;
  align-items: center;
}
.store-image {
  height: 40vh;
}
.top-block {
  display: grid;
  grid-template-columns: 6fr 4fr;
}
.openhours {
  display: flex;
  justify-content: center;
  align-items: center;
}
.bottom-block {
  display: grid;
  grid-template-columns: 6fr 4fr;
}
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1024px) {
  .top-block {
    display: block;
  }
  .bottom-block {
    display: block;
  }
  .store-image {
    width: 100%;
  }
  .openhours {
    width: 100%;
  }
}
</style>