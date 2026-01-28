import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-[500px] bg-[#F5E6D3] sm:min-h-[600px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/menu/photos-by-lanty-O38Id_cyV4M-unsplash.jpg"
          alt="Dịch vụ nấu tiệc tại nhà - Bàn tiệc đầy đủ món ăn phục vụ gia đình"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl text-center">
          {/* h1 - Only h1 on the page */}
          <h1 className="mb-4 text-xl font-semibold leading-tight text-white sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl">
            Dịch vụ nấu tiệc tại nhà trọn gói
          </h1>

          {/* Short supporting description - 2-3 lines, focus on benefits */}
          <p className="mb-6 text-sm leading-relaxed text-white sm:mb-8 sm:text-lg md:text-xl">
            Đặt tiệc cưới – thôi nôi tiện lợi, tiết kiệm. Không lo chuẩn bị, phục vụ đúng giờ. Thực đơn đa dạng phù hợp với gia đình bạn.
          </p>

          {/* CTA Button */}
          <a
            href="tel:0901234567"
            className="inline-block w-full min-h-[44px] rounded-lg bg-[#FFD89B] px-6 py-3 text-center text-sm font-semibold text-[#8B4513] transition-colors hover:bg-[#FFC973] sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            Gọi ngay để đặt tiệc cho gia đình bạn
          </a>
        </div>
      </div>
    </section>
  );
}
