import React, { useState } from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns';

import chair from '../../assets/images/chair.png';

const AppointmentBanner = () => {

    const [date, setDate] = useState(new Date());
    return (
        <div>
            <div class="hero min-h-screen">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='' class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <DayPicker
                            mode='single'
                            selected={date}
                            onSelect={setDate}
                        />
                    </div>
                </div>
            </div>
            <p>You have picked {format(date, 'PP')}</p>
        </div>
    );
};

export default AppointmentBanner;