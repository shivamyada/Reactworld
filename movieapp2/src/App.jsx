import{BrowserRouter as Router, Routes, Route }from "react-router-dom"


import Header from "./component/Header"
import Home from "./pages/home/Home"
import MovieList from "./component/movie/movielist"

function App() {


  return (
    <>
      <div className="app">
        <Router>
          <Header/>      <Routes>
          <Route index element={<Home/>}></Route>   
          <Route path="movie/:id "element={<h1>movie detail pagee</h1>}></Route>
          <Route path="movie/:type "element={<MovieList/>}></Route>
          <Route path="/* "element={<h1>movie  error pagee</h1>}></Route>

          </Routes>



        </Router>




      </div>
     
    </>
  )
}

export default App
