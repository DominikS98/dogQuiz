<template>
  <div>
    <p v-for="breed of breeds" :key="breed.id">
      {{ breed.name }} -{{ breed.breed_group }}
    </p>
  </div>
</template>

<script lang="ts">
import Dog from "@/assets/interface";
import axios from "axios";

export default {
  data() {
    return {
      breeds: [] as Dog[],
    };
  },
  methods: {},
  mounted() {
    axios
      .get("https://api.thedogapi.com/v1/breeds", {
        headers: {
          "X-API-KEY": "b0a7328e-6b71-4693-a05d-b24a612d40e9",
        },
      })
      .then((response) => (this.breeds = response.data));
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
