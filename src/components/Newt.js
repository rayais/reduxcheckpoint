import React, { useState } from 'react'
import Navig from './Navig'
import { useDispatch } from 'react-redux';
import { add } from '../Redux/Action';
import { Link } from 'react-router-dom';

function Newt() {

    const [task,setTask]=useState("");
    const dispatch=useDispatch()

    const handlesub=(e)=>{
        e.preventDefault();
        dispatch(add({task,done:false}))
        setTask("")
    }
  return (
    <div>
        <Navig/>
        <div className='add'>
            <form onSubmit={(e)=>handlesub(e)} >
                <fieldset>
                    <legend>Add new Task</legend>
                <table>
                    <tbody>
                    <tr>
                        <td><label htmlFor="post">your new task :</label></td>
                        <td><input name='post' placeholder='type your task' onChange={(e)=>{setTask(e.target.value)}}/></td>
                        
                    </tr></tbody>
                    
                </table><br />
                
                <input type="submit" value="ADD" />
                <input type="reset" value="RESET" />
                <Link to='/'>
                <input type="button" value="BACK" />
                </Link>
                
                </fieldset>
            </form>
        </div>
    </div>
  )
}

export default Newt