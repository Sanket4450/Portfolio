import { useState } from 'react'
import { Drawer, Box, Typography } from '@mui/material'
import { Menu } from '@mui/icons-material'
import { navButtons } from '../../data/header'
import { NavLink } from 'react-router-dom'
import { NavMenuClasses, NavMenuActiveClasses } from '../../common/styles'

export const NavMenu = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <div className=" sm:hidden">
      <div className=" hover:cursor-pointer" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        <Menu fontSize="large" className=" text-primary" />
      </div>
      <Drawer anchor="right" open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
        <h2 className=" bg-[#171717] text-white p-3 font-semibold text-2xl">Portfolio</h2>
        {navButtons.map((button) => (
          <NavLink
            key={button.id}
            to={button.path}
            onClick={() => setIsDrawerOpen(false)}
            className={({ isActive }) => (isActive ? NavMenuActiveClasses : NavMenuClasses)}
          >
            {button.text}
          </NavLink>
        ))}
      </Drawer>
    </div>
  )
}
