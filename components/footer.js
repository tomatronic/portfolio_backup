import Email from "/public/footer/email.svg"
import Linkedin from "/public/footer/linkedin.svg"
import Dribbble from "/public/footer/dribbble.svg"

function Footer() {
    return <>
     <div className="bg-slate-100">
         <div className="container max-w-screen-lg mx-auto text-gray-700 py-6">
         <hr class="my-12 h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-25 dark:opacity-100" />
                <div className="flex flex-col text-center">                            
                                <div className="flex gap-6 max-w-[120px] mx-auto">
                                    <a href="mailto:tom.m.spencer@gmail.com?subject=Portfolio%20Enquiry" aria-label="Email me"><Email className="w-6 h-6 fill-gray-700 hover:fill-indigo-500" /></a>
                                    <a href="https://dribbble.com/tomatronic" target="_blank" rel="noreferrer" aria-label="Dribbble"><Dribbble className="w-6 h-6 fill-gray-700 hover:fill-indigo-500" /></a>
                                    <a href="https://www.linkedin.com/in/thomas-spencer/" target="_blank" aria-label="LinkedIn" rel="noreferrer"><Linkedin className="w-6 h-6 fill-gray-700 hover:fill-indigo-500" /></a>                   
                                </div>                                     
                </div>
        </div>
        </div>
    </>
  }
  
  export default Footer