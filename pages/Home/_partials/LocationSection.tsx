import Image from "next/image";

const LocationSection = () => {
  return (
    <section className="location-section container flex gap-5">
      <div className="location-details  flex flex-col gap-5 flex-1">
        <h3 className="text-[30px] text-primary">Haliç Campus</h3>
        <p >
          The Haliç (Golden Horn) Campus is located on the peninsula nearby
          Haliç, which is the one of the oldest parts of Istanbul and where the
          Unkapanı Bridge meets the land. On the campus is the College of Health
          Sciences and Vocational Schools. The campus also has several
          facilities.
        </p>
        <iframe
          width="520"
          height="400"
          id="gmap_canvas"
          src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Istanbul+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
      <div className="location-image relative flex-1 w-[483] h-[483] ">
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
