import { ItemContext } from "../App";
import React, { useContext } from "react";

const TopNav = () => {
  var { hideLeftNav, setHideLeftNav, count, setMatch, icount, tcount, ucount, category } = useContext(ItemContext);

  function autocompleteMatch(e) { 
    setMatch(e.target.value);
 }
function hide() {
  setHideLeftNav(!hideLeftNav)
}

function recount() {
  if (category === "Inbox") {
    return(icount)
  }
  else if (category === "Upcoming") {
    return(ucount)
  }
  else {
    return(tcount)
  }
}

  return (
    <>
       <section id="heading">
            <div>
            <button className="hide"  onClick={hide} ><i className="uil uil-bars" id="bars"></i></button>&emsp;<i className="uil uil-search"></i><input className="quickfind" type="text" placeholder="Quick Find" onKeyUp={autocompleteMatch} style={{font: "Roboto"}}/>
            </div>
            <div className="right-heading"><i className="uil uil-check-circle"></i>{count}/{recount()}</div> 
        </section>
    </>
  );
};

export default TopNav;
