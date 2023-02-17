import {LazyLoadImage} from 'react-lazy-load-image-component'
import Logo from '/logo.svg'
import HeaderHouse from '/headerHouse.jpg'
import ArielKenter from '/arielKenter.png'
import RyanStanton from '/ryanStanton.png'
import RhielMadsen from  '/rhielMadsen.png'
import GalleryBigger from  '/galleryBigger.jpg'
import GallerySmaller from  '/gallerySmaller.png'
import QualityLeft from '/qualityLeft.png'
import QualityRight from '/qualityRight.png'
import Company from '/company.jpg'
import SendArrow from '/sendArrow.svg'
import facebook from '/icons/facebook.svg'
import instagram from '/icons/instagram.svg'
import linkedin from '/icons/linkedin.svg'
import tiktok from '/icons/tiktok.svg'
import twitter from '/icons/twitter.svg'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'

function App() {
  // Header 
  const assemblyDot = useRef(null)
  const asseblyButton = useRef(null)
  const assemblyTitle = useRef(null)
  const headerImage = useRef(null)
  
  //Owner refs
  const ownerTitle = useRef(null)
  //blueBox
  const blueBoxBg = useRef(null)
  const rhielMedsenTitle = useRef(null)

  //Gallery
  const comprehensiveTitle = useRef(null)
  const comprehensiveImage = useRef(null)
  const qualityTitle = useRef(null)

  // Quality
  const qualityParagraphsWrapper = useRef(null)
  
  // Company
  const companyReverseTitle = useRef(null)
  const getStartedButton = useRef(null)
  const readyTitle = useRef(null)
  
  // Footer
  const footerTitle = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    
    gsap.fromTo(assemblyDot.current, {x:-100},{x:0})
    gsap.fromTo(asseblyButton.current, {scale:0},{scale:1})
    gsap.fromTo(assemblyTitle.current, {x:100},{x:0})
    gsap.fromTo(headerImage.current, {scale:0.8},{scale:1})
    gsap.fromTo(blueBoxBg.current,{scaleX:0.6},{scaleX:1,duration:0.5})
    gsap.fromTo(ownerTitle.current,{x:-300},{x:0,scrollTrigger: {
      trigger:ownerTitle.current,
      scrub:true
    }})
    gsap.fromTo(rhielMedsenTitle.current,{x:-100},{x:0})
    gsap.fromTo(comprehensiveTitle.current,{x:100},{x:0,scrollTrigger: {
        trigger:comprehensiveTitle.current,
        scrub:true
    }})
    gsap.fromTo(comprehensiveImage.current, {scale:0.8},{scale:1,
      scrollTrigger:{
        trigger:comprehensiveImage.current,
        scrub:true
      }})
      gsap.fromTo(qualityTitle.current,{y:100},{y:0,
        scrollTrigger:qualityTitle.current})
      gsap.fromTo(qualityParagraphsWrapper.current,{y:100},{y:0,
        scrollTrigger:qualityParagraphsWrapper.current})  
      gsap.fromTo(companyReverseTitle.current, {y:-100},{y:0, scrollTrigger: {
        trigger:companyReverseTitle.current,
        scrub:true
      }})
    gsap.fromTo(getStartedButton.current, {scale:0.8},{scale:1,scrollTrigger:{
      trigger:getStartedButton.current,scrub:true}})
    gsap.fromTo(readyTitle.current, {y:100},{y:0,scrollTrigger:{
      trigger:readyTitle.current,scrub:true}})
    gsap.fromTo(footerTitle.current,{x:-200},{x:0,scrollTrigger:
      footerTitle.current
    })
  },[])

  // owners refs
  return (
    <div>
      {/* Header section */}
      <div className="flex bg-white border-b-[1px] border-black">
        {/* main header navigation */}
         <div className="left-line-width border-r-[1px] border-black">
          <div className="flex justify-center items-center w-full h-20 border-b-[1px] border-black">
            <LazyLoadImage src={Logo}/>
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
              <img src={HeaderHouse} ref={headerImage} className="pt-6 h-auto "/>
              <h3 className='pt-6 font-raleway fonr-regular text-center tracking-[0.5em] text-lg'>SINCE 1999</h3>
            </div>
            <div id='header_titles_container' className='pl-16 pr-8 pt-12 w-2/4'>
              <h1 id="header_poetry_title"className='font-raleway font-normal text-brownFill leading-[0.9em]'>
                POETR<span className='font-savoye'>Y</span><br />
                <span className=' font-savoye'>I</span>N DESI<span className=' font-savoye'>G</span>N
              </h1>
              <h3 className='font-raleway font-medium text-4xl pt-16 text-brownFill'>HOW IT WORKS</h3>
              <h3 className='font-raleway font-medium text-4xl pt-7 text-brownFill'>PURCHASE</h3>
              <div className='flex flex-wrap items-center pt-7'>
                <div className='flex items-center whitespace-nowrap'>
                  <div className='bg-brownFill w-3 h-3 rounded-full' ref={assemblyDot}/>
                  <h3 className='font-savoye text-9xl pl-2 pr-11' id="header_assembly_title" ref={assemblyTitle}>Assembly</h3>
                </div>
                <button 
                  ref={asseblyButton}
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
      <div>
        {/* owners firest section */}
        <div className='flex'>
          <div className="left-line-width border-r-[1px] border-black">
            <div className='pt-96 flex justify-center'>
              <span className='inline-block -rotate-90 font-raleway font-regular text-lg'>OWNERS</span>
            </div>
          </div> 
          <div className='w-full flex pl-32 pt-56' id='owners_images_content_wrapper'>
            <div className='w-2/4' id="arielKenter_wrapper">
              <div className='flex items-center' id="arielKenter_content_wrapper">
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
              <h2 className='absolute top-0 right-0 text-[#F1F4F3] font-bold text-8xl' ref={ownerTitle} id="owner_bg_title">OWNER</h2>
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
            <div className='w-full mx-10' id="blue_box_content_wrapper">
              <div className='relative '>
                <div ref={blueBoxBg} className='bg-[#DAE4E1] w-full h-full absolute'></div>
                <div className='bgtext'></div>
                <div className='flex items-center pl-24 pt-20 relative z-20' id='rhielMedsen_content_wrapper'>
                  <div ref={rhielMedsenTitle} className='flex flex-col items-end pr-16' id="rhielMedsen_titles_wrapper">
                    <span id="rhiel_text" className='images_names_text font-raleway text-6xl text-brownFill font-normal '>
                      R<span className='font-savoye text-8xl pl-1'>h</span>iel
                    </span>
                    <span id="madsen_name_title" className=' images_names_text font-raleway text-6xl text-brownFill font-normal '>
                      <span className='font-savoye text-10xl pl-1'>m</span>adsen
                    </span>
                  </div>
                  <div className='flex flex-col relative '>
                    <LazyLoadImage alt="CEO Image" src={RhielMadsen} id='rhielMedsen_img'/>
                    <span className='font-raleway font-medium text-lg text-brownFill self-end pt-2'>CEO</span>
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
        {/* Gallery */}
        <div className='flex'>
          <div className="left-line-width border-r-[1px] border-black h-full">
            <div className='pt-96 flex justify-center'>
              <span className='inline-block -rotate-90 font-raleway font-regular text-lg'>GALLERY</span>
            </div>
          </div> 
          <div className=' mt-36 w-full flex justify-center ' id="gallery_content_wrapper">
            <div className='flex mr-16' id="gallery_left_column_wrapper">
                <div className='relative'>
                  <p className='-rotate-90 absolute whitespace-nowrap font-raleway text-lg font-semibold' id='gallery_rotate_text'>We make design more accessible.</p>
                </div>
                <div>
                  <LazyLoadImage id='galleryBigger_img' src={GalleryBigger} alt="Gallery Image"/>
                  <span className='pt-4 float-right font-raleway font-bold text-lg text-browFill underline'>
                    Read More
                  </span>
                </div>
            </div>
            <div  id="gallery_right_column_wrapper" >
              <p className='font-raleway font-medium textlg text-brownFill max-w-[300px]'>
                Since our last Fitzroy House construction update a milestone was reached with the removal of the crane, the building is now at lock-up stage.
              </p>
              <div className='pt-28' id="gallery_right_column_content_wrapper">
                <span className='font-raleway font-medium text-lg text-brown'>{'{ 01 }'}</span>
                <div className='mt-3 flex items-center' id="gallery_right_column_images_wrapper">
                  <div ref={comprehensiveImage}>
                    <LazyLoadImage  src={GallerySmaller} id="gallerySmaller_img"/>
                  </div>
                  <span ref={comprehensiveTitle}className='pl-8 font-raleway text-brwonFill font-bold text-xl'>COMPREHENSIVE<br />SERVICES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Quality */}
        <div className='flex'>
          <div className="left-line-width border-r-[1px] border-black h-full">
            <div className='flex justify-center' id="quality_navbar_rotated">
              <span className='inline-block -rotate-90 font-raleway font-regular text-lg'>COMPANY</span>
            </div>
          </div>
          <div className='px-28 mt-36 w-full ' id="quality_wrapper">
            <div className='flex justify-between items-center' id="quality_titles_wrapper">
              <LazyLoadImage src={QualityLeft} id="qualityLeft_img"/>
              <h1 ref={qualityTitle} className='text-brownFill font-raleway' id="quality_title">
                <span className='font-savoye'>Q</span>uality
              </h1>
              <LazyLoadImage src={QualityRight} id="qualityRight_img"/>
            </div>
            <div ref={qualityParagraphsWrapper} className="relative z-10 pt-4 flex justify-between px-12" id="quality_paragraphs_wrapper">
              <div className='pr-12' id="quality_left_wrapper">
                <p className='leading-9 font-raleway font-semibold text-4xl text-brownFill max-w-[450px]' id="quality_para_title">We make thoughtful
