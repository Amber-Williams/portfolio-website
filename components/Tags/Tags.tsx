import React from 'react'

interface TagProps {
  tags: Array<string>
}

const Tag: React.FC<TagProps> = ({ tags }) => {
  const tagList = tags.map((tag, i) =>
    i !== tags.length - 1 ? <li className="">{tag},&nbsp;</li> : <li>{tag}</li>
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

      <ul className="Tags m-0">[{tagList}]</ul>
    </React.Fragment>
  )
}

export default Tag
