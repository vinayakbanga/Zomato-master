//hoc
import HomeLayoutHOC from "./HOC/home.hoc";

// components

import Temp from "./components/temp";
import Master from "./components/master";


function App() {
 return (
 <>
 <HomeLayoutHOC path="/" exact component={Temp}/>
 <HomeLayoutHOC path="/:type" exact component={Master}/>
 </>
 )
 
}

export default App;
