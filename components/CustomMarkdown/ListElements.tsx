import { Lib } from '@mb3r/component-library'
import React from 'react'

const Ul = ({ children }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()

  return (
    <ul
      style={{
        listStyleType: 'none',
        paddingLeft:
          breakpointSize === 'sm' || breakpointSize === 'md'
            ? '0.8rem'
            : '1.5rem',
        marginLeft:
          breakpointSize === 'sm' || breakpointSize === 'md' ? '1rem' : '3rem',
        marginRight:
          breakpointSize === 'sm' || breakpointSize === 'md'
            ? '1.2rem'
            : '4.5rem',
        fontFamily: 'var(--font-body)',
      }}
    >
      {children}
    </ul>
  )
}

const Ol = ({ children }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()

  const numberedChildren = React.Children.map(children, (child, index) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...(child.props as any),
        index,
        isOrdered: true,
      })
    }
    return child
  })

  return (
    <ol
      style={{
        listStyleType: 'none',
        paddingLeft:
          breakpointSize === 'sm' || breakpointSize === 'md'
            ? '0.8rem'
            : '1.5rem',
        marginLeft:
          breakpointSize === 'sm' || breakpointSize === 'md' ? '2rem' : '3rem',
        marginRight:
          breakpointSize === 'sm' || breakpointSize === 'md'
            ? '1.2rem'
            : '4.5rem',
        fontFamily: 'var(--font-body)',
      }}
    >
      {numberedChildren}
    </ol>
  )
}

const Li = ({ children, index, isOrdered }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()

  return (
    <li
      style={{
        position: 'relative',
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-body)',
      }}
    >
      {isOrdered ? (
        <span
          style={{
            position: 'absolute',
            left: '-2rem',
            top: '0.3rem',
            width: '1.2rem',
            height: '1.2rem',
            backgroundColor: 'var(--accent-color)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: breakpointSize === 'sm' ? '0.75rem' : '0.8rem',
            fontWeight: '700',
            color: 'white',
            fontFamily: 'var(--font-body)',
          }}
        >
          {(index || 0) + 1}
        </span>
      ) : (
        <span
          style={{
            position: 'absolute',
            left: '-1.5rem',
            top: '0.5rem',
            width: '0.5rem',
            height: '0.5rem',
            backgroundColor: 'var(--accent-color)',
            borderRadius: '50%',
          }}
        />
      )}
      <p
        style={{
          color: 'var(--primary-color)',
          marginTop: '0',
          marginBottom: '0',
          fontSize: breakpointSize === 'sm' ? '1rem' : '1.2rem',
          lineHeight: breakpointSize === 'sm' ? '1.5rem' : '1.8rem',
          fontFamily: 'var(--font-body)',
        }}
      >
        {children}
      </p>
    </li>
  )
}

export { Li, Ol, Ul }
