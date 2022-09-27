import styles from "./style";
import { Business, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      
      <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Let’s Boost your <a href="https://twitter.com/hashtag/SEO?src=hash&amp;ref_src=twsrc%5Etfw">#SEO</a> Results! 🚀<br><br>Whether you manage a <a href="https://twitter.com/hashtag/blog?src=hash&amp;ref_src=twsrc%5Etfw">#blog</a>, an <a href="https://twitter.com/hashtag/ecommerce?src=hash&amp;ref_src=twsrc%5Etfw">#ecommerce</a> website or a <a href="https://twitter.com/hashtag/SAAS?src=hash&amp;ref_src=twsrc%5Etfw">#SAAS</a>, <a href="https://twitter.com/hashtag/HLABZ?src=hash&amp;ref_src=twsrc%5Etfw">#HLABZ</a>® will allow you to plan and manage the growth of your <a href="https://twitter.com/hashtag/business?src=hash&amp;ref_src=twsrc%5Etfw">#business</a> easily!<br><br>🛠 Work Together : <a href="https://t.co/usbtkkt21X">https://t.co/usbtkkt21X</a><br>🌐 Website : <a href="https://t.co/wW5WGjBX5Q">https://t.co/wW5WGjBX5Q</a> <a href="https://t.co/efipVppJbV">pic.twitter.com/efipVppJbV</a></p>&mdash; HLABZ.cc (@HLABZcc) <a href="https://twitter.com/HLABZcc/status/1573732760711307269?ref_src=twsrc%5Etfw">September 24, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <Stats />
        <Business />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
