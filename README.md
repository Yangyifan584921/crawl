###网络爬虫
####这是基于NodeJS和Mongodb做的一个简单的爬虫，用来爬取电影网站的内容
- url:http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1
- 首先显分析网页html结构，赵傲我们想要拿到的东西，电影的标题
- 读取内容
   - require：一个简单的HTTP请求工具，用来获取网页内容，向服务器发送相应并获取响应体
   - iconv：将gbk格式的buffer格式的字符串转化为utf8格式的
   - cheerio：相当于jQuery的方法
   - 将读取到的内容存到movies数组中，然后交给回掉函数处理
- 写入内容
   - 把得到的电影数组存到数据库中
   - 保存完毕后调用回调函数
- 利用async来执行这两个模块中的内容
   - async是一个流程控制库
   - 使用async中的waterfall方法，流水先执行，这里需要注意的是：waterfall和series函数有很多相似之处，都是按顺序依次执行一组函数,不同之处是waterfall每个函数产生的值，都将传给下一个函数
- 最后，利用ejs模板字符串将我们保存的东西放在页面上
   
   