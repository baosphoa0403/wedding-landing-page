export default function MainServices() {
  const services = [
    {
      title: 'Nấu tiệc tại nhà',
      description: 'Dịch vụ nấu tiệc trọn gói tại nhà, thực đơn đa dạng phù hợp với nhu cầu gia đình bạn.',
      icon: (
        <svg className="h-10 w-10 sm:h-12 sm:w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      ),
    },
    {
      title: 'Thuê bàn ghế & dụng cụ',
      description: 'Cho thuê bàn ghế và dụng cụ tiệc đầy đủ, sạch sẽ, phục vụ tận nơi.',
      icon: (
        <svg className="h-10 w-10 sm:h-12 sm:w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Tiệc cưới',
      description: 'Tổ chức tiệc cưới trọn gói, từ thực đơn đến phục vụ, giúp bạn yên tâm trong ngày trọng đại.',
      icon: (
        <svg className="h-10 w-10 sm:h-12 sm:w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: 'Tiệc thôi nôi / sinh nhật',
      description: 'Dịch vụ tổ chức tiệc thôi nôi và sinh nhật ấm cúng, phù hợp với không gian gia đình.',
      icon: (
        <svg className="h-10 w-10 sm:h-12 sm:w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-6 text-center text-xl font-semibold text-[#9CAF88] sm:mb-10 sm:text-3xl lg:mb-12">
          Dịch vụ của chúng tôi
        </h2>

        {/* Grid Layout - Stack vertically on mobile */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center px-2">
              {/* Icon */}
              <div className="mb-3 text-[#9CAF88] sm:mb-4">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mb-2 text-base font-semibold text-gray-900 sm:mb-3 sm:text-lg">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
