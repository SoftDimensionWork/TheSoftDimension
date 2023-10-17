import React from 'react'

function BackgroundSVG() {
    return (
        <>
            <div className='w-full h-full fixed z-[-1] top-0 left-[-200px] bg-'>
                <img src="/SVG/background.svg" alt="" />
            </div>
            <div className='w-full h-full fixed top-0 right-0 z-[-1]'>
                <img src="/SVG/background.svg" className='absolute right-[-200px] bg-' alt="" />
            </div>
        </>
    )
}

export default BackgroundSVG