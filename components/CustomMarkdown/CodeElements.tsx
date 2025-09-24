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

  if (props.className?.includes('lang-txt')) {
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

  if (props.className?.includes('lang')) {
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

  return <InlineCode>{props.children}</InlineCode>
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
      className="code-example"
      style={{ maxWidth: '1200px', margin: '16px auto' }}
    >
      <header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.5rem',
          fontSize: '0.875rem',
          borderTopLeftRadius: '6px',
          borderTopRightRadius: '6px',
          borderTop: '1px solid var(--border-color, #30363d)',
          borderLeft: '1px solid var(--border-color, #30363d)',
          borderRight: '1px solid var(--border-color, #30363d)',
          backgroundColor: 'var(--header-bg-color, #02111c)',
          color: 'var(--text-color, #e6edf3)',
        }}
      >
        <span style={{ flex: 1 }}>
          {fencedLangs.includes(lang)
            ? lang.charAt(0).toUpperCase() + lang.slice(1)
            : 'Code'}
        </span>
        <button
          onClick={handleCopy}
          style={{
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0.25rem',
            borderRadius: '6px',
            color: 'var(--text-color, #e6edf3)',
          }}
          title={copied ? 'Copied!' : 'Copy to clipboard'}
          aria-label={`Copy ${lang} code to clipboard`}
        >
          {copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              style={{ fill: 'var(--text-color, #e6edf3)' }}
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          ) : (
            <svg
              version="1.1"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              style={{ fill: 'currentColor' }}
              aria-hidden="true"
            >
              <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path>
              <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path>
            </svg>
          )}
        </button>
      </header>
      <pre
        style={{
          backgroundColor: '#011627',
          border: '1px solid var(--border-color, #30363d)',
          borderTop: 'none',
          borderBottomLeftRadius: '6px',
          borderBottomRightRadius: '6px',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
          maxHeight: '600px',
          margin: 0,
          fontSize: breakpointSize === 'sm' ? '0.8rem' : '0.9rem',
          fontFamily: 'monospace',
        }}
      >
        {children}
      </pre>
    </div>
  )
}

export { InlineCode, PreCode, SyntaxHighlightedCode }
