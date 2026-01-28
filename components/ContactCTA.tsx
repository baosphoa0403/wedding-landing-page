export default function ContactCTA() {
  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          {/* Heading */}
          <h2 className="mb-3 text-xl font-semibold text-[#9CAF88] sm:mb-4 sm:text-3xl">
            Liên hệ đặt tiệc ngay hôm nay
          </h2>

          {/* Description */}
          <p className="mb-6 text-sm leading-relaxed text-gray-700 sm:mb-8 sm:text-lg">
            Chúng tôi sẵn sàng tư vấn và hỗ trợ bạn lên kế hoạch cho bữa tiệc hoàn hảo.
          </p>

          {/* Contact Info */}
          <div className="mb-6 flex flex-col items-center gap-3 sm:mb-8 sm:flex-row sm:justify-center sm:gap-6">
            {/* Phone Number */}
            <a
              href="tel:0901234567"
              className="flex items-center gap-2 text-base font-medium text-gray-900 transition-opacity hover:opacity-80 sm:text-xl"
            >
              <svg
                className="h-5 w-5 flex-shrink-0 text-[#9CAF88]"
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
              <span>0901 234 567</span>
            </a>

            {/* Zalo (Mock) */}
            <a
              href="#"
              className="flex items-center gap-2 text-base font-medium text-gray-900 transition-opacity hover:opacity-80 sm:text-xl"
            >
              <svg
                className="h-5 w-5 flex-shrink-0 text-[#0068FF]"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221c-.24 0-.48.034-.707.103-.226.069-.44.17-.64.3-.2.13-.38.29-.54.48-.16.19-.3.4-.42.63-.12.23-.22.48-.3.74-.08.26-.12.54-.12.84 0 .3.04.58.12.84.08.26.18.51.3.74.12.23.26.44.42.63.16.19.34.35.54.48.2.13.414.231.64.3.227.069.467.103.707.103.24 0 .48-.034.707-.103.226-.069.44-.17.64-.3.2-.13.38-.29.54-.48.16-.19.3-.4.42-.63.12-.23.22-.48.3-.74.08-.26.12-.54.12-.84 0-.3-.04-.58-.12-.84-.08-.26-.18-.51-.3-.74-.12-.23-.26-.44-.42-.63-.16-.19-.34-.35-.54-.48-.2-.13-.414-.231-.64-.3-.227-.069-.467-.103-.707-.103z" />
              </svg>
              <span className="hidden sm:inline">Zalo: </span>
              <span>0901 234 567</span>
            </a>
          </div>

          {/* Strong CTA Button */}
          <a
            href="tel:0901234567"
            className="inline-block w-full min-h-[44px] rounded-lg bg-[#FFD89B] px-6 py-3 text-center text-sm font-semibold text-[#8B4513] transition-colors hover:bg-[#FFC973] sm:w-auto sm:px-8 sm:py-4 sm:text-lg sm:text-xl"
          >
            Gọi ngay để đặt tiệc cho gia đình bạn
          </a>
        </div>
      </div>
    </section>
  );
}
