import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor  from "../hooks/AnimatedCursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

    $(document).keydown(function(e){ 
        if(e.which === 123){ 
     
           return false; 
     
        } 
     
    }); 

    $(document).bind("contextmenu",function(e) {  
    	e.preventDefault(); 
     
    }); 

var currentHtmlContent; 
 
var element = new Image(); 
 
var elementWithHiddenContent = document.querySelector("#element-to-hide"); 
 
var innerHtml = elementWithHiddenContent.innerHTML; 
 
 
 
element.__defineGetter__("id", function() { 
 
    currentHtmlContent= ""; 
 
}); 
 
 
 
setInterval(function() { 
 
    currentHtmlContent= innerHtml; 
 
    console.log(element); 
 
    console.clear();  
 
    elementWithHiddenContent.innerHTML = currentHtmlContent; 
 
}, 1000); 

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
