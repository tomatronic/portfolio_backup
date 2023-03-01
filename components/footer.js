import Email from "/public/footer/email.svg"
import Linkedin from "/public/footer/linkedin.svg"
import Dribbble from "/public/footer/dribbble.svg"

function Footer() {
    return <>
         <div className="container max-w-screen-lg mx-auto border-t border-gray-200 text-gray-700 py-6">
                <div className="flex flex-col text-center">                            
                                <div className="flex gap-6 max-w-[120px] mx-auto">
                                    <a href="mailto:tom.m.spencer@gmail.com?subject=Portfolio%20Enquiry" aria-label="Email me"><Email className="w-6 h-6 fill-gray-700 hover:fill-purple-500" /></a>
                                    <a href="https://dribbble.com/tomatronic" target="_blank" rel="noreferrer" aria-label="Dribbble"><Dribbble className="w-6 h-6 fill-gray-700 hover:fill-purple-500" /></a>
                                    <a href="https://www.linkedin.com/in/thomas-spencer/" target="_blank" aria-label="LinkedIn" rel="noreferrer"><Linkedin className="w-6 h-6 fill-gray-700 hover:fill-purple-500" /></a>                   
                                </div>                                     
                </div>
        </div>
    </>
  }
  
  export default Footer