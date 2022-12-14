import React, { useState, useEffect, createContext } from "react";
import "./App.css";
import TopNav from "./TopNav/TopNav";
import MainBody from "./MainBody/MainBody";
import LeftNav from "./LeftNav/LeftNav";
import "./styles.css"

export const ItemContext = createContext();

const currentList = [{"category": "Inbox", "name": "Call Mom", "isComplete": false}, {"category": "Inbox",
"name": "Finish Homework", "isComplete": false}, {"category": "Upcoming",
"name": "Project", "isComplete": false}, {"category": "Today",
"name": "Meal Prep", "isComplete": false}]

function App() {
  var [tasks, setTasks] = useState([]);
  var [count, setCount] = useState(0);
  var [icount,setIcount] = useState(0);
  var [ucount,setUcount] = useState(0);
  var [tcount,setTcount] = useState(0);
  var [category, setCategory] = useState("Inbox");
  var [hideLeftNav, setHideLeftNav] = useState(true);
  const [match, setMatch] = useState("")

  useEffect(() => {
    setTasks([...currentList]);
  }, []);

  return (
    <>
    <html>
    <head>
      <link rel="stylesheet" href="styles.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
      <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"/>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet"/>
      </head>
      <body>
          <article id = "main">

      <ItemContext.Provider
        value={{
          tasks,
          setTasks,
          count,
          setCount,
          category,
          setCategory,
          hideLeftNav,
          setHideLeftNav,
          match,
          setMatch,
          icount,
          setIcount,
          ucount,
          setUcount,
          tcount,
          setTcount

        }}
      > <TopNav />
      {!hideLeftNav && <LeftNav />}
      <MainBody />
    </ItemContext.Provider>
    </article>
    </body>
    </html>
    </>
  );
}

export default App;
