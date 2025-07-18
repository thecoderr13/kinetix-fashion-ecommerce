import React from 'react'
import Topbar from '../Layouts/Topbar'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header>
        {/* Topbar */}
        <Topbar />
        {/* Navbar */}
        <Navbar />
        {/* CartDrawer */}
    </header>
  )
}

export default Header