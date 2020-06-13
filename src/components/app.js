import React, { Component } from 'react'
import GlobalStyles from '../styles/globalStyles'
import Seo from './seo'

export default class app extends Component {
    render() {
        return (
            <div>
                <Seo />
                <GlobalStyles/>
                {this.props.children}
            </div>
        )
    }
}
