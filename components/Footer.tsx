import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-logo-section">
            <div className="footer-logo-wrapper">
              <div className="footer-logo">
                <img
                  src="https://raw.githubusercontent.com/thanhtran1607/kynguyenhealthcare_1/refs/heads/main/image/LogoKN@4x.png"
                  alt="KỶ NGUYÊN HEALTH CARE"
                  className="footer-logo-img"
                />
              </div>
              <div className="footer-tagline">
                <p className="tagline-line1">
                  Kỷ luật tạo an toàn - Tinh tế tạo niềm tin
                </p>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h3>Dịch vụ</h3>
            <ul>
              <li>
                <a href="#">Chăm sóc Mẹ &amp; Bé tại bệnh viện (ngày/đêm/24h)</a>
              </li>
              <li>
                <a href="#">Chăm sóc Mẹ &amp; Bé tại nhà (cơ bản/chuyên sâu)</a>
              </li>
              <li>
                <a href="#">Phục hồi sau sinh cho mẹ (trị liệu/thư giãn)</a>
              </li>
              <li>
                <a href="#">Chăm sóc sức khoẻ cá nhân (tại viện &amp; tại nhà)</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Hỗ trợ khách hàng</h3>
            <ul>
              <li>
                <Link href="/lien-he#faq">Câu hỏi thường gặp (FAQ)</Link>
              </li>
              <li>
                <Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
              </li>
              <li>
                <a href="#">Chính sách giải quyết khiếu nại</a>
              </li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <ul>
              <li>
                <strong>Hotline:</strong> 0984 891 968
              </li>
              <li>
                <strong>Địa chỉ:</strong> SB23 – 151 KĐT Vinhomes Ocean Park,
                Gia Lâm, Hà Nội
              </li>
              <li>
                <strong>Email:</strong> ytekynguyen@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright &copy; 2023 KỶ NGUYÊN HEALTH CARE. All rights reserved.</p>
          <div className="footer-links">
            <Link href="/chinh-sach-bao-mat">Chính sách bảo mật</Link>
            <a href="#">Chính sách cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
