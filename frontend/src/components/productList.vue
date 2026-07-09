<script setup>
import productCard from '@/components/productCard.vue'

defineProps({
  products: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <v-row>
    <v-col
      v-for="prod in products"
      :key="prod.id"
      cols="12"
      sm="6"
      md="4"
      lg="3"
    >
      <productCard :prod="prod">

        <slot
          name="actions"
          :prod="prod"
        />

      </productCard>
    </v-col>
  </v-row>
</template>
