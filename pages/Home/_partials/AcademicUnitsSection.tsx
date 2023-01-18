const AcademicUnitsSection = () => {
  return <section className="academic-units-section bg-orange  w-full my-10">
    <div className="container h-full justify-center flex  flex-col gap-5 md:gap-10">
      <h1 className="text-white text-[40px] text-center">Academic Units</h1>
      <div className="academic-buttons-wrapper flex gap-5 items-center md:justify-between flex-col md:flex-row">
        <button className="btn-outline-white btn w-[210px] h-[51px] text-sm !p-[14px]">UNDERGRADUATE SCHOOLS</button>
        <button className="btn-outline-white btn w-[210px] h-[51px] text-sm !p-[14px]">VOCATIONAL SCHOOLS</button>
        <button className="btn-outline-white btn w-[210px] h-[51px] text-sm !p-[14px]">GRADUATE SCHOOLS</button>
        <button className="btn-outline-white btn w-[210px] h-[51px] text-sm !p-[14px]">RESEARCH SCHOOLS</button>
      </div>
    </div>
  </section>;
};

export default AcademicUnitsSection;
