<template>
    <div class="container mt-4">
      <h1>Home</h1>
      <div class="row">
        <div class="col-md-4" v-for="course in courses" :key="course.id">
          <CourseCard :course="course" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters } from 'vuex';
  import CourseCard from '../components/CourseCard.vue';
  
  export default {
    components: { CourseCard },
    computed: {
      ...mapGetters(['getCourses']),
      courses() {
        return this.getCourses;
      },
    },
  };
  </script>