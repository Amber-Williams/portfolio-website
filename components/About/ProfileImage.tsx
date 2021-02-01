import React from 'react'

const ProfileImage: React.FC = () => (
  <React.Fragment>
    <style jsx>
      {`
        .ProfileImage {
          position: relative;
          width: 500px;
          overflow: visible;
        }

        .ProfileImage__gif {
          mask-image: url('./images/vectors/smushed-circle.svg');
          webkit-mask-image: url('./images/vectors/smushed-circle.svg');
          mask-mode: alpha;
          webkit-mask-mode: alpha;
          mask-repeat: no-repeat;
          webkit-mask-repeat: no-repeat;
          mask-size: 100%;
          webkit-mask-size: 100%;
          mask-position: center;
          webkit-mask-position: center;
          width: 500px;
        }

        .ProfileImage__swirl {
          position: absolute;
          top: 102px;
          left: 0;
          width: 200px;
        }

        .ProfileImage__xx {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 200px;
        }
      `}
    </style>
    <div className="ProfileImage">
      <div className="ProfileImage__gif">
        <img src="/images/hero-profile-gif.gif" width="500px" height="667" />
      </div>
      <img className="ProfileImage__swirl" src="/images/vectors/swirl.svg" />
      <img className="ProfileImage__xx" src="/images/vectors/xx.svg" />
    </div>
  </React.Fragment>
)

export default ProfileImage
