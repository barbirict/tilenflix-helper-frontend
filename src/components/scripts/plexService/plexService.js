import axios from "axios";

export default class plexService {
    static async getRecent(token, type, days){
       return await axios.request({
           method: "get",
           url: '/data/plex/' + type + '?days=' + days,
           headers: {
               Authorization: token
           }
        })
    }
}