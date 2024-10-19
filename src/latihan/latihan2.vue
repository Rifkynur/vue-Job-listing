<script setup>
import { ref, onMounted } from "vue";

const name = "John Doe";
const status = ref("active");
const tasks = ref(["task1", "task2", "task3"]);
const newTask = ref("");

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};
const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (index) => {
  tasks.value.splice(index, 1);
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    tasks.value = data.map((item) => item.title);
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <div class="container">
    <h1>{{ name }}</h1>
    <p v-if="status === 'active'">USer is Active</p>
    <p v-else-if="status === 'pending'">USer is Pending</p>
    <p v-else>USer is Inactive</p>
    <form @submit.prevent="addTask">
      <label for="newTask">Add Task</label>
      <input type="text" name="newTask" id="newTask" placeholder="masukan task baru" v-model="newTask" />
      <button type="submit">Submit</button>
    </form>
    <h3>TASK :</h3>
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <span>{{ task }}</span>
        <button @click="deleteTask(index)">x</button>
      </li>
    </ul>
    <button @click="toggleStatus">change status</button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>
