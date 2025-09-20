export const FooterBottomBar = () => {
  return (
    <div className="border-t border-warm-white/30 pt-6 sm:pt-8 mt-8">
      <div className="flex flex-col items-center gap-6 md:justify-center md:flex-row-reverse md:gap-10">
        <div className="flex flex-col items-center md:flex-row gap-3 md:gap-6">
          <a
            href="privacy-policy"
            className="text-warm-white/80 hover:text-sage-green transition-colors duration-200 text-xs sm:text-sm font-medium relative group"
          >
            Політика конфіденційності
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-green transition-all duration-300 group-hover:w-full"></span>
          </a>
          <span className="text-warm-white/80 max-md:hidden">|</span>
          <a
            href="terms-of-use"
            className="text-warm-white/80 hover:text-sage-green transition-colors duration-200 text-xs sm:text-sm font-medium relative group"
          >
            Умови використання
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sage-green transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <p className="text-warm-white/80 text-xs sm:text-sm">
          ©2025 Кава для душі. Всі права захищені.
        </p>
      </div>
    </div>
  );
};
