<template>
  <new-comment
    :isOpen="modalIsOpen"
    @close="modalIsOpen = false"
    @createNewRating="onCreateNewRating($event)"
  />

  <div class="comments-root" v-bind:class="getAccordionClass()">
    <div>
      <div class="open-close" @click="toggleIsOpen()">Vélemények</div>
      <div class="add-rating" @click="modalOpen()">
        <p>Új vélemény</p>
        <font-awesome-icon icon="plus-circle" />
      </div>
    </div>
    <hr />
    <div class="comments">
      <span v-for="(comment,index) in comments" :key="index">
        <comment :comment="comment" />
        <hr class="hr-line" />
      </span>
    </div>
  </div>
</template>
<script>
import accordionMixin from "../mixins/accordion-mixin";
import mobileMixin from "../mixins/mobile-mixin";
import Comment from "./Comment.vue";
import NewComment from "./NewComment.vue";

export default {
  name: "Comments",
  mixins: [mobileMixin, accordionMixin],
  props: {
    comments: Array,
  },
  components: {
    "comment": Comment,
    "new-comment": NewComment,
  },
  created() {
    this.onResize();
  },
  data() {
    return {
      modalIsOpen: false,
    };
  },
  methods: {
    modalOpen() {
      this.modalIsOpen = true;
    },
    onCreateNewRating(event) {
      this.$emit("createNewRating", event);
    },
  },
};
</script>
<style scoped>
.comments-root {
  background-color: white;
  position: relative;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 16px;
  background: #f0f0f0;
  box-shadow: 21px -21px 43px #c5c5c5, -21px 21px 43px #ffffff;
  overflow-y: scroll;
  padding: 10px;
}
.open {
  height: 90vh;
  transition: ease-in 0.3s;
}
.close {
  height: 4vh;
  overflow-y: hidden;
  transition: ease-out 0.3s;
}
.hr-line {
  margin: 0 10% 0 10%;
}
.add-rating {
  display: flex;
  align-items: center;
  cursor: pointer;
  color: rgb(95, 162, 224);
  width: fit-content;
  height: 30px;
  margin: 10px 0 15px 20px;
}
.add-rating:hover {
  opacity: 0.7;
}
.add-rating > p {
  margin-right: 10px;
}
@media screen and (max-width: 1024px) {
  .comments-root {
    border-radius: 16px 16px 0 0;
    box-shadow: 0;
  }
}
</style>