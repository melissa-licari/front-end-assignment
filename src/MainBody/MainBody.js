import React, { useContext } from "react";
import { ItemContext } from "../App";


const MainBody = () => {
  var { tasks, setTasks, category, count, setCount, match, setIcount, setUcount, setTcount, icount, tcount, ucount} =
    useContext(ItemContext);
    
    function strike(task) {
      let n = task.name
      if(task.isComplete === true) {
        return (<s>{n}</s>)}
      else {return (n)}
    }
    function search() {
      if (match === '') {
        return tasks;
      }
   	  var newList = tasks.filter(i => i.name.indexOf(match) !== -1)
	  return newList;
    } 

  const item = search(tasks).map((task, index) => {
  if(task.category === category) { 
    return(
    <li><input key={index} type="checkbox" onClick={() => {
      if (task.isComplete === false) {
        task.isComplete = true
        setCount(count-1)
        if (category === "Inbox") {
          setIcount(icount-1)
        }
        else if (category === "Today") {
          setTcount(tcount-1)
        }
        else {
          setUcount(ucount-1)
        }
       }
      else {
        task.isComplete = false
        setCount(count+1)
        if (category === "Inbox") {
          setIcount(icount+1)
        }
        else if (category === "Today") {
          setTcount(tcount+1)
        }
        else {
          setUcount(ucount+1)
        }
      }
    setTasks(JSON.parse(JSON.stringify(tasks)))
							}}
    name="check" />{strike(task)} <button className="btn" style={{"background-color": "white", "border": "none"}} onClick={() => {
      document.getElementById(index).style.visibility = "visible"
      document.getElementById(index+'smt').style.visibility = "visible"
    }}><i class="uil uil-edit"></i></button><input id={index} className = {index} placeholder={task.name} type="text" style={{"visibility": "hidden"}}/><input id={index+"smt"} type="submit" style={{"visibility": "hidden"}} onClick={() => {
      task.name = document.getElementById(index).value
      setTasks(JSON.parse(JSON.stringify(tasks)))
      document.getElementById(index).style.visibility = "hidden"
      document.getElementById(index+'smt').style.visibility = "hidden"
    }}></input></li>  )}
    })
    setCount(icount+tcount+ucount)
    
return (
    <>
          <section id="main-nav">
          <h1>{category}</h1>
          <ul className="fourth" id="myBtn">
              {item}
              <li className="uil uil-plus">&emsp;<input id="addTask" type="name" placeholder="Add Task" />  <input type="submit" value="Add Task" class="submit-btn" 
						onClick={() => {
							if(document.getElementById('addTask').value === ""){alert("Your task name is empty.")}
							else{
								tasks.push({"category": category, "name": document.getElementById('addTask').value, "isComplete": false});
								if(category === "Inbox"){setTasks(JSON.parse(JSON.stringify(tasks)))
                setCount(icount+ucount+tcount)
                setIcount(icount+1)}
								else if(category === "Today"){setTasks(JSON.parse(JSON.stringify(tasks)))
                  setCount(icount+ucount+tcount)
                  setTcount(tcount+1)}
								else{setTasks(JSON.parse(JSON.stringify(tasks)))
                  setCount(icount+ucount+tcount)
                  setUcount(ucount+1)}
								document.getElementById('addTask').value = ""
						}}}/></li>
          </ul>
      </section>
    </>
  );
};

export default MainBody;