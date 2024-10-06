// App.js
import './App.css'

import DraftsIcon from '@mui/icons-material/Drafts'
import SendIcon from '@mui/icons-material/Send'
import StarBorder from '@mui/icons-material/StarBorder'
import HomeIcon from '@mui/icons-material/Home'
import StorefrontIcon from '@mui/icons-material/Storefront'
import AppsIcon from '@mui/icons-material/Apps'
import PublicIcon from '@mui/icons-material/Public'
import ContactsIcon from '@mui/icons-material/Contacts'
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt'
import NoteAltIcon from '@mui/icons-material/NoteAlt'
import PeopleIcon from '@mui/icons-material/People'

import Sidebar from './components/Navbar/Navabar'
import Logo from './assets/react.svg'
import { Box, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import RouterComponent from './Router'
import { useNavigate } from 'react-router-dom'

const data = [
  {
    title: 'Dashboard',
    icon: <HomeIcon />,
    badge: 'New',
    path: '/',
    element: '',
  },
  { title: 'Apps', icon: <AppsIcon />, path: '/apps', element: '' },
  {
    title: 'Web',
    icon: <PublicIcon />,
    children: [
      {
        title: 'News',
        icon: <SendIcon />,
        path: '/web/news',
        element: '',
      },
      {
        title: 'Blog',
        icon: <DraftsIcon />,
        children: [
          {
            title: 'Posts',
            icon: <StarBorder />,
            path: '/blog',
            element: '',
          },
        ],
      },
    ],
  },
  {
    title: 'Contacts',
    icon: <ContactsIcon />,
    badge: '2',
    path: '/contacts',
    element: '',
  },
  { title: 'Users', icon: <PeopleIcon />, path: '/users', element: '' },
  {
    title: 'Chats',
    icon: <MarkUnreadChatAltIcon />,
    badge: 5,
    path: '/chats',
    element: '',
  },
  { title: 'Notes', icon: <NoteAltIcon />, path: '/notes', element: '' },
  {
    title: 'eCommerce',
    icon: <StorefrontIcon />,
    path: '/ecommerce',
    element: '',
  },
]

function App() {
  const isSmallScreen = useMediaQuery('(max-width:1200px)')
  const theme = useTheme()
  //const navigate = useNavigate()

  const handleNavigationChange = (path) => {
    console.log('PATH--->', path)
    //navigate(path)
  }

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        backgroundColor:
          theme.palette.mode === 'dark'
            ? theme.palette.background.default
            : '#fff',
      }}
    >
      <div style={{ minWidth: !isSmallScreen ? '270px' : '0px' }}>
        <Sidebar
          data={data}
          logo={<img src={Logo} alt="Logo" />}
          title="Navigation"
          handleNavigation={(path) => handleNavigationChange(path)}
        />
      </div>
      <Box component="main" style={{ flexGrow: 1, margin: '8px' }}>
        <RouterComponent />
      </Box>
    </div>
  )
}

export default App
