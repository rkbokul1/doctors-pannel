import React from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png'

const AppointmentBanner = ({date, setDate}) => {

    return (
        <div style={{background:`url(${bg})`, backgroundSize:'content'}}>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' class="sm:max-w-sm rounded-lg shadow-2xl mx-5" />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;