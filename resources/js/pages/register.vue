<template>
    <div class="w-1/4 mx-auto grid content-center min-h-screen ">
        <Form title="Registration">
            <template v-slot:forms>
                <div class="mb-3">
                    <Label for="name" text="Name" />
                    <InputGroups 
                        v-model="name"
                        type="name"
                        name="name" />
                </div>
                <div class="mb-3">
                    <Label for="email" text="E-mail" />
                    <InputGroups 
                        v-model="email"
                        type="email"
                        name="email" />
                </div>
                <div class="mb-3">
                    <Label for="password" text="Password" />
                    <InputGroups 
                        v-model="password"
                        type="password"
                        name="password" />
                </div>
            </template>
            <template v-slot:buttons>
                <div class="flex justify-end mt-5">
                    <CommonButton class="mr-5" text="Cancel" @click="cancel" />
                    <PrimaryButton text="Register" @click="register" />
                </div>
            </template>   
        </Form>
    </div>
   
</template>

<script setup>
    import { ref, computed } from 'vue'
    import { useRouter, useRoute } from 'vue-router'
    import { useStore } from 'vuex'
    import InputGroups from '@/components/InputGroups.vue'
    import Label from '@/components/Label.vue'
    import Form from '@/components/Form.vue'
    import PrimaryButton from '@/components/Buttons/PrimaryButton.vue'
    import CommonButton from '@/components/Buttons/CommonButton.vue'

    const name = ref('');
    const email = ref('');
    const password = ref('');
    const router = useRouter()
    const route = useRoute()

    const store = useStore()
    store.dispatch("user/fetchUser")
    const user = computed(() => store.getters["user/getUser"]);

    const register = () => (
        axios.post('/register', {
            name: name.value,
            email: email.value,
            password: password.value,
        }).then(({data}) => {
            store.commit('auth/setUserToken', data)
            router.push({ name: 'dashboard.index' })
        })
    )

    const cancel = () => (
        router.push({ name: 'index' })
    )
</script>
