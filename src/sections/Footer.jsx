import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-xontainer">
    <div className="flex justify-between items-start flex-wrap gap-20 max-lg:flex-col">
      <div className="flex flex-col items-start">
      <a href="/">
        <img src={footerLogo} alt="" height={46} width={150}/>
      </a>
      <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find your perfect size in Store. Get rewards.</p>
      <div className="mt-8 flex items-center gap-5">
        {socialMedia.map(icon => (
          <div
            key={icon.alt}
            className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
          >
            <img src={icon.src} alt={icon.alt} height={24} width={24}/>
          </div>
        ))}
      </div>
      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
        {footerLinks.map(section => (
          <div
          key={section}
          >
            <h4 className="text-white font-montserrat leading-normal text-2xl font-medium mb-6">{section.title}</h4>
            <ul>
              {section.links.map(link => (
                <li key={link.name} className="mt-3 font-montserrat leading-normal text-white-400 text-base hover:text-slate-gray cursor-pointer">
                  <a href="">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div
      className="mt-24 flex justify-between max-sm:flex-col max-sm:items-center text-white-400"
    >
      <div className="flex flex-1 justify-start items-center gap-2 cursor-pointer font-montserrat">
        <img src={copyrightSign} alt="copyright sign" height={20} width={20} className="rounded-full m-0" />
        <p>Copyright. All rights reserved.</p>
      </div>
      <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
    </div>
    </footer>
  )
}

export default Footer