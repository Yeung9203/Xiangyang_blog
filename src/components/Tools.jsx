import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CursorIcon from '../assets/AppLogo1.jpg';
import VscodeIcon from '../assets/AppLogo2.jpg';
import PsIcon from '../assets/AppLogo3.jpg';
import AiIcon from '../assets/AppLogo4.jpg';
import AeIcon from '../assets/AppLogo5.jpg';
import BlanderIcon from '../assets/BlanderIcon.png';
import FigmaIcon from '../assets/AppLogo7.jpg';
import FeishuIcon from '../assets/AppLogo8.jpg';
import ModaoIcon from '../assets/AppLogo9.jpg';
import FianlxIcon from '../assets/FinalxIcon.png';
import LottieIcon from '../assets/AppLogo11.jpg';


const Tools = () => {
  const [sectionRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px'
  });

    // 技术栈数据（重复数组以形成连续滚动效果）
    const techStack = [
      { icon: FigmaIcon },
      { icon: ModaoIcon },
      { icon: PsIcon },
      { icon: AiIcon },
      { icon: VscodeIcon },
      { icon: CursorIcon },
      { icon: LottieIcon },
      { icon: AeIcon },
      { icon: BlanderIcon },
      { icon: FianlxIcon },
      { icon: FeishuIcon },
      { icon: FigmaIcon },
      { icon: ModaoIcon },
      { icon: PsIcon },
      { icon: AiIcon },
      { icon: VscodeIcon },
      { icon: CursorIcon },
      { icon: LottieIcon },
      { icon: AeIcon },
      { icon: BlanderIcon },
      { icon: FianlxIcon },
      { icon: FeishuIcon }
    ];

  // 服务项目数据
  const services = [
    'UX Research',
    'Design System',
    'Hi-fi Design',
    'User Interview',
    'Architecture & Wireframe',
    'Rapid Iteration',
    'Design Concept',
    'UI & Visual Design',
    'Prototyping',
    'Figma',
    '3D Modeling',
    'Motion Design'
  ];

  // 动画配置
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
    ref={sectionRef}
    className="max-w-6xl mx-auto px-2 py-24 font-sans relative overflow-hidden"
  >
    {/* 技术栈模块 */}
    <motion.div 
      className="mb-32 relative"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl font-semibold text-white mb-10">/ My tech stack</h2>
      
      {/* 滚动容器 */}
      <div className="relative overflow-hidden py-4">
        {/* 渐变遮罩层 */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-neutral-950 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-neutral-950 to-transparent z-10" />

        {/* 滚动内容 */}
        <motion.div
          className="flex gap-4 w-[max-content]"
          animate={{ 
            x: ['0%', '-50%'], 
            transition: {
              duration: 50,
              repeat: Infinity,
              ease: 'linear'
            }
          }}
        >
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="h-20 w-20 rounded-xl backdrop-blur-lg flex items-center justify-center p-1.5 "
            >
              <img 
                src={tech.icon} 
                alt="tech icon"
                className="w-full h-full transition-all duration-300 rounded-xl "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>

      {/* 服务模块 */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-10">/ What can I do for you?</h2>
        
        <div className="grid grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service}
              className="text-white/60 text-lg font-medium leading-tight"
              variants={fadeUpVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ 
                delay: 0.5 + Math.floor(index/4) * 0.1,
                duration: 1
              }}
            >
              ↘︎ {service}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Tools;
