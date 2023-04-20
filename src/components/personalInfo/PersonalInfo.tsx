import Image from 'next/image'
const PersonalInfo = () => {
   return (
      <div className="d-flex align-items-center text-white-50 h-100 w-100">
         <div className="row d-flex h-100 w-100 justify-content-center align-content-center">
            <div className="col-sm-4 col-md-4 col-lg-3 col-xl-3 align-items-center h-100 w-50">
               <div className="d-flex justify-content-center align-items-center h-100">
                  <Image src={'/Luis.jpeg'} alt="..." width={400} height={400}></Image>
               </div>
            </div>
            <div className="col-md-6 col-sm-6 col-lg-6 col-xl-6 h-100 d-flex justify-content-center align-items-center w-50">
               <div className="row">
                  <div className="col-md-6">
                     <h1>Luis Fallas</h1>
                     <p>Hi, I am Luis, a student at Universidad Nacional in Costa Rica. I am a big fan of programming and web development, which is why I created this portfolio.</p>
                     <a href="https://www.linkedin.com/in/luis-fallas-solis-474893271/" className="btn btn-primary">
                        Go to my LinkedIn
                     </a>
                  </div>
                  <div className="col-md-6">
                     <h1>Software Engineer</h1>
                     <h4>22 years old</h4>
                     <h4>Like to play guitar and soccer</h4>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default PersonalInfo
