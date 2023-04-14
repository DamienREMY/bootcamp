<template>
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card v-for="language in dataJson" :key="language.id" class="my-card">
      <img
        :src="language.text"
        :alt="language.label"
        style="width: 100px; height: 100px"
      />
      <q-card-section>
        <div class="text-h6">{{ language.label }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import json from "../assets/data.json";

export default defineComponent({
  name: "CardBoxes.vue",
  setup() {
    return {
      lorem:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    };
  },
  data() {
    return {
      dataJson: json.techno,
    };
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
