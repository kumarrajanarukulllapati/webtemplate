import React, { Component } from 'react'
import HJYGYT from '../images/icons.png';
import headerbg from '../images/headerbg.jpg';
import building from '../images/build2.jpg';
import build from '../images/build3.jpg';
import { Grid } from '@mui/material';
// import { Button } from '@mui/material';
// import AppBar from '@mui/material/AppBar';
// import IconButton from '@mui/material/IconButton';
// import MenuItem from '@mui/material/MenuItem';
// import Typography from '@mui/material/Typography';



class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <div className='header'>
                    {/* <AppBar style={{ color: 'grey' }}>
                        <MenuItem>
                            <IconButton></IconButton>
                        </MenuItem>
                        <Typography variant="h6" style={{ color: 'grey' }}>
                            logo</Typography>

                    </AppBar> */}
                    <div> logo</div>
                    <div>
                        <img src={HJYGYT} alt='image1' style={{ height: '30px', width: '40px' }} />
                    </div>
                </div>
                <Grid container>
                    <Grid item>
                        <div>

                        </div>
                    </Grid>

                </Grid>
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

                            <p style={{ fontWeight: 'bold', width: '250px' }}> what we dointegrated  design  practices  of architecture, landscape, interiors.what we dointegrated  design  practices  of architecture, landscape, interiors  </p>
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