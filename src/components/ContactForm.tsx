import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SocialIcons from './SocialIcons';
import { useTranslation } from 'react-i18next';
import { MdAlternateEmail, MdOutlinePlace } from 'react-icons/md';
import { FaWhatsapp } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Estilos del snackbar

const ContactForm = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitted(true); // Marcar que ya intentó enviar


  emailjs
    .sendForm(
      'service_zjm2fpc', 
      'template_7ey2cvw', 
      e.target as HTMLFormElement,
      'PD_kL50i24l32o1uE'
    )
    .then(
      (result) => {
        console.log(result.text);
        toast.success(t('confirm'));
        setFormData({ name: '', mail: '', mensaje: '' });
        setSubmitted(false); 
      },
      (error) => {
        console.log(error.text);
        toast.error(t('msgerror'));
      }
    );
};

  return (
    <section id="contact">
      <div id="map" className="map"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mt-4">
            <div className="contact-form-card">
              <h2 className="contact-title mt-lg-4">{t('contact1')}</h2>
              <span className="line mb-2"></span>
              <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <input
                    className={`form-control ${(submitted && !formData.name) ? 'input-error' : ''}`}
                    name="name"
                    type="text"
                    placeholder={t('pName')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    className={`form-control ${(submitted && !formData.mail) ? 'input-error' : ''}`}
                    name="mail"
                    type="email"
                    placeholder="Email *"
                    value={formData.mail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className={`form-control ${(submitted && !formData.mensaje) ? 'input-error' : ''}`}
                    name="mensaje"
                    placeholder={t('pMessage')}
                    rows={7}
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="form-control btn btn-primary">
                    {t('contact2')}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="col-lg-5 mt-4">
            <div className="contact-info-card">
              <h2 className="contact-title mt-lg-4">{t('contact3')}</h2>
              <span className="line mb-2"></span>
              <div className="row mb-2">
                <div className="col-1 ">
                  <MdAlternateEmail className='icon-md' />
                </div>
                <div className="col-10">
                  <h6 className="d-inline">Email: agusdinatale96@gmail.com</h6>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1">
                  <FaWhatsapp className='icon-md' />
                </div>
                <div className="col-10">
                  <h6 className="d-inline">{t('contact4')}</h6>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-1">
                  <MdOutlinePlace className='icon-md' />
                </div>
                <div className="col-10">
                  <h6 className="d-inline">{t('contact5')}</h6>
                </div>
              </div>
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover />
    </section>
  );
};

export default ContactForm;
