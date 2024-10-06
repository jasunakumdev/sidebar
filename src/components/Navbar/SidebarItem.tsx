import { useState } from 'react'
import { styled } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Collapse from '@mui/material/Collapse'
import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import Badge from '@mui/material/Badge'

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  '&.selected': {
    backgroundColor: theme.palette.action.selected,
    color: theme.palette.primary.main,
    '& .MuiListItemIcon-root': {
      color: theme.palette.primary.main,
    },
  },
}))

const StyledList = styled(List)(({ theme }) => ({
  marginLeft: theme.spacing(5),
}))

const StyledBadge = styled(Badge)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: theme.palette.common.white,
  borderRadius: '12px',
  padding: '2px 8px',
  fontSize: '12px',
  marginLeft: 'auto',
}))

const StyledListItemText = styled(ListItemText)(({ theme, selected }) => ({
  color: selected ? theme.palette.primary.main : theme.palette.text.primary,
}))

const StyledListItemIcon = styled(ListItemIcon)(({ theme, selected }) => ({
  color: selected ? theme.palette.primary.main : theme.palette.text.primary,
}))

const StyledExpandLessIcon = styled(ExpandLess)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

const StyledExpandMoreIcon = styled(ExpandMore)(({ theme }) => ({
  color: theme.palette.text.primary,
}))

function SidebarItem({ item, onClick, selectedPath }) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = (item) => {
    setIsOpen(!isOpen)
    onClick(item.path)
  }

  const isSelected = selectedPath === item.path

  return (
    <>
      <StyledListItemButton
        key={item.title}
        onClick={() => handleClick(item)}
        className={`${isSelected ? 'selected' : ''} list-item-button`}
      >
        {item.icon && (
          <StyledListItemIcon
            style={{ minWidth: '45px' }}
            className={`${isSelected ? 'selected-icon' : ''}`}
          >
            {item.icon}
          </StyledListItemIcon>
        )}
        <StyledListItemText primary={item.title} selected={isSelected} />
        {item.badge && (
          <StyledBadge className="badge">{item.badge}</StyledBadge>
        )}
        {item.children ? (
          isOpen ? (
            <StyledExpandLessIcon />
          ) : (
            <StyledExpandMoreIcon />
          )
        ) : null}
      </StyledListItemButton>
      {item.children && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <StyledList component="div" disablePadding>
            {item.children.map((child, index) => (
              <SidebarItem
                key={index}
                item={child}
                onClick={onClick}
                selectedPath={selectedPath}
              />
            ))}
          </StyledList>
        </Collapse>
      )}
    </>
  )
}

export default SidebarItem
