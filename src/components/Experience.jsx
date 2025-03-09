import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
    rootMargin: '-50px 0px'
  });

  // 动画配置
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section ref={ref} className="max-w-6xl mx-auto px-1 py-16 font-sans">
      {/* 教育经历 */}
      <motion.div
        className="mb-40"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">
          / Educational experience
        </h2>
        <div className=" flex justify-between text-lg ">
          <div className='flex flex-col '>
            <p className="text-white/70">Beijing Institute of Fashion Technology（BIFT）</p>
            <p className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent text-sm  ">Full-time First-tier Undergraduate Art Program</p>
          </div>
          <div className='flex flex-col'>
            <p className="text-white/70">Product Design</p>
            <p className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent text-sm">National rank 7, Source: SoftScience China, 2024</p>
          </div>
          <p className="text-white/70">2019.9 - 2023.6</p>
        </div>
        <p className='text-white/50 text-md mt-8'> Major Courses: Product Thinking, Interaction Design, Smart Hardware </p>
      </motion.div>

      {/* 工作经历 */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={fadeInVariants}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold  text-white mb-8 tracking-tight">
          / Work experience
        </h2>
        
        {/* 浮力洞察 */}
        <div className="mb-12 space-y-12 px-16 py-12 rounded-[16px] bg-[radial-gradient(254.07%_138.4%_at_0%_2.27%,#272727_0%,#161616_40%)]">
          <motion.div
            variants={fadeInVariants}
            transition={{ delay: 0.8 }}
            className='flex justify-between items-center w-full'
          >
            <h3 className="text-2xl font-semibold text-white/80 ">
              Fleet Insight（Shenzhen）Technology Co., Ltd.
            </h3>

            <p className="text-white/50 font-medium ">Product Designer & Manager</p>


              <p className="text-white/50 font-medium">2023.08 ～ 2024.02</p>

          </motion.div>
          <p className="text-white/40 font-medium">
          <strong>Primary Products Managed:  </strong><br /> Shipping Calculation & Management SaaS / Fuel Decision-Making Evaluation System
          </p>
          <motion.ul 
            className="list-disc pl-4 space-y-2 "
            variants={fadeInVariants}
            transition={{ delay: 0.9 }}
          >
            
            <li className="text-white/40 leading-relaxed">
              <strong>Market Research:</strong>  <br /> Conducted in-depth market and competitive analysis to identify trends in the maritime industry and uncover real customer needs, ensuring a better product-market fit.
            </li>
            <li className="text-white/40 leading-relaxed">
              <strong>Requirement Research:</strong>  <br /> Gathered and analyzed business requirements through business trips and online meetings, engaging directly with client business teams.
            </li>
            <li className="text-white/40 leading-relaxed">
              <strong>Product Design:</strong> <br /> Led requirement analysis and review, planned product roadmaps, defined product features and user experience, and created prototypes, UI designs, and PRD documentation.
            </li>
            <li className="text-white/40 leading-relaxed">
              <strong>Project Management:</strong> <br /> Managed multiple projects simultaneously, breaking down requirements for efficient tracking, coordinating with development and testing teams, and ensuring on-time delivery and iteration.
            </li>
          </motion.ul>

          <motion.p
            className="text-white/50  "
            variants={fadeInVariants}
            transition={{ delay: 0.9 }}
          >
            <strong>Key Achievements:</strong>  <br /> After the launch of the fuel project, quantitative research efficiency increased by at least 300%. <br />
            Spot fuel: Approximately $1.86 million compared to the previous year. Futures fuel: Approximately $4.92 million in procurement cost reductio
          </motion.p>
        </div>

        {/* 云影天光 */}
        <div className="mb-12 space-y-12 px-16 py-12 rounded-[16px] bg-[radial-gradient(254.07%_138.4%_at_0%_2.27%,#272727_0%,#161616_40%)]">
          <motion.div
            variants={fadeInVariants}
            transition={{ delay: 0.9 }}
            className='flex justify-between  items-center w-full'
          >
            <h3 className="text-2xl font-semibold text-white/80 ">
            Perspectivar Technology Co., Ltd.
            </h3>

            <p className="text-white/50 font-medium">UXUI Designer ( Internship ) </p>


              <p className="text-white/50 font-medium">2022.05 ~ 2023.04</p>
          </motion.div>
          
          <motion.p
            className="text-white/50 font-medium "
            variants={fadeInVariants}
            transition={{ delay: 0.9 }}
          >
            <strong>Primary Products Managed:  </strong> <br /> Shihang Notes & Wuyi Digital Collectibles
          </motion.p>
          <motion.ul
            className="list-disc pl-6 space-y-2"
            variants={fadeInVariants}
            transition={{ delay: 0.9 }}
          >
            <li className="text-white/50 leading-relaxed">
              <strong>Competitive Analysis:</strong><br />Utilized UX principles, SWOT analysis, and other frameworks to assess competitors, track industry trends, and deliver analytical reports.
            </li>
            <li className="text-white/50 leading-relaxed">
              <strong>Interaction & UI Design:</strong><br />Designed over 300+ interactive prototypes and high-fidelity UI interfaces, producing detailed interaction documentation.
            </li>
            <li className="text-white/50 leading-relaxed">
              <strong>Design Resource Management:</strong><br />Regularly maintained design assets, including icon libraries and Figma component libraries, ensuring rapid product iteration.
            </li>
            <li className="text-white/50 leading-relaxed">
              <strong>Rapid Iteration:</strong><br />Collected and analyzed over 100+ user feedback inputs through community engagement and data tracking, continuously refining the product and enhancing user experience.
            </li>
          </motion.ul>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
