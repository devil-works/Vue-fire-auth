// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import "firebase/auth";

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyC6oO7vrdthtrrBEQYnQAb4TdjJ82Wp-AI",
  authDomain: "vue-fire-auth-9593e.firebaseapp.com",
  projectId: "vue-fire-auth-9593e",
  storageBucket: "vue-fire-auth-9593e.appspot.com",
  messagingSenderId: "917524753494",
  appId: "1:917524753494:web:18303a126e2e2c315d9ff7",
  measurementId: "G-C7L0GY0Q3D"
};
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

