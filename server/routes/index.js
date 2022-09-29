var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/tabList/0/data/1',function(req, res, next){
  res.send({
    code:0,
    data:{
      funTabList:[
        {index:0, title:'推荐'},
        {index:1, title:'铁观音'},
        {index:2, title:'大红袍'},
        {index:3, title:'绿茶'},
        {index:4, title:'茉莉花茶'},
        {index:5, title:'普洱'},
        {index:6, title:'茶具'},
        {index:7, title:'龙井'}
      ],
      data:[
        {
          id: 0,
          type: 'swiper',
          data: [
            {id: 1, imgUrl: "/images/swiper1.jpeg"},
            {id: 2, imgUrl: "/images/swiper2.jpeg"},
            {id: 3, imgUrl: "/images/swiper3.jpeg"}
          ]
        },
        {
          id:1,
          type:'icon',
          data:[
            {id:1, imgURL:'/images/icons1.png', title:'自饮茶'},
            {id:2, imgURL:'/images/icons2.png', title:'品牌茶'},
            {id:3, imgURL:'/images/icons3.png', title:'茶具'},
            {id:4, imgURL:'/images/icons4.png', title:'领福利'},
            {id:5, imgURL:'/images/icons5.png', title:'官方验证'}
          ]
        },
        {
          id:2,
          type:'recommend',
          data:[
            {name:'铁观音2号250g', text:'核心产区滋味正', price:128, imgURL:'/images/recommend1.jpeg'},
            {name:'正山小种3号150g', text:'难以忘怀的桂花香', price:99, imgURL:'/images/recommend2.jpeg'},
            {name:'黑檀镂空六君子', text:'给生活一点精致的仪式感', price:45, imgURL:'/images/recommend3.jpeg'}
          ]
        },
        {
          id:3,
          type:'like',
          data:[
            {name:'武夷山高级大红袍2号', imgURL:'/images/like1.jpeg', price:99},
            {name:'武夷山灰芽花香金骏眉3号', imgURL:'/images/like2.jpeg', price:128},
            {name:'2022春茶明前龙井飞花', imgURL:'/images/like3.jpeg', price:128},
            {name:'云南凤庆高海拔古树滇红', imgURL:'/images/like4.jpeg', price:99}
          ]
        }
      ]
    }
  })
})
module.exports = router;
