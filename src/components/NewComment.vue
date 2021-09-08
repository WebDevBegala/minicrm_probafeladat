<template>
  <div class="overlay-root" v-if="isOpen">
    <div class="modal">
      <div class="form-container">
        <div class="top-block">
          <span>
            <label for="">Név:</label>
            <input type="text" class="name input" v-model="name" />
          </span>
          <span class="rating-container">
            <label for="">Értékeld az üzletet</label>
            <star-rating
              :rounded-corners="true"
              :star-size="25"
              :show-rating="false"
              v-model:rating="rating"
            />
          </span>
        </div>
        <div class="bottom-block">
          <div class="message">
            <p class="error-message" v-if="error">
              Sajnos hiba történt, próbáld újra később!
            </p>
            <p class="success-message" v-if="success">Sikeres értékelés</p>
            <textarea
              class="input"
              cols="40"
              rows="10"
              v-model="message"
            ></textarea>
          </div>
        </div>
        <div class="buttons">
          <div class="button cancel" @click="closeModal()">Mégse</div>
          <div class="button submit" @click="submit()">Mentés</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import StarRating from "vue-star-rating";
import { mapActions } from "vuex";
export default {
  name: "NewComment",
  components: {
    "star-rating": StarRating,
  },
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      name: "",
      rating: 0,
      message: "",
      error: false,
      success: false,
    };
  },
  methods: {
    ...mapActions(["createComment", "fetchComments"]),
    closeModal() {
      this.error = false;
      this.success = false;
      this.$emit("close");
    },
    submit() {
      const newRatingData = {
        author: this.name,
        description: this.message,
        rating: this.rating,
      };
      this.createComment({ ...newRatingData })
        .then(() => {
          this.success = true;
          this.fetchComments();
          this.resetThisData();
        })
        .catch(() => {
          this.error = true;
        });
    },
    setRating(rating) {
      this.rating = rating;
    },
    resetThisData() {
      this.name = "";
      this.rating = 0;
      this.message = "";
    },
  },
};
</script>
<style scoped>
.overlay-root {
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.233);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal {
  height: 60vh;
  width: 60vw;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
}
.form-container {
  display: grid;
  grid-template-rows: 3fr 5fr 2fr;
  height: 100%;
}
.top-block {
  display: flex;
  align-items: baseline;
  justify-content: space-around;
  margin-top: 30px;
}
.input {
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
}
.name {
  height: 15px;
  margin-left: 20px;
}
.rating-container {
  display: flex;
  align-items: stretch;
}
.rating-container > label {
  margin-right: 20px;
}
.buttons {
  display: flex;
  justify-content: center;
}
.button {
  margin: 30px;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
}
.cancel {
  border: 1px solid orangered;
  color: orangered;
}
.submit {
  background-color: green;
  color: white;
}
.error-message {
  color: red;
}
.success-message {
  color: green;
}
@media screen and (max-width: 1024px) {
  .overlay-root {
    background-color: transparent;
    z-index: 9999;
  }
  .modal {
    height: 90vh;
    width: 90vw;
    z-index: 9999;
  }
  .top-block {
    flex-direction: column;
  }
  .top-block > span {
    margin-left: 30px;
  }
  textarea {
    width: 70%;
  }
  .buttons {
    flex-direction: column-reverse;
  }
  .submit {
    margin-bottom: 5px;
  }
}
</style>