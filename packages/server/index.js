const Koa = require('koa')
const router = require('koa-router')()
const fs = require('fs')
const jwt = require("jsonwebtoken")
const jwtAuth = require("koa-jwt")
const secret = "it's a secret"
const bodyParser = require('koa-bodyparser')
const static = require('koa-static')
const session = require('koa-session')
const CONFIG = {
    key: 'zijilai:sess',
    /** (string) cookie key (default is koa:sess) */
    /** (number || 'session') maxAge in ms (default is 1 days) */
    /** 'session' will result in a cookie that expires when session/browser is closed */
    /** Warning: If a session cookie is stolen, this cookie will never expire */
    maxAge: 86400000,
    autoCommit: true,
    /** (boolean) automatically commit headers (default true) */
    overwrite: false,
    /** (boolean) can overwrite or not (default true) */
    httpOnly: false,
    /** (boolean) httpOnly or not (default true) */
    signed: false,
    /** (boolean) signed or not (default true) */
    rolling: false,
    /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
    renew: false,
    /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};


const app = new Koa();
app.keys = ['some secret'];

app.use(bodyParser())
app.use(session(CONFIG, app));
app.use(async (ctx, next) => {
    console.log('登录状态检查')
    if (ctx.url.indexOf('login') > -1) {
        await next()
    } else if (!ctx.session.userinfo) {
        ctx.redirect('/login.html')
    } else {
        await next()
    }
})
app.use(async (ctx, next) => {
    console.log(`url:${ctx.url}`)
    console.log(`目录权限.......`)
    await next();
    console.log(`end `)
})
router.get('/', static(__dirname + '/pages/'))
router.get('/login.html', static(__dirname + '/pages/'))
router.post("/login", async ctx => {
    const { body } = ctx.request;
    console.log('body:', body)
    //登录逻辑，略
    //设置session
    ctx.session.userinfo = {
        name: body.name
    }
    // TODO 应该是回到登录前页面
    ctx.redirect('/')
});

app.use(router.routes());
app.listen(3000);
