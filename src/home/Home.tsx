import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BottomNav from '../shared/BottomNav'

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const registeredUser = localStorage.getItem('user')

    if (!registeredUser) {
      navigate('/connexion')
    }
  })
  return (
    <>
      <h1>home</h1>
      <p>
        <Link to="/list/12558">la list todo</Link>
      </p>
      <BottomNav />
    </>
  )
}
