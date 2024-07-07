import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { update } from "../Redux/Action";
import Navig from "./Navig";

function OneTask() {
  const { id } = useParams();
  const tasks = useSelector((state) => state);
  const elm = tasks.filter((el) => el.id == id)[0];
  const [tache, settache] = useState(elm.task);
  const [ver, setver] = useState(elm.done);
  
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(id,tache,ver)
    dispatch(update({ id, task: tache, done: ver }));
  };

  return (
    <div>
      <Navig />
      <br />
      <form onSubmit={(e) => handlesubmit(e)}>
        <fieldset>
          <legend>Edit :</legend>
          <table>
            {" "}
            <tbody>
              <tr>
                <td>
                  <label htmlFor="task">Task :</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder={elm.task}
                    value={tache}
                    onChange={(e) => settache(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Done :</label>
                </td>
                <td>
                  <input
                    type="checkbox"
                    checked={ver}
                    onChange={(e) => setver(e.target.checked)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          
            <input type="submit" value="Change" />
          
          
          
          <input type="reset" value="reset" />
          <Link to="/">
            <input type="button" value="back" />
          </Link>
        </fieldset>
      </form>
    </div>
  );
}

export default OneTask;
