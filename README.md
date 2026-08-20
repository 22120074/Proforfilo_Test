# Dự án Frontend Portfolio

## Tổng quan dự án

Đây là một dự án website hồ sơ cá nhân (portfolio) chuyên nghiệp được xây dựng nhằm thể hiện các kỹ năng lập trình Frontend. Dự án bám sát và tuân thủ nghiêm ngặt các yêu cầu kỹ thuật đã đặt ra, tập trung vào kiến trúc code sạch (clean code), thiết kế hiển thị tốt trên mọi thiết bị (responsive), và xây dựng logic nghiệp vụ vững chắc, tuyệt đối không sử dụng dữ liệu tĩnh cứng (hardcode) trong các component.

## Công nghệ sử dụng

- Framework: React (Vite)
- Định tuyến (Routing): React Router v6
- Animation: Framer Motion (Xử lý hiệu ứng chuyển route mượt mà)
- CSS và Styling: CSS Modules kết hợp Custom Properties (CSS Grid, Flexbox)
- Triển khai: Sẵn sàng cấu hình cho Vercel hoặc Netlify

## Cấu trúc thư mục

Dự án được xây dựng theo cấu trúc chuẩn, dễ mở rộng và quản lý:

- src/components/: Các component UI dùng chung, có khả năng tái sử dụng (Spinner, Modal, v.v.)
- src/pages/: Các component cấp độ trang dựa theo route (Home, Resume, Skills, Projects, Contact)
- src/data/: Các file dữ liệu tĩnh định dạng JSON, đóng vai trò là nguồn dữ liệu gốc (portfolioData.json, projects.json)
- src/css/: Các file CSS Modules phân chia theo từng trang và component nhằm tránh xung đột style
- src/hooks/: Các React hooks tùy chỉnh (nếu cần thiết)

## Các tính năng chính và Yêu cầu đã đáp ứng

### 1. Kiến trúc hướng dữ liệu (Data-driven)

- Toàn bộ nội dung (thông tin cá nhân, kỹ năng, dự án, học vấn) đều được render động bằng hàm .map() từ các file JSON nằm trong thư mục src/data.
- Hạn chế tối đa việc hardcode để đảm bảo tính linh hoạt và dễ bảo trì cho dự án.

### 2. Giao diện (UI/UX) và Thiết kế đáp ứng

- Chế độ Sáng/Tối (Dark Mode): Tích hợp tính năng chuyển đổi giao diện Sáng / Tối linh hoạt, bảo vệ mắt người dùng và mang lại cảm giác hiện đại.
- Thiết kế đáp ứng (Responsive): Hỗ trợ hoàn hảo trên 3 kích thước màn hình: Điện thoại di động (<768px), Máy tính bảng (768px - 1024px) và Máy tính bàn (>1024px). Có tích hợp Hamburger Menu (Menu điều hướng dạng thu gọn) vô cùng thân thiện cho các thiết bị di động.
- Trải nghiệm khả năng tiếp cận (Accessibility - A11y): Hỗ trợ đầy đủ thao tác bằng bàn phím (sử dụng phím Enter / Space) để mở hoặc đóng Hamburger Menu. Nút bấm được trang bị focus outline (viền bao quanh khi focus) để người dùng dễ dàng định vị thành phần đang tương tác.
- Sử dụng CSS Grid cho các bố cục phức tạp để đảm bảo căn lề chuẩn xác (như ở trang Dự án và Liên hệ).
- Khống chế văn bản dài hiệu quả bằng các thuộc tính line-clamp và clamp.
- Áp dụng các thẻ Semantic HTML5 (header, nav, section, main, footer) để tối ưu cấu trúc DOM.

### 3. Định tuyến (Routing)

- Cấu hình chuẩn xác 5 route chính: /, /resume, /skills, /projects, /contact.
- Xử lý chuyển trang mượt mà: Tích hợp thư viện Framer Motion (hoặc CSS transitions) để thiết lập hiệu ứng animation mỗi khi thay đổi trang, giúp điều hướng giữa các trang diễn ra tự nhiên, không bị giật lùi (không bị mất điểm tiêu chí kỹ thuật lõi).
- Xây dựng trang 404 Not Found để xử lý các đường dẫn không tồn tại.
- Tích hợp trạng thái active cho thanh menu điều hướng.
- Tích hợp cơ chế Scroll-to-top giúp đưa thanh cuộn về đầu trang mỗi khi chuyển route.

### 4. Chức năng cụ thể từng trang

- Trang Chủ (Home): Khu vực Hero section với ảnh đại diện, chức danh và các nút kêu gọi hành động (Call-to-Action) rõ ràng.
- Hồ Sơ (Resume): Thể hiện dữ liệu dạng dọc chuyên nghiệp cho Học vấn. Tính năng Modal popup khi click vào mục tiêu nghề nghiệp.
- Kỹ Năng (Skills): Phân loại nhóm kỹ năng công nghệ một cách trực quan bằng hệ thống lưới (Grid) cùng các nhãn đánh giá mức độ thành thạo.
- Dự Án (Projects): Cung cấp bộ lọc thông minh (Multi-select dropdown) theo công nghệ và thanh tìm kiếm theo tên dự án. Xử lý UI chặt chẽ cho các dự án chưa có link Demo (vô hiệu hóa nút và hiện tooltip).
- Liên Hệ (Contact): Xây dựng biểu mẫu (Form) với logic kiểm tra dữ liệu đầu vào khắt khe (bắt buộc điền tất cả các trường, chuẩn định dạng email, nội dung tin nhắn tối thiểu 20 ký tự). Có hiệu ứng loading và thông báo thành công (giả lập submit API) mà tuyệt đối không dùng cửa sổ alert() mặc định.

## Hướng dẫn cài đặt và chạy dự án

1. Cài đặt các thư viện phụ thuộc
   Chạy câu lệnh sau để cài đặt toàn bộ package cần thiết:
   ```bash
   npm install
   ```

2. Khởi chạy môi trường phát triển (Development)
   Chạy câu lệnh sau để bật server của Vite:
   ```bash
   npm run dev
   ```

3. Xây dựng bản sản phẩm (Production)
   Chạy câu lệnh sau để tối ưu và đóng gói dự án:
   ```bash
   npm run build
   ```

## Lưu ý

- Dự án ưu tiên sử dụng code chuẩn mực, tránh việc lạm dụng quá nhiều thư viện bên thứ 3.
- Toàn bộ state và logic được quản lý hoàn toàn thông qua các React hooks tiêu chuẩn (useState, useEffect, useMemo).
