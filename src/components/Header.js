import React, { Component } from 'react'
import HJYGYT from '../images/icons.png';
import headerbg from '../images/headerbg.jpg';
import building from '../images/build2.jpg';
import build from '../images/build3.jpg';
// import { Button } from '@mui/material';




class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    <div> logo</div>
                    <div>
                        <img src={HJYGYT} alt='image1' style={{ height: '30px', width: '40px' }} />
                    </div>
                </div>

                <div className='headerone'>

                    <div className='blocks'>
                        <div className='block1'>
                            <img src={headerbg} alt='building1' style={{ height: '180px', width: '100%', borderRadius: '10px' }} />
                        </div>
                        <div className='block2'>
                            <img src={building} alt='building1' style={{ height: '180px', width: '100%', borderRadius: '10px', marginTop: '-30px' }} />
                        </div>
                        <div className='block3'>
                            <img src={build} alt='building1' style={{ height: '200px', width: '100%', borderRadius: '10px', marginTop: '-30px' }} />
                        </div>
                        <div className='block4'>

                            <p style={{ fontWeight: 'bold' }}> what we do<br />integrated  design <br /> practices  of<br /> architecture,<br /> landscape, <br />interiors </p>
                            {/* <p> practices  of</p>
                            <p>architecture,</p>
                            <p>landscape,</p>
                            <p>interiors </p> */}
                            <button style={{ backgroundColor: '#1f2851', color: 'white', border: '#1f2851', borderRadius: '12px', padding: '7px 15px', width: "100px" }}> learn more</button>

                        </div>
                    </div>



                </div>
            </div>
        )
    }
}

export default HeaderComponent;