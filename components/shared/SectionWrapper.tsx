import React from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  backgroundColor?: 'primary' | 'white' | 'transparent'
  className?: string
  height?: string
  hasPositionRelative?: boolean
  hasCurve?: boolean
  curveDirection?: 'top' | 'bottom'
  fullWidth?: boolean
  style?: React.CSSProperties
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  backgroundColor = 'primary',
  className = '',
  height = 'auto',
  hasPositionRelative = true,
  hasCurve = false,
  curveDirection = 'bottom',
  fullWidth = true,
  style = {},
}) => {
  const getBackgroundColor = () => {
    switch (backgroundColor) {
      case 'primary':
        return 'var(--primary-color)'
      case 'white':
        return 'white'
      case 'transparent':
        return 'transparent'
      default:
        return 'var(--primary-color)'
    }
  }

  const getCurveStyles = () => {
    if (!hasCurve) return ''

    return `
      .SectionWrapper__curve {
        width: 100%;
        right: 0;
        ${curveDirection === 'top' ? 'top: -1px;' : 'bottom: 0;'}
        position: absolute;
        ${curveDirection === 'bottom' ? 'transform: rotate(180deg);' : ''}
        fill: ${
          backgroundColor === 'primary' ? 'white' : 'var(--primary-color)'
        };
      }
    `
  }

  return (
    <React.Fragment>
      <style jsx>
        {`
          .SectionWrapper {
            background-color: ${getBackgroundColor()};
            width: ${fullWidth ? '100vw' : '100%'};
            height: ${height};
            ${fullWidth ? 'max-width: 100%;' : ''}
          }

          ${getCurveStyles()}
        `}
      </style>
      <div
        className={`SectionWrapper overflow-hidden ${
          hasPositionRelative ? 'position-relative' : ''
        } ${className}`}
        style={style}
      >
        {hasCurve && (
          <svg
            className="SectionWrapper__curve"
            width="500"
            height="80"
            viewBox="0 0 500 80"
            preserveAspectRatio="none"
          >
            <path d="M0,0 L0,40 Q250,80 500,40 L500,0 Z"></path>
          </svg>
        )}
        {children}
      </div>
    </React.Fragment>
  )
}

export default SectionWrapper
