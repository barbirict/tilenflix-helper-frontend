const keys = require("../../data/keys.json")
export default function decrypt(data){
    const key = keys.keys.sha256.key
    const iv = ""
    for (let i = 0; i < data.length; i++) {
        if(data[i] === '.') {
            for(let j = 0; j <= i; j++){
                iv.append(data[j])
            }
        }
    }

}