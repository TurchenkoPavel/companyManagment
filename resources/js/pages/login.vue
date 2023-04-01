<template>
    <div>login</div>
</template>

<script>
  import { ref, computed } from 'vue'
  import { useStore } from 'vuex'
  import axios from 'axios'


export default {
    setup() {
        const store = useStore()
        store.dispatch("user/fetchUser")
        const user = computed(() => store.getters["user/getUser"]);
        return {
            user,
        }
    }
}
</script>
