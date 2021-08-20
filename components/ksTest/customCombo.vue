<template>
    <div>
        <b-form-select v-model="first" :options="options"></b-form-select>
    </div>
</template>

<script>
    export default {
        props:['first', 'options', 'store', 'varNm']
    }
</script>

<style>

</style>