
### jQuery项目
    DAY01
        1.实现的功能
            完成了首页头部、二级菜单、轮播图编写
        2.遇到的问题
            外边距重叠问题，解决方案：开启BFC模式
            内联块元素的基线问题，解决方案：转换为块级元素
        3.今天的收获
            对css的样式属性有了更深的认识，对less预编译器的使用更加熟练
    
    DAY02
        1.实现的功能
            完成了服务商页面头部、主体、尾部编写
            整理数据、搭建数据库
        2.遇到的问题
            mongodb数据库导入json文件失败
            mongoimport 命令
            mongoexport 命令
        3.今天的收获
            对页面布局有新的见解，轮播图的实现方案，swiper插件的使用
            
    DAY03
        1.实现的功能
            搭建服务器，使用art-template模板实现首页，服务商页面数据显示
        2.遇到的问题
            art-template模板中嵌套循环的问题：已解决
            注意：mongoose.model('shop', shopSchema) 中'shop'对应数据库中的集合名称(不为复数)
        3.今天的收获
            熟悉art-template模板的使用，数据的传递方式
            
    DAY04
        1.实现的功能
            实现服务项页面、详情页面
        2.遇到的问题
            art-template中日期格式化问题？有待解决
        3.今天的收获
            mongoose的分页查询、路径跳转方式
        注意：
            如果数据库使用的是 find()    方式查询，得到的必定是一个数组(模板必须使用each遍历方式)
            如果数据库使用的是 findOne() 方式查询，得到的必定是一个对象(模板直接获取值即可)
