<template>
    <section class="back-item">
        <span class="card">{{card}}</span>
        <span class="line"></span>
        <span class="banlance">{{banlance}}</span>
    </section>
</template>

<script>

export default {
    name: 'BankItem',
    data () {
        return {
            value: ''
        }
    },
    props: {
        card: {
            type: String,
            default: ''
        },
        banlance: {
            type: String,
            default: ''
        }
    },
    created () {
    },
    methods: {
    }
}
</script>

<style lang="less" scoped>
.back-item{
    display: flex;
    height: 35px;
    align-items: center;
    .card{
        font-size: 14px;
        color: #999;
    }
    .line{
        display: block;
        height: 20px;
        flex:1;
        border-bottom: 1px dashed #eee;
        margin: 0 20px;
    }
    .banlance{
        color: #000000;
        font-size: 14px;
        font-weight: bold;
    }
}
</style>
