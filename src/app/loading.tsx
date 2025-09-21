import { LogoDecorative } from "@/components/Logo/LogoDecorative";

export default function Loading() {
  return (
    <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center">
      <LogoDecorative />

      <div className="mt-8 w-64">
        <div className="h-1 bg-gray-200 rounded-full overflow-hidden relative">
          <div className="absolute h-full bg-warm-brown rounded-full w-1/3 animate-loading"></div>
        </div>

        <div className="mt-3 text-center">
          <p className="text-sm text-warm-brown">Завантаження ....</p>
        </div>
      </div>
    </div>
  );
}
