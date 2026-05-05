import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import ContextProvider from './context/ContextProvider'
import Form from './pages/Form'
import Products from './pages/Products'
import Users from './pages/Users'





const App = () => {
  return (
    <>
      <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Users' element={<Users />} />
        </Routes>
      </ContextProvider>
      </BrowserRouter>
    </>
  )
}

export default App

