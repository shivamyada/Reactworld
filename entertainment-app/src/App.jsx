import Header from "./components/header/Header"
import "./App.css";
import SimpleBottomNavigation from "./components/MainNav";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Movies from "./pages/Movies/Movies";
import Trending from "./pages/Trending/Trending";
import Search from "./pages/Search/Search";
import Series from "./pages/Series/Series";
import { Container } from "@material-ui/core";

function App() {
 

  return (
   <>
   <BrowserRouter>
   <Container>
    <Route path="/"  conten="movies "/>
    <Route path="/"  conten="movies "/>
    <Route path="/"  conten="movies "/>
       <Header/>
      <SimpleBottomNavigation/>
      <ontainer/>
      </BrowserRouter>  
  </>

      
     
      
    
  );
}

export default App;
