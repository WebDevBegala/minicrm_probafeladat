<template>
  <div class="detail-root">
    <div class="title">
      <p>{{ storeDetail.title }}</p>
      <star-rating
        class="star-rating"
        :increment="0.5"
        :rating="storeDetail.avgRating"
        :read-only="true"
        :rounded-corners="true"
        :star-size="20"
      />
    </div>
    <div class="description">
      {{ storeDetail.description }}
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
export default {
  name: "Detail",
  props: {
    storeDetail: Object,
  },
  components: {
    "star-rating": StarRating,
  },
};
</script>
<style scoped>
.title {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title > p {
  margin-right: 20px;
}
</style>