import moment from 'moment'
import React from 'react'
import { createRoot } from 'react-dom/client'

const Mermaid = ({ graphDefinition }: { graphDefinition: string }) => {
  const mermaidRef = React.useRef(null)
  React.useEffect(() => {
    const _m = (window as any).mermaid

    if (graphDefinition) {
      try {
        _m.render('graphDiv', graphDefinition).then(({ svg }) => {
          mermaidRef.current.innerHTML = svg
        })
      } catch (e) {
        console.error(e)
      }
    }
  }, [graphDefinition])

  return graphDefinition ? (
    <div ref={mermaidRef} style={{ color: 'var(--primary-color)' }} />
  ) : null
}

export const parseMermaidCodeBlock = async (
  contentRef: React.MutableRefObject<HTMLDivElement>
) => {
  if (contentRef?.current) {
    const elements = contentRef.current.querySelectorAll('.lang-mermaid')
    elements.forEach((el) => {
      const replacementDiv = document.createElement('div')
      replacementDiv.style.margin = '0 auto'
      replacementDiv.style.width = 'fit-content'
      const root = createRoot(replacementDiv)
      root.render(<Mermaid graphDefinition={el.textContent} />)

      el.replaceWith(replacementDiv)
    })
  }
}

export const parseLinks = async (
  contentRef: React.MutableRefObject<HTMLDivElement>
) => {
  if (contentRef?.current) {
    const elements = contentRef.current.querySelectorAll('a')
    elements.forEach((el) => {
      el.target = '_blank'
    })
  }
}

export const formatDate = (date: string) => {
  return moment(date).format('LL')
}
