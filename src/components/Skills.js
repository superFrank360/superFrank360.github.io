import React from 'react'
import {motion} from "framer-motion"

const Skill = ({name,x,y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-bold bg-dark text-light shadow-dark
        cursor-pointer py-3 px-6 absolute'
        whileHover={{scale:1.05}}
        initial={{x:0,y:0}}
        animate={{x:x,y:y}}
        transition={{duration:1.5}}
        >
       {name}
        </motion.div>
    )
}

const Skills = () => {
  return (
    <>
        <h2 className='w-full text-center font-bold text-8xl mt-54'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight'>
            <motion.div className='flex items-center justify-center rounded-full font-bold bg-dark text-light p-8 shadow-dark
                                    cursor-pointer py-3 px-6 absolute'
             whileHover={{scale:1.05}}
            >
                Web
               
            </motion.div>
            <Skill name="CSS" x="-15vw" y="-2vw" />
            <Skill name="HTML" x="-5vw" y="-15vw" />
            <Skill name="Javascript" x="-15vw" y="-20vw" />
            <Skill name="ReactJS" x="-20vw" y="-7vw" />
            <Skill name="PHP" x="-30vw" y="-17vw" />
        </div>

    </>
  )
}

export default Skills