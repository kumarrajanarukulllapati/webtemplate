import React, { Component } from 'react'
import plan from '../images/plan.webp'
class PlanningComponent extends Component {
    render() {
        return (
            <div>
                <div className='planning' style={{ height: 'min-height' }}>
                    <div className='plan' style={{ borderRadius: '10px', width: '400px' }}>
                        <div>
                            <img src={plan} alt='pic' style={{ height: '400px', borderRadius: '10px', width: '500px' }} />
                        </div>
                    </div>
                    <div className='planone' style={{ backgroundColor: 'yellow', height: '400px', width: '100%' }}></div>
                </div>
                <div className='plantwo' style={{}}>
                    <div>
                        <p style={{ textAlign: 'justify', width: '300px' }}> who are the best 100
                            architecture firms in the
                            world?</p>
                        <p style={{ textAlign: 'justify', width: '300px' }}>Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugait nulla pariature.Excepteur sintoccaecat cupidant non proident,sunt in culpa qui officiadeserunt mollit anim id est laborum.</p>
                        <p style={{ textAlign: 'justify', width: '300px' }}>Image from<span style={{ textDecoration: 'underline' }}>  Freepik</span> </p>

                        <button style={{ backgroundColor: '#1f2851', color: 'white', border: '#f6cf1a', borderRadius: '12px', padding: '7px 15px', width: "100px", margin: 'auto' }}> learn more</button>
                    </div>
                </div>

            </div>
        )
    }
}
export default PlanningComponent;