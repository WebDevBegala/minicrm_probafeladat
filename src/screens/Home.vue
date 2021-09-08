<template>
  <div class="root">
    <comments :comments="comments" />
    <store-detail :storeDetail="store" />
  </div>
</template>

<script>
import Comments from "../components/Comments.vue";
import Store from "../components/Store.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    "storeDetail": Store,
    "comments": Comments,
  },
  computed:{
    ...mapState(['store','comments'])
  },
};
</script>
<style scoped>
.root {
  display: grid;
  grid-template-columns: 3fr 7fr;
  height: 90vh;
  width: 95vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
@media screen and (max-width: 1024px) {
  .root {
    display: flex;
    flex-direction: column-reverse;
    overflow-x: hidden;
  }
}
</style>
