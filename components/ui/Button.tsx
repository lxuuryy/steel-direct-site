'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Menu from './Menu'

type Props = {
    label?: string
    isOpen?: boolean
    setIsOpen?: (isOpen: boolean) => void
}

function Button({isOpen, setIsOpen, label}: Props) {

    const toggleIsOpen = () => {
        setIsOpen?.(!isOpen);
    };

    
    return (
        <div className='fixed right-[20px] top-[20px] z-[9999]'>
             <Menu  isOpen={isOpen} setIsOpen={setIsOpen}/>
            <div onClick={toggleIsOpen} className='h-[40px] w-[100px] border rounded-xl overflow-hidden cursor-pointer absolute top-0 right-0'>
                <motion.div
                    animate={{ top: isOpen ? '-100%' : '0%' }}
                    className='relative h-full w-full'
                    transition={{ ease: [0.65, 0, 0.35, 1] ,  duration: 0.5, type: "tween"}}
                >
                    <div className='h-[100%] w-full bg-[transparent] '>
                        <PerspectiveText label='MENU' />
                    </div>
                    <div className='h-[100%] bg-black text-white w-full   absolute top-[100%]'>
                        <PerspectiveText label='CLOSE' />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
function PerspectiveText({ label }: Props) {
    return (
        <div className=' perspective w-full h-full relative flex justify-center items-center '>
            
            <p className='main'>{label}</p>
           
            
            <p className='  '>{label}</p>
            
        </div>
    )
}

export default Button

