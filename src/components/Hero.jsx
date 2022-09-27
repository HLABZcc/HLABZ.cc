import styles from "../style";
import { discount } from "../assets";

const Hero = () => {
  return (
    <section id="home">
      <div>
        <div className="flex flex-row items-center py-[10px] px-10 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <center><p className={`${styles.paragraph}`}>
            <span className="text-white">20%</span> Discount on{" "}
            <span className="text-white">SEO Consulting. ➡️</span>
            <a href="https://www.fiverr.com/hlabzconsult" alt="hlabz"> Click Here !</a>
            <br />
          </p></center>
        </div>
        
        <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Let’s Boost your <a href="https://twitter.com/hashtag/SEO?src=hash&amp;ref_src=twsrc%5Etfw">#SEO</a> Results! 🚀<br><br>Whether you manage a <a href="https://twitter.com/hashtag/blog?src=hash&amp;ref_src=twsrc%5Etfw">#blog</a>, an <a href="https://twitter.com/hashtag/ecommerce?src=hash&amp;ref_src=twsrc%5Etfw">#ecommerce</a> website or a <a href="https://twitter.com/hashtag/SAAS?src=hash&amp;ref_src=twsrc%5Etfw">#SAAS</a>, <a href="https://twitter.com/hashtag/HLABZ?src=hash&amp;ref_src=twsrc%5Etfw">#HLABZ</a>® will allow you to plan and manage the growth of your <a href="https://twitter.com/hashtag/business?src=hash&amp;ref_src=twsrc%5Etfw">#business</a> easily!<br><br>🛠 Work Together : <a href="https://t.co/usbtkkt21X">https://t.co/usbtkkt21X</a><br>🌐 Website : <a href="https://t.co/wW5WGjBX5Q">https://t.co/wW5WGjBX5Q</a> <a href="https://t.co/efipVppJbV">pic.twitter.com/efipVppJbV</a></p>&mdash; HLABZ.cc (@HLABZcc) <a href="https://twitter.com/HLABZcc/status/1573732760711307269?ref_src=twsrc%5Etfw">September 24, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

        <center><div className="">        
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Welcome to <br></br>
          </h1>

        </div></center>

        <center><h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          <span className="text-gradient">#HLABZ®⚡</span>{" "}
          <br />Website !
        </h1>
          <br />
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
