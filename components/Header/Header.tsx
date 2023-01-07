// Icons
import { FiBookOpen } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { TfiPencil } from "react-icons/tfi";

// Partials
import { navbarElements } from "./_partials/headerDatas";

// Data
const itemText = [
  { text: "MEBIS", icon: <FiBookOpen /> },
  { text: "Webmail (Outlook)", icon: <HiOutlineMail /> },
  { text: "Online İşlemler", icon: <TfiPencil /> },
];

const Header = () => {
  return (
    <>
      <header className=" bg-primary text-white font-regular">
        <div className="header-top container text-m flex justify-between">
          <div className="header-top_left space-x-6 py-4">
            <a href="https://www.medipol.edu.tr/">TR</a>
            <span>|</span>
            <a href="https://mio.medipol.edu.tr/apply-now/">
              For International Students
            </a>
            <a href="https://medipol.com.tr/">University Hospital</a>
            <a href="https://www.medipol.edu.tr/en/about-medipol/contact-us">
              Contact
            </a>
            <a href="https://radyo.medipol.edu.tr/">Radio Medipol</a>
          </div>
          <div className="header-top_right space-x-6 py-4">
            <a href="https://sanaltur.medipol.edu.tr/">360° Virtual Tour</a>
            <a href="https://www.medipol.edu.tr/en/node/1358">Press</a>
            <a href="https://www.medipol.edu.tr/en/akademik/fakulteler/saglik-bilimleri-fakultesi/bolumler/saglik-yonetimi/academic-calendar">
              Academic Calendar
            </a>
            <a href="#">Online Services</a>
          </div>
        </div>
      </header>
      <br></br>
      <br></br>
      <div className="online-services-menu bg-primary text-white font-regular w-[188px] h-[257px] flex flex-col justify-evenly border-t-2 border-white rounded-b mx-auto">
        {itemText.map((item) => (
          <>
            <div key={key} className="pl-6 flex items-center gap-2">
              <>
                {item.icon}
                <span>{item.text}</span>
              </>
            </div>
            <hr></hr>
          </>
        ))}
      </div>
    </>
  );
};

export default Header;
