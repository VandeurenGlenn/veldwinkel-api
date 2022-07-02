import Koa from 'koa'
import Router from '@koa/router'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import {writeFile} from 'fs'
import {promisify} from 'util'

const write = promisify(writeFile)

const app = new Koa()
const router = new Router()

app.use(cors({origin : '*'}))

app.use(require('koa-static')('./uploads'));

router.post('/upload', ctx => {
  let dataParts = [Buffer.alloc(0)];
  // this is so Buffer.concat doesn't error if nothing comes;
  ctx.request.req.on('data', d=>dataParts.push(d));
  ctx.request.req.on('error', (e) => console.log(e));
  ctx.request.req.on('close', ()=> {
    const fullData = Buffer.concat(dataParts);

    const data = JSON.parse(fullData.toString())
    console.log(data);
    write(`./uploads/${data.name}`, new Buffer(data.value.replace('data:image/png;base64,', '').replace('data:image/jpeg;base64,', '').replace('data:image/webp;base64,', ''), 'base64'))
    // you can do stuff with the data now
  });
})


app.use(router.routes())


app.listen(58666)
