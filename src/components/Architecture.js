import React, { Component } from 'react'
import architecture from '../images/architect.webp';
// import 

class ArchitectureComponent extends Component {
    render() {
        return (
            <div>
                <div className='mainarchitect' >
                    <h1 style={{ textAlign: 'center', color: 'blue' }}>Architecture&Interior Design</h1>
                    <h3 style={{ textAlign: 'center', color: 'blue' }}>simple text.click to select the box.click again or double click to start editing the next.</h3>
                    <div className='architect'>
                        <div className='architect1'>
                            <div>
                                <img src={architecture} alt='icon' style={{ height: '50px', width: '80px', borderRadius: '10px', backgroundColor: 'yellow' }} />

                                <p style={{ fontFamily: 'cursive' }}>Architecture</p>
                                <p style={{}}> architecture usage <br />  and planning regarding  <br /> the structure of architecture</p>
                            </div>
                        </div>
                        <div className='architect2'>
                            <div>
                                <img src={architecture} alt='icon' style={{ height: '50px', width: '80px', borderRadius: '10px', backgroundColor: 'white' }} />

                                <p style={{ fontFamily: 'cursive' }}>Planning</p>
                                <p style={{}}> architecture usage <br />  and planning regarding  <br /> the structure of architecture</p>
                            </div>

                        </div>
                        <div className='architect3' >
                            <div>
                                <img src={architecture} alt='icon' style={{ height: '50px', width: '80px', borderRadius: '10px', backgroundColor: 'yellow' }} />

                                <p style={{ fontFamily: 'cursive' }}>Urban Design</p>
                                <p style={{}}> architecture usage <br />  and planning regarding  <br /> the structure of architecture</p>
                            </div>
                        </div>
                        <div className='architect4'>
                            <div>
                                <img src={architecture} alt='icon' style={{ height: '50px', width: '80px', borderRadius: '10px', backgroundColor: 'yellow' }} />

                                <p style={{ fontFamily: 'cursive' }}>Research</p>
                                <p style={{}}> architecture usage <br />  and planning regarding  <br /> the structure of architecture</p>
                            </div>

                        </div>
                    </div>

                    <div >
                        <div className='about' style={{ height: '600px' }}>
                            <div className='about1' style={{ textAlign: 'center', color: 'white' }}>
                                <h2>ABOUT US</h2>
                                <h2>we  work at<br /> all the scales and in <br /> sectors</h2>
                            </div>

                            <div className='about2' style={{ textAlign: 'center', color: 'white' }}>
                                <p> The future of how we live, work and <br /> play</p>
                                <p> simple text. click to select the the text box.click again for <br /> double click to start editing the text</p>
                                <p>look forward the future</p>
                                <p> simple text. click to select the the text box.click again for <br /> double click to start editing the text</p>
                                <div className='about3'>
                                    <button style={{ backgroundColor: '#1f2851', color: 'white', border: '#1f2851', borderRadius: '12px', padding: '7px 15px', width: "100px" }}> learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default ArchitectureComponent;