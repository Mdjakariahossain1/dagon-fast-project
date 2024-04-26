import pera from '../../../assets/logo.png';
import moment from 'moment';

const Headar = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={pera} alt="" />
            <p className='text-lg'>Journalism Without Fear or Favour</p>
            <p className='text-xl'>{moment().format("dddd, MMMM D YYYY")}</p>
        </div>
    );
};

export default Headar;