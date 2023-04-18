import Image from 'next/image'
import React, { useRef } from 'react'

const Footer = () => {
   return (
      <footer className="bg-primary text-center text-white">
         <div className="container p-4 pb-0">
            <section className="mb-4">
               <a className="btn text-white btn-floating m-1" href="#!" role="button">
                  <Image alt="Facebook Logo" src={'/facebook.svg'} width={40} height={50}></Image>
               </a>
               <a className="btn text-white btn-floating m-1" href="#!" role="button">
                  <Image alt="Instagram Logo" src={'/instagram.svg'} width={40} height={50}></Image>
               </a>
               <a className="btn text-white btn-floating m-1" href="#!" role="button">
                  <Image alt="Instagram Logo" src={'/google.svg'} width={40} height={50}></Image>
               </a>
            </section>
         </div>

         <div className="text-center p-3">
            © 2020 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/">
               MDBootstrap.com
            </a>
         </div>
      </footer>
   )
}

export default Footer
