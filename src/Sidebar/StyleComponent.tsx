import ExpandLess from '@mui/icons-material/ExpandLess'
import ExpandMore from '@mui/icons-material/ExpandMore'
import { ListItemButton, ListItemButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import MUIBadge, { BadgeProps } from '@mui/material/Badge'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon'
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import { CustomListItemTextProps, IconProps } from './types'

interface CustomListItemIconProps extends ListItemIconProps {
  selected?: boolean
}

export const StyledListItemButton: React.ComponentType<ListItemButtonProps> =
  styled((props: ListItemButtonProps) => <ListItemButton {...props} />)(
    ({ theme }) => ({
      '&.selected': {
        backgroundColor: theme?.custom?.sidebar?.selected
          ? theme.custom.sidebar.selected
          : theme.palette.action.selected,
        color: theme.palette.primary.main,
        '& .MuiListItemIcon-root': {
          color: theme.palette.primary.main,
        },
      },
    })
  )

export const StyledBadge: React.ComponentType<BadgeProps> = styled(
  (props: BadgeProps) => <MUIBadge {...props} />
)(({ theme }) => ({
  backgroundColor: theme?.custom?.sidebar?.badgeBgColor
    ? theme.custom.sidebar.badgeBgColor
    : theme.palette.primary.main,
  color: theme?.custom?.sidebar?.badgeColor
    ? theme.custom.sidebar.badgeColor
    : theme.palette.common.white,
  borderRadius: '12px',
  padding: '2px 8px',
  fontSize: '12px',
  marginLeft: 'auto',
}))

export const StyledListItemText: React.ComponentType<CustomListItemTextProps> =
  styled((props: CustomListItemTextProps) => <ListItemText {...props} />)(
    ({ theme, selected }) => ({
      color: theme?.custom?.sidebar?.color
        ? theme.custom.sidebar.color
        : selected
        ? theme.palette.primary.main
        : theme.palette.text.primary,
    })
  )

export const StyledListItemIcon: React.ComponentType<CustomListItemIconProps> =
  styled((props: CustomListItemIconProps) => <ListItemIcon {...props} />)(
    ({ theme, selected }) => {
      const customColor = theme?.custom?.sidebar?.color

      return {
        color: customColor
          ? customColor
          : selected
          ? theme.palette.primary.main
          : theme.palette.text.primary,
      }
    }
  )

export const StyledExpandLessIcon = styled((props: any) => (
  <ExpandLess {...props} />
))(({ theme }) => ({
  color: theme?.custom?.sidebar?.color
    ? theme.custom.sidebar.color
    : theme.palette.text.primary,
}))

export const StyledExpandMoreIcon = styled((props: any) => (
  <ExpandMore {...props} />
))(({ theme }) => ({
  color: theme?.custom?.sidebar?.color
    ? theme.custom.sidebar.color
    : theme.palette.text.primary,
}))

export const IconComponent = ({ item, isOpen }: IconProps) => {
  return item.children ? (
    isOpen ? (
      <StyledExpandLessIcon />
    ) : (
      <StyledExpandMoreIcon />
    )
  ) : null
}

interface Item {
  badge?: string | number
}

interface CustomBadgeProps extends BadgeProps {
  item: Item
}

export const CustomBadge: React.FC<CustomBadgeProps> = ({ item }) => {
  return item.badge ? (
    <StyledBadge className="badge">{item.badge}</StyledBadge>
  ) : null
}

export const CustomTooltip: React.ComponentType<TooltipProps> = styled(
  (props: TooltipProps) => (
    <Tooltip
      {...props}
      arrow
      placement="right"
      classes={{ popper: props.className }}
    />
  )
)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme?.palette?.background?.default,
    color: theme.palette.text.primary,
    fontSize: 13,
    padding: '6px 12px',
    borderRadius: 6,
    boxShadow: theme.shadows[1],
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: theme?.palette?.background?.default,
  },
}))
