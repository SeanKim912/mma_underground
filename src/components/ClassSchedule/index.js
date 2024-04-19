import React from 'react';
import './ClassSchedule.css';

const ClassSchedule = () => {
    return (
        <div className='scheduleContainer'>
            <div className='scheduleGrid'>
                <div></div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 2}}>9:00 AM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 3}}>9:30 AM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 4}}>10:00 AM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 5}}>10:30 AM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 6}}>11:00 AM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 7}}>11:30 AM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 8}}>12:00 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 9}}>12:30 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 10}}>1:00 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 11}}>1:30 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 12}}>2:00 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 13}}>2:30 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 14}}>3:00 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 15}}>3:30 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 16}}>4:00 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 17}}>4:30 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 18}}>5:00 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 19}}>5:30 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 20}}>6:00 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 21}}>6:30 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 22}}>7:00 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 23}}>7:30 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 24}}>8:00 PM</div>
                <div style={{"gridColumnStart": 1, "gridRowStart": 25}}>8:30 PM</div>
            </div>
        </div>
    )
}

export default ClassSchedule;
