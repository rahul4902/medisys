import { Link } from "react-router-dom";
import WhatsApp from "../../icons/WhatsApp";

const WhatsAppIcon = () => {
  return (
    <div className="whatsapp-icon-container">
      <Link
        to="https://api.whatsapp.com/send?phone=919958747295&text="
        target="_blank"
        className="btn common-btn whatsapp-icon-btn text-white"
      >
        <WhatsApp height="1.5rem" fill="#FFF" /> Chat With Us
      </Link>
    </div>
  );
};

export default WhatsAppIcon;
