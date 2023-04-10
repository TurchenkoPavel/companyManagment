<template>
    <button 
        :type="type"
        class="px-3 py-2 text-sm font-semibold leading-6 text-gray-900 hover:ring-1 rounded hover:ring-gray-400"
    >
        {{ text }}
    </button>
</template>

<script setup>
    const props = defineProps({
        type: {
            type: String,
            required: false,
            default: 'button'
        },
        text: {
            type: String,
            required: false,
            default: 'Button'
        },
    })
</script>