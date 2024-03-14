import Link from 'next/link'
import styles  from '@/app/Components/Bunner/bunner.module.css'
import style from './anima.module.css'
import Humani from '@/app/HumanizingBrands'
import { TitleAboutUs } from '../../Components/AboutUs/title'
import { Subtitle } from '../../Components/AboutUs/subtitle'
import Image from 'next/image'
import Footer from '../../Components/Footer/page'
import { Button } from '@/app/HumanizingBrands/Button'
import { Carrosel } from '@/app/Components/AboutUs/carrossel'



export default function AboutUs(){
    return(
        <div>
          
          <div className='h-'><Carrosel/></div>
   {/*
 <div className=''><Humani/> </div>
   

      <div className='text-center mt-1  pt-5 p-10'>
        <Subtitle>O que fazemos?</Subtitle>
        <article className='text-xl  w-full md:max-w-[70%] text-center mx-auto px-10'>
Uma jornada de mil milhas <br /> começa com um único passo

          </article>
      </div>

      <Footer/> */}
        </div>
    )
}