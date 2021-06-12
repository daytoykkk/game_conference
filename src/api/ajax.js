/*
    能发送异步ajax请求的函数模块
    封装axios库
    函数返回值是promise对象
 */

import axios from 'axios'

export default function ajax(url, data={},method='GET') {

    return new Promise((resolve, reject) => {
        let promise;
        // 执行异步ajax请求
        if(method==='GET') {    //get请求
            promise = axios.get(url, {
                params:data
            })
        } else {    //post请求
            promise = axios.post(url,data)
        }
        
        promise.then(res => {       // 成功，调用resolve(value)
            resolve(res.data)
        }).catch(err => {   // 失败 不调用rejec(reason),而是提示异常信息
            console.log(err)
        })      
        
    })

   
}