export default function WhyChooseUs() {
  const reasons = [
    {
      title: 'Thực đơn đa dạng',
      description: 'Nhiều lựa chọn món ăn phù hợp với khẩu vị và ngân sách của gia đình bạn.',
    },
    {
      title: 'Giá minh bạch',
      description: 'Báo giá rõ ràng từ đầu, không phát sinh chi phí ẩn, giúp bạn lên kế hoạch dễ dàng.',
    },
    {
      title: 'Phục vụ đúng giờ',
      description: 'Đội ngũ chuyên nghiệp, đảm bảo phục vụ đúng thời gian đã hẹn, không làm gián đoạn tiệc.',
    },
    {
      title: 'Kinh nghiệm tổ chức tiệc',
      description: 'Nhiều năm kinh nghiệm trong việc tổ chức các loại tiệc, hiểu rõ nhu cầu của khách hàng.',
    },
  ];

  return (
    <section className="bg-[#F5E6D3] py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-6 text-center text-xl font-semibold text-[#9CAF88] sm:mb-10 sm:text-3xl lg:mb-12">
          Tại sao chọn chúng tôi
        </h2>

        {/* Reasons Grid - Simple layout */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white rounded-lg p-5 sm:p-6">
              {/* Title */}
              <h3 className="mb-2 text-base font-semibold text-gray-900 sm:mb-3 sm:text-lg">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
