
import './Footer.scss'

export default function Footer() {
   return (
      <div className="footer-sec">
         <div className="footer-hd">Contact Us</div>
         <div className="contact-info"><a
            href="mailto:smartidy.app@gmail.com">smartidy.app@gmail.com</a>&nbsp;&nbsp;|&nbsp;&nbsp;+91
            9594415153
         </div>
         <div className="social-info">
            <a href="#" className="soc-lnk facebook"></a>
            <a href="#" className="soc-lnk twitter"></a>
            <a href="#" className="soc-lnk instagram"></a>
            <a href="#" className="soc-lnk whatsapp"></a>
         </div>
      </div>
   )
}
