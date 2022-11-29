import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s Boost your SEO Results! 🚀</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Whether you manage a blog, an e-commerce website or an online software, this Expert SEO Audit will allow you to plan and manage the growth of your business easily!
      </p>
      <br />
      <span className="text-white"><a href="mailto:contact@hlabz.cc">Get in Touch at <strong>contact@hlabz.cc</strong> !</a></span>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a itemprop='url' href='https://buy.stripe.com/8wMeVM9k90Fv0ZaeUV' rel="follow" target="_blank"><Button /></a>
    </div>
    <br />
  </section>
);

export default CTA;
