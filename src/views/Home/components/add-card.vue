<template>
    <section class="add-card">
        <div @click="clickHandle" class="content">
            <Icon size="24" type="ios-add-circle-outline" />
            <div class="new-text">Add New Card</div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'AddCard',
    data () {
        return {
        }
    },
    methods: {
        clickHandle () {
            this.$emit('add')
        }
    }
}
</script>

<style lang="less" scoped>
.add-card{
    margin: 10px;
    display: flex;
    width: 30%;
    max-width: 280px;
    height: 150px;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #F9F9F9;
    border-radius: 20px;
    .new-text{
        font-size: 14px;
        line-height: 30px;
        color: #B0B0B2;
    }
}
</style>
