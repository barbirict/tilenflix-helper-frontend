//import {util as $CryptoJS} from "protobufjs";

var CryptoJS = require("crypto-js");


//const keys = require("../../data/keys.json")
export default function decrypt(data){
    const key = "b7f7aeb8fe8f191ec762cedacd008dc336f2b69fdfde0d82e43253ed3636c4fe"
    //const cipherBuffer = null
    //$CryptoJS.base64.decode(data, cipherBuffer, cipherBuffer)
   let cipherString = data// atob(data)//cipherBuffer.toString()
    console.log(cipherString)
    const iv = cipherString.split(".")[0]
    cipherString = cipherString.split(".")[1]
    console.log("iv ", Buffer.from(iv, 'base64').toString("hex"))

    console.log("cipher", Buffer.from(cipherString, 'base64').toString("hex"), "\nkey ", key)
    const decrypted = CryptoJS.AES.decrypt(Buffer.from(cipherString, 'base64').toString("hex"), key ,
        {mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7, iv: Buffer.from(iv, 'base64').toString("hex")})

    console.log("decrypted", decrypted.toString())
}