<script>
export default {
  data() {
    return {
      rokets: null,
    };
  },
  methods: {
    async getHistory() {
      const data = await fetch('https://api.spacexdata.com/v3/rockets');
      const dataArray = await data.json();
      this.rokets = dataArray;
      console.log(dataArray);
    },
  },
  mounted() {
    this.getHistory();
  },
};
</script>

<template>
  <div class="rokets" style="background-image: url('../assets/img/roket.jpg')">
    <div class="container">
      <div class="rokets__wrapper">
        <h1 class="rokets__title">Ракеты Space X</h1>
      </div>
      <ul class="rokets__list">
        <li v-for="item of rokets" :key="item.id" class="rokets__list-item">
          <router-link
            class="rokets__list-item-link"
            :to="{ name: 'roketsItem', params: { slug: item.rocket_id } }"
          >
            <img class="rokets__list-item-img" :src="item.flickr_images[0]" alt="" />
            <div class="rokets__list-item-title">{{ item.rocket_name }}</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped lang="scss">
.rokets {
  min-height: 100vh;
  padding: 50px 0;
  color: #fff;
  background-position: bottom left;

  &__title {
    font-size: 50px;
    margin-top: 10px;
    margin-bottom: 50px;
    line-height: 150%;

    @media (max-width: 1199px) {
      font-size: 70px;
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;

    @media (max-width: 1199px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767px) {
      gap: 30px;
    }

    @media (max-width: 575px) {
      grid-template-columns: repeat(1, 1fr);
      gap: 50px;
    }
  }

  &__list-item {
    width: 100%;
  }

  &__list-item-img {
    object-fit: cover;
    height: 300px;
    width: 100%;
    border-radius: 15px;
  }

  &__list-item-link {
    display: block;
    transition: transform 0.3s;

    &:hover {
      transform: translateY(-10px);
    }
  }

  &__list-item-title {
    font-size: 35px;
    margin-top: 15px;
    color: #fff;
  }
}
</style>
