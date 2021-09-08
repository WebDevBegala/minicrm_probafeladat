<template>
  <div class="comment-root">
    <div class="comment">
      <div class="detail">
        <div class="name_date">
          <p class="name">{{ comment.author }}</p>
          <p class="date">{{ comment.date }}</p>
        </div>
        <div class="rating-container">
          <star-rating
            :rating="comment.rating"
            :read-only="true"
            :rounded-corners="true"
            :star-size="20"
            :show-rating="false"
          />
        </div>
      </div>
      <span class="description">
        <p>
          {{ comment.description }}
        </p>
      </span>
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
export default {
  name: "Comment",
  props: {
    comment: Object,
  },
  components: {
    "star-rating": StarRating,
  },
};
</script>
<style scoped>
.comment-root {
  margin: 20px 15px 20px 15px;
}
.detail {
  display: flex;
  align-items: center;
  justify-items: center;
  margin: 15px 20px;
}
.name_date {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.rating-container {
  height: 16px;
}
.name {
  margin: 0 50px 5px 20px;
}
.date {
  margin: 0;
  font-size: 14px;
}
@media screen and (max-width: 1024px) {
  .name {
    margin: 0 30px 5px 20px;
    width: max-content;
  }
}
</style>