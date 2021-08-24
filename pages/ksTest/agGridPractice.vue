<template>
    <div>
        <b-container>
            <ksTestAg-grid-practice></ksTestAg-grid-practice>
        </b-container>
        <br>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    export default {
        layout: 'defaultLayout',
        computed:{
            ...mapState('ksTest/agGridTestStore', ['knowList', 'selKnow'])
        }
    }
</script>

<style scoped>

</style>