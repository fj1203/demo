<template>
    <section class="my-card">
        <div class="header">
            <span class="title">{{title}}</span>
            <span class="gray">{{subTitle}}</span>
        </div>
        <slot></slot>
    </section>
</template>

<script>

export default {
    name: 'MyCard',
    data () {
        return {
        }
    },
    props: {
        title: {
            type: String,
            default: 'Cards'
        },
        subTitle: {
            type: String,
            default: 'View all cards'
        }
    }
}
</script>

<style lang="less" scoped>
.my-card{
    margin-bottom: 20px;
}
.header{
    display: flex;
    justify-content: space-between;
    height: 50px;
    line-height: 50px;
    padding-bottom: 10px;
    .title{
        font-size: 16px;
        color: #000;
        font-weight: bold;
    }
    .gray{
        font-size: 12px;
        color: #999;
    }
}
</style>
