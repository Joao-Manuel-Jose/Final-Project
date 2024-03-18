import Link from "next/link";


export function NavAbout(){
return (

    <div>
<div className='container mx-auto px-4 h-24 flex items-center gap-4 justify-start font-medium'>
            
            <div>
             
                <Link href={"#"} className='text-sm text-gray-900 min-[1024px]:hover:text-white  hover:underline flex gap-1 min-[640px]:hover:text-orange-600 '><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-trophy h-5"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>Objectivos</Link>
                </div>
                <div className='bg-gray-600 h-5 w-0.5'></div>
               
                <div>
                 
                 <Link href={"#"} className='text-sm text-gray-900 min-[1024px]:hover:text-white hover:underline flex gap-1 min-[640px]:hover:text-orange-600'><svg xmlns="http://www.w3.org/2000/svg" width="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-users-round h-5"><path d="M18 21a8 8 0 0 0-16 0"/><circle cx="10" cy="8" r="5"/><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"/></svg>Projectos</Link>
                 </div>
                 <div className='bg-gray-600 h-5 w-0.5'></div>
                <div>
         
                 <Link href={"#"} className='text-sm text-gray-900 min-[1024px]:hover:text-white hover:underline flex gap-1 min-[640px]:hover:text-orange-600'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-phone h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg> Contactos </Link>
                 </div>
         
                 </div>

    </div>
)

}