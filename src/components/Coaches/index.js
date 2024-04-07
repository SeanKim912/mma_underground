import React from 'react';
import './Coaches.css'

const Coaches = () => {
    return (
        <div className='coachesContainer'>
            <div className='coachesColumn'>
                <div
                    className='coachImage'
                    style={{
                        backgroundImage: `url("https://mmaundergroundbucket.s3.us-east-2.amazonaws.com/dylan.jpg")`,
                        width: "33vw"
                }}>
                    <div className="hover-gradient">
                        <div className="hover-text">
                            <h2>DYLAN KOWALSKI</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='coachesColumn'>
                <div
                    className='coachImage'
                    style={{
                        backgroundImage: `url("https://mmaundergroundbucket.s3.us-east-2.amazonaws.com/oscar.jpg")`,
                        width: "33vw"
                }}>
                    <div className="hover-gradient">
                        <div className="hover-text">
                            <h2>OSCAR OLVIDARES SENSEI</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='coachesColumn'>
                <div
                    className='coachImage'
                    style={{
                        backgroundImage: `url("https://mmaundergroundbucket.s3.us-east-2.amazonaws.com/latasha.jpg")`,
                        width: "33vw"
                }}>
                    <div className="hover-gradient">
                        <div className="hover-text">
                            <h2>LATASHA MARZOLLA</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Coaches;
