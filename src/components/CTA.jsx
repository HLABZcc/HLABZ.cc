import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Let’s boost your results! 🚀</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Whether you manage a blog, an e-commerce website or an online software, this Expert SEO Audit will allow you to plan and manage the growth of your business easily!
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <a itemprop='url' href='https://www.fiverr.com/hlabzconsult' rel="follow" target="_blank"><Button /></a>
    </div>
  </section>
);

export default CTA;
