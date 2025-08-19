import React from 'react'

interface GradientTextProps {
  children: React.ReactNode
  variant: 'blue' | 'orange' | 'green'
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'
  style?: React.CSSProperties
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  variant,
  className = '',
  as = 'span',
  style = {},
}) => {
  const getGradientColors = () => {
    switch (variant) {
      case 'blue':
        return '-webkit-linear-gradient(-70deg, #a2facf 0%, #64acff 100%)'
      case 'orange':
        return '-webkit-linear-gradient(-70deg, #ff7170 0%, #ffe57f 100%)'
      case 'green':
        return '-webkit-linear-gradient(-70deg, #70ffa7 0%, #fffd7f 100%)'
      default:
        return '-webkit-linear-gradient(-70deg, #a2facf 0%, #64acff 100%)'
    }
  }

  const Component = as

  return (
    <React.Fragment>
      <style jsx>
        {`
          .GradientText {
            background: ${getGradientColors()};
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            box-decoration-break: clone;
            -webkit-box-decoration-break: clone;
          }
        `}
      </style>
      <Component className={`GradientText ${className}`} style={style}>
        {children}
      </Component>
    </React.Fragment>
  )
}

export default GradientText