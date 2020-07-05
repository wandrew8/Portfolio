import React from "react"
import Layout3 from "../components/layout3"
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {useSpring, animated} from 'react-spring'
import TopProjects from '../components/topProjects'
import Carousel from '../components/carousel'
import { variables } from '../styles/variables'
import { useStaticQuery, graphql } from 'gatsby'
import ReactFullpage from '@fullpage/react-fullpage';
import SEO from "../components/seo"



const IndexPage = () => {
  const data = useStaticQuery(graphql`
      query avatarQuery {
        site {
          siteMetadata {
            title
          }
        }
        file(relativePath: {
          regex: "/avatar/"
        }) {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
  `)

const image = data.file.childImageSharp.fluid

return (
  <Layout3>
      {/* <SEO title="Home" /> */}
      <ReactFullpage
        navigation
        arrowNavigation
        verticalAlign = {true}
        setAllowScrolling = {false}
        scrollingSpeed = {1000}
        paddingTop = "-100px"
        render={() => {
          return(
            <ReactFullpage.Wrapper>
                <SectionOne className="section">
                      <div>
                        <h2 className="mainName">Andrew Weiss</h2>
                        <h3>Frontend Web Developer</h3>
                      </div>
                </SectionOne>
                <SectionTwo className="section">
                    <Overlay />
                    <div className="grid">
                      <div className="top">
                        <h2 className="title">Andrew</h2>
                        <h2 className="title">Weiss</h2>

                        <h3 className="subtext">A hands-on creative with a passion for building beautiful websites</h3>
                        <p>Andrew has been responsible for bringing concepts to life for clients such as Nintendo, Estée Lauder, Oxfam, Scribner, Sony, and many others. His work has been recognised by One Show, ADC, Webby Awards, and Cannes Lions. When Jonny isn't busy educating people on the difference between fonts and typefaces, he can be found taking part in competitive tickling competitions across the UK.</p>
                      </div>
                      <Img className="avatarImage" fluid={image} alt="profile image"/>
                    </div>
                </SectionTwo>
                <SectionThree className="section">
                  <div className="top">
                    <h2>Skills</h2>
                    <hr/>
                    <SkillsContainer>
                      <div className="frontEnd">
                        <div className="ribbon">
                          Frontend
                          <i></i>
                        </div>
                        <ul>
                          <Link><li>CSS</li></Link>
                          <Link to="/tags/scss"><li>SCSS / Sass</li></Link>
                          <Link to="/tags/styled-components"><li>Styled Components</li></Link>
                          <Link to="/tags/html"><li>HTML / HTML5</li></Link>
                          <Link to="/tags/java-script"><li>JavaScript</li></Link>
                          <Link to="/tags/react"><li>React</li></Link>
                          <Link to="/tags/react-native"><li>React Native</li></Link>
                          <Link to="/tags/gatsby"><li>Gatsby</li></Link>
                          <Link to="/tags/bootstrap"><li>Bootstrap</li></Link>
                          <Link to="/tags/material-ui"><li>Material UI</li></Link>
                          <Link to="/tags/mobile-responsives"><li>Mobile Responsive Design</li></Link>
                        </ul>
                      </div>
                      <div className="backEnd">
                      <div className="ribbonOpposite">
                        Backend
                        <i></i>
                      </div>
                        <ul className="backendList">
                          <Link to="/tags/node"><li>Node.js</li></Link>
                          <Link to="/tags/express"><li>Express</li></Link>
                          <Link to="/tags/mySQL"><li>MySQL</li></Link>
                          <Link to="/tags/mongo-db"><li>MongoDB</li></Link>
                          <Link to="/tags/mvc"><li>MVC and FLUX Architecture</li></Link>
                          <Link to="/tags/agile"><li>Agile workflow</li></Link>
                          <Link to="/tags/authentication"><li>Authentication</li></Link>
                          <Link to="/tags/API"><li>RESTful APIs</li></Link>
                          <Link to="/tags/git"><li>GIT</li></Link>
                          <Link to="/tags/cli"><li>CLI</li></Link>
                        </ul>
                      </div>
                    </SkillsContainer>
                  </div>
                </SectionThree>
                <SectionFour className="section">
                    <div>
                      <Overlay />
                      <h1 className="heading">Top Projects</h1>
                    </div>
                    <Carousel />
                    <Button><Link to="/projects">See All Projects</Link></Button>
                </SectionFour>
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </Layout3>
  )
};

export default IndexPage

const SectionOne = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100vw;
  height: 150vh;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #51e2ff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23fdfdfe'/%3E%3Cstop offset='1' stop-color='%2351e2ff'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23a7f0ff'/%3E%3Cstop offset='1' stop-color='%2351e2ff'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg %3E%3Cg transform=''%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform=''%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.54' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  .mainName {
    font-size: 3rem;
    font-family: ${variables.headingFont};
    font-weight: 300;
  }
  .avatarImage {
    height: 300px;
    min-height: 300px;
    min-width: 300px;
    width: 300px;
    border-radius: 50%;
  }
  .intro {
    z-index: 50;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 2fr 1fr;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    grid-gap: 1rem;
    @media only screen and (max-width: ${variables.large}) {
        grid-template-columns: 1fr;
        .avatarImage {
          margin: 0 auto;
          
        }
    }
    @media only screen and (max-width: ${variables.medium}) {
        grid-template-columns: 1fr;
        h3 {
          font-size: 1.3rem;
        }
        .mainName {
          font-size: 2rem;
          font-family: ${variables.headingFont};
          font-weight: 300;
        }
        .avatarImage {
          margin: 0 auto;
          height: 200px;
          min-height: 200px;
          min-width: 200px;
          width: 200px;
        }
    }
  }
`;
const SectionTwo = styled.section`
  display: grid;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100vw;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: linear-gradient(45deg, ${variables.primaryBlue}, ${variables.secondaryBlue}, ${variables.primaryGreen});
  color: ${variables.primaryWhite};
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    max-width: 900px;
    margin: 0 auto;
    text-align: left;
    padding-top: 100px;
    padding: 50px 2rem 0rem 2rem;
    align-items: center;
    h2 {
      color: ${variables.primaryWhite};
      margin: 0;
      padding: 0;

    }
  }
  .title {
    font-size: 3.4rem;
    font-family: ${variables.headingFont};
  }
  .subtext {
    font-size: 1.3rem;
    color: ${variables.primaryWhite};
  }
  p {
    font-size: 0.9rem;
  }
  .avatarImage {
    margin: 0 auto;
    height: 80vh;
    min-height: 300px;
    max-height: 400px;
    min-width: 300px;
    max-width: 300px;
    width: 90vw;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
  }
  .top {
    z-index: 30;
  }
  
  
  
`;

const SectionThree = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
  width: 100vw;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;
  background-color: #fdfdfe;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3CradialGradient id='a' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%23e6e6e6'/%3E%3Cstop offset='1' stop-color='%23fdfdfe'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='750' x2='1550' y2='750'%3E%3Cstop offset='0' stop-color='%23f2f2f2'/%3E%3Cstop offset='1' stop-color='%23fdfdfe'/%3E%3C/linearGradient%3E%3Cpath id='s' fill='url(%23b)' d='M1549.2 51.6c-5.4 99.1-20.2 197.6-44.2 293.6c-24.1 96-57.4 189.4-99.3 278.6c-41.9 89.2-92.4 174.1-150.3 253.3c-58 79.2-123.4 152.6-195.1 219c-71.7 66.4-149.6 125.8-232.2 177.2c-82.7 51.4-170.1 94.7-260.7 129.1c-90.6 34.4-184.4 60-279.5 76.3C192.6 1495 96.1 1502 0 1500c96.1-2.1 191.8-13.3 285.4-33.6c93.6-20.2 185-49.5 272.5-87.2c87.6-37.7 171.3-83.8 249.6-137.3c78.4-53.5 151.5-114.5 217.9-181.7c66.5-67.2 126.4-140.7 178.6-218.9c52.3-78.3 96.9-161.4 133-247.9c36.1-86.5 63.8-176.2 82.6-267.6c18.8-91.4 28.6-184.4 29.6-277.4c0.3-27.6 23.2-48.7 50.8-48.4s49.5 21.8 49.2 49.5c0 0.7 0 1.3-0.1 2L1549.2 51.6z'/%3E%3Cg id='g'%3E%3Cuse href='%23s' transform='scale(0.12) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.2) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.25) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(0.3) rotate(-20)'/%3E%3Cuse href='%23s' transform='scale(0.4) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(0.5) rotate(20)'/%3E%3Cuse href='%23s' transform='scale(0.6) rotate(60)'/%3E%3Cuse href='%23s' transform='scale(0.7) rotate(10)'/%3E%3Cuse href='%23s' transform='scale(0.835) rotate(-40)'/%3E%3Cuse href='%23s' transform='scale(0.9) rotate(40)'/%3E%3Cuse href='%23s' transform='scale(1.05) rotate(25)'/%3E%3Cuse href='%23s' transform='scale(1.2) rotate(8)'/%3E%3Cuse href='%23s' transform='scale(1.333) rotate(-60)'/%3E%3Cuse href='%23s' transform='scale(1.45) rotate(-30)'/%3E%3Cuse href='%23s' transform='scale(1.6) rotate(10)'/%3E%3C/g%3E%3C/defs%3E%3Cg transform='rotate(0 0 0)'%3E%3Cg transform='rotate(0 0 0)'%3E%3Ccircle fill='url(%23a)' r='3000'/%3E%3Cg opacity='0.5'%3E%3Ccircle fill='url(%23a)' r='2000'/%3E%3Ccircle fill='url(%23a)' r='1800'/%3E%3Ccircle fill='url(%23a)' r='1700'/%3E%3Ccircle fill='url(%23a)' r='1651'/%3E%3Ccircle fill='url(%23a)' r='1450'/%3E%3Ccircle fill='url(%23a)' r='1250'/%3E%3Ccircle fill='url(%23a)' r='1175'/%3E%3Ccircle fill='url(%23a)' r='900'/%3E%3Ccircle fill='url(%23a)' r='750'/%3E%3Ccircle fill='url(%23a)' r='500'/%3E%3Ccircle fill='url(%23a)' r='380'/%3E%3Ccircle fill='url(%23a)' r='250'/%3E%3C/g%3E%3Cg transform='rotate(0 0 0)'%3E%3Cuse href='%23g' transform='rotate(10)'/%3E%3Cuse href='%23g' transform='rotate(120)'/%3E%3Cuse href='%23g' transform='rotate(240)'/%3E%3C/g%3E%3Ccircle fill-opacity='0.1' fill='url(%23a)' r='3000'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: cover;
  hr {
    width: 90%;
    max-width: 800px;
    margin: 2rem auto;
  }
 
  
`;

export const Button = styled.div`
    padding: 0.2rem 0.5rem;
    text-align: center;
    border-radius: 5px;
    z-index: 100;
    border: solid 2px ${variables.primaryBlue};
    transition: 300ms ease-in;
    cursor: pointer;
    width: 100%;
    max-width: 250px;
    margin: 0.5rem 0rem;
    position:absolute; 
    bottom: 2rem;
    left:50%; 
    transform:translateX(-50%); 
    background-color: ${variables.primaryBlue};
    a {
      text-decoration: none;
      color: ${variables.primaryWhite};
      font-family: ${variables.headingFont};
      font-weight: 300;
      cursor: pointer;
    }
    &:hover {
      border: solid 2px ${variables.primaryBlue};
      background: rgba(253, 253, 254, 0.7);
      a {
      text-decoration: none;
      color: ${variables.primaryBlue};
    }
    }
    @media only screen and (max-width: ${variables.medium}) {
        margin-bottom: 2rem;
    }
   
`;

const SectionFour = styled.div`
  display: grid;
  margin: 0;
  padding: 0;
  position: relative;
  width: 100vw;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4fr 1fr;
  grid-gap: 2rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background: linear-gradient(90deg, ${variables.primaryLight}, ${variables.primaryWhite});
  .heading {
    position: absolute;
    top: 4rem;
    left: 50%;
    transform: translateX(-50%);
  }
  
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  clip-path: circle(60.8% at 43% 20%);
  z-index: 29;
  top: 0;

`;

const SkillsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    margin: 0 auto;
    grid-gap: 2rem;
    max-width: 550px;
    justify-content: center;
    align-items: center;
    position: relative;
    @media only screen and (max-width: ${variables.small}) {
        grid-template-columns: 1fr;
    }
    a {
      color: ${variables.primaryDark};
      text-decoration: none;
    }
    ul {
      list-style: none;
      text-align: left;
      margin: 0rem;
      background-color: ${variables.primaryLight};
      padding: 1.5rem 0.75rem;
      border-radius: 0px 0px 10px 10px;
      li {
        margin: 0.5rem 1.25rem;
        cursor: pointer;
        transition: linear 150ms;
        &:hover {
          transform: scale(1.2);
          transform: translateX(10px);
          color: ${variables.primaryBlue};
        }
      }
    }
    .backendList {
      transform: translateX(0px);

    }
    .frontEnd, .backEnd {
      border-radius: 10px;
      position: relative;
      height: 100%;
      width: 370px;
      margin-right: 10px;
      text-align: center;
      @media only screen and (max-width: ${variables.medium}) {
        width: 250px;

    }
    }
    .ribbonOpposite {
      width: 100%;
        height: 60px;
        margin: 0px auto 0px;
        font-family: ${variables.headingFont};
        font-weight: 300;
        border-radius: 10px 10px 0px 0px;
        background: ${variables.secondaryBlue};
        position: relative;
        color: ${variables.primaryWhite};
        justify-content: center;
        text-transform: uppercase;
        display: flex;
        align-items: center;
      & i:first-child {
        position: absolute;
        right: -10px;
        bottom: -10px;
        border: 10px solid transparent;
        border-left-color: ${variables.primaryBlue};
        z-index: -1;
      
      }
    }
      .ribbon {
        width: 100%;
        height: 60px;
        margin: 0px auto 0px;
        font-family: ${variables.headingFont};
        font-weight: 300;
        border-radius: 10px 10px 0px 0px;
        background: ${variables.secondaryBlue};
        position: relative;
        color: ${variables.primaryWhite};
        justify-content: center;
        text-transform: uppercase;
        display: flex;
        align-items: center;
      }

      .ribbon i:first-child {
        position: absolute;
        left: -10px;
        bottom: -10px;
        border: 10px solid transparent;
        border-right-color: ${variables.primaryBlue};
        z-index: -1;
      }
    
    }
`;