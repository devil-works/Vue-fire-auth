<template>
  <div class="signin">
    <h2>Sign in</h2>
    <input type="text" placeholder="Username" v-model="username" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signIn">Sign in</button>
    <p>
      You are not a member?
      <router-link to="/signup">Sign up</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Signin",
  data: function () {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    signIn: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(
          (user) => {
            this.$router.push("/");
          },
          (err) => {
            alert(err.message);
          }
        );
    },
  },
};
</script>