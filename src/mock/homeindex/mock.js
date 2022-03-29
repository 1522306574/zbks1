let Mock = require("mockjs")
let data = [{
        id:"0",
        name: "hahaha",
        text: "哈哈哈",
        title:"wdewdwd"
    },
    {
        id: 1,
        name: "heiheihei",
        text: "嘿嘿嘿",
        title:"wdewdwd"

    },
    {
        id: 2,
        name: "yiyiyi",
        text: "咦咦咦",
        title:"wdewdwd"

    },
    {
        id: 3,
        name: "ererer",
        text: "二二二",
        title:"wdewdwd"

    },
    {
        id: 4,
        name: "sansansan",
        text: "三三三",
        title:"wdewdwd"

    },
]
//获取
Mock.mock("/api/homeindex", "get", function (config) {
    console.log(config)
    return data
})
//删除
Mock.mock(/\/api\/homeindex\/\d/, "delete", function (config) {
    console.log(config.url)
    let arr = config.url.split("/")
    let id = arr.pop()
    data.splice(id,1)
    // data=data.map(function(item,index){
    //     item.id=index
    // })
    data.forEach(function(item,index){
        item.id = index
    })  
    return data
})
//更新
Mock.mock(/\/api\/homeindex\/edit\/\d/, "put", function (config) {
    console.log(config)
    let arr = config.url.split("/")
    let id = arr.pop() //获取id
    let canshu = config.body; //string
    canshu = JSON.parse(canshu) //obj
    console.log(canshu)
    data[id].name = canshu.name;
    data[id].text = canshu.text;
    return data 
})
//添加
Mock.mock("/api/homeindex",'post',function(config){
    console.log(config)
    let obj=JSON.parse(config.body)
    let name=obj.name
    let text=obj.text
    data.push({id:data.length,name,text})
    return data
})