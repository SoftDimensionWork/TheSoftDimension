import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { AiOutlineInstagram , AiFillLinkedin} from 'react-icons/ai';
export default function OurTeamCard({name , position ,image, facebook, instagram, linkedin , className}) {
    return (
        <div className={`w-[370px] h-[545px] bg-white rounded-xl overflow-hidden m-10 ${className}`}>
            <div className='h-[363px] bg-white overflow-hidden'>
                <img src={image} className='w-full object-center	' alt="" />
            </div>
            <div className='h-[182px] bg-white text-blue flex flex-col justify-center items-center'>
                <div className='text-[30px]'>
                    {name}
                </div>
                <div className='text-[20px] my-5 mt-3'>
                    {position}
                </div>
                <div className='flex items-center'>
                    <div className='text-[25px]'>
                        <BsFacebook />
                    </div>
                    <div className='text-[30px] mx-5'>
                        <AiOutlineInstagram />
                    </div>
                    <div className='text-[30px]'>
                        <AiFillLinkedin />
                    </div>
                </div>
            </div>
        </div>
    )
}
