import 'bootstrap/dist/css/bootstrap.css'
import React, { useRef } from 'react'

const Header = () => {
   return (
      <div className="row h-auto w-110 bg-info">
         <div className="col-6 text-white w-25">
            <h1 className="m-2">Portfolio</h1>
         </div>
         <div className="col-6 d-flex w-75">
            <button className="btn flex-fill btn-success m-1">Personal</button>
            <button className="btn flex-fill btn-success m-1">Projects</button>
            <button className="btn flex-fill btn-success m-1">Call to action</button>
            <button className="btn flex-fill btn-success m-1">Footer</button>
         </div>
      </div>
   )
}

export default Header
