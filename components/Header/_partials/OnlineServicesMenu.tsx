// Icons
import Link from "next/link";
import { FiBookOpen } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { TfiPencil } from "react-icons/tfi";
// Datas
const itemText = [
  { text: "MEBIS", icon: <FiBookOpen /> },
  { divider: true },
  { text: "Webmail (Outlook)", icon: <HiOutlineMail /> },
  { divider: true },
  { text: "Online İşlemler", icon: <TfiPencil /> },
];

export const OnlineServicesMenu = () => {
  return (
    <div className="online-services-menu absolute z-10 right-[-50px] top-10 flex justify-center">
      <div className=" bg-primary text-white font-regular inline-flex flex-col shadow-2xl rounded-b w-[220px]">
        {itemText.map((item, key) => {
          if (item.divider) {
            return <div key={key} className="divider"></div>;
          } else {
            return (
              <Link key={key} href="#" style={{ textDecoration: "none" }}>
                <div className="p-8 flex items-center space-x-2 transition-all hover:bg-white hover:text-primary hover:font-semibold cursor-pointer">
                  {item.icon}

                  <span>{item.text}</span>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </div>
  );
};
