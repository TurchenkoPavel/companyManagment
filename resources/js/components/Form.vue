<template>
    <form class="border border-gray-900/10 rounded-md px-10 py-8 shadow-md">
        <h2 class="text-base font-semibold leading-7 text-gray-800 mb-10">{{ props.title }}</h2>
        <slot name="forms"></slot>
        <slot name="buttons"></slot>
    </form>    
</template>

<script setup>
    const props = defineProps({
        title: {
            type: String,
            required: false
        },
    })
</script>