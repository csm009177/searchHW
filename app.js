// import express
import express from 'express'
const app = express();
// import file system
import fs, { readFile } from 'fs'
const port = 3217;

app.use(express.static('public')); // 정적 파일 서비스

app.get('/', (req,res)=> {
  fs.readFileSync(__dirname +'.public/index.html')
})

app.listen(port, ()=> {
  console.log(`
  http://localhost:${port}
  `)
})