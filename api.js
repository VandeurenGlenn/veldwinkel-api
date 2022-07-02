'use strict';

var Koa = require('koa');
var Router = require('@koa/router');
var cors = require('@koa/cors');
require('koa-bodyparser');
var fs = require('fs');
var util = require('util');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var Koa__default = /*#__PURE__*/_interopDefaultLegacy(Koa);
var Router__default = /*#__PURE__*/_interopDefaultLegacy(Router);
var cors__default = /*#__PURE__*/_interopDefaultLegacy(cors);

const write = util.promisify(fs.writeFile);

const app = new Koa__default["default"]();
const router = new Router__default["default"]();

app.use(cors__default["default"]({origin : '*'}));

app.use(require('koa-static')('./uploads'));

router.post('/upload', ctx => {
  let dataParts = [Buffer.alloc(0)];
  // this is so Buffer.concat doesn't error if nothing comes;
  ctx.request.req.on('data', d=>dataParts.push(d));
  ctx.request.req.on('error', (e) => console.log(e));
  ctx.request.req.on('close', ()=> {
    const fullData = Buffer.concat(dataParts);

    const data = JSON.parse(fullData.toString());
    console.log(data);
    write(`./uploads/${data.name}`, new Buffer(data.value.replace('data:image/png;base64,', '').replace('data:image/jpeg;base64,', '').replace('data:image/webp;base64,', ''), 'base64'));
    // you can do stuff with the data now
  });
});


app.use(router.routes());


app.listen(58666);
