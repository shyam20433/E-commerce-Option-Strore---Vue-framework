<script setup>
let timer = null

const emit = defineEmits(['search'])

function debounceSearch(event) {
  const keyword = event.target.value

  clearTimeout(timer)

  timer = setTimeout(() => {
    emit('search', keyword)
  }, 500)
}
</script>

<template>
  <v-text-field
    label="Search Products"
    prepend-inner-icon="mdi-magnify"
    variant="outlined"
    clearable
    hide-details
    @input="debounceSearch"
  />
</template>
