import React, { useContext } from "react";
import { ItemContext } from "../App";

const LeftNav = () => {
  var { category, setCategory, count } = useContext(ItemContext);
  
    function collapse(event) {
    event.classList.toggle("active");
    var content = event.nextElementSibling;
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
  }

  const myFunction = x => {
    x.classList.toggle("uil-angle-right");
  }
  return (
    <>
            <section id="left-navigation">
            <ul>
                <ul className="first">
                    <li className="uil uil-inbox"><button id="leftnavbtn" type="button" onClick={e => setCategory(e.target.value)} value="Inbox">&emsp;Inbox&emsp;<span className="task-count">{count}</span></button></li>
                    <li className="uil uil-calendar-alt"><button id="leftnavbtn" type="button" onClick={e => setCategory(e.target.value)} value= "Today">&emsp;Today&emsp;<span className="task-count">{count}</span></button></li>
                    <li className="uil uil-schedule"><button id="leftnavbtn" type="button" onClick={e => setCategory(e.target.value)} value="Upcoming">&emsp;Upcoming</button><span className="task-count">{count}</span></li>
                    <li className="uil uil-angle-down">&emsp;Projects</li>
                </ul>
                <li onClick={myFunction} className="uil uil-angle-down" id="arrow"><button onClick = {collapse} type="button" className="collapsible">&emsp;&emsp;<i className="uil uil-circle" id="circle"></i>&emsp;Work</button>
                <div className="content">
                    <ul className="second">
                        <li className="uil uil-circle">&emsp;New Brand&emsp;<span className="task-count">9</span></li>
                        <li className="uil uil-user">&emsp;Website Update&emsp;<span className="task-count">11</span></li>
                        <li className="uil uil-user">&emsp;Product Roadmap&emsp;<span className="task-count">11</span></li>
                        <li className="uil uil-user">&emsp;Meeting Agenda&emsp;<span className="task-count">6</span></li>
                    </ul>
                </div>
                </li>
                <li className="uil uil-angle-down" id="arrow"><button type="button" className="collapsible">&emsp;&emsp;<i className="uil uil-circle" id="circle"></i>&emsp;Personal</button>
                    <div className="content">
                    </div>
                    </li>
                <ul className="third">
                    <li className="uil uil-plus">&emsp;Add Project</li>
                </ul>
                </ul>
        </section>
            );
    </>
  );
};

export default LeftNav;
