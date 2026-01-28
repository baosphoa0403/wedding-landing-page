import Image from 'next/image';

export default function SampleMenuPricing() {
  const menus = [
    {
      name: 'Menu tiệc gia đình',
      price: 'Từ 500.000đ/bàn',
      image: '/images/menu/menu-gia-dinh.jpg',
      description: 'Phù hợp cho tiệc gia đình 8-10 người',
    },
    {
      name: 'Menu tiệc cưới',
      price: 'Từ 800.000đ/bàn',
      image: '/images/menu/menu-cuoi.jpg',
      description: 'Thực đơn đầy đủ cho tiệc cưới trọn gói',
    },
    {
      name: 'Menu tiệc thôi nôi',
      price: 'Từ 400.000đ/bàn',
      image: '/images/menu/menu-thoi-noi.jpg',
      description: 'Menu đặc biệt cho tiệc thôi nôi, sinh nhật',
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-6 text-center text-xl font-semibold text-[#9CAF88] sm:mb-10 sm:text-3xl lg:mb-12">
          Thực đơn tham khảo
        </h2>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {menus.map((menu, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm border border-gray-200">
              {/* Food Image */}
              <div className="relative h-40 bg-[#F5E6D3] sm:h-56">
                <Image
                  src={menu.image}
                  alt={`Hình ảnh món ăn ${menu.name} - Thực đơn phong phú với các món ăn truyền thống Việt Nam`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                {/* Menu Name */}
                <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                  {menu.name}
                </h3>

                {/* Description */}
                <p className="mb-3 text-xs leading-relaxed text-gray-600 sm:mb-4 sm:text-sm">
                  {menu.description}
                </p>

                {/* Price - Highlighted with accent color */}
                <div className="mb-4 mt-auto sm:mb-6">
                  <p className="text-base font-semibold text-[#FFD89B] sm:text-lg">
                    {menu.price}
                  </p>
                </div>

                {/* CTA Button */}
                <a
                  href="tel:0901234567"
                  className="w-full min-h-[44px] rounded-lg bg-[#FFD89B] px-4 py-2.5 text-center text-sm font-semibold text-[#8B4513] transition-colors hover:bg-[#FFC973] sm:px-6 sm:py-3 sm:text-base"
                >
                  Liên hệ tư vấn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
