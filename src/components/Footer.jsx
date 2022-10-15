import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="HLABZcc"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A multifaceted technology company with a focus on staying ahead of the curve. 🌊
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-primary cursor-pointer ${index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`} onClick={() => window.open(link.url)}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright Ⓒ 2022 | <a href="https://hlabz.cc/" alt="HLABZ.cc®">HLABZ.cc®</a> - All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
      <br />
          <p className="font-poppins font-normal text-center text-sm text-white">
          <strong><p>DONATE (₿)</p></strong>
          <p>♛ BTC: bc1qp4zxxj0k0whkm483qv5dk2rs6sgh2tt70h44rf</p>
          <p>♛ LTC: ltc1qtyqsh3sgnaa9sdhe89p6qu2s6g75s70yzeqdyu</p>
          <p>♛ ETH: 0xbFF3eE7d3648Ce6b7DE82dEa427c3A1629aaf671</p>
      </p>
    </div>
  </section>
);

export default Footer;
