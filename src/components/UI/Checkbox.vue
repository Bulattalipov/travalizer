<script>
import InlineSvg from 'vue-inline-svg';

export default {
  components: {
    InlineSvg,
  },
  props: {
    checked: {
      type: Boolean,
      required: true,
    },
    checkerDisabled: {
      type: Boolean,
    },
  },
};
</script>

<template>
  <label class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      @change="$emit('update:checked', $event.target.checked)"
      :checked="checked"
    />
    <div class="checkbox__elem" :class="{ 'checkbox__elem--error': checkerDisabled }">
      <InlineSvg src="../../assets/img/check.svg"></InlineSvg>
    </div>
    <div class="checkbox__text">Remember me</div>
  </label>
</template>

<style scoped lang="scss">
.checkbox {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &__input {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0 0 0 0);
  }

  &__elem {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border: 1px solid #029664;
    border-radius: 3px;

    svg {
      display: none;
      position: absolute;
    }

    &--error {
      border: 2px solid red;
    }
  }

  &__input:checked + .checkbox__elem {
    svg {
      display: block;
    }
  }

  &__text {
    user-select: none;
    color: #355b3e;
  }
}
</style>
