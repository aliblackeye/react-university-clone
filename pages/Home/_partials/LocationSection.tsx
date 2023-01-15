import Image from "next/image";

const LocationSection = () => {
  return (
    <section className="location-section flex gap-5">
      <div className="location-details container flex flex-col gap-5">
        <h3 className="text-[30px] text-primary">Haliç Campus</h3>
        <p>
          The Haliç (Golden Horn) Campus is located on the peninsula nearby
          Haliç, which is the one of the oldest parts of Istanbul and where the
          Unkapanı Bridge meets the land. On the campus is the College of Health
          Sciences and Vocational Schools. The campus also has several
          facilities.
        </p>
      </div>
      <div className="location-image relative">
        <Image
          src="https://www.medipol.edu.tr/sites/default/files/styles/max_483x483/public/2022-03/03_Medipol_UNV_Hastanesi-a4fc97d5-747e-49b7-8480-7a79e6f0808c.jpeg?h=3f9d559e&itok=fSScsAFu%201x"
          fill
          alt="location"
        />
      </div>
    </section>
  );
};

export default LocationSection;
