const router = require('koa-router')()

let books=[
  {
      "id":"4866934",
      "title":"Python基础教程",
      "Price":120.00,
      "author":'lola'
  },
  {
      "id":"3117898",
      "title":"Python源码剖析",
      "Price":120.00,
      "author":'lola'
  },
  {
      "id":"3948354",
      "title":"Python学习手册",
      "Price":120.00,
      "author":'lola'
  },
  {
      "id":"3884108",
      "title":"可爱的Python",
      "Price":120.00,
      "author":'lola'
  }
]

router.get('/get', async (ctx, next) => {
  let id=ctx.query.id;
  books.forEach((item)=>{
    if(item.id===id){
      ctx.body = item;
    }
  })
})

router.post('/post', async (ctx, next) => {
  newBookList=ctx.request.body;
  books.push(newBookList);
  ctx.body={'data':books,'message':'数据添加成功'};
})

module.exports = router
