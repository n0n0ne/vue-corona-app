<template>
  <h2 class="content-title">{{ content.label }}</h2>
  <component :is="targetComponent"></component>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "MainContent",
  props: {
    content: {
      type: Object,
      default() {
        return {
          label: "TEST Menu",
          path: "test",
          index: "testMenu",
        };
      },
    },
  },
  data() {
    return {
      targetComponent: null,
    };
  },
  watch: {
    content: {
      deep: true,
      handler: function (newValue) {
        this.targetComponent = defineAsyncComponent(() =>
          import(`@/components/${newValue.path}/${newValue.index}`)
        );
      },
    },
  },
};
</script>

<style></style>
