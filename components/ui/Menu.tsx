import React from 'react'
import { motion, AnimatePresence} from 'framer-motion'

type Props = {
    isOpen?: boolean
    setIsOpen?: (isOpen: boolean) => void
}

function Menu({isOpen, setIsOpen}: Props) {

    const data = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/about'
        },
        {
            name: 'Contact',
            link: '/contact'
        },
        {
            name: 'Careers',
            link: '/careers'
        }
    ]
    const variants = {
        open: {width: 310,
            height: '450px', opacity: 1,
        transition:{
            duration: 0.75,
            ease: [0.65, 0, 0.35, 1]
        }
        },
        closed: { width: 100,
            height: 40, opacity:0,
            transition:{
                duration: 0.75,
                ease: [0.65, 0, 0.35, 1],
                delay: 0.75
            }}
            
    
    }

    const footer = [
        {
            name: 'Privacy Policy',
            link: '/privacy'
        },
        {
            name: 'Terms of Service',
            link: '/terms'
        },
        {
            name: 'Accessibility',
            link: '/accessibility'
        },
        {
            name: 'Cookies',
            link: '/cookies'
        }

    ]

    const secondVariants = 
    
    {initial: {
        opacity: 0,
        rotateX: 20,
        translateY: 80,
        translateX: -20
        
    },
    enter : (i:any) => ({
        opacity:1,
        transition : { delay: 0.25 + (i * 0.1),
            opacity: {duration: 0.45},
            ease: [0.65, 0, 0.35, 1],
        
        },
        translateY: 0,
        translateX: 0,
        rotateX: 0
        
    }),
    exit: {
        opacity: 0,
        
    }}

    const third = 
    
    {initial: {
        opacity: 0,
        rotateX: 20,
        translateY: 10,
        translateX: -20
        
    },
    enter : (i:any) => ({
        opacity:1,
        transition : { delay: 0.45 + (i * 0.1),
            opacity: {duration: 2},
            ease: [0.65, 0, 0.35, 1],
        
        },
        translateY: 0,
        translateX: 0,
        rotateX: 0
        
    }),
    exit: {
        opacity: 0,
        
    }}
  return (
    <motion.div variants={variants} initial='closed' animate={isOpen ? 'open' : 'closed'} className='w-[480px] h-[650px]
    bg-black-100  rounded-xl flex justify-between flex-col 
    '>
        <AnimatePresence>
                {isOpen && <div className=' link flex justify-start items-start h-full flex-col p-[20px] text-4xl no-underline'>

        {data.map((item, i) =>(
            <motion.div key={i} custom={i} variants={secondVariants} initial='initial' animate='enter' exit='exit'  >
                <a href=''>{item.name}</a>
            </motion.div>
            ))}
        </div>}
        </AnimatePresence>
        {isOpen && <div className='flex  flex-wrap m-2 justify-start'>
        {footer.map((item, i) => (<motion.div key={i} custom={i}  variants={third} initial='initial' animate='enter' exit='exit'>
            <motion.a   className=' p-2' href=''>{item.name}</motion.a>
        </motion.div>))}
        </div>}
    </motion.div>
  ) 
}

export default Menu