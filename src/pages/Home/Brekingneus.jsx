import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const Brekingneus = () => {
    return (
        <div className='flex '>
            <button className="btn btn-secondary">Latest</button>
         <Marquee  pauseOnHover={true}>
        <Link> I can be a React component, multiple React components, or just some text.</Link>
        <Link> I can be a React component, multiple React components, or just some text.</Link>
        <Link> I can be a React component, multiple React components, or just some text.</Link>
          </Marquee>
        </div>
    );
};

export default Brekingneus; 