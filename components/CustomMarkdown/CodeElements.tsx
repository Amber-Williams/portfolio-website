import { Lib } from '@mb3r/component-library'
import React from 'react'

const SyntaxHighlightedCode = (props: any) => {
  const ref = React.useRef<HTMLElement>(null)
  const breakpointSize = Lib.useGetMediaQuerySize()

  React.useEffect(() => {
    const highlight = (window as any).hljs
    if (
      (ref as any).current &&
      props.className?.includes('lang-') &&
      highlight
    ) {
      highlight.highlightElement(ref.current)

      // hljs won't reprocess the element unless this attribute is removed
      ref.current.removeAttribute('data-highlighted')
    }
  }, [props.className, props.children])

  if (!Boolean(props.className?.includes('lang'))) {
    return <InlineCode>{props.children}</InlineCode>
  }

  if (Boolean(props.className?.includes('lang-txt'))) {
    return (
      <code
        style={{
          paddingTop: '1.5rem !important',
          paddingBottom: '1.5rem !important',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          fontSize: breakpointSize === 'sm' ? '80%' : '100%',
          color: 'var(--code-text-color)',
          backgroundColor: 'var(--code-background-color)',
        }}
        {...props}
        ref={ref}
      />
    )
  }

  return (
    <code
      style={{
        paddingTop: '1.5rem !important',
        paddingBottom: '1.5rem !important',
        paddingLeft: '1rem',
        paddingRight: '1rem',
        fontSize: breakpointSize === 'sm' ? '80%' : '100%',
        backgroundColor: 'transparent',
      }}
      {...props}
      ref={ref}
    />
  )
}

const InlineCode = ({ children }: { children: string }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()

  return (
    <code
      style={{
        backgroundColor: 'var(--code-background-color)',
        borderRadius: '4px',
        padding: '0.2rem 0.4rem',
        fontSize: breakpointSize === 'sm' ? '0.8rem' : '0.9rem',
        fontFamily: 'monospace',
        color: 'var(--code-text-color)',
      }}
    >
      {children}
    </code>
  )
}

const PreCode = ({ children }: { children: any }) => {
  const breakpointSize = Lib.useGetMediaQuerySize()
  const fencedLangs = [
    'txt',
    'md',
    'markdown',
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

  const lang = children.props?.className?.replace('lang-', '') || 'txt'
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    const code = children.props.children
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 1000)
    })
  }

  if (lang === 'mermaid') {
    return (
      <pre>
        <code className={'lang-mermaid'}>{children.props.children}</code>
      </pre>
    )
  }

  if (lang === 'txt') {
    return (
      <pre
        style={{
          padding: '0',
          margin: '0',
          fontSize: breakpointSize === 'sm' ? '0.8rem' : '0.9rem',
          fontFamily: 'monospace',
          color: 'var(--code-text-color)',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
        }}
      >
        {children}
      </pre>
    )
  }

  return (
    <div
      style={{
        position: 'relative',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '0.2rem',
          right: '0.2rem',
          display: 'flex',
          gap: '0.5rem',
          alignItems: 'center',
        }}
      >
        {fencedLangs.includes(lang) && (
          <p
            style={{
              color: 'var(--accent-color)',
              borderRadius: '4px',
              padding: '0.2rem 0.4rem',
              border: '1px solid var(--accent-color)',
              fontSize: '0.9em',
              margin: 0,
            }}
          >
            {lang}
          </p>
        )}
        <button
          onClick={handleCopy}
          style={{
            background: 'transparent',
            border: '1px solid white',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.2rem',
            borderRadius: '4px',
          }}
          title={copied ? 'Copied!' : 'Copy to clipboard'}
        >
          {copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: 'var(--success-color)' }}
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          ) : (
            <img
              src="/images/icons/copy.svg"
              alt="Copy"
              width={20}
              height={20}
            />
          )}
        </button>
      </div>
      <pre
        style={{
          backgroundColor: '#011627',
          borderRadius: '4px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
          maxHeight: '600px',
        }}
      >
        {children}
      </pre>
    </div>
  )
}

export { InlineCode, PreCode, SyntaxHighlightedCode }
