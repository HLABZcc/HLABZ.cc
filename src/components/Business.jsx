import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <div className="items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <center><h2 className={styles.heading2}>
          🏗 WHAT WE DO?
        </h2></center>
        <center><p className={`${styles.paragraph}`}>
          Our work covers the full spectrum of software development and support for the projects we create. 🛠
        </p></center>
        <br />
        <center><a itemprop='url' href='https://www.fiverr.com/hlabzconsult' rel="follow" target="_blank"><Button /></a></center>
        <br />
        <center><span className="text-white"><p>Or</p>
        <p>➡️   <a href="mailto:contact@hlabz.cc">Get in Touch at <strong>contact@hlabz.cc</strong> !</a></p></span></center>
        <br />
      </div>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
