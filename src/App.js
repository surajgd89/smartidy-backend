import logo from "./assets/images/SmartIDy_logo.png"
import './App.scss';

function App() {
  return (
    <div className="wrapper">
      <div className="welcome-sec">
        <div className="head-logo">
          <img src={logo} alt="" />
        </div>
        <div className="head-desc">
          SmartIDy is a mini website for your personal and professional use whose look and feel is like a digital
          business card.
          It is smart, elegant and affordable. Create your own now.
        </div>


      </div>
      <div className="portfolio-lnks-sec">
        <div className="portfolio-container">
          <div className="sec-heading">
            SmartIDy Directory <span className="badge-count">30</span>
          </div>
          <div className="search-section">
            <label for="SmartIDySearch">Search SmartIDy </label>
            <input type="text" id="SmartIDySearch" name="SmartIDySearch"
              placeholder="Enter Business / Individual Name"
              onkeypress="return /^[a-zA-Z ]*$/.test(event.key)" />
            <div className="result-message" id="resultMsg">No Results Found</div>
          </div>
          <div className="sec-links">
            <div className="link-row">
              <div className="link-col">
                <a href="javascript:void(0)" target="_blank" className="portfolio-lnk"> <i
                  className="fal fa-external-link"></i>
                  <div className="business-name">Shreesha Digital</div>
                  <div className="individual-name">Suraj Patil</div>
                </a>
              </div>
              <div className="link-col">
                <a href="javascript:void(0)" target="_blank" className="portfolio-lnk"> <i
                  className="fal fa-external-link"></i>
                  <div className="business-name">Vihan Enterprises</div>
                  <div className="individual-name">Sachin Mane</div>
                </a>
              </div>
              <div className="link-col">
                <a href="javascript:void(0)" target="_blank" className="portfolio-lnk"> <i
                  className="fal fa-external-link"></i>
                  <div className="business-name">Tanisha Cake</div>
                  <div className="individual-name">Jyoti Borge</div>
                </a>
              </div>
              <div className="link-col">
                <a href="javascript:void(0)" target="_blank" className="portfolio-lnk"> <i
                  className="fal fa-external-link"></i>
                  <div className="business-name">A. M. Enterprises</div>
                  <div className="individual-name">Amol Matekar</div>
                </a>
              </div>
              <div className="link-col">
                <a href="javascript:void(0)" target="_blank" className="portfolio-lnk"> <i
                  className="fal fa-external-link"></i>
                  <div className="business-name">Dot Line Tatto</div>
                  <div className="individual-name">Sunil Washivale</div>
                </a>
              </div>
              <div className="link-col">
                <a href="javascript:void(0)" target="_blank" className="portfolio-lnk"> <i
                  className="fal fa-external-link"></i>
                  <div className="business-name">Swara Internet</div>
                  <div className="individual-name">Sachin Patil</div>
                </a>
              </div>
              <div className="link-col">
                <a href="javascript:void(0)" target="_blank" className="portfolio-lnk"> <i
                  className="fal fa-external-link"></i>
                  <div className="business-name">Shree Estate Agency</div>
                  <div className="individual-name">Jeevan Bhilare</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-from-sec">
        <div className="contact-container">
          <div className="sec-heading">
            Have Some Questions ?
          </div>
          <div className="email-status">Message sent successfully ! Thank you for contacting us.</div>
          <div className="contact-section">
            <form id="ContactForm" method="post" action="">
              <div className="form-row">
                <div className="col-half">
                  <div className="form-group">
                    <input type="text" name="Name" id="Name" className="form-control" placeholder="Name" />
                  </div>
                </div>
                <div className="col-half">
                  <div className="form-group">
                    <input type="text" name="Email" id="Email" className="form-control" placeholder="Email" />
                  </div>
                </div>
                <div className="col-half">
                  <div className="form-group">
                    <input type="text" name="Phone" id="Phone" className="form-control" placeholder="Phone" />
                  </div>
                </div>
                <div className="col-half">
                  <div className="form-group">
                    <input type="text" name="Subject" id="Subject" className="form-control"
                      placeholder="Subject" />
                  </div>
                </div>
                <div className="col-full">
                  <div className="form-group">
                    <textarea name="Message" className="form-control" id="Message" cols="30" rows="5"
                      placeholder="Message"></textarea>
                  </div>
                </div>
                <div className="col-full">
                  <div className="form-footer">
                    <button name="submit" id="SubmitBtn" className="submit-btn">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-sec">
        <div className="footer-hd">Connect With Us</div>
        <div className="contact-info"><a
          href="mailto:mail.smartidy@gmail.com">mail.smartidy@gmail.com</a>&nbsp;&nbsp;|&nbsp;&nbsp;+91
          8450959594
        </div>
        <div className="social-info">
          <a href="javascript:void(0)" className="soc-lnk facebook"></a>
          <a href="javascript:void(0)" className="soc-lnk twitter"></a>
          <a href="javascript:void(0)" className="soc-lnk instagram"></a>
          <a href="javascript:void(0)" className="soc-lnk whatsapp"></a>
        </div>
      </div>
    </div>
  );
}

export default App;
