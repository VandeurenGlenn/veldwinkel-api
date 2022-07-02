import Koa from 'koa'
import Router from '@koa/router'
import cors from '@koa/cors'
import bodyParser from 'koa-bodyparser'
import {writeFile} from 'fs'
import {promisify} from 'util'
import WebpEncoder from './webp-encoder.js'
const webpEncoder = new WebpEncoder()

const write = promisify(writeFile)

const app = new Koa()
const router = new Router()

app.use(cors({origin : '*'}))

app.use(require('koa-static')('./uploads'));

const encode = input => {
  let keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  let output = "";
  let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
  let i = 0;

  while (i < input.length) {
      chr1 = input[i++];
      chr2 = i < input.length ? input[i++] : Number.NaN; // Not sure if the index
      chr3 = i < input.length ? input[i++] : Number.NaN; // checks are needed here

      enc1 = chr1 >> 2;
      enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
      enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
      enc4 = chr3 & 63;

      if (isNaN(chr2)) {
          enc3 = enc4 = 64;
      } else if (isNaN(chr3)) {
          enc4 = 64;
      }
      output += keyStr.charAt(enc1) + keyStr.charAt(enc2) +
                keyStr.charAt(enc3) + keyStr.charAt(enc4);
  }
  return output;
}

const addImage = async (key, img, size, quality) => {
  img = await webpEncoder.encode(img, size, quality)
  return write(`./uploads/${data.name}.${key}.webp`, new Buffer(encode(new Uint8Array(img)), 'base64'))
}

router.post('/upload', async ctx => {
  let dataParts = [Buffer.alloc(0)];
  // this is so Buffer.concat doesn't error if nothing comes;
  ctx.request.req.on('data', d=>dataParts.push(d));
  ctx.request.req.on('error', (e) => console.log(e));
  ctx.request.req.on('close', async ()=> {
    const fullData = Buffer.concat(dataParts);

    const data = JSON.parse(fullData.toString())
    await addImage('thumbm', data.value, 320, 95)
    await addImage('thumb', data.value, 120, 85)
    await addImage('placeholder', data.value, 5, 25)
    await addImage('original', data.value, 960, 95)
  });
})


app.use(router.routes())


app.listen(58666)
