const express = require('express'); //npm下载并引入express模块 npm -express -D
const app = express();
app.use(express.static('./build')) // ./build 为vue打包后dist文件夹的路径
app.listen(1433,function(err){  //8000 想要监听项目的端口号
	if(err){
		console.log(err)
	}else {
		console.log('项目启动成功')
	}
})