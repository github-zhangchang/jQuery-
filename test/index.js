
require('../tools/db')

const ShopModel = require('../models/Shop')
const ServiceModel = require('../models/Service')
const ItemModel = require('../models/Item')
const CommentModel = require('../models/Comment')
const DetailModel = require('../models/Detail')

DetailModel.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
})

/*ShopModel.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
})*/

/*
ServiceModel.find({}, function (err, data) {
  if(!err){}
  console.log(data);
})
*/

/*ItemModel.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
})*/

/*ItemModel.findOne({id:'1001'}, function (err, data) {
  if(!err){
    console.log(data);
  }
})*/

//每页显示10条记录
/*
CommentModel.find({}).limit(10).skip((1-1)*10).exec(function (err, comments) {
  if(!err){
    console.log(comments.length);
    console.log(comments);
  }
})*/
