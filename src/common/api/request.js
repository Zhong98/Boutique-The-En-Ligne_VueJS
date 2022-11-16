import {Toast} from "vant";
import Axios from 'axios'
import router from "@/router";
import store from "@/store";

export default {
    common: {
        method: 'GET',
        data: {},
        params: {},
        headers:{}
    },
    $axios(options = {}) {
        options.method = options.method || this.common.method
        options.data = options.data || this.common.data
        options.params = options.params || this.common.params
        options.headers=options.headers || this.common.headers

        //是否登录
        if (options.headers.token){
            options.headers.token=store.state.user.token;
            if (!options.headers.token){
                router.push('/login')
            }
        }
        //加载动画
        Toast.loading({
            message: '加载中...',
            forbidClick: true,
        });

        if (options.method === 'GET') {
            return Axios.get(options.url, {
                params: options.params
            }).then(v => {
                let data = v.data.data;
                return new Promise((res, rej) => {
                    if (!v) return rej()
                    setTimeout(() => {
                        Toast.clear()
                    }, 400)
                    res(data);
                })
            });
        } else {
            return Axios.post(options.url, {
                data: options.data,
                headers:options.headers
            }).then(v => {
                let data = v.data.data;
                //如果token过期，重新登录
                if( data.code == 1000 ){
                    Toast.close();
                    return router.push('/login');
                }
                return new Promise((res, rej) => {
                    if (!v) return rej()
                    setTimeout(() => {
                        Toast.clear()
                    }, 400)
                    res(data);
                })
            });
        }
    }
}
