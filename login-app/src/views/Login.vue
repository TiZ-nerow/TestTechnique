<template>
    <div>
        <h1>Login</h1>
        <form @submit.prevent="login">
            <div class="formGroup">
                <label for="user_login">Login</label>
                <input type="text" id="user_login" v-model="user.login">
            </div>
            <div class="formGroup">
                <label for="user_password">password</label>
                <input type="password" id="user_password" v-model="user.password">
            </div>
            <button type="submit">Connexion</button>
        </form>
    </div>
</template>

<script>
var credentials
fetch('https://randomuser.me/api/')
    .then(blob => blob.json())
    .then(data => {
        credentials = {
            login: data.results[0].login.username,
            password: data.results[0].login.password
        }
        console.log(credentials)
    })
    .catch(err => console.log(err))
export default {
    name: 'Login',
    data(){
        return {
            user: {
                login: '',
                password: ''
            }
        }
    },
    methods: {
        login(){
            if (this.user.login === credentials.login
                && this.user.password === credentials.password) {
                localStorage.setItem('token', true)
                this.$router.push('/')
            }
        }
    }
}
</script>
