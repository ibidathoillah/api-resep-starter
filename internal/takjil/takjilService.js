const checkTakjil = (message)=>{ //message
    
    // logic
    switch(message.toLowerCase()){
        case 'makanan':
            message = require('./data/list/makanan')
            break
        case 'minuman':
            message = require('./data/list/minuman')
            break
        case 'takjil':
            message = require('./data/list/takjil')
            break
        default:
            return "Data tidak ditemukan"
    }

    let randArray = []
    let result = []

    while(randArray.length!=4){
        let rand = Math.floor(Math.random()*(message.length))
        if(randArray.indexOf(rand)==-1){ //jika randArray tidak mengadung angka random
            randArray.push(rand) // maka randArray dimasukkan  angka random
            result.push(message[rand]) // setiap angka random keisi dirandArray maka
            //message sesuai index angka ditambahkan ke result
        }
    }

    return result
}

const detailTakjil = (message)=>{
    const allResep = ["makanan","minuman","takjil"]

    let result = "Data tidak ditemukan"
    for(let i=0;i<allResep.length;i++){
        let list = require(`./data/list/${allResep[i]}`)
        let indexFound = list.indexOf(message)
        if(indexFound>-1){
            let detail = require(`./data/detail/${allResep[i]}`)
            result = detail[indexFound]
        }
    }

    return result
}

module.exports = {checkTakjil, detailTakjil}