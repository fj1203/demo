<template>
    <section :style="{'backgroundColor' : data.color}" class="back-card">
        <div class="card-title">Avaliable banlance</div>
        <div class="balance">$ {{showBanlance}}</div>
        <div class="carId">{{data.cardNum | manglingFormatCardNumber}}</div>
        <div class="contact">
            <span>{{data.name}}</span>
            <i-switch true-color="#E50819" false-color="#FFC652" v-model="value"/>
        </div>
    </section>
</template>

<script>
import { numberFormat } from '@/libs/tools'

export default {
    name: 'BankCard',
    data () {
        return {
            value: false
        }
    },
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    computed: {
        showBanlance () {
            return this.value ? numberFormat(this.data.banlance) : '******'
        }
    },
    created () {
    }
}
</script>

<style lang="less" scoped>
.back-card{
    margin: 10px;
    width: 30%;
    max-width: 280px;
    height: 150px;
    border-radius: 20px;
    padding: 10px 20px;
    color: #ffffff;
    .card-title{
        font-size: 12px;
        scale: (0.8);
        color: rgba(0, 0, 0, .3);
    }
    .balance{
        font-size: 14px;
    }
    .carId{
        color: rgba(0, 0, 0, .3);
        font-size: 16px;
        padding: 15px 0;
    }
    .contact{
        display: flex;
        justify-content: space-between;
        font-size: 16px;
    }
}
</style>
