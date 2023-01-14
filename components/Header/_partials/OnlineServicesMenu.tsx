// Icons
import { FiBookOpen } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { TfiPencil } from "react-icons/tfi";
// Datas
const itemText = [
  { text: "MEBIS", icon: <FiBookOpen /> },
  { text: "Webmail (Outlook)", icon: <HiOutlineMail /> },
  { text: "Online İşlemler", icon: <TfiPencil /> },
];

export const OnlineServicesMenu = () => {
  return (
    <div className="online-services-menu bg-primary text-white font-regular w-[188px] h-[257px] flex flex-col justify-evenly border-t-2 border-white rounded-b mx-auto">
      {itemText.map((item, key) => (
        <>
          <div key={key} className="pl-6 flex items-center gap-2 ">
            <>
              {item.icon}
              <span>{item.text}</span>
            </>
          </div>
          <hr></hr>
        </>
      ))}
    </div>
  );
};
