import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { use, useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/profile2.jpg" 
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'

const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, {duration: 3000})
const isInView = useInView(ref, {once:true});

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value){
            ref.current.textContent = latest.toFixed(0);
        }
    })
}, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
        <Head>
            <title>Madu Frank Portfolio</title>
            <meta name='description' content='web and mobile app developer in Abuja'/>
        </Head>
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText className='mb-5' text="Tech to fuel your vision" />
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Hi, I'm Madu Frank.</h2>
                        <p className='font-medium'>
                           - Am a software Developer specialized in bespoke Web and Mobile App Development based in Abuja, Nigeria.
                        </p>
                        <p className='font-medium'>
                        - I believe that design is about more than just making things look pretty – it's about solving problems and 
                        creating intuitive, enjoyable and seamless experiences for users. 
                        </p>
                    </div>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl' />
                    <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark
                                    bg-light p-8'>
                        <Image src={profilePic} alt="about Madu Frank" className='w-full h-auto rounded-2-xl' />
                    </div>
                    <div className='col-span-2 flex flex-col items-end justify-between'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                                <AnimatedNumbers value={4}/>+ 
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
                        </div>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumbers value={8} />+ 
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
                        </div>
                    </div>
                   
                </div>
               
            </Layout>
            <Skills />
        </main>
    </>
  )
}

export default about