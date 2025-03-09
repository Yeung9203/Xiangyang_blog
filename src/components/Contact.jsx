import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SplitText from './SplitText';


const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
    rootMargin: '-50px 0px'
  });

  // 动画配置
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
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
      id="contact"
      ref={ref}
      className="my-28 py-10 px-6 flex items-center justify-center "
    >
      <motion.div 
        className="max-w-6xl  w-full space-y-8 px-1 flex flex-col items-center "
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
      >
        {/* 标题部分 */}
        <AnimatedSection delay={0.2} className=" w-full ">
        <div className=' rounded-full text-m text-white/80 mb-6 border border-white/30 border-solid px-4 py-1 w-[185px] mx-auto '>
        Contact information       
        </div>
        <div className='flex'>
        <p className='text-5xl font-semibold'>
        😘 
        </p>
        <SplitText
          text=" Get in touch"
          className="text-white text-5xl font-semibold text-center  min-h-[80px] w-full"
          delay={50}
          animationFrom={{ opacity: 0, y: 50 }}
          animationTo={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} 
          easing="easeOutCubic"
          threshold={0.2}
          rootMargin="-50px"
          onLetterAnimationComplete={handleAnimationComplete}
        />
        </div>
        </AnimatedSection>

        {/* 联系方式卡片 */}
        <motion.div 
          className=" bg-[url('./assets/bgContact.png')] bg-cover bg-center border border-white/15 bg-no-repeat rounded-3xl p-28 shadow-xl w-full h-auto    "
          style={{ willChange: "transform"  }}
          variants={fadeInVariants}
          transition={{ duration: 0.8, delay:0.5 }}
        >
          <div className="grid gap-8 md:grid-cols-2">
            {/* 联系方式列表 */}
            <div className="space-y-12">
              <h3 className="text-3xl font-semibold text-white/90 mb-6">☎️ Contact  ↘︎</h3>
              
              <ContactInfoItem label="Phone：" value="13168540424" inView={inView} delay={0.2}/>
              <ContactInfoItem label="Wechat：" value="yeung-wat" inView={inView} delay={0.4} />
              <ContactInfoItem 
                label="Emails：" 
                values={[
                  '1091962215@qq.com',
                  'xiangyang.qu2001@gmail.com'
                ]} 
                inView={inView}
                delay={0.6}
              />
            </div>

            {/* 下载区块 */}
            <div className="space-y-6 ">
              <DownloadCard 
                title="Portfolio ↘︎"
                description="Download my portfolio（PDF&20MB）"
                buttonText="Coming Soon"
              />
              <DownloadCard 
                title="Resume ↘︎" 
                description="Download my resume（PDF&1MB）"
                buttonText="Coming Soon"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

// 联系信息子组件
const ContactInfoItem = ({ label, value, values,inView, delay = 0  }) => (
  <motion.div 
    className="space-y-1"
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: delay || 0 }}
  >
    <p className="text-orange-100/60 text-sm">{label}</p>
    {values ? (
      values.map((val, i) => (
        <p key={i} className="text-white/80 text-lg font-normal">{val}</p>
      ))
    ) : (
      <p className="text-white/80 text-lg font-normal">{value}</p>
    )}
  </motion.div>
);

// 下载卡片组件
const DownloadCard = ({ title, description, buttonText }) => (
  <motion.div 
    className="bg-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors "
    whileHover={{ y: -3 }}
  >
    <div className="flex flex-col  justify-left items-left space-y-5  ">
        <h4 className="text-white/70 font-semibold text-xl">{title}</h4>
        <p className="text-orange-100/60 text-sm mt-1">{description}</p>
        <a 
        // href="#" // 替换实际下载链接
        className="bg-white/60 hover:bg-white/60 text-black/50 px-5 py-2 rounded-lg text-sm font-medium transition-colors w-[134px] "
      >
        {buttonText}
      </a>
      
    </div>
  </motion.div>
);

export default Contact;