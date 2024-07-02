import "../styles/Footer.scss"
import { LocationOn, LocalPhone, Email } from "@mui/icons-material"
const Footer = () => {
  return (
    <div className="footer">
      {/* <div className="footer_left">
        <a href="/"><img classname="logo" src="/assets/logo.png" alt="logo" /></a>
      </div> */}

      <div className="footer_center">
        <h3>Useful Links</h3>
        <ul>
        <div className="footer_right_info">
        <Email />
        <p>tbmflats@gmail.com</p>
        </div>
          {/* <a href="https://wa.me/message/6HUMUKXX2RFBB1"><li className="whatsapp"><img className="whatsapp_icon" src="/assets/whatsapp.png" width="50" />Contact us!</li></a> */}
          {/* <li>Terms and Conditions</li> */}
        </ul>
      </div>

      <div className="footer_right">
        <h3>Contact</h3>
        <div className="footer_right_info">
          <LocalPhone />
          <p><a href="tel:+91 7357163046">+91 7357163046</a> <br /> <a href="tel:+91 7976165151">+91 7976165151</a>
          </p>
        </div>
        <div>
          <a href="https://wa.me/message/6HUMUKXX2RFBB1"><p className="whatsapp"><img className="whatsapp_icon" src="/assets/whatsapp.png" width="50" />Contact us!</p></a>
        </div>
        <img src="/assets/payment.png" alt="payment" />
      </div>
    </div>
  )
}

export default Footer