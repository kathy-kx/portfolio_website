// 没有针对mobile优化
"use client"
import dynamic from 'next/dynamic';
import React from 'react'

const AnimatedNumbers = dynamic(() => {return import('react-animated-numbers')}, {ssr: false});

const achievementsList = [
    {
        metric: "Projects",
        value: "100",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100000",
    },
    {
        metric: "Awards",
        value: "7",
    },  
    {
        metric: "Years",
        value: "5",
    },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-8 xl:gap-16 sm:py-16 xl:px-16">
        <div className='border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between'>
            
        
            {achievementsList.map((achievement, index) => {
                return (
                    <div key={index} className='flex flex-col items-center justify-center mx-4'>
                        <h2 className='text-white text-4xl font-bold flex flex-row'>
                            {achievement.prefix }
                            <AnimatedNumbers
                                useThousandsSeparator={true}
                                includeComma={true}
                                animateToNumber={parseInt(achievement.value)}
                                locale='en-US'
                                className='text-white text-4xl font-bold'
                                configs={((_, index) => {
                                    return{
                                        mass: 1,
                                        friction: 100,
                                        tension: 140 * (index + 1),
                                        delay: index * 100,
                                    }
                                })}
                            />
                            {achievement.postfix}
                        </h2>
                        <p className='text-[#ADB7BE] text-base'>{achievement.metric}</p>
                    </div>
                );
            })}
        </div>
    </div>
  )
}

export default AchievementsSection