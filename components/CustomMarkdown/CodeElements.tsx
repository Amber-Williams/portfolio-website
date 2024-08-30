import React from 'react'

const SyntaxHighlightedCode = (props: any) => {
  const ref = React.useRef<HTMLElement>(null)

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

  return <code {...props} ref={ref} />
}

const InlineCode = ({ children }: { children: string }) => {
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
      {fencedLangs.includes(lang) && (
        <p
          style={{
            position: 'absolute',
            top: '0.2rem',
            right: '0.2rem',
            color: 'var(--accent-color)',
            borderRadius: '4px',
            padding: '0.2rem 0.4rem',
            border: '1px solid var(--accent-color)',
            fontSize: '0.9em',
          }}
        >
          {lang}
        </p>
      )}
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
