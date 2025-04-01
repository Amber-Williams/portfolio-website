import { Lib } from '@mb3r/component-library'
import Markdown from 'markdown-to-jsx'

import { PreCode, SyntaxHighlightedCode } from './CodeElements'
import { Li, Ul } from './ListElements'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from './TableElements'

const createHeaderAncorId = (children: string[]) => {
  return children && children[0] && typeof children[0] === 'string'
    ? children[0].replace(/\s/g, '-').toLowerCase()
    : undefined
}

const H1 = ({ children }: { children: string }) => {
  return (
    <h1
      style={{
        color: 'var(--primary-color)',
        fontSize: 'var(--font-size-h1)',
        fontFamily: 'var(--font-header)',
      }}
    >
      {children}
    </h1>
  )
}

const H2 = ({ children }: { children: string[] }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()
  const childrenStringList = children.join(' ').split(' ')

  return (
    <h2
      id={createHeaderAncorId(children)}
      style={{
        color: 'var(--primary-color)',
        fontSize: breakpointSize === 'sm' ? '1.5rem' : 'var(--font-size-h2)',
        margin: '2rem 0 1rem 0',
        fontFamily: 'var(--font-header)',
      }}
    >
      {childrenStringList.map((child, index) => (
        <span
          key={index}
          style={{
            backgroundImage:
              'linear-gradient(hsla(0, 0%, 100%, 0) 55%, var(--secondary-color) 45%)',
            width: 'fit-content',
          }}
        >
          {child}{' '}
        </span>
      ))}
    </h2>
  )
}

const H3 = ({ children }: { children: string }) => {
  return (
    <h3
      style={{
        color: 'var(--primary-color)',
        fontSize: 'var(--font-size-h3)',
        fontFamily: 'var(--font-header)',
      }}
    >
      {children}
    </h3>
  )
}

const H4 = ({ children }: { children: string }) => {
  return (
    <h4
      style={{
        color: 'var(--primary-color)',
        fontSize: 'var(--font-size-h4)',
        fontFamily: 'var(--font-header)',
      }}
    >
      {children}
    </h4>
  )
}

const H5 = ({ children }: { children: string }) => {
  return (
    <h5
      style={{
        color: 'var(--primary-color)',
        fontSize: 'var(--font-size-h5)',
        fontFamily: 'var(--font-header)',
      }}
    >
      {children}
    </h5>
  )
}

const H6 = ({ children }: { children: string }) => {
  return (
    <h6
      style={{
        color: 'var(--primary-color)',
        fontSize: 'var(--font-size-h5)',
        fontFamily: 'var(--font-header)',
      }}
    >
      {children}
    </h6>
  )
}

const P = ({ children }: { children: string }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()

  return (
    <p
      style={{
        color: 'var(--primary-color)',
        marginTop: '0',
        marginBottom: '1.4rem',
        fontSize: breakpointSize === 'sm' ? '1rem' : '1.2rem',
        lineHeight: breakpointSize === 'sm' ? '1.5rem' : '1.8rem',
        fontFamily: 'var(--font-body)',
      }}
    >
      {children}
    </p>
  )
}

const Ahref = (props: any) => {
  if (props.className && props.className.includes('button')) {
    return (
      <a
        target="_blank"
        rel="noreferrer"
        href={props.href}
        style={{
          textDecoration: 'none',
          color: 'white',
          backgroundColor: 'var(--accent-color)',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          fontWeight: 700,
          fontFamily: 'var(--font-body)',
        }}
        onMouseEnter={(e: any) => {
          e.target.style.backgroundColor = 'var(--accent-color-darker)'
        }}
        onMouseLeave={(e: any) => {
          e.target.style.backgroundColor = 'var(--accent-color)'
        }}
      >
        {props.children}
      </a>
    )
  }

  return (
    <a
      target={props.href.includes('https://') ? '_blank' : '_self'}
      rel="noreferrer"
      href={props.href}
      style={{
        textDecoration: 'underline',
        textDecorationColor: 'color-mix(in srgb, var(--tri-color) 30%, transparent) ',
        textDecorationThickness: '3px',
        textDecorationSkipInk: 'none',
        color: 'var(--primary-color)',
        fontFamily: 'var(--font-body)',
        paddingBottom: '0.1rem',
      }}
      onMouseOver={(e: any) => {
        e.target.style.color = 'var(--tri-color)'
      }}
      onMouseOut={(e: any) => {
        e.target.style.textDecoration = 'underline'
        e.target.style.textDecorationColor = 'color-mix(in srgb, var(--tri-color) 30%, transparent) '
        e.target.style.textDecorationThickness = '3px'
        e.target.style.color = 'var(--primary-color)'
      }}
    >
      {props.children}
    </a>
  )
}

const CustomMarkdown = ({
  children,
  hideH1,
}: {
  children: string
  hideH1?: true
}) => {
  return (
    <Markdown
      options={{
        overrides: {
          h1: {
            component: hideH1 ? () => null : H1,
          },
          h2: {
            component: H2,
          },
          h3: {
            component: H3,
          },
          h4: {
            component: H4,
          },
          h5: {
            component: H5,
          },
          h6: {
            component: H6,
          },
          p: {
            component: P,
          },
          ul: {
            component: Ul,
          },
          li: {
            component: Li,
          },
          a: {
            component: Ahref,
          },
          pre: {
            component: PreCode,
          },
          code: {
            component: SyntaxHighlightedCode,
          },
          table: { component: Table },
          thead: { component: TableHead },
          tbody: { component: TableBody },
          tr: { component: TableRow },
          th: {
            component: (props) => <TableCell isHeader={true} {...props} />,
          },
          td: {
            component: (props) => <TableCell isHeader={false} {...props} />,
          },
        },
      }}
    >
      {children}
    </Markdown>
  )
}

export default CustomMarkdown
