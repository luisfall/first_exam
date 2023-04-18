import Image from 'next/image'
const PersonalInfo = () => {
   return (
      <div className="d-flex align-content-center bg-secondary">
         <div className="col-3 text-white">
            <Image src={'/Luis.jpeg'} alt="..." width={300} height={300}></Image>
         </div>
         <div className="col-6 d-flex flex-column align-content-center justify-content-center">
            <h1>Luis Fallas</h1>
            <p>Hi I am Luis student of Universidad Nacional in Costa Rica</p>
            <a href="https://www.linkedin.com/in/luis-fallas-solis-474893271/">LinkedIn</a>
         </div>
      </div>
   )
}

export default PersonalInfo
