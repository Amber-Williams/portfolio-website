import React from 'react'

interface TagProps {
  tags: Array<string>
  className: string
}

const Tag: React.FC<TagProps> = ({ tags, className }) => {
  const tagList = tags.map((tag, i) =>
    i !== tags.length - 1 ? (
      <li className="text-dark pr-1" key={i}>
        {tag},&nbsp;
      </li>
    ) : (
      <li className="text-dark" key={i}>
        {tag}
      </li>
    )
  )

  return (
    <React.Fragment>
      <style jsx>
        {`
          .Tags {
            list-style: none;
            display: flex;
            margin: 0;
            padding: 0;
          }
        `}
      </style>

      <ul className={`Tags m-0 ${className}`}>[{tagList}]</ul>
    </React.Fragment>
  )
}

export default Tag
