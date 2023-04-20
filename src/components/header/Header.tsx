import 'bootstrap/dist/css/bootstrap.css'
import React, { useRef } from 'react'

const Header = () => {
   return (
      <div className="row h-100 w-110 bg-primary justify-content-center align-content-center">
         <div className="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-3 text-white d-flex justify-content-center align-items-center">
            <h1 className="m-2 font-monospace">Portfolio</h1>
         </div>
         <div className="col-12 col-sm-9 col-md-8 col-lg-9 col-xl-9 d-flex justify-content-center align-items-center">
            <a className="btn flex-fill btn-secondary m-1 h-75 rounded-5 shadow border text-md" href="#personalInfo">
               Personal
            </a>
            <a className="btn flex-fill btn-secondary m-1 h-75 rounded-5 shadow border" href="#carousel">
               Projects
            </a>
            <a className="btn flex-fill btn-secondary m-1 h-75 rounded-5 shadow border" href="#callToAction">
               Call To Action
            </a>
            <a className="btn flex-fill btn-secondary m-1 h-75 rounded-5 shadow border" href="#footer">
               Footer
            </a>
         </div>
      </div>
   )
}

export default Header
