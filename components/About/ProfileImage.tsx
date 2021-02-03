import React from 'react'

const ProfileImage: React.FC = () => {
  function stop_gif(e) {
    const img_element = document.querySelector(
      '.ProfileImage__gif img'
    ) as HTMLImageElement
    img_element.src = '/images/profile-image.jpg'
    e.target.style.opacity = '0'
  }

  return (
    <React.Fragment>
      <style jsx>
        {`
          .ProfileImage {
            position: relative;
            width: 350px;
            overflow: visible;
            margin: 0 auto;
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
            width: 350px;
          }

          .ProfileImage__swirl {
            position: absolute;
            top: 35px;
            left: 0;
            width: 170px;
          }

          .ProfileImage__xx {
            position: absolute;
            bottom: 0;
            right: -25px;
            width: 165px;
          }

          .ProfileImage p {
            transition: opacity 1s ease;
          }
        `}
      </style>
      <div className="ProfileImage">
        <div className="ProfileImage__gif">
          <img
            src="/images/hero-profile-gif.gif"
            width="350px"
            height="435px"
          />
        </div>
        <p
          className="text-center"
          onClick={(e: React.MouseEvent<HTMLElement>) => stop_gif(e)}
        >
          click here to stop gif
        </p>
        <img className="ProfileImage__swirl" src="/images/vectors/swirl.svg" />
        <img className="ProfileImage__xx" src="/images/vectors/xx.svg" />
      </div>
    </React.Fragment>
  )
}

export default ProfileImage
