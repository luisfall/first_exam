import Image from 'next/image'
const PersonalInfo = () => {
   return (
      <div className="d-flex align-content-center bg- text-text-white-50">
         <div className="row">
            <div className="col-3 d-flex">
               <Image src={'/Luis.jpeg'} alt="..." width={300} height={300}></Image>
            </div>
            <div className="col-6 d-flex flex-column align-content-center justify-content-center">
               <h1>Luis Fallas</h1>
               <p>
                  Hi I am Luis student of Universidad Nacional in Costa Rica I am a very big fan of programming <br /> and do web pages. Its for that reason that i am here doing this Portfolio
               </p>
               <h4>If you want to know more about me go to</h4>
               <a href="https://www.linkedin.com/in/luis-fallas-solis-474893271/" className="text-white">
                  GoToMyLinkedIn
               </a>
            </div>
            <div className="col-3 d-flex flex-column align-content-center justify-content-center">
               <h1>Software Engineer</h1>
               <h4>I am 22 years old</h4>
               <h4>Like to play guitar and also play soccer</h4>
            </div>
         </div>
      </div>
   )
}

export default PersonalInfo
