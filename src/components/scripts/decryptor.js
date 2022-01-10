//import {util as $CryptoJS} from "protobufjs";

var CryptoJS = require("crypto-js");


//const keys = require("../../data/keys.json")
export default function decrypt(data){
    const key = "47ceb1a04f4ff9b55b3906dd268926e64a96fa4ddcdd8c972efd4296b4a02932"
    //const cipherBuffer = null
    //$CryptoJS.base64.decode(data, cipherBuffer, cipherBuffer)
   let cipherString = data// atob(data)//cipherBuffer.toString()
    console.log(cipherString)
    let iv = CryptoJS.enc.Base64.parse(cipherString.split(".")[0])
    cipherString = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Base64.parse(cipherString.split(".")[1]))
    console.log("iv ", iv.toString(), "\nHEx: " + iv.length);
    //console.log("cipher", CryptoJS.enc.Hex.stringify(cipherString), "\nkey ", (CryptoJS.enc.Hex.parse(key)))
    const decrypted = CryptoJS.AES.decrypt(cipherString, CryptoJS.enc.Hex.parse(key), {iv: iv})

    console.log("decrypted", JSON.parse(decrypted.toString(CryptoJS.enc.Utf8)))
    return JSON.parse(decrypted.toString(CryptoJS.enc.Utf8))
}

