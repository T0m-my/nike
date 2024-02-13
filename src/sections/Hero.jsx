import { arrowRight } from '../assets/icons';
import Button from '../components/Button';
import ShoeCard from '../components/ShoeCard';
import { statistics, shoes } from '../constants';
import { bigShoe1 } from '../assets/images';

import { useState } from 'react';

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home" 
      className="w-full min-h-screen flex flex-col xl:flex-row justify-center gap-10 max-container"
    >
      <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start max-xl:padding-x pt-28">
        <p className='text-xl font-montserrat text-coral-red'>
          Our Summer Collection
        </p>
        <h1 className='mt-10 font-palanquin text-8xl font-bold max-sm:text-[72px] max-sm:leading-[82px]'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The New Arrival
          </span>
          <br />
          <span className='mt-3 text-coral-red inline-block'>Nike</span> Shoes
        </h1>
        <p className='mt-6 mb-14 text-lg font-montserrat text-slate-gray sm:max-w-sm leading-8'>
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label='Shop now' iconURL={arrowRight} />
        <div className='flex justify-start items-start gap-16 flex-wrap w-full mt-20'>
          {statistics.map((stat) => (
            <div key={stat}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img 
          src={bigShoeImg} 
          alt="shoe collection" 
          width={610} height={502} 
          className='relative z-10 object-contain'
        />
        <div className='flex gap-4 sm:gap-6 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map(shoe => (
            <div key={shoe}>
              <ShoeCard
                imgURL={shoe}
                bigShoeImg={bigShoeImg}
                changeBigShoeImg={shoe => {setBigShoeImg(shoe)}}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero