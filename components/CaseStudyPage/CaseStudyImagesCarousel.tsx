import React from 'react'

export const ProperyImageList: React.FC<{ images: string[] }> = ({
  images,
}) => {
  const imageList: JSX.Element[] = images.map((image, index) => {
    return (
      <div
        className={`carousel-item ${index === 1 ? 'active' : null} `}
        key={index}
      >
        <img
          className="d-block w-100"
          src={image}
          alt={`Image of propery ${index}`}
        />
      </div>
    )
  })

  return <React.Fragment>{imageList}</React.Fragment>
}

const CaseStudyImagesCarousel: React.FC<{ images: string[] }> = ({ images }) => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <ProperyImageList images={images} />
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )
}

export default CaseStudyImagesCarousel
