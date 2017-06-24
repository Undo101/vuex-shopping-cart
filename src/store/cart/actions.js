import * as types from './mutations_types'
module.exports = {
    clear_local:({commit}) => {
        commit(type.CLEAR_LOCAL)
    },
    update_local:({commit}) => {
        commit(type.UPDATE_LOCAL)
    },
    delete_db:({commit}) => {
        commit(types.DELETE_DB)
        commit(type.UPDATE_LOCAL)
    },
    update_cur_shop_status:({commit},obj) => {
        commit(type.UPDATE_CUR_SHOP_STATUS,obj)
    },
    check_db: ({commit},obj)=> {
        commit(types.CHECK_DB,obj)
    },
    create_db: ({commit},{ shop })=> {
        commit(types.CREATE_DB,shop)
        commit(types.UPDATE_LOCAL)
    },
    add_db: ({commit}) => {
        commit(types.ADD_DB)
        commit(types.UPDATE_LOCAL)
    },
    reduce_db: ({commit}) => {
        commit(types.REDUCE_DB)
        commit(types.UPDATE_LOCAL)
    }
}