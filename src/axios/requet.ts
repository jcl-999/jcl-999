import axios from 'axios'
//axios接口请求
const service = axios.create({
    baseURL:'',
    timeout:5000,
    headers:{

    }
})
//请求拦截
