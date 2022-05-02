import React from "react";
import building from '../images/builders.jpg';
import { TextField } from '@mui/material';
import { borderRadius, textAlign } from "@mui/system";
import FinalComponent from "./final";

class FooterComponent extends React.Component {
    render() {
        return (
            <div>

                <div style={{ position: 'relative' }}>
                    <div >
                        <img src={building} alt='pic' style={{ height: '500px', width: '100%', position: 'relative', borderRadius: '10px' }} />
                    </div>
                    <div style={{ marginLeft: '380px', backgroundColor: 'white', marginTop: '-300px', width: '50%', position: 'relative', padding: '16px', borderRadius: '25px' }} >
                        <h2 style={{ textAlign: 'center' }}>Sign up For Exclusive Offers</h2>
                        <h4 style={{ textAlign: 'center', width: '480px', marginLeft: '150px' }}>Simple text. click here to select the text box. click again or double click to edit the text </h4>
                        <form style={{ width: '95%', padding: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <TextField id="filled-basic" label="Enter your Name" style={{ width: '210px', borderRadius: '30px' }} variant="filled" />
                                <TextField id="filled-basic" label="Enter Your Valid Email Address" style={{
                                    width: '210px', textAlign: 'center',
                                    borderRadius: '30px'
                                }} variant="filled" />
                                <TextField id="filled-basic" label="Telephone" style={{ width: '210px', borderRadius: '30px' }} variant="filled" />
                            </div>
                        </form>
                        <form style={{ width: '97%' }}>
                            <div>
                                <TextField id="filled-basic" label="Enter your Message" fullWidth style={{ borderRadius: '20px', padding: '7px' }} variant="filled" />
                            </div>

                        </form>
                        <div style={{ marginTop: '20px' }}>
                            <button style={{ backgroundColor: 'yellow', color: '#362e0d', border: '#f6cf1a', borderRadius: '12px', padding: '7px 15px', width: "98%", margin: 'auto' }}> Sign up</button>
                        </div>
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <p>image from <span style={{ textDecoration: 'underline' }}> Freepik</span></p>
                        </div>
                    </div>



                </div>

            </div >

        )

    }
}
export default FooterComponent;