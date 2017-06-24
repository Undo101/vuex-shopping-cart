import * as types from './mutations_types'
module.exports = {
    [types.CREATE_DB] (state, shop){
        state.cartList.push(shop)
    },
    [types.ADD_DB] (state) {
        state.cartList[state.curIndex].num = parseInt(state.cartList[state.curIndex].num)
        state.cartList[state.curIndex].num++
    },
    [types.REDUCE_DB] (state) {
        state.cartList[state.curIndex].num = parseInt(state.cartList[state.curIndex].num)
        state.cartList[state.curIndex].num--
    },
    [types.UPDATE_LOCAL] (state) {
        localStorage.setItem('vuex_cart',JSON.stringify(state.cartList))
    },
    [types.CHECK_DB] (state, {id}) {
        state.curIndex = -1
        let list = state.cartList
        if(list.length){
            for (let i=0;i<list.length;i++) {
                if(list[i].id == id){
                    state.cartIndex = i
                    break
                }
            }
        }
    }
}