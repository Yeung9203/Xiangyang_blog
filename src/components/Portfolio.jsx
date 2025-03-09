import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SplitText from "./SplitText";
import cardSaas from '../assets/card-saas.jpg';
import cardApp from '../assets/card-app.jpg';
import cardWeb from '../assets/card-web.jpg';
import saasLogo from '../assets/saasLogo.svg';
import appLogo from '../assets/appLogo.svg';
import webLogo from '../assets/webLogo.svg';

const PortfolioCard = ({ logo , title, description ,bgImage, delay }) => {
  return (
    <motion.div 
      className={`relative rounded-2xl p-6 h-[430px] w-[340px] flex items-center justify-center shadow-2xl bg-cover bg-center  `}
      style={{ backgroundImage: `url(${bgImage})` }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -20, transition: { duration: 0.2} }}
    >
      <div className="absolute top-6 left-6 z-10">
        <div className=" p-2 rounded-lg shadow-md">
          <img 
            src={logo} 
            alt="logo" 
            className="w-12 h-12 object-contain" 
          />
        </div>
      </div>
      <div className="absolute bottom-8 left-8 text-white opacity-100">
        <h2 className="text-2xl font-semibold">{title}</h2>
        {description && <p className="text-m mt-2 text-white/65">{description}</p>}
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

  return (
    <section 
      id="portfolio"
      ref={ref}
      className="relative min-h-[900px] flex flex-col justify-center items-center px-8 py-10 bg-white mx-16 rounded-large min-w-[420px] "
    >
      {/* 修正后的网格背景 */}
      <svg 
  className="absolute inset-0 w-full h-full pointer-events-none z-0"
  viewBox="0 0 1000 1000"
  preserveAspectRatio="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    {/* 网格pattern */}
    <pattern 
      id="portfolio-grid"
      width="60" 
      height="60"
      patternUnits="userSpaceOnUse"
    >
      <path 
        d="M 80 0 L 0 0 0 80"
        fill="none" 
        stroke="#33333350"  // 浅灰色网格线
        strokeWidth="1.5"
      />
    </pattern>

    {/* 透明渐变遮罩 */}
    <linearGradient id="fade-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
      <stop offset="0%" stop-color="white" stop-opacity="1"/>
      <stop offset="100%" stop-color="white" stop-opacity="0"/>
    </linearGradient>

    <mask id="fade-mask">
      <rect width="100%" height="100%" fill="url(#fade-gradient)"/>
    </mask>
  </defs>

  {/* 网格层 */}
  <rect 
    width="100%" 
    height="100%" 
    fill="url(#portfolio-grid)"
    mask="url(#fade-mask)"  // 应用渐变遮罩
    opacity="0.9"  // 整体透明度控制
  />
</svg>


      <motion.div 
        className="max-w-6xl  mx-auto w-full flex flex-col items-center   "
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className=' rounded-full text-m text-black/80 mb-6 border border-black/30 border-solid px-2 py-1 '>
          Coming soon...
        </div>

        <SplitText
          text="My portfolios"
          className="text-black text-5xl font-semibold text-center mb-16 min-h-[80px]"
          delay={50}
          animationFrom={{ opacity: 0, y: 50 }}
          animationTo={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 rounded-4xl ">
          <PortfolioCard 
            title="SAAS" 
            description="Coming soon...."
            bgImage={cardSaas}  // 传入背景图片
            logo={saasLogo} 
            delay={0.2}
          />
          <PortfolioCard 
            title="App" 
            bgImage={cardApp}  // 传入背景图片
            description="Coming soon...."
            logo={appLogo} 
            delay={0.3}
          />
          <PortfolioCard 
            title="Web" 
            bgImage={cardWeb}  // 传入背景图片
            description="Coming soon...."
            logo={webLogo} 
            delay={0.4}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Portfolio; 