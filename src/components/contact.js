import React from 'react'
import styled from 'styled-components';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { variables } from '../styles/variables';
import EmailIcon from '@material-ui/icons/Email';

export default function contact() {
    return (
        <ContactDrawer>
            <div className="link">
                <a href="https://github.com/wandrew8" target="_blank">
                    <GitHubIcon style={{fontSize: 40}}/>
                </a>
            </div>
            <div className="link">
            <a href="https://www.linkedin.com/in/wandrew8/" target="_blank">
                    <LinkedInIcon style={{fontSize: 40}}/>
                </a>
            </div>
            <div className="link">
            <a href="mailto:wandrew8@gmail.com?subject=We'd love to hire you!" target="_blank">
                    <EmailIcon style={{fontSize: 40}}/>
                </a>
            </div>
        </ContactDrawer>
    )
}

const ContactDrawer = styled.div`
    display: flex;
    flex-direction: column;
    width: 70px;
    height: 300px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    position: absolute;
    z-index: 200;
    top: 50%;
    left: 2rem;
    transform: translateY(-100px);
    a {
        color: ${variables.primaryDark};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        background-color: ${variables.primaryWhite};
        border-radius: 10px;
        margin: 0.5rem;
        transition: 200ms linear;
        cursor: pointer;
        &:hover {
            box-shadow: 0px 0px 20px rgba(0,0,0,0.1);
            transform: scale(1.07)
        }
    }

    @media only screen and (max-width: ${variables.medium}) {
        flex-direction: row;
        left: 50%;
        width: 300px;
        top: 75%;
        height: 70px;
        transform: translateX(-150px);
    }
`;
