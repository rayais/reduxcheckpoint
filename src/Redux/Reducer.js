import { ADD, DEL, UPDATE } from "./ActionType"

const initialState =[{id:1,task:"first task",done:false}]

export default (state = initialState, { type, payload }) => {
  switch (type) {

  case ADD:
    
    return [...state, {id:state.length+1 ,task:payload.task ,done:payload.done}] 
  case DEL:
 
    return  state.filter((pos)=>pos.id!==payload) 
  case UPDATE:
    return state.map((pos) => {return pos.id == payload.id ? payload : pos})
    
  default:
    return state
  }
}
