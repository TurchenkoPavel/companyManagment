<template>
    <div>{{user}}</div>
    <div>{{someData}}</div>
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
        let someData = ref();
        axios.get("https://finalspaceapi.com/api/v0/character/?limit=2").then(({data}) => {
            someData.value = data;
        })
        return {
            user,
            someData
        }
    }
}
</script>
