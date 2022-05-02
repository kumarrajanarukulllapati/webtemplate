import React from "react";
import execute from '../images/execute.webp';
import quote from '../images/quote.png'
class ExecutionComponent extends React.Component {
    render() {
        return (
            <div>
                <div className="Execute" >
                    <div className="Execute1" style={{ width: '40%', height: '300px', marginTop: '200px', backgroundColor: 'yellow' }}>
                        <div>
                            <img src={execute} alt='pic' style={{ height: '400px', borderRadius: '10px', width: '350px', marginLeft: '350px', marginTop: '-80px' }} />
                        </div>
                        <div className="Execute2" style={{ marginLeft: '300px', position: 'relative', marginTop: '-180px', width: 'minContent', backgroundColor: 'blue', borderRadius: '10px', height: 'minContent' }}>
                            <img src={quote} alt='pic' style={{ height: '50px', width: '50px' }} />

                            <p style={{ width: 'minContent', height: 'minContent', padding: '10px', textAlign: 'justify' }}>Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugait nulla pariature.Excepteur sintoccaecat cupidant non proident.</p>
                            <p style={{ marginLeft: '80px' }}>-Winston churchchill</p>
                        </div>

                        <div className="Execute3" style={{ width: '250px', textAlign: 'justify', fontFamily: 'sans-serif', fontSize: '20px', height: 'minContent', marginLeft: '800px', marginTop: '-400px' }}>
                            <p >Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugait nulla pariature.Excepteur sintoccaecat cupidant non proident.</p>
                            <p style={{ textAlign: 'justify', width: '300px' }}>Image from<span style={{ textDecoration: 'underline' }}>  Freepik</span> </p>
                            <button style={{ backgroundColor: '#1f2851', color: 'white', border: '#f6cf1a', borderRadius: '12px', padding: '7px 15px', width: "100px", margin: 'auto' }}> learn more</button>

                        </div>


                    </div>
                    {/* <div className="Execute2" style={{ width: 'minContent', height: 'minContent', backgroundColor: 'color', border: '1px solid blue', marginLeft: '100px', marginTop: '200px' }}>


                    </div> */}

                </div>
            </div>
        )
    }
}
export default ExecutionComponent;