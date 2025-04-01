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

export const estimateReadTime = (content: string): string | undefined => {
  try {
    const WORDS_PER_MINUTE = 250; // Average reading speed
    const SECONDS_PER_IMAGE = 10;
    const SECONDS_PER_CODE_BLOCK = 30;
    const ROUND_UP = true;

    const wordCount = content
      .trim()
      .replace(/\s+/g, ' ')
      .split(' ')
      .filter(word => word.length > 0)
      .length;

    // Match both markdown format ![...](...)  and HTML format <img ... />
    const markdownImageRegex = /!\[.*?\]\(.*?\)/g;
    const htmlImageRegex = /<img\s[^>]*>/g;

    const markdownImageMatches = content.match(markdownImageRegex) || [];
    const htmlImageMatches = content.match(htmlImageRegex) || [];
    const imageCount = markdownImageMatches.length + htmlImageMatches.length;

    const codeBlockMatches = content.match(/```[\s\S]*?```/g) || [];
    const codeBlockCount = codeBlockMatches.length;

    const readTimeMinutes = wordCount / WORDS_PER_MINUTE;

    const imageTimeMinutes = (imageCount * SECONDS_PER_IMAGE) / 60;
    const codeBlockTimeMinutes = (codeBlockCount * SECONDS_PER_CODE_BLOCK) / 60;
    let totalReadTimeMinutes = readTimeMinutes + imageTimeMinutes + codeBlockTimeMinutes;

    if (ROUND_UP) {
      totalReadTimeMinutes = Math.ceil(totalReadTimeMinutes);
    }

    let readTimeDisplay: string;
    if (totalReadTimeMinutes < 1) {
      const seconds = Math.round(totalReadTimeMinutes * 60);
      readTimeDisplay = `${seconds} sec${seconds !== 1 ? 's' : ''}`;
    } else {
      readTimeDisplay = `${totalReadTimeMinutes} min${totalReadTimeMinutes !== 1 ? 's' : ''}`;
    }

    return readTimeDisplay;
  } catch (error) {
    return undefined;
  }
}
