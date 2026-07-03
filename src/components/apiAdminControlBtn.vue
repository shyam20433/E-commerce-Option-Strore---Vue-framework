<script setup>
const emit = defineEmits(["edit", "delete"]);
</script>

<template>
  <div class="api-actions">
    <button class="edit-btn" @click="emit('edit')">
      Edit
    </button>

    <button class="delete-btn" @click="emit('delete')">
      Delete
    </button>
  </div>
</template>

<style scoped>
.api-actions {
  display: flex;
  gap: 12px;
  margin-top: 15px;
}

.api-actions button {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: .25s;
}

.edit-btn {
  background: #2563eb;
}

.edit-btn:hover {
  background: #1d4ed8;
}

.delete-btn {
  background: #dc2626;
}

.delete-btn:hover {
  background: #b91c1c;
}
</style>
