import { createStore } from 'vuex';

export default createStore({
  state: {
    courses: [
      { id: 1, title: 'Curso de Vue.js', description: 'Aprende Vue.js desde cero.' },
      { id: 2, title: 'Curso de JavaScript', description: 'Domina JavaScript moderno.' },
      { id: 3, title: 'Curso de CSS', description: 'Diseño profesional con CSS.' },
    ],
  },
  mutations: {
    addCourse(state, course) {
      state.courses.push(course);
    },
  },
  actions: {},
  getters: {
    getCourses: (state) => state.courses,
  },
});