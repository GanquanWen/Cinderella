import React from "react"
import logoWithTextWhite from './design_elements/logo 2 - white.png'
import slogan from './design_elements/banner text.png'

export class SloganContainer extends React.Component {
    render() {
        return (
            <div className="slogan-container">
                <img src={logoWithTextWhite} alt="" className="logo-with-text-white"/>
                <img src={slogan} alt="" className="slogan"/>
                {/*<h1 className="slogan">LAUNDRY<br/>EXPERIENCE<br/>RE-IMAGINED</h1>*/}
            </div>
        )
    }
}