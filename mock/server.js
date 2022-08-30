let express = require('express') //引入express
let Mock = require('mockjs') //引入mock

const loginData = require('./common/login.json')
const loginsearch = require('./common/loginsearch.json')
const getmenu = require('./common/menu.json')
let app = express() //实例化express

/**登录接口 */
app.use('/user/login', function (req, res) {
 console.log(req, 'req')
 res.json(
   Mock.mock({
     status: 200,
     msg: '登录成功',
     loginData
  })
)
})

/**登录日志 */
app.use('/home/loginsearch', function (req, res) {
 res.json(
   Mock.mock({
     status: 200,
     msg: '登录成功',
     loginsearch
  })
)
})

app.use('/home/menu', function (req, res) {
	console.log(req, 'req')
	res.json(
		Mock.mock({
			status: 200,
			msg: '菜单获取成功',
			getmenu
	 })
 )
 })

app.listen('8090', () => {
 console.log('监听端口 8090')
})

