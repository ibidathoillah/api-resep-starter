const port = 3000
const app = require('./http/route')

app.listen(port, ()=>{
    console.log(`Takjil berjalan di port ${port}`)
})