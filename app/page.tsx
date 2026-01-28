import { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import MainServices from '@/components/MainServices';
import WhyChooseUs from '@/components/WhyChooseUs';
import SampleMenuPricing from '@/components/SampleMenuPricing';
import OptionalMenuItems from '@/components/OptionalMenuItems';
import ContactCTA from '@/components/ContactCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dịch vụ nấu tiệc tại nhà trọn gói | Đặt tiệc cưới - thôi nôi tiện lợi',
  description: 'Dịch vụ nấu tiệc tại nhà chuyên nghiệp, thuê bàn ghế và dụng cụ tiệc. Tổ chức tiệc cưới, thôi nôi, sinh nhật trọn gói. Thực đơn đa dạng, giá minh bạch, phục vụ đúng giờ.',
  keywords: 'nấu tiệc tại nhà, đặt tiệc tại nhà, thuê bàn ghế tiệc, tiệc cưới, tiệc thôi nôi, dịch vụ nấu tiệc',
  openGraph: {
    title: 'Dịch vụ nấu tiệc tại nhà trọn gói',
    description: 'Đặt tiệc cưới - thôi nôi tiện lợi, tiết kiệm. Thực đơn đa dạng, giá minh bạch, phục vụ đúng giờ.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <MainServices />
      <WhyChooseUs />
      <SampleMenuPricing />
      <OptionalMenuItems />
      <ContactCTA />
      <Footer />
    </main>
  );
}
