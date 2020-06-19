import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { variables } from '../styles/variables'
import Img from 'gatsby-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose, faArrowCircleRight, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons' 

class Lightbox extends Component {
  constructor(props){
    super(props);
    this.state = {
      showLightbox: false,
      selectedImage: 0,
    }
    this.lightBoxRef = React.createRef();
  }
  

  componentDidMount = () => {
    window.addEventListener('keyup', this.handleKeyUp, false)
    window.addEventListener('click', this.handleClickCloseModal, true)
  }

  componentWillUnmount = () => {
    window.removeEventListener('keyup', this.handleKeyUp, false)
    window.removeEventListener('click', this.handleClickCloseModal, true)
  }

  handleClick = (e, index) => {
    e.preventDefault()
    this.setState({ showLightbox: !this.state.showLightbox, selectedImage: index })
  }

  handleClickCloseModal = (e) => {
    if (!this.lightBoxRef.current.contains(e.target)) {
      this.setState({ showLightbox: false })
    }
  }

  closeModal = () => {
    this.setState({ showLightbox: false })
  }

  goBack = () => {
    this.setState({ selectedImage: this.state.selectedImage - 1 })
  }

  goForward = () => {
    this.setState({ selectedImage: this.state.selectedImage + 1 })
  }

  handleKeyUp = e => {
    e.preventDefault()
    const { keyCode } = e
    if (this.state.showLightbox) {
      if (keyCode === 37) {
        // Left Arrow Key
        if (this.state.selectedImage > 0) {
          this.setState({ selectedImage: this.state.selectedImage - 1 })
        }
      }
      if (keyCode === 39) {
        // Right Arrow Key
        if (this.state.selectedImage < this.props.images.length - 1) {
          this.setState({ selectedImage: this.state.selectedImage + 1 })
        }
      }
      if (keyCode === 27) {
        // Escape key
        this.setState({ showLightbox: false })
      }
    }
  }

  render() {
    const { images } = this.props
    const { showLightbox, selectedImage } = this.state
    return (
      <Fragment>
        <Gallery>
          {images.map((img, i) => (
            <GalleryItem key={i}>
              <a href={img.src} onClick={e => this.handleClick(e, i)}>
                <StyledImg fluid={img.fluid} />
              </a>
            </GalleryItem>
          ))}
        </Gallery>

        <LightboxModal visible={showLightbox} onKeyUp={e => this.handleKeyDown(e)}>
          <LightboxContent ref={this.lightBoxRef}>
            <FontAwesomeIcon className="closeIcon" icon={faWindowClose} onClick={this.closeModal}/>
            <Img fluid={images[selectedImage].fluid} />
            <Controls>
                {selectedImage === 0 ? <div></div> : <Button onClick={this.goBack}>
                  <FontAwesomeIcon className="arrows" icon={faArrowCircleLeft} />
                </Button>}
                {selectedImage === images.length - 1 ? <div></div> : <Button onClick={this.goForward}>
                  <FontAwesomeIcon className="arrows" icon={faArrowCircleRight} />
                </Button>}
            </Controls>
          </LightboxContent>
        </LightboxModal>
      </Fragment>
    )
  }
}

const StyledImg = styled(Img)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100%;
  border-radius: 10px;
  & > img {
    object-fit: cover !important; 
    object-position: 0% 0% !important; 
    
  }
`

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 3rem 0rem;
  cursor: pointer;
  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 1100px) {
    grid-template-columns: repeat(5, 1fr);
  }
  grid-gap: 15px;
  .gatsby-image-outer-wrapper {
    height: 100%;
  }
`

const GalleryItem = styled.div`
  position: relative;
`

const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  .arrows {
    font-size: 1.5rem;
    color: ${variables.primaryLight};
    cursor: pointer;

  }
`

const LightboxModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
const LightboxContent = styled.div`
  margin: 15px;
  max-width: 700px;
  width: 100%;
  position: relative;
  img {
    border-radius: 10px;
  }
  .closeIcon {
    position: absolute;
    top: 7px;
    right: 13px;
    font-size: 1.5rem;
    transition: 200ms ease-in-out;
    color: ${variables.primaryDark};
    cursor: pointer;
    z-index: 10;
    &:hover {
      transform: scale(1.2);
    }
  }
`

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0rem 2rem;
  position: absolute;
  width: 100%;
  top: 50%;
  
`

Lightbox.propTypes = {
  images: PropTypes.array,
}

export default Lightbox