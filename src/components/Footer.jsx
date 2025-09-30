function Footer() {
  return (
    <div className="bg-[#263640] text-gray-300 mx-auto px-6 pt-16 pb-8 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
        <div>
          <img src="/public/icon/Weiss Logo-white.svg" alt="" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-md text-center sm:text-left">
          <div>
            <div className="font-bold text-white mb-3">Lead Architect</div>
            <div>Itsna Maualana (M.Arch)</div>
          </div>
          <div>
            <div className="font-bold text-white mb-3">Adresse</div>
            <div>State Palace of the Republic of Indonesia</div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-gray-500 mt-20"></div>
      <div className="text-slate-400 mt-5 mb-5">© 2025 WEISS. All Rights Reserved.</div>
    </div>
  );
}

export default Footer;
