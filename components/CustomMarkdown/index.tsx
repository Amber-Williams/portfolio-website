import { Lib } from '@mb3r/component-library'
import Markdown from 'markdown-to-jsx'

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
  const childrenStringList = children.join(' ').split(' ')

  return (
    <h2
      id={createHeaderAncorId(children)}
      style={{
        color: 'var(--primary-color)',
        fontSize: 'var(--font-size-h2)',
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
  return (
    <p
      style={{
        color: 'var(--primary-color)',
        marginTop: '0',
        marginBottom: '1.4rem',
        fontSize: '1.2rem',
        lineHeight: '1.8rem',
        fontFamily: 'var(--font-body)',
      }}
    >
      {children}
    </p>
  )
}

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
      target="_blank"
      rel="noreferrer"
      href={props.href}
      style={{
        textDecoration: 'none',
        color: 'var(--tri-color)',
        fontWeight: 700,
        fontFamily: 'var(--font-body)',
      }}
    >
      {props.children}
    </a>
  )
}

const InlineCode = ({ children }: { children: string }) => {
  const isMultiLine = children.includes('\n')
  if (isMultiLine) {
    const fencedLangs = [
      'json',
      'yaml',
      'bash',
      'shell',
      'python',
      'js',
      'ts',
      'html',
      'css',
      'sql',
      'graphql',
      'javascript',
      'typescript',
      'rust',
      'c',
      'tsx',
      'jsx',
      'elixir',
      'make',
      'nginx',
      'vue',
      'go',
    ]
    const lang = children.split('\n')[0]

    if (fencedLangs.includes(lang)) {
      let codeBlock: any = children.split('\n')
      codeBlock.shift()
      if (lang === 'json') {
        codeBlock = codeBlock.map((line: string) => line.replace(/ {4}/g, '  '))
      }
      codeBlock = codeBlock.join('\n')

      return (
        <div
          style={{
            position: 'relative',
          }}
        >
          <p
            style={{
              position: 'absolute',
              top: '0.2rem',
              left: '0.4rem',
              color: 'var(--accent-color)',
              borderRadius: '4px',
              padding: '0.2rem 0.4rem',
              border: '1px solid var(--accent-color)',
              fontSize: '0.9em',
            }}
          >
            {lang}
          </p>
          <pre
            style={{
              backgroundColor: '#f4f4f4',
              borderRadius: '4px',
              padding: '1rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
              overflowX: 'auto',
            }}
          >
            <code
              style={{
                display: 'block',
                fontSize: '1rem',
                lineHeight: '1.5',
                fontFamily: 'monospace',
                color: 'var(--primary-color-80)',
                marginTop: '2rem',
              }}
            >
              {codeBlock}
            </code>
          </pre>
        </div>
      )
    }
  }

  return (
    <code
      style={{
        backgroundColor: '#f4f4f4',
        borderRadius: '4px',
        padding: '0.2rem 0.4rem',
        fontSize: '0.9em',
        fontFamily: 'monospace',
        color: 'var(--primary-color-80)',
      }}
    >
      {children}
    </code>
  )
}

const CodeBlock = ({ children }: { children: any }) => {
  if (children.props.className === 'lang-mermaid') {
    return (
      <pre>
        <code className={'lang-mermaid'}>{children.props.children}</code>
      </pre>
    )
  }

  return (
    <pre
      style={{
        backgroundColor: '#f4f4f4',
        borderRadius: '4px',
        padding: '1rem',
        marginTop: '1.5rem',
        marginBottom: '1.5rem',
        overflowX: 'auto',
      }}
    >
      <code
        style={{
          display: 'block',
          fontSize: '1rem',
          lineHeight: '1.5',
          fontFamily: 'monospace',
          color: 'var(--primary-color-80)',
        }}
      >
        {children}
      </code>
    </pre>
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
          code: {
            component: InlineCode,
          },
          pre: {
            component: CodeBlock,
          },
        },
      }}
    >
      {children}
    </Markdown>
  )
}

export default CustomMarkdown
