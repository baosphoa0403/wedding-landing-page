You are working on a Next.js project.

NEXT.JS VERSION (MANDATORY):
- Use Next.js 14
- Use App Router
- Do NOT use Pages Router
- Use TypeScript

PROJECT GOAL:
Build ONE SINGLE responsive landing page for a Vietnamese catering service website:
- Nấu tiệc tại nhà
- Thuê bàn ghế, dụng cụ tiệc
- Tổ chức tiệc cưới, thôi nôi, sinh nhật

TECH STACK:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- SEO optimized
- Mobile-first responsive design

GENERAL RULES:
- Only ONE landing page
- Content must be written in Vietnamese
- Do NOT use lorem ipsum
- Do NOT add unnecessary features
- Do NOT use heavy animations
- Keep layout clean and conversion-focused

SEO RULES:
- Use Next.js Metadata API
- Only ONE h1 per page
- Follow heading hierarchy (h1 → h2 → h3)
- Add meaningful alt text for all images
- Content must sound natural in Vietnamese

RESPONSIVE DESIGN RULES (MANDATORY):
- Mobile-first approach
- All sections must work well on:
  - Mobile (<640px)
  - Tablet (640px–1024px)
  - Desktop (>1024px)
- CTA buttons must be:
  - Full width on mobile
  - Easy to tap (min-height 44px)
- Phone number must be clearly visible on mobile
- No horizontal scrolling on any screen size
- Grid layouts must stack vertically on mobile

DESIGN STYLE:
- Inspired by Vietnamese catering websites
- Tone: warm, family-friendly, trustworthy
- Color suggestion:
  - Primary: olive green / light green / beige / cream
  - Accent: pastel yellow / pastel orange
- Avoid SaaS-style or overly modern UI

PAGE STRUCTURE (STRICT ORDER):

1. Header (Sticky)
- Logo on the left
- Phone number on the right
- Primary CTA: “Đặt ngay” or “Gọi ngay”
- Sticky on scroll
- Responsive: hamburger NOT required

2. Hero Section
- Catering-related background image
- Clear main slogan (h1)
- Short supporting description
- CTA button

3. Main Services Section
Grid layout with icon + short text:
- Nấu tiệc tại nhà
- Thuê bàn ghế & dụng cụ
- Tiệc cưới
- Tiệc thôi nôi / sinh nhật

4. Why Choose Us Section
Highlight key strengths:
- Thực đơn đa dạng
- Giá minh bạch
- Phục vụ đúng giờ
- Kinh nghiệm tổ chức tiệc

5. Sample Menu & Pricing Section
- Sample table menus
- Reference prices
- Food images
- CTA button per menu

6. Optional Menu Items Section
Show sample dishes by category:
- Khai vị
- Gỏi
- Súp
- Món chính
- Tráng miệng

7. Contact / Final CTA Section
- Phone number
- Zalo (mock)
- Strong call to action

8. Footer
- Address
- Phone number
- Social links (Facebook, Zalo – mock)

CODE ORGANIZATION RULES:
- page.tsx is the main file
- Each section is a separate component
- Components live in /components
- Use Server Components by default
- Avoid unnecessary client components

DO NOT:
- Do NOT add backend logic
- Do NOT use external UI libraries
- Do NOT create extra pages
- Do NOT introduce state management

WORKFLOW:
1. Create folder structure
2. Implement page.tsx
3. Implement each section component
4. Ensure responsive behavior on all breakpoints
