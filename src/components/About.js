import React, { Component } from "react"
import phase from '../images/build2.jpg'

class AboutComponent extends Component {
    render() {
        return (
            <div>
                <div className="phase">
                    <div className="phase1"></div>
                    <div className="phase2"></div>
                </div>
                <div className="phase3" >
                    <img src={phase} alt="data" style={{ borderRadius: '20px' }} />
                </div>
                <div className="phase4">
                    <p style={{ textAlign: 'justify', width: '300px' }}><b>About the company</b><br /> hello world Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugait nulla pariature.Excepteur sintoccaecat cupidant non proident,sunt in culpa qui officiadeserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugait nulla pariature.Excepteur sintoccaecat cupidant non proident,sunt in culpa qui officiadeserunt mollit anim id est laborum. </p>
                    <p>image from<span style={{ textDecoration: 'underline' }}>Freepik</span></p>
                    <button style={{ backgroundColor: '#1f2851', color: 'white', border: '#f6cf1a', borderRadius: '12px', padding: '7px 15px', width: "100px", margin: 'auto' }}> read more</button>
                </div>

            </div>
        )
    }
}

export default AboutComponent;