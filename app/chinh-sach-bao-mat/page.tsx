import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chính sách bảo mật - KỶ NGUYÊN HEALTH CARE",
  description:
    "Chính sách quyền riêng tư và bảo mật của KỶ NGUYÊN HEALTH CARE",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="privacy-policy-section">
      <div className="container">
        <div className="privacy-policy-content">
          <h1 className="privacy-policy-title">
            <span style={{ color: "#008a47", fontWeight: "bold" }}>
              KỶ NGUYÊN HEALTH CARE
            </span>
            <br />
            CHÍNH SÁCH QUYỀN RIÊNG TƯ
            <br />
            (CHÍNH SÁCH BẢO MẬT)
          </h1>

          <div className="privacy-policy-body">
            <div className="policy-section">
              <h2 className="policy-section-title">1) PHẠM VI ÁP DỤNG</h2>
              <p>
                Chính sách này áp dụng đối với mọi hoạt động thu thập, sử dụng,
                lưu trữ, chia sẻ, chuyển giao dữ liệu cá nhân phát sinh từ:
              </p>
              <ul>
                <li>
                  Website/landing page, biểu mẫu đặt lịch, hotline, Zalo/nhắn
                  tin, email;
                </li>
                <li>
                  Quá trình tư vấn – ký kết – thực hiện dịch vụ tại bệnh viện
                  hoặc tại nhà (Mẹ &amp; Bé và chăm sóc sức khoẻ cá nhân);
                </li>
                <li>Tuyển dụng, hợp tác đối tác (nếu có).</li>
              </ul>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">
                2) ĐƠN VỊ KIỂM SOÁT DỮ LIỆU &amp; LIÊN HỆ
              </h2>
              <p>
                <span style={{ color: "#008a47", fontWeight: "bold" }}>
                  KỶ NGUYÊN HEALTH CARE
                </span>{" "}
                (sau đây gọi là &quot;Kỷ Nguyên&quot;, &quot;chúng tôi&quot;) là
                bên kiểm soát dữ liệu cá nhân đối với dữ liệu do khách
                hàng/đối tượng liên quan cung cấp và dữ liệu phát sinh trong
                quá trình cung cấp dịch vụ.
              </p>
              <p>
                <strong>Kênh liên hệ về quyền riêng tư:</strong>
              </p>
              <ul>
                <li>
                  <strong>Hotline:</strong> 0984 891 968
                </li>
                <li>
                  <strong>Email:</strong> ytekynguyen@gmail.com
                </li>
                <li>
                  <strong>Địa chỉ:</strong> SB23 – 151 KĐT Vinhomes Ocean Park,
                  Gia Lâm, Hà Nội
                </li>
              </ul>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">3) ĐỊNH NGHĨA</h2>
              <ul>
                <li>
                  <strong>Dữ liệu cá nhân:</strong> thông tin gắn với một người
                  hoặc giúp xác định một người.
                </li>
                <li>
                  <strong>Dữ liệu cá nhân nhạy cảm:</strong> bao gồm dữ liệu
                  sức khỏe, dữ liệu trẻ em… và các nhóm khác theo quy định
                  pháp luật.
                </li>
                <li>
                  <strong>Xử lý dữ liệu:</strong> mọi thao tác thu thập, ghi,
                  lưu, sử dụng, chia sẻ, xóa…
                </li>
              </ul>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">
                4) DỮ LIỆU CHÚNG TÔI THU THẬP
              </h2>

              <h3 className="policy-subsection-title">
                4.1. Dữ liệu định danh &amp; liên hệ
              </h3>
              <p>
                Họ tên, số điện thoại, email, địa chỉ, khu vực, thông tin người
                liên hệ thay thế.
              </p>

              <h3 className="policy-subsection-title">
                4.2. Dữ liệu dịch vụ &amp; nhu cầu chăm sóc
              </h3>
              <ul>
                <li>
                  <strong>Nhu cầu dịch vụ:</strong> tại viện/tại nhà; ca
                  ngày/đêm/24h; gói chăm bé cơ bản/chuyên sâu; phục hồi mẹ sau
                  sinh (trị liệu/thư giãn)…
                </li>
                <li>
                  Thông tin lịch sử đặt lịch, ghi chú yêu cầu, phản hồi chất
                  lượng.
                </li>
              </ul>

              <h3 className="policy-subsection-title">
                4.3. Dữ liệu sức khỏe và dữ liệu liên quan trẻ em (nhạy cảm)
              </h3>
              <p>
                Chỉ thu thập khi thật sự cần để tư vấn và triển khai dịch vụ an
                toàn:
              </p>
              <ul>
                <li>
                  Tình trạng sức khỏe mẹ sau sinh, dấu hiệu cần theo dõi, tiền
                  sử liên quan chăm sóc;
                </li>
                <li>
                  Thông tin chăm bé (tuổi, cân nặng, lịch bú/ngủ…), các lưu ý y
                  khoa do gia đình/bác sĩ cung cấp;
                </li>
                <li>
                  Ảnh/tài liệu y tế (nếu khách hàng chủ động gửi để phục vụ
                  chăm sóc).
                </li>
              </ul>

              <h3 className="policy-subsection-title">
                4.4. Dữ liệu kỹ thuật (khi truy cập website)
              </h3>
              <p>
                Địa chỉ IP, loại thiết bị, trình duyệt, cookie, log truy cập…
                (phục vụ vận hành, bảo mật, đo hiệu quả).
              </p>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">
                5) MỤC ĐÍCH XỬ LÝ DỮ LIỆU
              </h2>
              <p>Chúng tôi xử lý dữ liệu để:</p>
              <ol>
                <li>
                  Tư vấn, đánh giá nhu cầu, báo giá, đề xuất gói phù hợp;
                </li>
                <li>
                  Xác nhận lịch, điều phối nhân sự, bàn giao ca và theo dõi chất
                  lượng dịch vụ;
                </li>
                <li>
                  Đảm bảo an toàn: nắm thông tin cần thiết để chăm sóc đúng
                  phương pháp, xử lý tình huống;
                </li>
                <li>
                  Chăm sóc khách hàng: phản hồi, giải quyết khiếu nại, hậu mãi;
                </li>
                <li>
                  Tuân thủ pháp luật và yêu cầu của cơ quan có thẩm quyền (nếu
                  có);
                </li>
                <li>
                  Cải tiến dịch vụ (thống kê/đo lường ở mức phù hợp, ưu tiên ẩn
                  danh/giảm định danh khi có thể).
                </li>
              </ol>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">
                6) CĂN CỨ XỬ LÝ DỮ LIỆU
              </h2>
              <p>
                Tùy từng trường hợp, chúng tôi xử lý dữ liệu trên một hoặc
                nhiều căn cứ sau:
              </p>
              <ul>
                <li>
                  Có sự đồng ý của chủ thể dữ liệu (đặc biệt với dữ liệu nhạy
                  cảm);
                </li>
                <li>
                  Thực hiện hợp đồng/cung cấp dịch vụ theo yêu cầu của khách
                  hàng;
                </li>
                <li>Tuân thủ nghĩa vụ pháp lý;</li>
                <li>
                  Bảo vệ quyền lợi chính đáng và đảm bảo an toàn hệ thống
                  (trong phạm vi pháp luật cho phép).
                </li>
              </ul>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">
                7) CHIA SẺ DỮ LIỆU CHO BÊN THỨ BA
              </h2>
              <p>
                <strong>Chúng tôi không bán dữ liệu cá nhân.</strong>
              </p>
              <p>
                Dữ liệu có thể được chia sẻ trong các trường hợp sau, theo
                nguyên tắc tối thiểu – cần thiết – đúng mục đích:
              </p>
              <ul>
                <li>
                  Nhân sự/đơn vị điều phối – CSKH – vận hành – kế toán của Kỷ
                  Nguyên theo phân quyền;
                </li>
                <li>
                  Đối tác cung cấp hạ tầng kỹ thuật (lưu trữ, email, CRM, tổng
                  đài…) với cam kết bảo mật;
                </li>
                <li>
                  Bệnh viện/đơn vị y tế (nếu có phối hợp theo yêu cầu khách
                  hàng và phù hợp mục đích chăm sóc);
                </li>
                <li>
                  Cơ quan nhà nước có thẩm quyền khi có yêu cầu hợp pháp.
                </li>
              </ul>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">
                8) CHUYỂN DỮ LIỆU RA NƯỚC NGOÀI
              </h2>
              <p>
                Nếu có việc sử dụng nền tảng/hạ tầng dẫn tới chuyển dữ liệu ra
                nước ngoài, chúng tôi sẽ thực hiện theo yêu cầu pháp luật về
                chuyển dữ liệu xuyên biên giới và áp dụng biện pháp bảo vệ
                tương ứng.
              </p>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">9) THỜI HẠN LƯU TRỮ</h2>
              <p>Chúng tôi lưu dữ liệu theo nguyên tắc:</p>
              <ul>
                <li>
                  Lưu trong thời gian cần thiết để thực hiện mục đích đã nêu;
                </li>
                <li>
                  Lưu lâu hơn khi pháp luật yêu cầu (kế toán, giải quyết tranh
                  chấp, khiếu nại);
                </li>
                <li>
                  Khi hết mục đích hoặc có yêu cầu hợp lệ, dữ liệu sẽ được
                  xóa/ẩn danh hóa theo quy trình.
                </li>
              </ul>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">
                10) BIỆN PHÁP BẢO MẬT &amp; AN TOÀN
              </h2>
              <p>Chúng tôi áp dụng các biện pháp phù hợp, ví dụ:</p>
              <ul>
                <li>
                  Phân quyền truy cập theo vai trò; quản lý tài khoản nội bộ;
                </li>
                <li>
                  Mã hóa/che giấu khi truyền/lưu (khi áp dụng được), sao lưu và
                  kiểm soát truy cập;
                </li>
                <li>
                  Nhật ký truy cập, cảnh báo bất thường, rà soát định kỳ;
                </li>
                <li>
                  Quy trình xử lý sự cố và đào tạo nhân sự về bảo mật.
                </li>
              </ul>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">
                11) QUYỀN CỦA CHỦ THỂ DỮ LIỆU &amp; CÁCH THỰC HIỆN
              </h2>
              <p>Bạn có quyền (theo quy định pháp luật) yêu cầu:</p>
              <ul>
                <li>Được thông báo, truy cập, chỉnh sửa/cập nhật;</li>
                <li>
                  Hạn chế/ phản đối xử lý (trong một số trường hợp);
                </li>
                <li>
                  Rút lại đồng ý; yêu cầu xóa dữ liệu khi đủ điều kiện;
                </li>
                <li>Khiếu nại/khởi kiện theo quy định.</li>
              </ul>
              <p>
                <strong>Cách thực hiện:</strong> liên hệ hotline/email ở Mục 2.
                Chúng tôi có thể yêu cầu thông tin xác minh để bảo vệ đúng chủ
                thể dữ liệu.
              </p>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">
                12) DỮ LIỆU CỦA TRẺ EM &amp; NGƯỜI PHỤ THUỘC
              </h2>
              <p>
                Vì dịch vụ có liên quan trẻ sơ sinh/trẻ nhỏ, chúng tôi chỉ xử
                lý dữ liệu của trẻ khi:
              </p>
              <ul>
                <li>Phục vụ trực tiếp việc tư vấn/chăm sóc an toàn;</li>
                <li>
                  Có sự cung cấp/đồng ý của cha/mẹ hoặc người giám hộ hợp pháp
                  theo quy định.
                </li>
              </ul>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">
                13) COOKIE &amp; CÔNG NGHỆ THEO DÕI
              </h2>
              <p>Website có thể sử dụng cookie để:</p>
              <ul>
                <li>Ghi nhớ lựa chọn, tối ưu trải nghiệm;</li>
                <li>Đo hiệu quả truy cập (nếu bật analytics);</li>
                <li>Tăng bảo mật, chống gian lận.</li>
              </ul>
              <p>
                Bạn có thể tắt cookie trong trình duyệt; tuy nhiên một số tính
                năng có thể hoạt động kém hơn.
              </p>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">
                14) TIẾP THỊ (MARKETING)
              </h2>
              <p>
                Chúng tôi chỉ gửi thông tin ưu đãi/nội dung chăm sóc khi:
              </p>
              <ul>
                <li>Bạn đăng ký nhận tin; hoặc</li>
                <li>
                  Có cơ chế từ chối (opt-out) rõ ràng và bạn có thể dừng bất kỳ
                  lúc nào.
                </li>
              </ul>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">
                15) KHIẾU NẠI &amp; XỬ LÝ VI PHẠM
              </h2>
              <p>
                Nếu bạn cho rằng dữ liệu bị sử dụng sai mục đích hoặc có rủi
                ro lộ lọt:
              </p>
              <ul>
                <li>
                  Liên hệ ngay theo Mục 2 để chúng tôi kiểm tra, phong tỏa xử
                  lý, khắc phục;
                </li>
                <li>
                  Trường hợp cần thiết, chúng tôi phối hợp cơ quan chuyên trách
                  theo quy định.
                </li>
              </ul>
            </div>

            <div className="policy-section">
              <h2 className="policy-section-title">
                16) SỬA ĐỔI CHÍNH SÁCH
              </h2>
              <p>
                Chúng tôi có thể cập nhật chính sách để phù hợp quy định pháp
                luật và vận hành. Phiên bản mới sẽ được đăng trên website và ghi
                ngày hiệu lực.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
