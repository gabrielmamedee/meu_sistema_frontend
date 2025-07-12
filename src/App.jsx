import React from 'react'
import FornecedorForm from './pages/Fornecedor/FornecedorForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Inicial from './pages/inicial'
import Menu from './components/Menu'
import FornecedorList from './pages/Fornecedor/FornecedorList'
import ClienteForm from './pages/Cliente/ClienteForm'



const App = () => {
  return (
    <BrowserRouter>
    <Menu />
      <Routes>
        <Route path="/" element={<Inicial />} />
        <Route path="/cadastrar-fornecedor" element={<FornecedorForm />} />
        <Route path='/listar-fornecedores' element={<FornecedorList />} />
        <Route path='/editar-fornecedor/:id' element={<FornecedorForm />} />
        <Route path="/cadastrar-cliente" element={<ClienteForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App