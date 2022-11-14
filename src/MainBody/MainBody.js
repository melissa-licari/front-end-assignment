import React, { useContext } from "react";
import { ItemContext } from "../App";

/*add tasks and save to json file. once saved, check category of json element and print json name item as list item.
count each item of a category and each item overall.
strike through task and change iscomplete value to complete.
be able to edit tasks*/


const MainBody = () => {
  var { val,setValue, tasks, setTasks, category, setCount} =
    useContext(ItemContext);

    const complete = event => {
    if (event.innerHTML.style.textDecoration) {
      event.innerHTML.style.removeProperty('text-decoration');
    } else {
      event.innerHTML.style.setProperty('text-decoration', 'line-through');
    }
  };

const addTask = (x) => {
  console.log(x)
  setTasks(tasks,{"category": category, "name": x, "isComplete": false})
  setCount(tasks.length)}

  const item = tasks.map((task, index) => 
    <li><input key={index} type="checkbox" onClick={complete} id="check" name="check" value="check" />&emsp;{task.name}</li>)  


return (
    <>
          <section id="main-nav">
          <h1>{category}</h1>
          <ul className="fourth" id="myBtn">
              {item}
              <li className="uil uil-plus">&emsp;<form name="inputForm" ><input id = "addTask" name="input" type="text" placeholder="Add Task" value={val} onChange={e => setValue(e.target.val)} onSubmit={e => addTask(e.value)}></input></form></li>
          </ul>
      </section>
    </>
  );
};

export default MainBody;
