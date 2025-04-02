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

  if (Boolean(props.className?.includes('lang')) === false) {
    return <InlineCode>{props.children}</InlineCode>
  }

  return (
    <code
      style={{
        fontSize: breakpointSize === 'sm' ? '80%' : '100%',
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
        backgroundColor: '#f4f4f4',
        borderRadius: '4px',
        padding: '0.2rem 0.4rem',
        fontSize: breakpointSize === 'sm' ? '0.8rem' : '0.9rem',
        fontFamily: 'monospace',
        color: 'var(--quad-color)',
      }}
    >
      {children}
    </code>
  )
}

const PreCode = ({ children }: { children: any }) => {
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

  const lang = children.props.className.replace('lang-', '')
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    const code = children.props.children;
    navigator.clipboard.writeText(code)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1000);
      })
  }

  if (lang === 'mermaid') {
    return (
      <pre>
        <code className={'lang-mermaid'}>{children.props.children}</code>
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
          title={copied ? "Copied!" : "Copy to clipboard"}
        >
          {copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              style={{ fill: 'var(--success-color)' }}
            >
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
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
          padding: '0.2rem',
          marginTop: '1.5rem',
          marginBottom: '1.5rem',
          overflowX: 'auto',
          whiteSpace: 'pre-wrap',
        }}
      >
        {children}
      </pre>
    </div>
  )
}

export { InlineCode, PreCode, SyntaxHighlightedCode }
