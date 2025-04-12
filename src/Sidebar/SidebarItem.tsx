import { useState, useRef, useEffect } from 'react'
import List from '@mui/material/List'
import Collapse from '@mui/material/Collapse'
import {
  StyledListItemButton,
  StyledListItemText,
  StyledListItemIcon,
  IconComponent,
  CustomBadge,
  CustomTooltip,
} from './StyleComponent'
import { SidebarItemProps, MenuItem } from './types'
import Typography from '@mui/material/Typography'

function SidebarItem({
  item,
  onClick,
  selectedPath,
  customClasses,
  customStyle,
}: SidebarItemProps) {
  const [isOpen, setIsOpen] = useState(false)
  const textRef = useRef<HTMLSpanElement>(null)
  const [showTooltip, setShowTooltip] = useState(false)

  const handleClick = (item: MenuItem) => {
    setIsOpen(!isOpen)
    if (item.path) {
      onClick(item.path)
    }
  }
  const isSelected = selectedPath === item.path

  useEffect(() => {
    const el = textRef.current
    if (el && el.scrollWidth > el.clientWidth) {
      setShowTooltip(true)
    } else {
      setShowTooltip(false)
    }
  }, [item.title])

  return (
    <>
      <StyledListItemButton
        key={item.title}
        onClick={() => handleClick(item)}
        className={`${
          isSelected ? 'selected' : ''
        } list-item-button ${customClasses}`}
        sx={{ ...customStyle }}
      >
        {item.icon && (
          <StyledListItemIcon
            style={{ minWidth: '45px' }}
            className={`${isSelected ? 'selected-icon' : ''}`}
          >
            {item.icon}
          </StyledListItemIcon>
        )}
        {showTooltip ? (
          <CustomTooltip title={item.title}>
            <StyledListItemText
              primary={
                <Typography
                  ref={textRef}
                  noWrap
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '100%',
                  }}
                >
                  {item.title}
                </Typography>
              }
              selected={isSelected}
              disableTypography
            />
          </CustomTooltip>
        ) : (
          <StyledListItemText
            primary={
              <Typography
                ref={textRef}
                noWrap
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  maxWidth: '100%',
                }}
              >
                {item.title}
              </Typography>
            }
            selected={isSelected}
            disableTypography
          />
        )}

        <CustomBadge item={item} />
        <IconComponent item={item} isOpen={isOpen} />
      </StyledListItemButton>
      {item.children && (
        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <List
            className="nested-menu"
            component="div"
            disablePadding
            sx={{ ...customStyle }}
          >
            {item.children.map((child, index) => (
              <SidebarItem
                key={index}
                item={child}
                onClick={onClick}
                selectedPath={selectedPath}
                customClasses="nested-list-item"
                customStyle={{ marginLeft: '42px' }}
              />
            ))}
          </List>
        </Collapse>
      )}
    </>
  )
}

export default SidebarItem
