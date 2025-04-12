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
        background?: string
        color?: string
        badgeColor?: string
        badgeBgColor?: string
        selected?: string
        menuIconTop?: number
      }
    }
  }
}
