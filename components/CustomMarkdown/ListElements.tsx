import { Lib } from '@mb3r/component-library'

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
            : '4.5rem', // marginLeft + paddingLeft
        fontFamily: 'var(--font-body)',
      }}
    >
      {children}
    </ul>
  )
}

const Li = ({ children }) => {
  return (
    <li
      style={{
        position: 'relative',
        marginBottom: '0.5rem',
        fontFamily: 'var(--font-body)',
      }}
    >
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
      <p
        style={{
          color: 'var(--primary-color)',
          margin: '0',
          fontSize: '1.2rem',
          lineHeight: '1.8rem',
          fontFamily: 'var(--font-body)',
        }}
      >
        {children}
      </p>
    </li>
  )
}

export { Li, Ul }
