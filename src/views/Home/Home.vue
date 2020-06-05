<template>
  <Card class="home-card">
    <Row :gutter="40" class="left-col">
      <Col span="16">
        <HomeHeader />
        <MyCard>
          <div class="my-card-content">
            <BankCard :data="item" v-for="(item, index) in bankList" :key="index"></BankCard>
            <AddCard @add="addBank"></AddCard>
          </div>
        </MyCard>
        <Row :gutter="40">
          <Col span="8">
            <MyCard title="Main Services" subTitle="View all">
              <Row class="main-row" :gutter="16">
                <Col span="12">
                  <Card class="icon-card">
                    <div>
                      <Icon size="35" color="#ff555e" type="ios-git-compare" />
                      <div class="icon-text">Transactions</div>
                    </div>
                  </Card>
                </Col>
                <Col span="12">
                  <Card class="icon-card">
                    <div>
                      <Icon size="35" color="#ff555e" type="ios-sunny-outline" />
                      <div class="icon-text">Utillty</div>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row class="main-row" :gutter="16">
                <Col span="12">
                  <Card class="icon-card">
                    <div>
                      <Icon size="35" color="#ff555e" type="ios-medal-outline" />
                      <div class="icon-text">Loans</div>
                    </div>
                  </Card>
                </Col>
                <Col span="12">
                  <Card class="icon-card">
                    <div>
                      <Icon size="35" color="#ff555e" type="ios-folder-outline" />
                      <div class="icon-text">Deposits</div>
                    </div>
                  </Card>
                </Col>
              </Row>
              <Row class="main-row" :gutter="16">
                <Col span="12">
                  <Card class="icon-card">
                    <div>
                      <Icon size="35" color="#ff555e" type="ios-clock-outline" />
                      <div class="icon-text">Fast transfer</div>
                    </div>
                  </Card>
                </Col>
                <Col span="12">
                  <Card class="icon-card">
                    <div>
                      <Icon size="35" color="#ff555e" type="ios-shuffle" />
                      <div class="icon-text">Exchange</div>
                    </div>
                  </Card>
                </Col>
              </Row>
            </MyCard>
          </Col>
          <Col span="16">
            <MyCard title="Current" subTitle="View all">
              <BankItem card="3213141131" banlance="$23123"></BankItem>
              <BankItem card="3213141131" banlance="$23123"></BankItem>
              <BankItem card="3213141131" banlance="$23123"></BankItem>
            </MyCard>
            <MyCard title="Savings" subTitle="View all">
              <Row>
                <Col span="16">
                  <LineDiagram :xAxisData="xAxisData" :data1="data" />
                </Col>
                <Col span="8">
                  <DiagramItem v-for="(item,index) in priceArr" :key="index" :text="item.text" :banlance="item.banlance">
                  </DiagramItem>
                </Col>
              </Row>

            </MyCard>
          </Col>
        </Row>
      </Col>
      <Col span="8" class="right-col">
        <Card class="right-card">
          <div class="header">
            <div class="news">
              <Icon size="30" type="ios-notifications-outline" />
            </div>
            <div class="flex">
              <span class="name">Anastaia</span>
              <img class="header-img" src="../../assets/header-img.jpg" alt />
            </div>
          </div>
          <PieDiagram />
          <Transactions />
        </Card>
      </Col>
    </Row>
  </Card>
</template>

<script>
import MyCard from './components/my-card'
import BankCard from './components/bank-card'
import AddCard from './components/add-card'
import BankItem from './components/bank-item'
import LineDiagram from './components/line-diagram'
import Transactions from './components/transactions'
import HomeHeader from './components/home-header'
import PieDiagram from './components/pie-diagram'
import DiagramItem from './components/diagram-item'
export default {
    name: 'home',
    data () {
        return {
            data: [12, 35, 20, 47, 60],
            xAxisData: ['$10', '$20', '$30', '$40', '$50'],
            bankList: [
                {
                    banlance: 3213334,
                    name: 'Monzo',
                    cardNum: '526162218882006044895',
                    color: '#ff555e'
                },
                {
                    banlance: 3213334,
                    name: 'Monzo',
                    cardNum: '526162218882006044895',
                    color: '#1289A1'
                }
            ],
            priceArr: [{
                text: 'ToTal',
                banlance: 423424
            }, {
                text: 'This week',
                banlance: 423424
            }, {
                text: 'This month',
                banlance: 423424
            }]
        }
    },
    components: {
        MyCard,
        BankCard,
        AddCard,
        BankItem,
        LineDiagram,
        Transactions,
        HomeHeader,
        PieDiagram,
        DiagramItem
    },
    created () {},
    methods: {
        addBank () {
            let obj = {
                banlance: 3213334,
                name: 'Monzo',
                cardNum: '526162218882006044895',
                color: '#1289A1'
            }
            this.bankList.push(obj)
        }
    }
}
</script>

<style lang="less" scoped>
.home-card {
  border: none;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  background-color: #FCFCFC;
  // margin: 30px;
  width: 80%;
  margin: 20px auto;
  border-radius: 50px;
  /deep/ .ivu-card-body {
    padding-right: 0px;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 40px;
  }
}
.icon-card {
  border-radius: 15px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-color: #eee;
}
.icon-card /deep/ .ivu-card-body {
  text-align: center;
  padding-top: 16px !important;
  padding-right: 16px !important;
  padding-left: 16px !important;
}
.icon-text {
  font-size: 12px;
  font-weight: bold;
  line-height: 30px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .name {
    font-weight: bold;
  }
}
.right-card {
  border: none;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  height: 100%;
  /deep/ .ivu-card-body {
    padding-top: 30px !important;
    padding-right: 30px;
  }
}
.news {
  position: relative;
  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    position: absolute;
    background: red;
    right: 4px;
    top: 4px;
  }
}
.main-row {
  margin-bottom: 20px;
}
.my-card-content {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap
}
.header-img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 20px;
}
.flex {
  display: flex;
  align-items: center;
}
.right-col{
  height:100%;
  position:absolute;
  right:0
}
.left-col{
  position:relative
}
</style>
