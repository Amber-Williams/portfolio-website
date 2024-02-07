import moment from 'moment'
import React from 'react'
import ReactDOM from 'react-dom'

const Mermaid = ({ graphDefinition }: { graphDefinition: string }) => {
  const [html, setHtml] = React.useState('')
  React.useEffect(() => {
    if (graphDefinition) {
      try {
        const _m = (window as any).mermaid
        _m.render('graphDiv', graphDefinition).then(({ svg }) => {
          setHtml(svg)
        })
      } catch (e) {
        setHtml('')
        console.error(e)
      }
    }
  }, [graphDefinition])

  return graphDefinition ? (
    <div dangerouslySetInnerHTML={{ __html: html }} />
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
      ReactDOM.render(
        <Mermaid graphDefinition={el.textContent} />,
        replacementDiv
      )

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
