import React from 'react'

const PageContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <React.Fragment>
      <style jsx>
        {`
          .PageContainer {
            max-width: 1200px;
            margin: 0 auto;
          }
        `}
      </style>
      <div className="PageContainer">{children}</div>
    </React.Fragment>
  )
}

export default PageContainer
