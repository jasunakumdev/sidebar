import { useState, useEffect } from 'react'
import { styled, useTheme } from '@mui/material/styles'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import IconButton from '@mui/material/IconButton'
import SidebarItem from './SidebarItem'
import { NavbarProps } from './types'

import './sidebar.css'

const StyledMenuButton = styled(IconButton)(() => ({
  position: 'absolute',
  zIndex: 1000,
  display: 'none',
  outline: 'none',
  '&:focus': {
    outline: 'none',
  },
  '&:focus-visible': {
    outline: 'none',
  },
  [`@media (max-width:1200px)`]: {
    display: 'inline-flex',
  },
  [`@media (min-width:1200px)`]: {
    display: 'none !important',
  },
}))

function Navbar({ data, logo, title, handleNavigation }: NavbarProps) {
  const theme = useTheme()
  const [selectedPath, setSelectedPath] = useState<string>('')
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)

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
        setSidebarOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const defaultWidth = theme?.custom?.sidebar?.width
    ? theme?.custom?.sidebar?.width
    : 270

  const menuIconTop = theme?.custom?.sidebar?.menuIconTop
    ? theme?.custom?.sidebar?.menuIconTop
    : 10
  return (
    <>
      <StyledMenuButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleSidebar}
        disableRipple
        disableFocusRipple
        style={{
          left: sidebarOpen ? defaultWidth + 15 : 15,
          top: menuIconTop,
          background: theme.palette.background.default,
          color: theme.palette.text.primary,
          textAlign: 'center',
          zIndex: 1100,
        }}
      >
        <MenuIcon />
      </StyledMenuButton>
      <div
        className={`sidebar ${sidebarOpen ? 'open' : ''}`}
        style={
          {
            width: theme?.custom?.sidebar?.width
              ? `${theme.custom.sidebar.width}px`
              : '270px',
            '--sidebar-bg':
              theme?.palette?.mode === 'dark'
                ? theme?.palette?.background?.default
                : theme?.custom?.sidebar?.background,
          } as React.CSSProperties
        }
      >
        {(logo || title) && (
          <div className="logo" onClick={() => handleClick('/')}>
            {logo}
            {title && (
              <Typography
                sx={{
                  marginLeft: '16px',
                  color: theme?.custom?.sidebar?.color
                    ? theme?.custom?.sidebar?.color
                    : theme.palette.text.primary,
                }}
                variant="h6"
              >
                {title}
              </Typography>
            )}
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

export default Navbar
