function Footer() {
  return (
    <div className="bg-[#263640] md:px-40 px-10 pt-20 pb-5 mt-20">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 items-center ">
        <div>
          <img src="/public/icon/Weiss Logo-white.svg" alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:w-sm w-full gap-6 text-white">
          <div>
            <div className="font-bold mb-3">Geschäftsführer</div>
            <div>Beratender Ingenieur Dipl.-Ing. Klaus Weiss</div>
          </div>
          <div>
            <div className="font-bold mb-3">Adresse</div>
            <div>Straßenname 7 12345 Stadt</div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-500 mt-20"></div>
      <div className="text-slate-400 mt-5 mb-5">Itsna Maulana | Koda 2025</div>
    </div>
  );
}

export default Footer;
