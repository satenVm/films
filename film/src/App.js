import { useState } from "react";
import Nav from '../src/components/Nav/Nav';
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Movies from './components/Movies/Movies';
function App() {
  const[show,setShow] = useState('popular');
  const[searchValue,setSearchValue] = useState('');
  const [selectedId,setSelectedId] = useState()
  const changePages = (pageName) =>{
    setShow(pageName)
  }
  const selectedPage = (id) =>{
    setSelectedId()
  }
  return (
    <div className="App">
      {selectedId }
      <Nav searchValue={searchValue} setSearchValue={setSearchValue}/>
      <Header id={selectedId} />
      <Movies changePages={changePages} />
      <List  searchValue={searchValue}  show={show}/>
    </div>
  );
}

export default App;









// veredardznuma massiv arajin arjeq et state kardalu hamar,erkrord argumentov talisa func vori mijocov et state poxuma