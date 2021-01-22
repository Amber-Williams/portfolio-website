import React from 'react'

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
        <p>© 2020 AmberDevelops All Rights Reserved</p>
      </div>
    </footer>
  </React.Fragment>
)

export default Footer
