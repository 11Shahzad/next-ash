import { useState } from 'react'
import { emailalert, sendemail, hoteldean, hotelpeter, hotelsiren } from '../redux/footerSlice'
import { useSelector, useDispatch } from 'react-redux'
const Footer = () => {
  const dispatch=useDispatch()
  const [email, setEmail]=useState(
    useSelector((state) => state.alertEmail.email))
    function a(){
      document.getElementById('b').classList.toggle('opacity-30')
      document.getElementById('c').classList.toggle('opacity-30')
    }
    function b(){
      document.getElementById('a').classList.toggle('opacity-30')
      document.getElementById('c').classList.toggle('opacity-30')
    }
    function c(){
      document.getElementById('b').classList.toggle('opacity-30')
      document.getElementById('a').classList.toggle('opacity-30')
    }

    return (
    <div className='mx-auto absolute md:bottom-0 lg:bottom-0 xl:bottom-0 container px-5 flex justify-between  xs-:flex-col font-extrabold  mb-[20px] left-0 right-0'>


      <div className='text-center hidden relative w-fit mx-auto xs-:block'>
        <h1 className='text-2xl mb-[16px]'>Stay Abreast</h1>
         <input onChange={
            (e) => setEmail(e.target.value)} placeholder={`${!email? 'Invalid Email' : 'Email' } `} value={email} className='bg-inherit border-b placeholder-current border-black outline-0 relative' type="email"/>
          <button className='py-2 absolute right-0' onClick={()=>dispatch(emailalert(email))}>
            <img src='./Group.png' alt='Submit'/>
          </button>
          </div>
      <div className='flex-col xs-:mt-[48px] text-center'>
        <h1 className='text-2xl'>Job Inquiries</h1>
        <p onClick={()=> dispatch(sendemail())} className='cursor-pointer hover:underline'>Work@hotelulyses.com</p>
      </div>
      <div className='text-center relative z-0 xs-:hidden'>
        <h1 className='text-2xl mb-[16px] '>Stay Abreast</h1>
          <input onChange={
            (e) => setEmail(e.target.value)} value={email} placeholder={`${!email? 'Invalid Email' : 'Email' } `} className='bg-inherit border-b placeholder-current border-black outline-0'required type="email" />
            <button className='py-2 absolute right-0' onClick={()=>dispatch(emailalert(email))}>
            <img src='./Group.png' alt='Submit'/>
          </button>
      </div>
      <div className='text-center xs-:mt-[24px]'>
        <h1 className='text-2xl '>Sisters</h1>
        <p id='a' onClick={()=>dispatch(hotelpeter())} onMouseOver={a} onMouseLeave={a} className='cursor-pointer hover:underline hover'>Hotel Peter & Paul</p>
        <p id='b' onClick={()=>dispatch(hotelsiren())} onMouseOver={b} onMouseLeave={b} className='cursor-pointer hover:underline'>The Siren</p>
        <p id='c' onClick={()=>dispatch(hoteldean())} onMouseOver={c} onMouseLeave={c} className='cursor-pointer hover:underline'>The Dean</p>

      </div>
    </div>
  )
}

export default Footer