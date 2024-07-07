import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { del, update } from '../Redux/Action'

function List() {
    const dispatch=useDispatch()
    const tasks=useSelector(state=>state)
    console.log(tasks)
    const [bgco,setbgco]=useState({
        'backgroundColor': 'rgba(248, 71, 17, 0.606)'})
    
    const change=(e,el)=>{
        
        el.done=(e.target.checked)
        dispatch(update(el))
        setbgco({
            backgroundColor: el.done ? 'rgba(15, 246, 80, 0.606)' : 'rgba(248, 71, 17, 0.606)'
        })
    }
    const handledel=(id)=>{
        console.log('id  :' ,id);
        dispatch(del(id))
    }
  return (
    <div>
        
        <table>
            <thead>
            <tr className='htable'>
                <td>Task</td>
                <td>Done</td>
                <td>Edit</td>
                <td>Delete</td>
            </tr></thead>
            <tbody>
            {tasks.map(el => (
                        <tr key={el.id} >
                            <td>{el.task}</td>
                            <td>
                                <input type="checkbox" checked={el.done} style={bgco} onChange={(e)=>change(e,el)} />
                            </td>
                            <td>
                                <Link to={`/task/${el.id}`}>
                                    <input type="button" value="Edit" />
                                </Link>
                            </td>
                            <td>
                                <input type="button" value="delete" onClick={()=>handledel(el.id)}/>
                            </td>
                        </tr>
                    ))}</tbody>
        </table>
    </div>
  )
}

export default List