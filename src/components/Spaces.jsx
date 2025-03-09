import React from 'react';
import { useInView } from 'react-intersection-observer';
import SplitText from "./SplitText";
import RotatingText from './RotatingText';
import BounceCards from './BounceCards';
import AiAgent from '../assets/AI_Agent.jpg';
import UIUX from '../assets/UI_UX.jpg';
import Saas from '../assets/Saas.jpg';
import Front_end from '../assets/Front_end.jpg';
import model from '../assets/3D_model.jpg';


const Spaces = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };
  const images = [
    model,
    Front_end,
    Saas,
    AiAgent,
    UIUX
  ];
  
  const transformStyles = [
    "rotate(5deg) translate(-150px)",
    "rotate(0deg) translate(-70px)",
    "rotate(-5deg)",
    "rotate(5deg) translate(70px)",
    "rotate(-5deg) translate(150px)"
  ];

  return (
    <section 
      id="spaces"
      ref={ref}
      className="flex gap-8 flex-col justify-center items-center px-8 py-16 mb-[40px]"
    >
      <div className='flex gap-2 justify-center items-center text-2xl font-black'> 
        <p className=''>
        Creative 
        </p>
        <RotatingText
        texts={['User Experience ', 'Motion Effect ', '3D Modeling', 'UI and Visual ']}
        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-0.5 md:py-2 justify-center rounded-lg"
        staggerFrom={"last"}
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2000}
      />
      </div>
      <SplitText
          text="Spaces I kick ass in"
          className="text-5xl font-semibold text-center"
          delay={50}
          animationFrom={{ opacity: 0, y: 50 }}
          animationTo={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
      
      <BounceCards
          className="custom-bounceCards mb-12"
          images={images}
          containerWidth={400}
          containerHeight={400}
          animationDelay={1}
          animationStagger={0.2}
          easeType="elastic.out(1, 0.5)"
          transformStyles={transformStyles}
          enableHover={true}
        />
    </section>
  );
};

export default Spaces; 