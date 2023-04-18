import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
const CallToAction = () => {
   return (
      <section className="call-to-action bg-secondary h-50">
         <div className="h-100 w-100 d-flex justify-content-center align-content-center">
            <div className="row d-flex flex-row justify-content-center align-content-center w-100 ">
               <div className="col-md-8 justify-content-center">
                  <h2 className="text-white">¿Ready to improve your business?</h2>
                  <p className="lead text-white">Contact me to discuss your needs and how I can help you achieve your goals.</p>
               </div>
               <div className="col-3">
                  <a href="#contact" className="btn btn-lg btn-primary btn-block">
                     ¡Talk to me Know!
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}
export default CallToAction
