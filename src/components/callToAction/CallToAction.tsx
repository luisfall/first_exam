import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
const CallToAction = () => {
   return (
      <section className="call-to-action bg-secondary h-25">
         <div className="container w-100">
            <div className="row d-flex flex-row justify-content-center align-content-center w-100 h-100">
               <div className="col-md-8 justify-content-center">
                  <h2 className="text-white">¿Listo para mejorar tu negocio?</h2>
                  <p className="lead text-white">Contáctame para discutir tus necesidades y cómo puedo ayudarte a alcanzar tus objetivos.</p>
               </div>
               <div className="col-md-4">
                  <a href="#contact" className="btn btn-lg btn-primary btn-block">
                     ¡Contáctame ahora!
                  </a>
               </div>
            </div>
         </div>
      </section>
   )
}
export default CallToAction
