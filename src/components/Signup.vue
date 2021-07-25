<template>
  <div class="signup">
    <table>
      <tr>
        <th>メールアドレス：</th>
      </tr>
      <tr>
        <td><input type="email" v-model="email" /></td>
      </tr>
      <tr>
        <th>パスワード：</th>
      </tr>
      <tr>
        <td><input type="password" v-model="password" /></td>
      </tr>
    </table>
    <button @click="signUp">登録</button>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data: function () {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signUp: function () {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(alert("foooo"))
        .catch();
    },
  },
};
</script>