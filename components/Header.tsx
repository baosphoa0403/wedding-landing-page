export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#9CAF88] shadow-sm">
      <div className="mx-auto max-w-[1200px] px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 py-3 sm:gap-4 sm:py-5">
          {/* Logo - Left */}
          <div className="flex-shrink-0 min-w-0">
            <h1 className="text-base font-semibold text-white leading-tight sm:text-xl md:text-2xl">
              Dịch Vụ Tiệc Tại Nhà
            </h1>
          </div>

          {/* Phone number and CTA - Right */}
          <div className="flex flex-shrink-0 items-center gap-1.5 sm:gap-4">
            {/* Phone number - Hide on very small screens, show icon only */}
            <a
              href="tel:0901234567"
              className="flex items-center gap-1 text-xs font-medium text-white transition-opacity hover:opacity-90 sm:gap-2 sm:text-base md:text-lg"
            >
              <svg
                className="h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="hidden sm:inline whitespace-nowrap">0901 234 567</span>
            </a>

            {/* CTA Button */}
            <a
              href="tel:0901234567"
              className="min-h-[44px] whitespace-nowrap rounded-lg bg-[#FFD89B] px-3 py-2 text-xs font-semibold text-[#8B4513] transition-colors hover:bg-[#FFC973] sm:px-6 sm:py-3 sm:text-base"
            >
              <span className="hidden sm:inline">Đặt tiệc ngay</span>
              <span className="sm:hidden">Đặt ngay</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
