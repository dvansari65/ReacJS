import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <main className="min-h-screen p-4">
        <Outlet />
    </main>
    <Footer/>
    </>
  )
}

export default Layout