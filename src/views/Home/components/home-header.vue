<template>
    <section class="home-header">
       <img class="img" src="../../../assets/logo.png" alt="">
       <nav class="nav">
           <span v-for="(item,index) in arr" :key="index" @click="changeNav(index)" :class="{active:currentIndex==index}">{{item}}</span>
       </nav>
       <Input class="input" search placeholder="search..." />
    </section>
</template>

<script>

export default {
    name: 'HomeHeader',
    data () {
        return {
            arr: [
                'Dashboard',
                'Services',
                'History',
                'Actions'
            ],
            currentIndex: 0
        }
    },
    methods: {
        changeNav (index) {
            this.currentIndex = index
        }
    }
}
</script>

<style lang="less" scoped>
.home-header{
    display: flex;
    padding: 20px;
    align-items: flex-end;
}
.img{
    width: 50px;
    margin-right: 100px;
}
.nav{
    display: flex;
    font-size: 14px;
    color: #92959A;
    display: flex;
    justify-content: space-between;
    padding-right: 20px;
    flex: 1;
    span{
        padding-top: 10px;
    }
    span:hover{
        cursor: pointer;
    }
    .active{
        font-size: 15px;
        font-weight: bold;
        color: #000000;
    }
}
.input{
    width: 200px;
   /deep/ .ivu-input{
     background-color: #F9F9F9;
     border: none;
     border-radius: 10px;

    }
}
</style>
