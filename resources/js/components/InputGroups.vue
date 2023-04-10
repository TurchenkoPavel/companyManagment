<template>
    <input 
        :value="props.modelValue"
        v-on:input="updateValue($event.target.value)"
        :type="type"
        :name="name"
        class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-400 sm:text-sm sm:leading-6"
    >
</template>

<script setup>
    const props = defineProps({
        type: {
            type: String,
            required: false,
            default: 'text'
        },
        name: {
            type: String,
            required: false,
            default: 'input'
        },
        modelValue: {
            type: [String, Number],
            required: true,
        },
    })

    const emit = defineEmits(['update:modelValue'])

    function updateValue(value) {
        emit('update:modelValue', value)
    }
</script>