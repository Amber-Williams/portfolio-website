import React from 'react'
import PageContainer from '../PageContainer/PageContainer'

const Footer: React.FC = () => (
  <React.Fragment>
    <style jsx>
      {`
        .Footer {
          background-color: black;
          width: 100%;
          margin-top: 12rem;
          padding: 16px;
          text-align: center;
          position: relative;
          height: 100px;
        }

        .Footer img {
          margin-top: -100px;
          margin-right: 20px;
          width: 50px;
          height: auto;
          float: right;
        }

        .Footer p {
          width: 100%;
          color: white;
          text-align: center;
          margin-top: 20px;
        }
      `}
    </style>
    <footer>
      <div className="Footer">
        <img src="/images/footer-flower.png" />
        <PageContainer>
          <p>© 2020 AmberDevelops All Rights Reserved</p>
        </PageContainer>
      </div>
    </footer>
  </React.Fragment>
)

export default Footer
