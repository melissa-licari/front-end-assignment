import { ItemContext } from "../App";
import React, { useContext } from "react";

const TopNav = () => {
  var { hideLeftNav, setHideLeftNav, tasks, count } = useContext(ItemContext);
  var search_terms = [tasks];

  function autocompleteMatch(input) {
    if (input === '') {
      return [];
    }
    var reg = new RegExp(input)
    return search_terms.filter(function(term) {
      if (term.match(reg)) {
        return term;
      }
    });
}
function hide() {
  setHideLeftNav(!hideLeftNav)
}

  return (
    <>
       <section id="heading">
            <div>
            <button className="hide"  onClick={hide} ><i className="uil uil-bars" id="bars"></i></button>&emsp;<i className="uil uil-search"></i><input className="quickfind" type="text" placeholder="Quick Find" onInput={autocompleteMatch} style={{font: "Roboto"}}/>
            </div>
            <div className="right-heading"><i className="uil uil-check-circle"></i>{count}</div> 
        </section>
    </>
  );
};

export default TopNav;
