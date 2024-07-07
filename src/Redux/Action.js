import { ADD, DEL, UPDATE } from "./ActionType"


export const add = (data)=>{
    return {type: ADD, payload: data}
}
export const del =(data)=>{
    return {type: DEL, payload: data}
}
export const update=(data)=>{
    return {type:UPDATE,payload:data}
}