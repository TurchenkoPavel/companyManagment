<template>
    <label :for="props.for" class="block text-sm font-medium leading-6 text-gray-900">{{ text }}:</label> 
</template>

<script setup>
    const props = defineProps({
        for: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: false,
            default: 'Label'
        },
    })
</script>