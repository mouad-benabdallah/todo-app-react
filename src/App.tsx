import { GlobalStyle } from './shared/ui'
import TodoList from './todo_list/TodoList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/Home'
import Login from './login/Login'
import Subscription from './subscription/Subscription'

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/list/:id" element={<TodoList />}></Route>
          <Route path="/connexion" element={<Login />}></Route>
          <Route path="/inscription" element={<Subscription />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
