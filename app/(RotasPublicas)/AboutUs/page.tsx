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
  
        </div>
    )
}