import axios from "axios"

//1.使用Object.create方法， 将axios作为http的原型 Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型
const http=axios.create({
	baseURL:"http://127.0.0.1:8000/api/",
  
})

// 2.设置请求拦截器
http.interceptors.request.use((config)=>{
	//config是个配置对象，对象里面有一个属性很重要，headers请求头
	return config;
});

//3.设置响应拦截器
http.interceptors.response.use((res)=>{
	//成功的回调函数：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情。
	return res.date;
}, error => {
	//用pormise把失败的结果导出去，
	Promise.reject(error)
});

export default axios
