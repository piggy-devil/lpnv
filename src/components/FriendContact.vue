<template>
  <ul>
    <li>
      <h2>{{ state.name }}</h2>
      <button @click="toggleDetails">
        {{ detailsAreVisible ? "Hide" : "Show" }} Details
      </button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone:</strong>{{ state.phone }}</li>
        <li><strong>Email:</strong>{{ state.email }}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    const state = reactive({
      id: "manuel",
      name: "Manual Lorenzo",
      phone: "0891234567",
      email: "manuel@localhost.com",
    });

    const detailsAreVisible = ref(false);

    const toggleDetails = () => {
      detailsAreVisible.value = !detailsAreVisible.value;
    };

    return { state, detailsAreVisible, toggleDetails };
  },
};
</script>

<style></style>
