import React from 'react';
import EmailCopyButton from './EmailCopyButton';
import Xiaohongshu from "../assets/XiaoHongShu.svg";
import Dribbble from "../assets/Dribbble.svg";
import Zhanku from "../assets/ZhanKu.svg";

const Footer = () => {
  return (
    <footer className="w-full  mx-auto border-t border-white/10 text-white py-10 px-24 flex flex-col  ">
      <div className='flex justify-between items-start e'>
        {/* 复制邮箱按钮 */}
        <div className="mb-24 text-left ">
          <p className="text-lg font-medium mb-2 pl-4">Copy and get in touch!</p>
          <EmailCopyButton />
        </div>
        {/* 社交媒体 */}
        <div className="flex flex-col items-left space-x-4 mt-4 md:mt-0">
            <p className="uppercase tracking-widest text-xs mb-4 ml-4 text-white/50">SOCIAL</p>
            <div className='flex gap-4 '>
            <a href="https://www.xiaohongshu.com/user/profile/5deb2d200000000001005a01?m_source=pwa" target="_blank" rel="noopener noreferrer">
              <img src={Xiaohongshu} alt="Xiaohongshu" className="h-[32px] object-fit"  />
            </a>
            <a href="https://dribbble.com/xiangyangqu" target="_blank" rel="noopener noreferrer">
              <img src={Dribbble} alt="Dribbble" className="h-[32px] object-fit " />
            </a>
            <a href="https://www.zcool.com.cn/u/22321559" target="_blank" rel="noopener noreferrer">
              <img src={Zhanku} alt="Zhanku" className="h-[32px] object-fit " />
            </a>
            </div>
          </div>
      </div>
      {/* 底部信息 */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center pt-6 text-sm text-white/50">
        <div className="text-center md:text-left">
          <p>© 2025 Xiangyang. All Rights Reserved.</p>
          <p className="text-xs">Made with love, passion and the right amount of OCD.</p>
        </div>
        <p className="text-sm mt-4 md:mt-0">Last updated by Xiangyang, Feb 25, 2025</p>
      </div>
    </footer>
  );
};

export default Footer;