# mui-react-sidebar

A fully customizable and theme-aware sidebar navigation component for **React** and **Material-UI (MUI)**.

This package helps you easily integrate a sidebar menu into your React applications with support for:

- Dynamic menu configuration
- Nested navigation
- MUI theme support
- Custom styling through theme overrides

---

## ✨ Features

- ⚙️ Dynamic Sidebar Configuration using JS objects
- 🎨 MUI Theme Integration (supports light/dark mode)
- 🧩 Multi-level Nested Menus
- 💡 Custom Theming via `createTheme`
- 📦 Easy integration into existing React + MUI projects
- 🚀 **Simple Navigation Handling** via callback `handleNavigation`

---

## 🚀 Installation

```bash
npm install test-mui-react-sidebar
```

or

```bash
yarn add test-mui-react-sidebar
```

---

## 📦 Usage

```tsx
import React from 'react'
import Sidebar from 'test-mui-react-sidebar'
import 'mui-react-sidebar/dist/styles.css'

import {
  Home as HomeIcon,
  Apps as AppsIcon,
  Public as PublicIcon,
  Contacts as ContactsIcon,
  People as PeopleIcon,
  MarkUnreadChatAlt as MarkUnreadChatAltIcon,
  NoteAlt as NoteAltIcon,
  Storefront as StorefrontIcon,
} from '@mui/icons-material'

const menuItems = [
  {
    title: 'Home',
    icon: <HomeIcon color="error" />,
    badge: 'New',
    path: '/',
  },
  {
    title: 'Apps',
    icon: <AppsIcon />,
    path: '/apps',
  },
  {
    title: 'Web',
    icon: <PublicIcon />,
    children: [
      {
        title: 'News',
        path: '/news',
      },
      {
        title: 'Blog',
        children: [
          {
            title: 'Posts',
            children: [
              {
                title: 'Posts-1',
                path: '/post-1',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Contacts',
    icon: <ContactsIcon />,
    badge: '2',
    path: '/about',
  },
  {
    title: 'Users',
    icon: <PeopleIcon />,
    path: '/users',
  },
  {
    title: 'Chats',
    icon: <MarkUnreadChatAltIcon />,
    badge: 5,
    path: '/chats',
  },
  {
    title: 'Notes',
    icon: <NoteAltIcon />,
    path: '/notes',
  },
  {
    title: 'eCommerce',
    icon: <StorefrontIcon />,
    path: '/ecommerce',
  },
]

export default function App() {
  return (
    <Sidebar
      data={menuItems}
      logo={<WhatshotIcon color="primary" fontSize="large" />}
      title="Admin Panel"
      handleNavigation={(path) => handleNavigationChange(path)}
    />
  )
}
```

---

## 🎨 Theme Integration

By default, the sidebar styling pulls values from the MUI theme:

| Element                  | Theme Reference                    |
| ------------------------ | ---------------------------------- |
| Text Color               | `theme.palette.text.primary`       |
| Sidebar Background       | `theme.palette.background.default` |
| Selected Item Background | `theme.palette.action.selected`    |
| Selected Text Color      | `theme.palette.primary.main`       |

---

## 🧑‍🎨 Custom Theme Overrides

To customize the sidebar styling, extend your MUI theme using `createTheme()` and pass custom values under `theme.custom.sidebar`.

```tsx
import { createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  ...existingTheme,
  custom: {
    sidebar: {
      width: 270,
      background: '#5BE49B',
      color: 'white',
      badgeBgColor: 'rgb(22, 89, 90)',
      badgeColor: 'red',
      selected: 'yellow',
    },
  },
})

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

### 🧾 Custom Theme Properties

| Property       | Description                       | Default                            |
| -------------- | --------------------------------- | ---------------------------------- |
| `width`        | Sidebar width in pixels           | `270`                              |
| `background`   | Background color of sidebar       | `theme.palette.background.default` |
| `color`        | Text color in sidebar             | `theme.palette.text.primary`       |
| `badgeBgColor` | Background color of badge         | MUI default                        |
| `badgeColor`   | Text color of badge               | MUI default                        |
| `selected`     | Background color of selected item | `theme.palette.action.selected`    |
| `menuIconTop`  | set menu icon top position        | 10                                 |

---

## 🛠️ Custom Theming

This component supports full customization through MUI's `createTheme` system by extending the default MUI `Theme` interface.

If you want to define your own sidebar theme values (e.g., colors, background, etc.), you can add custom typings like below:

```ts
// theme.d.ts or any global type declaration file
import '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      sidebar: {
        width: number
        background: string
        color: string
        badgeColor: string
        badgeBgColor: string
        selected: string
        menuIconTop: number
      }
    }
  }

  interface ThemeOptions {
    custom?: {
      sidebar?: {
        width?: number
        background?: string
        collapsedWidth?: number
        color?: string
        badgeColor?: string
        badgeBgColor?: string
        selected?: string
        menuIconTop?: number
      }
    }
  }
}
```

## 🏁 Final Notes

- Supports **React 18+** and **MUI v5+**
- Designed for dashboards, admin panels, and CMS interfaces
- Automatically adapts to MUI theme (light/dark)

---

## 👨‍💻 Author

**Jasu Nakum**

---

## 📄 License

MIT © 2025

```

```
