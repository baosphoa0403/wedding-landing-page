export default function Footer() {
  return (
    <footer className="bg-[#9CAF88] py-6 sm:py-10">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 text-center sm:grid-cols-3 sm:gap-6 sm:text-left">
          {/* Address */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-white sm:text-lg">
              Địa chỉ
            </h3>
            <p className="text-xs text-white/90 leading-relaxed sm:text-sm sm:text-base">
              123 Đường ABC, Quận XYZ<br />
              Thành phố Hồ Chí Minh
            </p>
          </div>

          {/* Phone Number */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-white sm:text-lg">
              Liên hệ
            </h3>
            <a
              href="tel:0901234567"
              className="text-xs text-white/90 transition-opacity hover:opacity-80 sm:text-sm sm:text-base"
            >
              0901 234 567
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-white sm:text-lg">
              Theo dõi chúng tôi
            </h3>
            <div className="flex items-center justify-center gap-4 sm:justify-start">
              {/* Facebook */}
              <a
                href="#"
                className="text-white/90 transition-opacity hover:opacity-80"
                aria-label="Facebook"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Zalo */}
              <a
                href="#"
                className="text-white/90 transition-opacity hover:opacity-80"
                aria-label="Zalo"
              >
                <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221c-.24 0-.48.034-.707.103-.226.069-.44.17-.64.3-.2.13-.38.29-.54.48-.16.19-.3.4-.42.63-.12.23-.22.48-.3.74-.08.26-.12.54-.12.84 0 .3.04.58.12.84.08.26.18.51.3.74.12.23.26.44.42.63.16.19.34.35.54.48.2.13.414.231.64.3.227.069.467.103.707.103.24 0 .48-.034.707-.103.226-.069.44-.17.64-.3.2-.13.38-.29.54-.48.16-.19.3-.4.42-.63.12-.23.22-.48.3-.74.08-.26.12-.54.12-.84 0-.3-.04-.58-.12-.84-.08-.26-.18-.51-.3-.74-.12-.23-.26-.44-.42-.63-.16-.19-.34-.35-.54-.48-.2-.13-.414-.231-.64-.3-.227-.069-.467-.103-.707-.103z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 border-t border-white/20 pt-4 text-center sm:mt-8 sm:pt-6">
          <p className="text-xs text-white/80 sm:text-sm">
            © 2024 Dịch Vụ Tiệc Tại Nhà. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
