<template>
    <div>
        <label>E-mail: <input type="email" class="border-2 border-black"></label>
    </div>
    <div>
        <label>Password: <input type="password" class="border-2 border-black	"></label>
    </div>
    <div>
        <label>Password confirmation: <input type="password" class="border-2 border-black	"></label>
    </div>
    <button @click="register">Register</button>
</template>

<script>
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'
  import axios from 'axios'


export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const passwordConfirmation = ref('');

        const store = useStore()
        store.dispatch("user/fetchUser")
        const user = computed(() => store.getters["user/getUser"]);

        const register = () => store.dispatch('auth/register', {
            email: email.value,
            password: passwordConfirmation.value,
            passwordConfirmation: passwordConfirmation.value,
        })
        return {
            email,
            password,
            passwordConfirmation,
            register
        }
    }
}
</script>
