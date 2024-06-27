<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  methods: {
    showPassword(e) {
      if (e.target.nextSibling.type === 'password') {
        e.target.nextSibling.type = 'text';
      } else {
        e.target.nextSibling.type = 'password';
      }
    },
  },
};
</script>

<template>
  <div class="input">
    <div class="input__title">{{ title }}</div>
    <img
      v-if="type === 'password'"
      class="input__icon"
      src="/assets/img/eye-close.svg"
      alt=""
      @click="showPassword"
    />
    <input
      class="input__elem"
      :type="type"
      :placeholder="placeholder"
      :autocomplete="type === 'password' ? 'current-password' : ''"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped lang="scss">
.input {
  position: relative;
  margin-bottom: 24px;

  &__title {
    font-weight: 600;
    color: #2f3d4c;
    margin-bottom: 8px;
  }

  &__elem {
    width: 100%;
    border: 1px solid #b8d6bf;
    border-radius: 8px;
    padding: 16px;
    line-height: 150%;
    color: #355b3e;
  }

  &__icon {
    position: absolute;
    right: 18px;
    bottom: 18px;
    cursor: pointer;

    & + .input__elem {
      padding-right: 50px !important;
    }
  }
}
</style>
