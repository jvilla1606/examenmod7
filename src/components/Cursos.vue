<template>
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{ course.title }}</h5>
        <p class="card-text">{{ course.description }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      course: Object,
    },
  };
  </script>