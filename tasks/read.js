/*
* url:要读取的url地址
* 我们需要读取url的响应体，而且提取其中的电影列表并传给callback
* */
var request=require('request');
var iconv=require('iconv-lite');
var cheerio=require('cheerio');
var debug=require('debug');
var logger=debug('crawl:read');
module.exports=function (url,callback) {
    //读取传入的地址并传给响应体
    request({url,encoding:null},function (err,response,body) {
        body=iconv.decode(body,'gbk');
        // console.log(body)
        var movies=[];
        var $=cheerio.load(body);
        $('.keyword .list-title').each(function () {
            var $this=$(this);
            var movie={
                name:$this.text(),
                url:$this.attr('href')
            };
            logger(`读取到电影：${movie.name}`);
            movies.push(movie);
        })
        callback(err,movies)
    })
};
/*var url='http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
module.exports(url,function (err,movies) {
    console.log(movies)
})*/
