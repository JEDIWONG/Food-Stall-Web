import Home from './screen/home'
import Layout from './components/Layout'
import {BrowserRouter,Routes,Route} from "react-router-dom"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/food-stall-web/" element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
