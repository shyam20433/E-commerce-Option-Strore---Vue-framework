<script setup>
defineProps({
  prod: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <v-card elevation="4" class="product-card">

    <v-img
      :src="prod.image"
      :alt="prod.name"
      height="200"
      cover
    ></v-img>

    <v-card-title>
      {{ prod.name }}
    </v-card-title>

    <v-card-text>
      <p>
        <strong>ID:</strong>
        {{ prod.id }}
      </p>

      <p>
        <strong>Price:</strong>
        ₹{{ prod.price }}
      </p>
    </v-card-text>

    <!-- Parent UI renders here -->
    <slot></slot>

  </v-card>
</template>

<style scoped>
.product-card {
  width: 100%;
  height: 100%;
}
</style>
