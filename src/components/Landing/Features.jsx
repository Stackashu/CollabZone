import React from 'react' ;
import "../../App.css";
import style from "../../styles/Landing/Features.module.css";
import Slide from './MiniComponents/Slide';
import magnify from "../../assests/images/magnifyglass.png";
import mobile from "../../assests/images/mobilenotify.png";
import bitcoin from "../../assests/images/bitcoin.png";
import technology from "../../assests/images/technology.png"; 
import security from "../../assests/images/security.png";
import scalegraph from "../../assests/images/scalegraph.png"; 
import networks from "../../assests/images/networks.png";
import coingraph from "../../assests/images/coingraph.png";
import lightrocket from "../../assests/images/lightrocket.png";
import hand from "../../assests/images/hand.png";


const Features = () => {
  const featuresData1 = [
  { heading: 'Partner Search', subHeading: 'Connect with like-minded entrepreneurs based on skills and interests.', image: magnify },
  { heading: 'Project Management Tools', subHeading: 'Create tasks, set deadlines, and track progress with visual tools.', image: mobile},
  { heading: 'Track Yoour Management', subHeading: 'Monitor project budgets and expenses effectively.', image: bitcoin },
  { heading: 'Real-Time Collaboration', subHeading: 'Engage in instant messaging and video calls with your team.', image: technology },
  { heading: 'Protection for Your Data', subHeading: 'Use encryption, access controls, and regulatory compliance to safeguard sensitive information.', image: security }
]

const featuresData2 = [
  { heading: 'Scalability and Growth Potential', subHeading: 'Unlock new markets and opportunities through strategic pratnerships and collaborations.', image: scalegraph },
  { heading: 'Stronger Networks', subHeading: 'Expand your professional connections with like-minded entrepreneurs and industry experts.', image: networks },
  { heading: 'Cost Reduction', subHeading: 'Share resources and responsibilites to minimize expenses and mazimize impact.', image: coingraph },
  { heading: 'Enhanced Innovation', subHeading: 'Collaborate wth diverse minds to sparks creativity and drive new ideas.', image: lightrocket },
  { heading: 'Access to Valuable Resources', subHeading: 'Utilize a comprehensive library of templates, guides, and articles tailored to support your enterepreneurial journey.', image: hand }
]
  return (
    <div className={`${style.features}`}>
      <div className={`${style.heading}`}>Features & Benefits</div>


      <div className={`${style.upperdiv}`}>

        <div className={`${style.upperleft}`}>
            {featuresData1.map((data, index) => (
                <Slide key={index} heading={data.heading} subHeading={data.subHeading} image={data.image} />
            ))}
        </div>

        <div className={`${style.upperright}`}>
            {/* <img src={skills} alt={skills}></img> */}
        </div>
      </div>


      <div className={`${style.lowerdiv}`}>


        <div className={`${style.lowerleft}`}>
        {/* <img src={setting} alt={setting}></img> */}
        </div>


        <div className={`${style.lowerright}`}>
        {featuresData2.map((data, index) => (
                <Slide key={index} heading={data.heading} subHeading={data.subHeading} image={data.image} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Features
