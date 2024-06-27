<script>
export default {
  data() {
    return {
      roket: null,
    };
  },
  methods: {
    async getHistory() {
      const data = await fetch(`https://api.spacexdata.com/v3/rockets/${this.$route.params.slug}`);
      const dataArray = await data.json();
      this.roket = dataArray;
      console.log(this.roket);
    },
  },
  mounted() {
    this.getHistory();
  },
};
</script>

<template>
  <div v-if="roket" class="roket" style="background-image: url('../assets/img/roket.jpg')">
    <div class="container">
      <div class="roket__wrapper">
        <h1 class="roket__title">
          {{ roket.rocket_name }}
        </h1>
        <div class="roket__img-wrapper">
          <img class="roket__img" :src="roket.flickr_images[0]" alt="" />
        </div>
        <div class="roket__desc">{{ roket.description }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.roket {
  min-height: 100vh;
  background-position: bottom left;
  padding-top: 30px;
  color: #fff;

  &__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  &__title {
    line-height: 110%;
    margin-bottom: 30px;
  }

  &__img-wrapper {
    position: relative;
    width: 70%;
    padding-bottom: 36%;
    margin-bottom: 20px;
    border-radius: 20px;
    overflow: hidden;

    @media (max-width: 991px) {
      width: 100%;
      padding-bottom: 56%;
    }
  }

  &__img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  &__desc {
  }
}
</style>