lighting design
more accessible.</p>
                <p className='leading-8 font-raleway font-medium text-lg text-brownFill pt-12 max-w-[450px]'>Lifts have been installed and finishing trades are systematically working their way up the building.</p>
              </div>
              <div>
                <p className='leading-8 font-raleway font-medium text-lg text-brownFill max-w-[450px]'>Who will live in our homes and how they will live in them comes first.
Our homes carry our family name in every way. They are a testament to our passion, our commitment to quality and our vision to create exceptional homes where people love to live.</p>
                <p className='leading-8 font-raleway font-medium text-lg text-brownFill max-w-[450px] pt-6'>We have a unique understanding of what defines luxury. Timelessness over trends, it’s found in the fine detail, the materiality and texture, in light and space.
Five decades on and stronger than ever, our legacy is built on our unwavering ambition to create extraordinary places that stand for generations. </p>
              </div>
            </div>
            <div className='relative z-0' id="company_wrapper">
              <LazyLoadImage src={Company} id="company_img"/>
              <div className="bg-[#BAC7C4]" id="under_company_image" />
              <span ref={companyReverseTitle} className='absolute font-raleway text-7xl font-black text-white' id="company_title_rotated">
                COMPANY
              </span>
            </div>
            <div className='flex justify-between pt-16 items-center pb-28' id="quality_footer_wrapper">
              <h3 ref={readyTitle} className='normal text-brownFill font-raleway text-7xl font-normal'>Ready? <br />
              to get started</h3>
              <button className='whitespace-nowrap bg-brownFill w-52 h-16 font-raleway font-bold text-lg text-white' ref={getStartedButton}>Get Started</button>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className='relative overflow-hidden flex justify-between h-full w-full bg-brownFill px-20 pt-24 pb-14' id="footer_wrapper">
          <h1 ref={footerTitle} className='z-10 text-[#444744] font-raleway font-normal' id="footer_title">
            M<span className=' font-savoye font-normal text-[#545F52] footer_title_span'>a</span>ke <br />
            things <br />
            r<span className=' font-savoye font-normal text-[#545F52] footer_title_span'>e</span>al
          </h1>
          <div id="footer_bgText" />
          <div className='pt-24 z-20' id="footer_form_wrapper">
            <div className='pl-20' id="footer_form_links">
              <span className="font-Montserrat font-bold text-lg text-[#444744] whitespace-nowrap">About</span>
              <span className="font-Montserrat font-bold text-lg px-20 text-[#444744] whitespace-nowrap">Resources</span>
              <span className="font-Montserrat font-bold text-lg text-white whitespace-nowrap">Costumer Service</span>
            </div>
            <div className='flex mt-16' id="footer_input_wrapper">
              <input placeholder='Your email'/>
                <div className='w-16 h-16 flex items-center justify-center' id="footer_arrow_button">
                  <LazyLoadImage src={SendArrow}/>
                </div>
              </div>
                <div className='flex justify-end items-center mt-36' id="footer_social_wrapper">
                  <LazyLoadImage src={facebook} className="icon mr-8"/>
                  <LazyLoadImage src={twitter} className="icon mr-8"/>
                  <LazyLoadImage src={instagram} className="icon mr-8"/>
                  <LazyLoadImage src={linkedin} className="icon mr-8"/>
                  <LazyLoadImage src={tiktok} className="icon"/>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
