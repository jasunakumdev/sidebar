import { useState, useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'

import SidebarItem from './SidebarItem'
import './Navbar.css'

const StyledButtonIcon = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

function Sidebar({ data, logo, title, handleNavigation }) {
  const theme = useTheme()

  const [selectedPath, setSelectedPath] = useState<string>(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleClick = (path: string) => {
    if (path) {
      setSelectedPath(path)
    }
    handleNavigation(path)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1200) {
        setSidebarOpen(false) // Remove the open class
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      <StyledButtonIcon
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleSidebar}
        className={`menu-button ${sidebarOpen ? 'open' : ''}`}
      >
        <MenuIcon />
      </StyledButtonIcon>

      <div
        className={`sidebar ${sidebarOpen ? 'open' : ''}`}
        style={{
          backgroundColor:
            theme.palette.mode === 'dark'
              ? theme.palette.background.default
              : '#fff',
        }}
      >
        {(logo || title) && (
          <div className="logo">
            {logo}
            {title && <StyledTypography variant="h6">{title}</StyledTypography>}
          </div>
        )}
        <div className="sidebar-list">
          <List component="nav" aria-labelledby="nested-list-subheader">
            {data.map((item, index) => (
              <SidebarItem
                key={index}
                item={item}
                onClick={handleClick}
                selectedPath={selectedPath}
              />
            ))}
          </List>
        </div>
      </div>
    </>
  )
}

export default Sidebar
