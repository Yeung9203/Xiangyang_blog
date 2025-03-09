import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.svg'; // 引入你的 logo
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

const Header = () => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 px-12 "
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease:'easeOut' }}
    >
      {/* 内容容器 - 使用固定宽度 */}
      <div className="relative w-full max-w-[1248px] min-w-[448px] h-[48px] rounded-[100px] flex justify-between items-center flex-shrink-0 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.4)] ">
        {/* 渐变边框背景 */}
        <div 
          className="absolute inset-0 rounded-[100px] before:absolute before:inset-0 before:p-[1px] before:rounded-[100px] before:content-['']"
          style={{
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.3), rgba(202, 202, 202, 0.1), rgba(255, 255, 255, 0.15))',
            WebkitBackfaceVisibility: 'hidden',
            MozBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
        />
        
        {/* 内容区域 - 背景模糊 */}
        <div 
          className="absolute inset-[1px] rounded-[100px]  bg-black/60 backdrop-blur-md"
          style={{
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            WebkitBackfaceVisibility: 'hidden',
            MozBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden'
          }}
        />
        
        {/* 实际内容 */}
        <div className="relative w-full px-7 flex justify-between items-center ">
          {/* Logo部分 */}
          <div className="flex items-center space-x-2 ">
            <img src={logo} alt="Logo" className="h-8 "/>
          </div>
          
          {/* 导航链接 */}
          <nav className="hidden md:flex items-center space-x-8 ">
          <NavLink to="home">Home</NavLink>
          <NavLink to="portfolio">Portfolio</NavLink>
          <NavLink to="resume">Resume</NavLink>
          </nav>
          
          {/* 右侧按钮 */}
          <NavLink to="contact">😘 <span className='underline'>Get in touch↗</span></NavLink>
        </div>
      </div>
    </motion.header>
  );
};

export default Header; 