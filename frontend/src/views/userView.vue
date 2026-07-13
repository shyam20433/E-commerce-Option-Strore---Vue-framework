<script setup>
import { ref, onMounted } from 'vue'
import apicall from '@/services/server'
import { useToast } from 'vue-toastification'
const toast = useToast()
const users = ref([])
const deleteDialog = ref(false)
const selectedUserId = ref(null)

function deleteModal(id) {
  selectedUserId.value = id
  deleteDialog.value = true

}

async function confirmDelete() {
  try {
    await apicall.deleteUser(selectedUserId.value)
    toast.success('User deleted successfully!')
    selectedUserId.value = null
    deleteDialog.value = false

  } catch (error) {
    toast.error(error.response.data.message || 'Failed to delete user!')
  }
}
async function fetch() {
  users.value = await apicall.getusers()
}

onMounted(async () => {
  fetch()
})

</script>

<template>
  <v-container>
    <h1>All Users</h1>

    <v-table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Role</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.role }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.address }}</td>
          <td>
            <button @click="deleteModal(user.id)">Delete</button>
          </td>

          <v-dialog v-model="deleteDialog" max-width="450">
            <v-card rounded="xl">
              <v-card-title>Delete User</v-card-title>
              <v-card-text>Are you sure you want to remove this user?</v-card-text>
              <v-card-actions class="justify-center">
                <v-btn color="primary" variant="flat" @click="deleteDialog = false">No</v-btn>
                <v-btn color="secondary" variant="flat" @click="confirmDelete">Yes</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>
