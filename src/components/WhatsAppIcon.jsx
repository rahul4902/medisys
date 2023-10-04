import WhatsApp from "../icons/WhatsApp";

const WhatsAppIcon = () => {
  return (
    <div className="whatsapp-icon-container">
      <a
        href="https://api.whatsapp.com/send?phone=919958747295&text="
        target="_blank"
        className="btn common-btn whatsapp-icon-btn"
      >
        <WhatsApp height="1.5rem" fill="#FFF" /> Chat With Us
      </a>
    </div>
  );
};

export default WhatsAppIcon;
