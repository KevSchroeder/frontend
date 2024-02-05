import React from 'react'
import { HandRaisedIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>new</p>
                    <HandRaisedIcon className="h-6 w-6 text-gray-500" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <ArrowRightIcon className="h-6 w-6 text-gray-500" />
            </div>
        </div>
        <div className="hero-right">
        
        </div>
    </div>
  )
}

export default Hero
