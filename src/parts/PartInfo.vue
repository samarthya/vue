<template>
  <div>
    <h1> {{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>
<script>
import getPartsMixins from './get-parts-mixins';

export default {
  name: 'PartInfo',
  mixins: [getPartsMixins],
  props: {
    partType: {
      type: String,
      required: true,
    },
    id: {
      type: [Number, String],
      required: true,
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      // const partType = this.$router.partType;
      // const partID = this.$router.id;
      const { partType, id } = this;
      return this.parts[partType].find(part => part.id === +id);
    },
  },
};
</script>
<style>

</style>

