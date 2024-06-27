<script>
export default {
  props: {
    light: {
      type: Boolean,
    },
  },
};
</script>

<template>
  <button class="btn" :class="{ 'btn--light': light }"><slot></slot></button>
</template>

<style scoped lang="scss">
.btn {
  background: #029664;
  border: none;
  border-radius: 8px;
  padding: 16px;
  font-weight: 600;
  line-height: 100%;
  text-align: center;
  color: #fff;
  cursor: pointer;
  width: 100%;

  &--light {
    border: 1px solid #029664;
    background-color: #fff;
    color: #029664;
  }
}
</style>
