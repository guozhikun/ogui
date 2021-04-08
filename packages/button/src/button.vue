<template>
  <button class="og-button"
          @click="handleClick"
          :class="[type ? 'og-button--'+type :'',buttonSize? 'og-button--'+size:'',
          {
          'is-circle': circle
          }]">
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "OgButton",
  props: {
    type: {
      tepe: "String",
      default: "default"
    },
    size: String,
    circle: Boolean
  },
  computed: {
    buttonSize () {
      return this.size
    }
  },
  methods: {
    handleClick (evt) {
      this.$emit('click', evt)
    }
  }
}
</script>