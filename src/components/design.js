import React, { Component } from "react"
import des from '../images/design.jpg';
import dev from '../images/planning.jpg';
import project from '../images/demo.jpg';
import data from '../images/logo.png'
class DesignComponent extends Component {
    render() {
        return (
            <div>
                <div className="designer">
                    <div className="designone" >
                        <img src={des} alt="data" style={{ marginLeft: '200px', marginTop: '250px' }} /> </div>
                    <div className="designtwo" style={{ marginRight: '350px', marginTop: '200px' }}>
                        <img src={dev} alt="data" style={{ height: '300px', width: '400px' }} /> </div>
                </div>
                <div className="second">
                    <div className="designthree" >
                        <img src={project} alt="data" style={{ height: '300px', width: '300px', border: '10px solid white', borderRadius: '50%', marginLeft: '480px', marginTop: '-50px' }} /> </div>
                </div>
                <div className="designfour" style={{ marginTop: '-300px', width: '300px', marginLeft: '900px', position: 'relative', backgroundColor: 'white' }}>
                    <img src={data} alt="data" style={{ height: '50px' }} />
                    <p style={{ textAlign: 'justify', width: '300px', backgroundColor: 'white' }}><b>About the company</b><br /> hello world Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugait nulla pariature.Excepteur sintoccaecat cupidant non proident,sunt in culpa qui officiadeserunt mollit anim id est laborum.Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugait nulla pariature.Excepteur sintoccaecat cupidant non proident,sunt in culpa qui officiadeserunt mollit anim id est laborum.<p style={{ backgroundColor: 'white' }}>image from<span style={{ textDecoration: 'underline' }}>Freepik</span></p> </p>

                    <button style={{ backgroundColor: '#1f2851', color: 'white', border: '#f6cf1a', borderRadius: '12px', padding: '7px 15px', width: "100px", margin: 'auto' }}> read more</button>
                </div>

            </div>

        )
    }
}
export default DesignComponent;