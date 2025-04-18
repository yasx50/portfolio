import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./Layouts/Layout"
import Home from "./components/Home"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )


}

export default App