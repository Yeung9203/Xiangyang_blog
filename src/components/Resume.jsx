import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SplitText from "./SplitText";
import BgRume from "../assets/bg-rume.jpg";
import BgRume1 from "../assets/bg-rume1.jpg";
import BgRume2 from "../assets/bg-rume2.jpg";
import BgRume3 from "../assets/bg-rume3.jpg";
import BgRume4 from "../assets/bg-rume4.jpg";


const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px'
  });

  // 动画组件
  const AnimatedSection = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <section 
      id="resume"
      ref={ref}
      className="min-h-screen  pt-60 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl  mx-auto w-full flex flex-col items-center">
        {/* 标题 */}
        <AnimatedSection delay={0.2} className="w-full">
        <div className=' rounded-full text-m text-white/80 mb-6 border border-white/30 border-solid px-4 py-1 w-[175px] mx-auto '>
        Simplified Version
        </div>

        <SplitText
          text="My Resume"
          className="text-white text-5xl font-semibold text-center mb-16 min-h-[80px]"
          delay={50}
          animationFrom={{ opacity: 0, y: 50 }}
          animationTo={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        </AnimatedSection>

        {/* 个人优势网格 - 精确1:2比例布局 */}
      <div className='max-w-6xl mx-auto w-full flex flex-wrap gap-4 mt-10 '>
        {/* 左侧卡片 - 严格1/3宽度 */}
        <div className="w-full md:w-[calc(33.333%-1.5rem)]"> {/* 计算补偿gap空间 */}
          <AnimatedSection delay={0.5} className="flex-1 min-w-0">
          <div 
          className="relative p-8 rounded-2xl shadow-lg h-48 overflow-hidden"
          style={{ 
            background: `url(${BgRume})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          {/* 背景遮罩层 */}
          {/* <div className="absolute inset-0 bg-[#6366f1]/10 backdrop-blur-sm"></div> */}
          {/* 文字内容 */}
          <div className="relative z-10 flex flex-col justify-center h-full text-white">
              <div className="text-3xl font-bold mb-2">2 Years</div>
              <div className="text-xl font-medium text-white/70 whitespace-nowrap">Product design experience</div>
          </div>
          </div>
          </AnimatedSection>
        </div>
       
        {/* 右侧四个卡片通用模板 */}
<div className="flex-1 min-w-0 ">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full font-medium">
    {/* 绿色卡片 */}
    <AnimatedSection delay={0.6}>
      <div className="relative h-full rounded-xl overflow-hidden bg-cover bg-center" 
           style={{ 
          background: `url(${BgRume1})`,
           backgroundSize: 'cover',
           backgroundPosition: 'center' }}>
        {/* <div className="absolute inset-0 bg-[#10b981]/10 backdrop-blur-sm" /> */}
        <div className="relative z-20 py-4 px-5 h-full flex items-center text-white/90  text-lg font-medium shadow-black ">
        Product thinking, promoting growth
        </div>
      </div>
    </AnimatedSection>

    {/* 橙色卡片 */}
    <AnimatedSection delay={0.7}>
      <div className="relative h-full rounded-xl overflow-hidden bg-cover bg-center" 
      style={{ 
        background: `url(${BgRume2})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center' }}
         >
        
        {/* <div className="absolute inset-0 bg-[#f59e0b]/80" /> */}
        <div className="relative z-10 py-4 px-5 h-full flex items-center text-white/90  text-lg font-medium shadow-black">
        Experience in managing small teams
        </div>
      </div>
    </AnimatedSection>

    {/* 紫色卡片（第一个） */}
    <AnimatedSection delay={0.8}>
      <div className="relative h-full rounded-xl overflow-hidden bg-cover bg-center" 
      style={{ 
        background: `url(${BgRume3})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center' }}
         >
        {/* <div className="absolute inset-0 bg-[#8b5cf6]/80" /> */}
        <div className="relative z-10 py-4 px-5 h-full flex items-center text-white/90  text-lg font-medium shadow-black" >
        Engineer mindset, help product realize
        </div>
      </div>
    </AnimatedSection>

    {/* 紫色卡片（第二个） */}
    <AnimatedSection delay={0.9}>
      <div className="relative h-full rounded-xl overflow-hiddenbg-cover bg-center " 
      style={{ 
        background: `url(${BgRume4})`,
         backgroundSize: 'cover',
         backgroundPosition: 'center' }}
         >
        {/* <div className="absolute inset-0 bg-[#8b5cf6]/80" /> */}
        <div className="relative z-10 py-4 px-5 h-full flex items-center text-white/90  text-lg font-medium shadow-black">
        Academic background in the arts
        </div>
      </div>
    </AnimatedSection>
  </div>
</div>
        </div>

        {/* 专业板块 */}
        <AnimatedSection delay={1} >
          <div className="my-36  flex flex-col ">
            <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
              {/* <span className="w-8 h-[3px] bg-white mr-4"></span> */}
              / Professional
            </h2>
            <div className="rounded-2xl shadow-md">
              <ul className="space-y-1 text-white/60 leading-8 text-lg ">
                <li>・Two years of experience in product design, responsible for designing and iterating APPs, mini-programs, SaaS platforms, and business systems from 0 to 1.</li>
                <li>・Proficient in independent product planning and design, specializing in product prototyping, business research, and requirements analysis, delivering high-quality PRD documents.</li>
                <li>・Skilled in using design tools such as Figma, MockingBot, Xmind, and Visio, with a good understanding of API interfaces, MySQL, databases, and common front-end frameworks like Ant and Element.</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>

        {/* 自驱 & 团队双列布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <AnimatedSection delay={1.1}>
            <div className="mb-14">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                {/* <span className="w-8 h-[3px] bg-[#10b981] mr-4"></span> */}
                / Team
              </h2>
              <div className=" rounded-2xl shadow-md">
                <ul className="space-y-1 text-white/60 leading-8 text-lg ">
                <li>・Experienced in managing small team projects, coordinating upstream and downstream product and development processes to ensure timely project delivery.</li>
                <li>・Proficient in using Feishu Multi-dimensional Tables for parallel management of multiple projects, improving project management efficiency.</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1.2}>
            <div className="mb-14">
              <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                {/* <span className="w-8 h-[3px] bg-[#f59e0b] mr-4"></span> */}
                / Self-motivation
              </h2>
              <div className="rounded-2xl shadow-md">
                <ul className="space-y-1 text-white/60 leading-8 text-lg ">
                  
                  <li>・Continuously learning AI-related technologies and tools (LLM language models and ComfyUI) to improve productivity.</li>
                  <li>・AEmpowered by AI, learning front-end technologies such as HTML, CSS, and JavaScript through AI, dedicated to recreating and crafting exceptional interactive experiences.</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Resume;