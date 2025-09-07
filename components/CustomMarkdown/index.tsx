import { Lib } from '@mb3r/component-library'
import Markdown from 'markdown-to-jsx'

import { PreCode, SyntaxHighlightedCode } from './CodeElements'
import { Li, Ul, Ol } from './ListElements'
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
        textDecorationColor:
          'color-mix(in srgb, var(--tri-color) 50%, transparent) ',
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
        e.target.style.textDecorationColor =
          'color-mix(in srgb, var(--tri-color) 50%, transparent) '
        e.target.style.textDecorationThickness = '3px'
        e.target.style.color = 'var(--primary-color)'
      }}
    >
      {props.children}
    </a>
  )
}

const QuoteIcon = ({ breakpointSize }: { breakpointSize: string }) => (
  <svg
    width={breakpointSize === 'sm' ? '24' : '24'}
    height={breakpointSize === 'sm' ? '24' : '24'}
    viewBox="0 0 24 24"
    fill="none"
    style={{
      position: 'absolute',
      top: breakpointSize === 'sm' ? '0.5rem' : '1rem',
      left: breakpointSize === 'sm' ? '1rem' : '1.5rem',
      opacity: 0.3,
    }}
  >
    <path
      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"
      fill="var(--tri-color)"
    />
  </svg>
)

const Quote = ({ children }: { children: React.ReactNode }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()

  const parseQuoteAndAuthor = (content: React.ReactNode) => {
    const quoteString = content?.[0].props?.children?.[0]
    if (quoteString && typeof quoteString === 'string') {
      const hasAuthorDash = quoteString.lastIndexOf(' - ') !== -1

      if (hasAuthorDash) {
        const lastDashIndex = quoteString.lastIndexOf(' - ')
        let quote = quoteString.substring(0, lastDashIndex)
        const author = quoteString.substring(lastDashIndex + 3)

        quote = quote.replace(/["“”]/g, '')

        return { quote, author }
      }

      let quote = quoteString
      quote = quote.replace(/["“”]/g, '')
      return { quote, author: null }
    }
    return { quote: content, author: null }
  }

  const { quote, author } = parseQuoteAndAuthor(children)

  return (
    <blockquote
      style={{
        position: 'relative',
        margin: 0,
        padding: breakpointSize === 'sm' ? '1rem 0.5rem' : '1.5rem 1rem',
        fontSize: breakpointSize === 'sm' ? '1.25rem' : '1.5rem',
        lineHeight: breakpointSize === 'sm' ? '1.8rem' : '2.2rem',
        fontFamily: 'var(--font-body)',
        color: 'var(--primary-text-color-dark)',
        fontWeight: '400',
        border: 'none',
        borderRadius: '8px',
      }}
    >
      <QuoteIcon breakpointSize={breakpointSize} />
      <div
        style={{
          marginBottom: author ? '0.5rem' : '0',
          fontWeight: '400',
          paddingLeft: '2.5rem',
        }}
      >
        {quote}
      </div>
      {author && (
        <cite
          style={{
            display: 'block',
            paddingLeft: '2.5rem',
            fontSize: breakpointSize === 'sm' ? '1rem' : '1.1rem',
            fontStyle: 'normal',
            fontWeight: '400',
            color: 'var(--secondary-text-color-dark)',
          }}
        >
          — {author}
        </cite>
      )}
    </blockquote>
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
          ol: {
            component: Ol,
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
          blockquote: {
            component: Quote,
          },
        },
      }}
    >
      {children}
    </Markdown>
  )
}

export default CustomMarkdown
