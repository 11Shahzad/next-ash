import { useRouter } from 'next/router'
import Moment from 'moment'
import { useState, useEffect } from 'react'
import { addbooking } from '../redux/ashSlice'
import { useDispatch, useSelector } from 'react-redux'
const Body = () => {
  const dispatch = useDispatch()
  const array = useSelector((state) => state.availability.array);
  const today = new Date().toISOString().slice(0, 10)
  // const day10=Moment(today).add(30, 'days').format('YYYY-MM-DD')
  //const day30=Moment(today).add(30, 'days').format('YYYY-MM-DD')
  // const [availability, setAvailability] = useState([])
  const [adult, setAdult] = useState('')
  const [child, setChild] = useState('')
  const [room, setRoom] = useState('')
  const [click, setClick] = useState(false)
  const [arrivaldate, setArrivaldate] = useState('')
  const arrive = Moment(arrivaldate).format('L')
  const [departuredate, setDeparturedate] = useState('')
  const depart = Moment(departuredate).format('L')
  const p = parseFloat(child) + parseFloat(adult);
  const [a, setA] = useState(true)
  const [b, setB] = useState(false)
  const [c, setC] = useState(false)
  const router = useRouter()
  var time;
  var s;
  function hide() {
    setClick(false)
    setA(false)
  }
  function hide2() {
    setB(false)
  }

  if (typeof window !== 'undefined') {
    useEffect(() => {
      console.log(time)
      if (time || s || !a) {
        clearTimeout(time);
console.log(time,a,s)
      }
    })
    s = sessionStorage.getItem('open')
    
      if (a) {

        time = setTimeout(() => {
          setClick(true)
        }, 500)
      }
}
  
  function popup() {
    sessionStorage.setItem('open', true)
    clearTimeout(time)
    setB(true)
  }

  function booking() {
    sessionStorage.setItem('open', true)
    setB(true)
    setA(false)
    setClick(false)
  }
  const add = () => dispatch(addbooking({ adult, child, room, arrive, depart }))
  function update() {
    if (room > 10 || !room || p / room > 3 || !adult || room > adult && !child || adult / room > 2 || !arrivaldate || !departuredate) {
      console.log('error')
    }
    else {
      add()
      setC(true)
      setTimeout(function () {
        setC(false)
      }, 2000);
    }
  };
  const link = '';
  function submit(e) {

    e.preventDefault()
    if (!room && !adult && !arrivaldate && !departuredate) {
      alert("Please Enter Details.")
    }
    else if (!adult) {
      alert('Please Enter Number of Adult(s).')
    }
    else if (!room) {
      alert('Please Enter Number Of Room(s).')
    }
    else if (!arrivaldate) {
      alert('Please Enter Arrival Date')
    }
    else if (!departuredate) {
      alert('Please Enter Departure Date')
    }
    else if (room > adult && !child) {

      alert('We Are Really Sorry You Cannot Book ' + room + ' Room(s) for '
        + adult + ' People(s).')
    }
    else if (room > 10) {
      alert('We Are Sorry You Cannot Book 10+ rooms at a time.')
    }
    else if (adult / room > 2) {
      alert('We can Only offer a room for upto 2 Adults and 1 Child.You Have Selected ' + room + ' room(s) For ' + adult + ' Adults')
    }
    else if (p / room > 3) {

      alert('We can Only offer a room for upto 2 Adults and 1 Child.You Have Selected ' + room + ' room(s) For ' + adult + ' Adult(s) and ' + child + ' Children.')

    }

    else {
      setTimeout(() => {

        console.log(array)
        alert('Your ' + room + (room > 1 ? ' Rooms ' : ' Room ') + ' will be available for ' + adult + (adult > 1 ? ' Adults ' : ' Adult ') + (!child ? "" : ' and ' + child + (child > 1 ? ' Children ' : ' Child ')) + 'from ' + arrive + ' till ' + depart)
        router.push(`${[link]}?Adults=${adult}&Children=${child}&rooms=${room}&Arrivaldate=${arrive}&departuredate=${depart}`)
        // setRoom('')
        // setAdult('')
        // setChild('')
        // setArrivaldate('')
        // setDeparturedate('')
      }, 2000);
    }
  }


  return (
    <div id='body' className='mx-auto my-auto top-0 bottom-0 flex justify-around items-center text-center min-h-[65vh]'>
      <div id='head' className='lg:text-[38px] px-2 md:text-[32px] sm:text-[32px] leading-[45.6px] xs-:text-[32px] xs-:leading-[38.4px] '>
        <h1>A Hotel Called</h1>
        <h1>Ulysses</h1>
        <h1>in <ins > Mt. Vernon, Baltimore </ins></h1>
        <h1>Strong Drinks & Soft Beds</h1>
        <button id='firstbtn' onClick={popup} className="px-[2rem] py-[1rem] border-2 border-black text-3xl hover:bg-black transition ease-in-out delay-100 duration-300 hover:text-white font-extrabold mt-[32px]">Book Now</button>
      </div>
      <section id='book' className={`${click ? 'bg-[#FDF8EF] container absolute mx-auto right-0 left-0  opacity-[97%] text-[38px] leading-[45.6px]  lg:w-[752px] lg:h-[369px] xl:w-[752px] xl:h-[369px] sm:w-[516px] sm:h-[320px]' : 'hidden'}`}>
        <img onClick={hide} className='p-2 cursor-pointer flex absolute right-[16px] top-[16px]' src="./X.png" alt="" />
        <h1 className='md:text-[38px]  leading-[45.6px] xs-:text-[32px] xs-:leading-[38.4px] flex flex-wrap lg:px-[150px] lg:pt-[80px] xl:px-[150px] xl:pt-[80px] xs-:px-[32px] xs-:pt-[64px] sm:pt-[64px]'>Ulysses is booking rooms at preview rate</h1>
        <button onClick={booking} className="px-[2rem] transition ease-in-out delay-100 duration-300 py-[1rem] mb-[80px] xs-:mt-[32px] hover:bg-black hover:text-white mt-[40px] border-2 border-black text-3xl font-extrabold">Book Now</button>

      </section>
      <form onSubmit={submit} id='booknow' className={`${b ? 'bg-[#FDF8EF] container px-[60px] xs-:px-[20px] lg:top-2 md:top-2 xl:top-auto  py-[30px] xs-:fixed absolute mx-auto my-auto right-0 left-0 z-20 xs-:bottom-0 opacity-[97%] w-fit font-extrabold xs-:w-full' : 'hidden'}`}>
        <img onClick={hide2} className='p-2 cursor-pointer flex absolute right-[16px] top-[16px]' src="./X.png" alt="" />
        <h1 className='xs-:text-[30px] xs-:leading-[36px] sm:text-[36px] lg:text-[36px] md:text-[36px] xs-:mb-[32px] '>Book Now</h1>
        <div className="inputs space-y-[32px] xs-:text-[18px] xs-:leading-[21.6px] ">
          <div className=' flex justify-between '>
            <h1 className='text-[24px]'>Adults</h1>
            <input className='border border-black bg-inherit text-[20px] py-[8px] pl-[16px] pr-[33px] bg-no-repeat bg-[center_right_5px]' value={adult} onChange={
              (e) => setAdult(e.target.value)} type="number" min="1" max="100" placeholder='001' />
          </div>
          <div className=' flex justify-between '>
            <h1 className='text-[24px]'>Children</h1>
            <input className='border border-black bg-inherit text-[20px] py-[8px] pl-[16px] pr-[33px] bg-no-repeat bg-[center_right_5px]' value={child} onChange={
              (e) => setChild(e.target.value)} type="number" min="1" max="100" placeholder='001' />
          </div>
          <div className=' flex justify-between'>
            <h1 className='text-[24px]'>Rooms</h1>
            <input className='border-black border bg-inherit text-[20px] py-[8px] pl-[16px] pr-[33px] bg-absolute bg-no-repeat bg-[center_right_5px]' value={room} onChange={
              (e) => setRoom(e.target.value)} type="number" min="1" max="100" placeholder='001' />

          </div> <div className=' flex justify-between'>
            <h1 className='text-[24px]'>Arrivel</h1>
            <input className='border-black border bg-inherit text-[20px] py-[12px] px-[16px]  relative uppercase text-center w-[174px]' value={arrivaldate} onChange={
              (e) => setArrivaldate(e.target.value)} type="date" min={today} />
          </div> <div className=' flex justify-between'>
            <h1 className='text-[24px] xl:pr-[330px]  lg:pr-[200px] md:pr-[110px] sm:pr-[100px]'>Departure</h1>
            <input className='border-black border bg-inherit relative py-[12px] px-[16px] text-[20px] uppercase text-center w-[174px]' value={departuredate} onChange={
              (e) => setDeparturedate(e.target.value)} type="date" min={arrivaldate} />
          </div>
        </div>
        <div onClick={update} className='w-full cursor-pointer px-[16px] py-[16px] md:text-[30px] border-2  mt-[40px] hover:bg-black hover:text-white transition ease-in-out delay-100 duration-300 lg:text-[30px] sm:text-[28px] xs-:text-[20px] xs-:leading-[30px] items-center text-center'>
          <input id='submit' className='cursor-pointer' type={`${c ? 'image' : 'submit'}`} src={`${c ? './loading.gif' : ''}`} value={'Check Availability'} />


        </div>

      </form>
    </div>
  )
}

export default Body