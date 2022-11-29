import styles from "../style";
import { discount } from "../assets";
import TweetEmbed from 'react-tweet-embed';

const Hero = () => {
  return (
    <section id="home">
      <div>
        <div className="flex flex-row items-center py-[10px] px-10 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <center><p className={`${styles.paragraph}`}>
            <span className="text-white">7</span>Days FREE trial period{" "}
            <span className="text-white">on Premium Netlinking ✨</span>
            <a href="https://buy.stripe.com/8wMeVM9k90Fv0ZaeUV" alt="hlabz"> Click Here !</a>
            <br />
          </p></center>
        </div>
                
        <center>
        
        <div className="">        
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            👩‍🚀 Discover 👩‍🚀 <br></br>
          </h1>

        </div></center>

        <center><h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          <span className="text-gradient">#HLABZ®⚡</span>{" "}
        </h1>
          <br />
          <TweetEmbed id="1573732760711307269" placeholder={'loading'} options={{theme: 'dark' }} />
        </center>
        <br />
        <div className="items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <center><h2 className={styles.heading2}>
            🏢 WO WE ARE? <br className="sm:block hidden" />
          </h2>
            <p className={styles.paragraph}>
              <strong>HLABZ®</strong> is a multifaceted technology company with a focus on staying ahead of the curve. 🌊
            </p></center>
          <br />
        </div>
        <br />
      </div>

      <div className={`${styles.flexCenter} flex-wrap w-full`}>

      </div>
    </section >
  );
};

export default Hero;
