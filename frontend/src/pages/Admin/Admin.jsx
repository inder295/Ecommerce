import { Header } from '../../components/AdminPanel/Header'
import { Sidebar } from '../../components/AdminPanel/Sidebar'
import { Outlet } from 'react-router-dom'

export const Admin = () => {
  return (
    <div>
      <Header/>
      <Sidebar/>
      <Outlet/>
    </div>
  )
}


