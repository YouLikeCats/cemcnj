import React, {useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import { Navbar } from '../components/Navbar/Navbar';
import next from 'next.js/lib/next';



export default function Home() {

  useEffect(() => {
    //alert('Finished loading');
  }, []);

  if (typeof window === 'object') {
    let slideIndex = 1;
    showSlide(slideIndex);

    window.addEventListener('load', (event) => {
      showSlide(1);
    });

    function moveSlide(step) {
        showSlide(slideIndex += step);
    }

    function currentSlide(n) {
        showSlide(slideIndex = n);
    }

    function showSlide(n) {
        let i;
        const slides = document.getElementsByClassName('slide');
        const dots = document.getElementsByClassName('dot');

        if(n > slides.length) slideIndex = 1;
        if(n < 1) slideIndex = slides.length;

        for(i = 0; i < slides.length; i++) {
            slides[i].classList.add('hidden');
        }

        for(i = 0; i < dots.length; i++) {
            dots[i].classList.remove('bg-black');
            dots[i].classList.add('bg-green-500');
        }

        slides[slideIndex - 1].classList.remove('hidden');

        dots[slideIndex - 1].classList.remove('bg-green-500');
        dots[slideIndex - 1].classList.add('bg-black');
    }
  }


  return (
    <div className = 'static'>
      <Head>
        <Script src='../res/js/home/js' strategy='beforeInteractive'></Script>
      </Head>
      <div>

        <div id='carousel' className="w-full mx-auto relative mt-16">
          <div className='relative w-full mx-auto justify-center border border-2 '>
            <div className='slide relative'>
              <Image className='w-full object-cover' src='/images/image1.png' height={800} width={1920}/>
              <div className='absolute bottom-0 w-full px-5 py-3 bg-black text-center text-white'>This is the first picture.</div>
            </div>

            <div className='slide relative'>
              <Image className='w-full object-cover' src='/images/image1.png' height={800} width={1920}/>
              <div className='absolute bottom-0 w-full px-5 py-3 bg-black text-center text-white'>This is just a test to make sure that captions work</div>
            </div>

            <div className='slide relative'>
              <Image className='w-full object-cover' src='/images/image2.png' height={800} width={1920}/>
              <div className='absolute bottom-0 w-full px-5 py-3 bg-black text-center text-white'>ANOTHER CAPTION?!?!?</div>
            </div>

            <a className='absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer' onClick={() => moveSlide(-1)}>{'<'}</a>
            <a className='absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer' onClick={() => moveSlide(1)}>{'>'}</a>
          </div>

          <br></br>

          <div className='flex justify-center items-center space-x-5'>
            <div className='dot w-3 h-3 mb-5 rounded-full cursor-pointer' onClick={() => currentSlide(1)}></div>
            <div className='dot w-3 h-3 mb-5 rounded-full cursor-pointer' onClick={() => currentSlide(2)}></div>
            <div className='dot w-3 h-3 mb-5 rounded-full cursor-pointer' onClick={() => currentSlide(3)}></div>
          </div>
        </div>

        <div id='introparagraph' className='text-center mx-[80px]'>
          <h1 className='text-[72px]'>Welcome to the CEMCNJ Website!</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <Link href='.'><a><button className=' text-center ml-auto m-3 mt-4 mr-1 bg-black text-white px-5 py-3 hover:text-yellow transition duration-2000'>Read More</button></a></Link>
        </div>

        <div id='news' className='my-auto w-full text-center'>
          <h1 className='text-[72px] mt-50'>Schedule</h1>
          <div className='grid grid-cols-3 justify-center text-white mx-10 text-lg'>
            <div className='bg-black w-11/12'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='bg-black w-11/12'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className='bg-black w-11/12'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
          </div>
        </div>

        <div id='navbar' className='w-full fixed z-500 top-0'>
          <Navbar></Navbar>
        </div>
      </div>

    </div>
   
  )
}
