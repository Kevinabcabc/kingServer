// 提供ajax请求，对axios进行二次封装
import axios from 'axios'
import {HOST} from './api'

export default class Http{

    static async request(method,url,data){
        const response = await axios.request({
            method,
            url,
            baseURL:HOST,
            params:method === 'GET' ? data : null,
            data: method === 'POST' ? data : null
        });

        return this.isSuccess(response);
    }

    // 检查响应的结果
    static isSuccess(res){
        if(res.status >= 200 && res.status < 300){
            return res;
        }else{
            this.requestExpection(res);
        }
    }

    // 抛出错误
    static requestExpection(res){
        throw new Error(res);
    }

    // get方法
    static get(url,data){
        return this.request('GET',url,data);
    }

    // post方法
    static post(url,data){
        return this.request('POST',url,data);
    }
}