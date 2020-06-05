<template>
    <div class="diagram-item">
        <span>{{text}}</span>
        <span class="banlance">$ {{banlance | numberFormat}}</span>
    </div>
</template>

<script>

export default {
    name: 'DiagramItem',
    data () {
        return {
            value: false
        }
    },
    props: {
        text: {
            type: String,
            required: true
        },
        banlance: {
            type: Number,
            required: true
        }
    },
    created () {
    }
}
</script>

<style lang="less" scoped>
.diagram-item{
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 14px;
    line-height: 30px;
    .banlance{
        font-weight: bold;
    }
}
</style>
