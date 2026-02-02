import { Apple } from "lucide-react";

const AppStoreButtons = () => {
  return (
    <div className="flex flex-wrap gap-3">
      {/* Apple App Store */}
      <a
        href="#"
        className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
        aria-label="Download on the App Store"
      >
        <Apple size={24} />
        <div className="text-left">
          <div className="text-[10px] leading-none opacity-80">Download on the</div>
          <div className="text-sm font-semibold leading-tight">App Store</div>
        </div>
      </a>

      {/* Google Play Store */}
      <a
        href="#"
        className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
        aria-label="Get it on Google Play"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
          <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
        </svg>
        <div className="text-left">
          <div className="text-[10px] leading-none opacity-80">GET IT ON</div>
          <div className="text-sm font-semibold leading-tight">Google Play</div>
        </div>
      </a>
    </div>
  );
};

export default AppStoreButtons;
