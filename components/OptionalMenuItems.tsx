export default function OptionalMenuItems() {
  const categories = [
    {
      name: 'Khai vị',
      dishes: ['Nem rán', 'Chả giò', 'Chả cá', 'Bánh mì nướng'],
    },
    {
      name: 'Gỏi',
      dishes: ['Gỏi gà', 'Gỏi tôm thịt', 'Gỏi ngó sen', 'Gỏi cuốn'],
    },
    {
      name: 'Súp',
      dishes: ['Súp cua', 'Súp gà', 'Súp hải sản', 'Súp nấm'],
    },
    {
      name: 'Món chính',
      dishes: ['Gà nướng', 'Cá kho tộ', 'Thịt kho tàu', 'Tôm rang me', 'Bò xào', 'Cơm chiên'],
    },
    {
      name: 'Tráng miệng',
      dishes: ['Chè đậu xanh', 'Chè đậu đỏ', 'Trái cây', 'Bánh flan'],
    },
  ];

  return (
    <section className="bg-[#F5E6D3] py-10 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="mb-6 text-center text-xl font-semibold text-[#9CAF88] sm:mb-10 sm:text-3xl lg:mb-12">
          Món ăn tham khảo
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-4 sm:p-6">
              {/* Category Name */}
              <h3 className="mb-3 text-lg font-semibold text-[#9CAF88] sm:mb-4 sm:text-xl">
                {category.name}
              </h3>

              {/* Dishes List */}
              <ul className="space-y-1.5 sm:space-y-2">
                {category.dishes.map((dish, dishIndex) => (
                  <li key={dishIndex} className="text-sm text-gray-700 sm:text-base">
                    {dish}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="mt-6 text-center text-xs text-gray-600 sm:mt-8 sm:text-sm sm:text-base">
          Thực đơn có thể thay đổi theo nhu cầu và ngân sách của gia đình bạn. Liên hệ để được tư vấn chi tiết.
        </p>
      </div>
    </section>
  );
}
