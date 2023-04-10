<template>
    <button 
        :type="type" 
        class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm 
        hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 
        focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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