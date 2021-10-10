//hoc
import HomeLayoutHOC from "./HOC/home.hoc";

// components

import Temp from "./components/temp";


function App() {
 return (
 <>
 <HomeLayoutHOC path="/" exact component={Temp}/>
 </>
 )
 
}

export default App;
