import React from 'react'
import Link from 'next/link'
const NavBar: React.FC = () => (
  <React.Fragment>
    <style jsx>
      {`
        .NavBar {
          background-color: #cdd3b4;
          width: 100%;
        }
        .NavBar__logo {
          width: 200px;
          margin: 10px;
          cursor: pointer;
        }
      `}
    </style>
    <div className="NavBar">
      <Link href={{ pathname: `/` }}>
        <img className="NavBar__logo" src="/images/logo.svg" />
      </Link>
    </div>
  </React.Fragment>
)

export default NavBar
