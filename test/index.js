
require('../tools/db')

const ShopModel = require('../models/Shop')
const ServiceModel = require('../models/Service')

/*ShopModel.find({}, function (err, data) {
  if(!err){
    console.log(data);
  }
})*/

ServiceModel.find({}, function (err, data) {
  if(!err){}
  console.log(data);
})
