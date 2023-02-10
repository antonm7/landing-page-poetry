import {LazyLoadImage} from 'react-lazy-load-image-component'
import Logo from '/logo.svg'
import HeaderHouse from '/headerHouse.jpg'
import ArielKenter from '/arielKenter.png'
import RyanStanton from '/ryanStanton.png'
import RhielMadsen from  '/rhielMadsen.png'

function App() {
  return (
    <div>
      {/* Header section */}
      <div className="flex bg-white border-b-[1px] border-black">
        {/* main header navigation */}
         <div className="left-line-width border-r-[1px] border-black">
          <div className="flex justify-center items-center w-full h-20 border-b-[1px] border-black">
            <img src={Logo} loading="lazy"/>
          </div>
          <div className='border-b-[1px] border-black'>
            <div className='pt-24 flex justify-center'>
              <span className='inline-block -rotate-90 font-raleway font-regular text-lg'>CONTACT</span>
            </div>
            <div className='pt-24 flex justify-center'>
              <span className='inline-block -rotate-90 font-raleway font-regular text-lg'>SELLERS</span>
            </div>
            <div className='py-24 flex justify-center'>
              <span className='inline-block -rotate-90 font-raleway font-regular text-lg'>COMPANY</span>
            </div>
          </div>
          <div className='py-32 flex justify-center'>
              <span className='inline-block -rotate-90 font-raleway text-lg font-semibold'>MENU</span>
            </div>
        </div> 
          <div className="flex w-full" id="header_wrapper">
            <div id='header_house_container' className='px-16 pt-6 w-2/4 border-r-[1px] border-black'>
              <span className=' font-raleway font-medium text-lg'>ESTATE AGENCY</span>
              <img src={HeaderHouse} className="pt-6 h-auto "/>
              <h3 className='pt-6 font-raleway fonr-regular text-center tracking-[0.5em] text-lg'>SINCE 1999</h3>
            </div>
            <div id='header_titles_container' className='pl-16 pr-8 pt-12 w-2/4'>
              <h1 id="header_poetry_title"className='font-raleway font-normal text-brownFill leading-[0.9em]'>
                POETR<span className=' font-savoye'>Y</span><br />
                <span className=' font-savoye'>I</span>N DESI<span className=' font-savoye'>G</span>N
              </h1>
              <h3 className='font-raleway font-medium text-4xl pt-16 text-brownFill'>HOW IT WORKS</h3>
              <h3 className='font-raleway font-medium text-4xl pt-7 text-brownFill'>PURCHASE</h3>
              <div className='flex flex-wrap items-center pt-7'>
                <div className='bg-brownFill w-3 h-3 rounded-full'/>
                <h3 className='font-savoye text-9xl pl-2 pr-11' id="header_assembly_title">Assembly</h3>
                <button 
                  id='half-rounded-button'
                  className='whitespace-nowrap bg-brownFill py-4 px-8 text-white font-raleway font-semibold text-lg'
                >Get Started</button>
              </div>
              <h3 className='font-raleway font-medium text-4xl pt-12 text-brownFill'>REALISATIONS</h3>
            </div>
          </div>
      </div>
      {/*2 paragraphs after header  */}
      <div className='flex bg-white' >
        <div className="left-line-width border-r-[1px] border-black"></div> 
        <div className='flex pt-52 w-full pl-32 ' id='owners_paragraphs_wrapper'>
          <div className='w-2/4'>
            <p className=' max-w-lg leading-normal font-raleway font-semibold text-4xl text-fillBrown'>
              WE OFFER FULL-SERVICE LIGHTING FROM CONCEPT IDEATION.
            </p>
          </div>
          <div className='pl-16 w-2/4' id="owners_pairing_paragraph_wrapper">
            <p className='font-raleway text-lg font-normal text-brownFill max-w-lg leading-relaxed pb-5'>
            Pairing modular philosophy with modernized construction techniques, our company practices a more conscious method of building that allows fast and easy installation with limited site disturbance. Everything is pre-built in our factory resulting in less waste and a significantly lower carbon footprint compared to traditional methods. 
            </p>
            <span className='font-raleway text-brownFill text-lg font-bold underline underline-offset-8'>See Our Works</span>
          </div>
        </div>
      </div>
      {/* owners firest section */}
      <div>
        <div className='flex'>
          <div className="left-line-width border-r-[1px] border-black">
            OWNERS
          </div> 
          <div className='w-full flex pl-32 pt-56' id='owners_images_content_wrapper'>
            <div className='w-2/4'>
              <div className='flex items-center '>
                <div className='flex flex-col '>
                  <LazyLoadImage alt="Woman Image" src={ArielKenter} id='arielKenter_img'/>
                  <span className='font-raleway font-medium text-lg text-brownFill self-end pt-2'>HR Specialist</span>
                </div>
                <div className='flex flex-col' id='arielKenter_name_text_container'>
                  <span className='images_names_text font-raleway text-6xl text-brownFill font-normal inline-block pl-20'>
                    <span className='font-savoye text-8xl'>A</span>riel
                  </span>
                  <span className='images_names_text font-raleway text-6xl text-brownFill font-normal pl-10' id="kenter_name_title">Kenter</span>
                </div>
              </div>
            </div>
            <div className='z-10 relative w-2/4 h-full' id='ryanStanton_content_wrapper'>
              <h2 className='absolute top-0 right-0 text-[#F1F4F3] font-bold text-8xl' id="owner_bg_title">OWNER</h2>
              <div className='flex items-center pt-72' id='ryanStanton_images_container'>
                <div className='flex flex-col'>
                  <LazyLoadImage alt="Woman Image" id='ryanStanton_img' src={RyanStanton}/>
                  <span className='font-raleway font-medium text-lg text-brownFill self-end pt-2'>Product Manager</span>
                </div>
                <div className='flex flex-col'>
                  <span className='images_names_text leading-2 font-raleway text-6xl text-brownFill font-normal inline-block pl-24'>
                    R<span className='font-savoye text-8xl pl-1 leading-2'>y</span>an
                  </span>
                  <span className='images_names_text leading-2 font-raleway text-6xl text-brownFill font-normal pl-10' id="stanton_name_title">
                    <span className='font-savoye text-8xl'>S</span>tanton
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex' id='blue_box_wrapper'>
            <div className="left-line-width border-r-[1px] border-black h-full"></div> 
            <div className='w-full mx-10'>
              <div className='relative w-full bg-[#DAE4E1] h-full'>
                <div className='bgtext'></div>
                <div className='flex items-center pl-24 pt-20 relative z-20' id='rhielMedsen_content'>
                  <div className='flex flex-col items-end pr-16'>
                    <span id="rhiel_text" className='images_names_text font-raleway text-6xl text-brownFill font-normal '>
                      R<span className='font-savoye text-8xl pl-1'>h</span>iel
                    </span>
                    <span id="madsen_name_title" className=' images_names_text font-raleway text-6xl text-brownFill font-normal '>
                      <span className='font-savoye text-10xl pl-1'>m</span>adsen
                    </span>
                  </div>
                  <div className='flex flex-col relative '>
                    <LazyLoadImage alt="CEO Image" src={RhielMadsen} id='rhielMedsen_img'/>
                    <span className='font-raleway font-medium text-lg text-brownFill self-end pt-2 '>CEO</span>
                  </div>
                </div>
                <div className='mt-48 z-20 text-center relative' id="owners_small_titles_wrapper">
                  <span className='text-center font-raleway font-medium text-3xl text-brownFill '>OWNERS <br /> EXPECTED TO MOVE</span>
                  <div id='this_year_titles'>
                    <span className='text-start font-savoye font-medium text-6xl text-brownFill'>in September <br /></span>
                    <span className='text-center font-raleway font-medium text-3xl text-brownFill'>THIS YEAR</span>
                  </div>
                </div>
                <div className='text-center pb-12' id="how_it_works_title_wrapper">
                  <span className='text-center font-raleway text-brownFill relative z-20' id="how_it_works_title">
                    <span className='font-savoye'>H</span>ow <span className='font-savoye'>I</span>t Works
                  </span>
                  <div id='looking_forward_title_wrapper'>
                    <span className='relative z-20 font-savoye text-brownFill text-6xl'>looking forward</span>
                  </div>
                </div>
              </div>    
            </div>
        </div>
      </div>
    </div>
  )
}

export default App
