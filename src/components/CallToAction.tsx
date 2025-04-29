import { useTranslation } from "react-i18next";

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="section bg-dark py-5">
      <div className="container text-center">
        <h4 className="text-light mb-5 font-weight-normal">
          {t("remote")}
        </h4>
        <a href="#contact" className="btn bg-primary w-lg text-white">
          {t("charlemos")}
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
