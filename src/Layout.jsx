import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"


function Layout() {
  return (
    <>
    <h1 className="">hello</h1>
    <Navbar />
    <Outlet />
    <h1>hello</h1>
    </>
  )
}

export default Layout
