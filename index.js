
require("./tools/db")

const express = require("express");
const app = express();
app.use(express.static("public"));

const ShopModel = require("./models/Shop");
const ServiceModel = require("./models/Service");

app.get('/getShopList',function (req, res) {
  ShopModel.find({},function (err, list) {
    if(!err){
      res.send({list:list})
    }
  })
});

app.get('/getServiceList', function (req, res) {
  ServiceModel.find({},function (err, list) {
    if(!err){
      res.send({list:list})
    }
  })
})

app.listen(3000);
