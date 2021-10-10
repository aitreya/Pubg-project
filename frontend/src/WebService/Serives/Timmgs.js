import apiCall  from "../main";

export function getTimmings(){
    let endpoint = "/getTimings"
    let params = {}
    return apiCall("GET",endpoint,params)
}