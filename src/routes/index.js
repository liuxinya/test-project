const  Router = require('koa-router');
const router = new Router();

router.get('/', ctx => {
    ctx.body = '呵呵呵da'
})
router.get('/test', ctx => {
    ctx.body = {
        a:1
    }
})

module.exports = router;