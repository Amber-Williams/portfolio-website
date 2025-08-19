import React from 'react'

interface ResponsiveContainerProps {
  children: React.ReactNode
  direction?: 'row' | 'column'
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline'
  gap?: '0' | '1' | '2' | '3' | '4' | '5'
  className?: string
  breakpoint?: 'sm' | 'md' | 'lg'
  mobileDirection?: 'row' | 'column'
  style?: React.CSSProperties
}

const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  direction = 'column',
  justify = 'center',
  align = 'center',
  gap = '0',
  className = '',
  breakpoint = 'md',
  mobileDirection = 'column',
  style = {},
}) => {
  // Map props to Bootstrap classes
  const getDirectionClass = () => {
    return direction === 'row' ? 'flex-row' : 'flex-column'
  }

  const getJustifyClass = () => {
    switch (justify) {
      case 'start':
        return 'justify-content-start'
      case 'center':
        return 'justify-content-center'
      case 'end':
        return 'justify-content-end'
      case 'between':
        return 'justify-content-between'
      case 'around':
        return 'justify-content-around'
      case 'evenly':
        return 'justify-content-evenly'
      default:
        return 'justify-content-center'
    }
  }

  const getAlignClass = () => {
    switch (align) {
      case 'start':
        return 'align-items-start'
      case 'center':
        return 'align-items-center'
      case 'end':
        return 'align-items-end'
      case 'stretch':
        return 'align-items-stretch'
      case 'baseline':
        return 'align-items-baseline'
      default:
        return 'align-items-center'
    }
  }

  const getGapClass = () => {
    return gap !== '0' ? `gap-${gap}` : ''
  }

  const getMobileDirectionClass = () => {
    const prefix = breakpoint === 'sm' ? 'flex-sm' : breakpoint === 'lg' ? 'flex-lg' : 'flex-md'
    return mobileDirection === 'row' ? `${prefix}-row` : `${prefix}-column`
  }

  const classes = [
    'd-flex',
    getDirectionClass(),
    getJustifyClass(),
    getAlignClass(),
    getGapClass(),
    getMobileDirectionClass(),
    className
  ].filter(Boolean).join(' ')

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  )
}

export default ResponsiveContainer