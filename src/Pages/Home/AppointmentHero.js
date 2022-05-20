import React from 'react';
import doctor from '../../assets/images/doctor.png';
import background from '../../assets/images/appointment.png';
import PrimaryButton from '../../Components/PrimaryButton';

const AppointmentHero = () => {
    return (
        <section
            style={{ background: `url(${background})` }}
            className='flex items-center py-30 px-10'
        >
            <div className='flex-1'>
                <img className='mt-[-150px] hidden lg:block' src={doctor} alt="" />
            </div>
            <div className='flex-1 py-10'>
                <h3 className='text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white'>Make an appointment Today</h2>
                <p className='text-white'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quae soluta quod, commodi deserunt vel amet ducimus sit molestias repudiandae, eos inventore veniam iusto delectus numquam explicabo officia molestiae aliquid modi exercitationem nostrum natus unde adipisci atque. Vel, aut maiores voluptatibus non sit alias consectetur. Odio harum quam distinctio aspernatur!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default AppointmentHero;