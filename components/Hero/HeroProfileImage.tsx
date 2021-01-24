import React from 'react'

const HeroProfileImage: React.FC = () => (
  <React.Fragment>
    <style jsx>
      {`
        .HeroProfileImage {
          position: relative;
          width: 500px;
          overflow: visible;
        }

        .HeroProfileImage__gif {
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

        .HeroProfileImage__swirl {
          position: absolute;
          top: 102px;
          left: 0;
          width: 200px;
        }

        .HeroProfileImage__xx {
          position: absolute;
          bottom: 0;
          right: 0;
          width: 200px;
        }
      `}
    </style>
    <div className="HeroProfileImage">
      <div className="HeroProfileImage__gif">
        <img
          src="/images/amber-profile-artyfarty.gif"
          width="500px"
          height="667"
        />
      </div>
      <img
        className="HeroProfileImage__swirl"
        src="/images/vectors/swirl.svg"
      />
      <img className="HeroProfileImage__xx" src="/images/vectors/xx.svg" />
    </div>
  </React.Fragment>
)

export default HeroProfileImage
