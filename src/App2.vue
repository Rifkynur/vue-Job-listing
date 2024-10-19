<script>
export default {
  data() {
    return {
      name: "John Doe",
      status: "active",
      tasks: ["task1", "task2", "task3"],
    };
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">USer is Active</p>
  <h3>TASK :</h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>
</template>

<style scoped></style>
