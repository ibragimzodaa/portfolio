import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex items-center container justify-between flex-wrap'>
      <div className="divImages">
        <h1 className='iconText text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-500 to-blue-500 text-gradient-animation'>{"{ 007 }"} <br /> <span className="nameIcon">usmonib</span></h1>
      </div>
      <div className='flex w-[500px] justify-between md:hidden'>
        <p>Home</p>
        <p>About</p>
        <p>Tech Stack</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
      <div className='flex w-[100px] justify-between'>
        <Link target='_blank' href="https://github.com/ibragimzodaa"><Image width={20} height={20} alt='' src="/Vector (1).svg"/></Link>
        <Link target='_blank' href="https://t.me/usmon2oo8"><Image width={20} height={20} alt='' src="/ant-design_twitter-circle-filled (1).svg"/></Link>
        <Link target='_blank' href="https://www.linkedin.com/in/usmon-ibragimov-252613341/"><Image width={20} height={20} alt='' src="/entypo-social_linkedin-with-circle (1).svg"/></Link>
      </div>
    </header>
  )
}

export default Header