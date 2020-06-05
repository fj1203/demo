<template>
     <div class="transactions">
        <div class="trans-title">
            <span>Transactions</span>
            <Select v-model="model1" style="width:200px;text-align:right">
                <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
        </div>
        <div>
            <div class="trans-item">
                <Icon size="30" color="#ff555e" type="ios-basketball" />
                <span class="trans-text">Drbbble Pro Plan</span>
                <span class="trans-price">-$100</span>
            </div>
            <div class="trans-item">
                <Icon size="30" color="#ff555e" type="ios-basketball" />
                <span class="trans-text">Drbbble Pro Plan</span>
                <span class="trans-price">-$100</span>
            </div>
            <div class="trans-item">
                <Icon size="30" color="#ff555e" type="ios-basketball" />
                <span class="trans-text">Drbbble Pro Plan</span>
                <span class="trans-price">-$100</span>
            </div>
        </div>
        <div class="btn-wrap">
            <Button size="large" class="trans-btn" shape="circle">Transfer Money   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ———></Button>
        </div>
        <div class="message">
            <Icon :size="30" color="#fff" type="ios-text" />
        </div>
    </div>
</template>

<script>

export default {
    name: 'Transactions',
    data () {
        return {
            model1: '',
            cityList: [{
                value: '1',
                label: 'Today'
            }]
        }
    },
    props: {
    }
}
</script>

<style lang="less" scoped>
.trans-title{
    line-height: 40px;
    color: #999999;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
/deep/ .ivu-select-selection{
    border: none;
}
.trans-item{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    .trans-text{
        font-weight: bold;
        font-size: 16px;
    }
    .trans-price{
        font-weight: bold;
        font-size: 14px;
        color:#ff555e
    }
}
.btn-wrap{
    text-align: center;
    padding: 30px;
}
.trans-btn{
    background-color: #ff555e;
    color: #ffffff;
}
/deep/ .ivu-select-visible .ivu-select-selection{
    box-shadow: none;
    text-align: right;
}
.message{
    width: 50px;
    height: 50px;
    background-color: #1488A1;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    float: right;
}
</style>
