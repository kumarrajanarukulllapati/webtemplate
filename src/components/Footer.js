import React from "react";
import building from '../images/builders.jpg';
import { Grid, TextField } from '@mui/material';
// import styles from "./web.template.css"
import { type } from '@mui/material';
// import Container from "@mui/material/Container";
// import { borderRadius, textAlign } from "@mui/system";
// import FinalComponent from "./final";

class FooterComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { issignup: false };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        console.log('signup : ', "registration is completed");
        // this.props.newMethod(this.state.name);
    }
    render() {

        return (
            <div>
                <Grid container>
                    <Grid item xs={12} md={12} lg={4} xl={4}>
                        <div className="footer1" style={{}}></div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={4} xl={4}>
                        <div className="footer2" style={{ width: '100%' }}></div>
                    </Grid>
                </Grid>

                {/* <Container maxWidth="xl"> */}


                <div style={{ position: 'relative' }}>
                    <div className="footer1" >
                        <img src={building} alt='pic' style={{ height: '500px', width: '100%', position: 'relative', borderRadius: '10px' }} />
                    </div>
                    <div className="footer2" style={{ marginLeft: '380px', backgroundColor: 'white', marginTop: '-300px', width: '50%', position: 'relative', padding: '16px', borderRadius: '25px' }} >
                        <h2 style={{ textAlign: 'center' }}>Sign up For Exclusive Offers</h2>
                        <h4 style={{ textAlign: 'center', width: '480px', marginLeft: '150px' }}>Simple text. click here to select the text box. click again or double click to edit the text </h4>
                        <form style={{ width: '95%', padding: '16px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <TextField id="filled-basic" label="Enter your Name" type="name" placeholder="Eg:Robert" style={{ width: '210px', borderRadius: '30px' }} variant="filled" />
                                <TextField id="filled"
                                    label="Enter Your Valid Email Address" type="email" placeholder="check@test.com"
                                    style={{
                                        width: '210px', textAlign: 'center', borderRadius: '30px'
                                    }} variant="filled" />
                                <TextField id="filled-basic" label="Telephone"
                                    type="mobilenumber"
                                    placeholder="Eg:79465654654" style={{ width: '210px', borderRadius: '30px' }} variant="filled" />
                            </div>
                        </form>
                        <form style={{ width: '97%' }}>
                            <div>
                                <TextField id="filled-basic" label="Enter your Message" fullWidth style={{ borderRadius: '20px', padding: '7px' }} variant="filled" />
                            </div>

                        </form>
                        <div style={{ marginTop: '20px' }}>
                            <button onClick={() => this.handleChange()} style={{ backgroundColor: 'yellow', color: '#362e0d', border: '#f6cf1a', borderRadius: '12px', padding: '7px 15px', width: "98%", margin: 'auto' }} > Sign up</button>
                        </div>
                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                            <p>image from <span style={{ textDecoration: 'underline' }}> Freepik</span></p>
                        </div>
                    </div>



                </div>
                {/* </Container> */}

            </div >


        )

    }
}
export default FooterComponent;