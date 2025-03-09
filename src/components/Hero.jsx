import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import  TiltedCard  from './TiltedCard';
import location from '../assets/my-location.svg';
import StarBorder from './StarBorder';
import SplitText from "./SplitText";
import { Link } from 'react-scroll';

const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to} 
      smooth={true} // 启用平滑滚动
      duration={800} // 滚动时长（毫秒）
      offset={-80} // 可选，调整滚动后停留的位置（避免导航栏遮挡）
      className="text-white relative overflow-hidden group text-sm font-medium tracking-wide hover:text-white transition-colors drop-shadow-md cursor-pointer"
    >
      {children}
    </Link>
  );
};


const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const ScrollIndicator = () => (
    
    <motion.div
      className="absolute bottom-32 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: [0, 1, 0],
        y: [0, 10, 0]
      }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: "easeInOut"
      }}
    >
      {/* 自定义箭头图形 */}
      <svg 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2"
        className="text-white/80"
      >
        <path d="M12 5v14M19 12l-7 7-7-7"/>
      </svg>
      
      {/* 可选：添加脉冲圆环 */}
      <motion.div
        className="absolute inset-0 border-2 border-white/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </motion.div>
  );

  return (
    <section 
      id="home"
      ref={ref} 
      className="min-h-screen w-full flex justify-start items-center relative px-20"
    >
      
      <ScrollIndicator />
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-2 gap-20 ">
        {/* 左侧文字内容 */}
        <div className="flex flex-col justify-center items-start">
        <SplitText
          text="Hi there. I'm Xiangyang,a product designer"
          className="text-[56px] font-bold leading-tight mb-6 text-left "
          delay={50}
          animationFrom={{ opacity: 0, y: 50 }}
          animationTo={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
          {/* <motion.h1 
            className="text-[56px] font-bold leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Hi there. I'm Xiangyang,
            a product designer
          </motion.h1> */}
          
          <motion.p 
            className="text-white/60 text-lg mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I design thoughtful digital experiences that are beautiful and enjoyable.
          </motion.p>
          
          <motion.button
            className="flex items-center space-x-2 bg-black/20 backdrop-blur-sm text-white/90 py-3 rounded-full w-fit hover:bg-black/30 transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <StarBorder
            as="button"
            className="custom-class"
            color="white"
            speed="2.5s"
            
            > 
            <NavLink to="contact">😘 <span className='underline'>Get in touch↗</span></NavLink>
            
            </StarBorder>
          </motion.button>
        </div>

        {/* 右侧卡片 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-end items-center"
        >
          <TiltedCard
          imageSrc="/profile.jpg"
          altText="Kendrick Lamar - GNX Album Cover"
          captionText="Shenzhen - China"
          containerHeight="550px"
          containerWidth="400px"
          imageHeight="550px"
          imageWidth="400px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={
          <div className="backdrop-blur-xl bg-black/40 text-white px-5 py-2.5 m-12 rounded-2xl  font-extrabold drop-shadow-lg flex justify-center items-center gap-2 ">
            <img src={location} alt="Location" className="h-5" />
            <p > Shenzhen - China </p>
          </div>
            }
          />
  
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 