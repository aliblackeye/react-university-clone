import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="features-section  container my-10 gap-24  flex items-center lg:items-start md:gap-8 py-10 md:my-20 md:flex-row flex-col ">
      <div className="features-card relative p-8 w-full  md:w-[555px] h-[269px] bg-orange flex-1">
        <h1 className="text-[36px] w-[250px] mt-5 text-white">
          Prospective Students
        </h1>
        <div className="features-img w-[180px] h-[220px] md:w-[244px] md:h-[315px] absolute left-1/2 bottom-0">
          <Image
            src="https://www.medipol.edu.tr/sites/default/files/2022-11/Aday_Ogrenci_Banner_K_2022.png"
            fill
            style={{ objectFit: "contain" }}
            alt="features"
            priority
          />
        </div>
      </div>
      <div className="features-card relative p-8 w-full  md:w-[555px] h-[269px]  bg-pink-500 flex-1">
        <h1 className="text-[36px] w-[250px] mt-5 text-white">Library</h1>
        <div className="features-img w-[180px] h-[220px] md:w-[244px] md:h-[315px] absolute left-1/2 bottom-0">
          <Image
            src="https://www.medipol.edu.tr/sites/default/files/2022-11/Aday_Ogrenci_Banner_E_2022.png"
            fill
            style={{ objectFit: "contain" }}
            alt="features"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
