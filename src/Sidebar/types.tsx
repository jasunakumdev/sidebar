import { CSSProperties } from 'react'
import { ListItemTextProps } from '@mui/material/ListItemText'

export interface MenuItem {
  title: string
  icon?: React.ReactNode
  path?: string
  badge?: string | number
  children?: MenuItem[]
}

export interface SidebarItemProps {
  item: MenuItem
  onClick: (path: string) => void
  selectedPath: string | null
  customClasses?: string
  customStyle?: CSSProperties
}

export interface CustomListItemTextProps extends ListItemTextProps {
  selected?: boolean
}

export interface NavbarProps {
  data: MenuItem[]
  logo?: React.ReactNode
  title?: string
  handleNavigation: (path: string) => void
}

export interface IconProps {
  item: MenuItem
  isOpen: boolean
}

export interface BadgeProps {
  item: MenuItem
}
