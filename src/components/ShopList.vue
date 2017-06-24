<template lang="html">
    <div class="shop-list">
        <h4>商品信息</h4>
        <table class="table table-hover table-bordered table-shop">
            <thead>
                <tr>
                    <td>id</td>
                    <td>名称</td>
                    <td>价格</td>
                    <td>数量</td>
                    <td>Actions</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(shop,index) in shop_list">
                    <td>{{shop.id}}</td>
                    <td>{{shop.name}}</td>
                    <td>{{shop.price}}</td>
                    <td>{{shop.num || ''}}</td>
                    <td>
                        <div class="btn btn-info" @click="add_db(shop)">添加到购物车</div>
                        <div class="btn btn-warning"></div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'shop_list',
    data () {
        return {
            shop_list: [{
                id:1,
                name:'鱼香肉丝',
                price:12
            },{
                id:2,
                name:'宫保鸡丁',
                price:14
            },{
                id:3,
                name:'土豆丝',
                price:10
            },{
                id:4,
                name:'米饭',
                price:2
            }]
        }
    },
    methods: {
        add_db (shop) {
            let id = shop.id
            this.$store.dispath('check_db',{
                id
            })
            // 跟vuex交互
            // 添加到购物车
            
            // 已经在购物车 数量加1   state往下走这个模块 
            if(this.$store.state.cart.curIndex !=-1) {
                console.log('add_db')
                this.$store.dispath('add_bd')
            }else {
                this.$store.dispath('create_db',{
                    shop
                })
            }
            // 不在购物车 将shop信息都加进去
            // 影响到最后info
        }
    }
}
</script>

<style lang="css">
.table-shop th{
    text-align: center;
}
</style>
