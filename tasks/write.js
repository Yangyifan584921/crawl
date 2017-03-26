/*
* 吧得到的电影数组存到数据库中
* callback:保存完毕后调用回调函数
* */
var Movie=require('../model');
var async=require('async');
var logger=require('debug')('crawl:write');
module.exports=function (movies,callback) {
    async .forEach(movies,function (movie,cb) {
        Movie.create(movie,cb);
        logger(`写入电影：${movie.name}`)
    },callback)
};