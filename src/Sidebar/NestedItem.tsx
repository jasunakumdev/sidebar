import { useState } from 'react'
import List from '@mui/material/List'
import Collapse from '@mui/material/Collapse'
import {
  StyledListItemButton,
  StyledListItemText,
  IconComponent,
} from './StyleComponent'
import { SidebarItemProps, MenuItem } from './types'

const NestedItems = ({ item, onClick, selectedPath }: SidebarItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (item: MenuItem) => {
    setIsOpen(!isOpen)
    if (item?.path) onClick(item.path)
  }

  let isSelected = selectedPath === item.path
  return (
    <>
      <StyledListItemButton
        key={item.title}
        onClick={() => handleClick(item)}
        className={`${
          isSelected ? 'selected' : ''
        } list-item-button nested-list-item`}
        sx={{ marginLeft: '40px' }}
      >
        <StyledListItemText primary={item.title} selected={isSelected} />
        <IconComponent item={item} isOpen={isOpen} />
      </StyledListItemButton>
      {item.children && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List
            className="nested-menu"
            component="div"
            disablePadding
            sx={{ marginLeft: '40px' }}
          >
            {item.children.map((child, index) => (
              <NestedItems
                key={index}
                item={child}
                onClick={onClick}
                selectedPath={selectedPath}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  )
}
export default NestedItems
