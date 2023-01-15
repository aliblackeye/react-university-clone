import Image from "next/image";

const FeaturesSection = () => {
  return (
    <section className="features-section container flex gap-8 py-10 ">
      <div className="features-card relative p-8  w-[555px] h-[269px] bg-orange-500">
        <h1 className="text-[36px] w-[250px] mt-5 text-white">Prospective Students</h1>
        <div className="features-img w-[244px] h-[315px] absolute left-1/2 bottom-0">
          <Image
            src="https://www.medipol.edu.tr/sites/default/files/2022-11/Aday_Ogrenci_Banner_K_2022.png"
            fill
            style={{ objectFit: "contain" }}
            alt="features"
          />
        </div>
      </div>
      <div className="features-card relative p-8 w-[555px] h-[269px]  bg-pink-500">
        <h1 className="text-[36px] w-[250px] mt-5 text-white">Library</h1>
        <div className="features-img w-[244px] h-[315px] absolute left-1/2 bottom-0">
          <Image
            src="https://www.medipol.edu.tr/sites/default/files/2022-11/Aday_Ogrenci_Banner_E_2022.png"
            fill
            style={{ objectFit: "contain" }}
            alt="features"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
