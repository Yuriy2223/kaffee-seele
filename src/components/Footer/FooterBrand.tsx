import { Coffee, Leaf, Star } from "lucide-react";

export const FooterBrand = () => {
  return (
    <div className="md:col-span-1 space-y-6">
      <div className="flex items-center justify-center space-x-3 mb-6 border-b border-warm-white/30 pb-2">
        <div className="w-12 h-12 bg-warm-white/20 rounded-full flex items-center justify-center relative">
          <Coffee className="text-warm-white w-7 h-7" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-sage-green/80 rounded-full flex items-center justify-center">
            <Leaf className="text-warm-white w-2 h-2" />
          </div>
        </div>
        <span className="text-xl font-semibold">Кава для душі</span>
      </div>

      <p className="bg-warm-white/8 rounded-lg p-3 sm:p-4 border border-warm-white/10 text-warm-white/80">
        Ваш затишний острівець спокою у вірі міста. Тут кожна чашка кави — це
        маленька подорож до гармонії та насолоди.
      </p>

      <div className="flex items-center space-x-2 text-warm-white/60 bg-warm-white/10 rounded-lg px-3 py-2 w-fit">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <span className="text-sm font-medium text-warm-white">4.9/5</span>
        <span className="text-xs text-warm-white/60 hidden sm:inline">
          від наших гостей
        </span>
      </div>
    </div>
  );
};
