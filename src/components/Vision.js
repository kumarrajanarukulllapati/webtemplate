import React from "react";
import vision from '../images/architecture.webp';
import visiontwo from '../images/architecture2.jpg';
import visionthree from '../images/building.jpg';
import FinalComponent from "./final";
// import building from '../images/builders.jpg'
class VisionComponent extends React.Component {
    render() {
        return (
            <div>
                <div style={{ width: '50%', marginTop: '100px', minHeight: 'auto', padding: '25px', backgroundColor: 'yellow' }}>
                    <div><img src={vision} alt='pic' style={{ height: '400px', borderRadius: '10px', width: '550px', marginLeft: '650px', marginTop: '50px' }} /></div>
                    <div><img src={visiontwo} alt='pic' style={{ height: '250px', position: 'relative', borderRadius: '10px', width: '550px', marginLeft: '350px', marginTop: '-100px' }} /></div>
                    <div><img src={visionthree} alt='pic' style={{ height: '300px', position: 'relative', borderRadius: '10px', width: '350px', marginLeft: '850px', marginTop: '50px' }} /></div>
                    <div style={{
                        minWidth: '250px', padding: '10px', marginLeft: '550px', marginTop: '-50px', backgroundColor: 'white', borderRadius: '10px'
                    }}>
                        <p style={{ fontFamily: 'serif' }}>What We Do</p>
                        <p style={{ width: '200px' }}>Full Service architecture design studio  with offices in brooklyn,new york  and Richmond </p>
                        <p>image from <span style={{ textDecoration: 'underline' }}> Freepik</span></p>
                        <button style={{ backgroundColor: '#1f2851', color: 'white', border: '#f6cf1a', borderRadius: '12px', padding: '7px 15px', width: "100px", margin: 'auto' }}> learn more</button>
                    </div>

                </div>



            </div>

        )
    }
}
export default VisionComponent;