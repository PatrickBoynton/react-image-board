function ImageList(props) {
    const images = props.images?.map((image, index) => (
      <li key={index}>
        <img src={image.imgUrl} alt="Random images."/>
        <p>{image.imgCaption}</p>
      </li>
    ))
    return (
      <ul>
        {images}
      </ul>
    )
  }

  export default ImageList;