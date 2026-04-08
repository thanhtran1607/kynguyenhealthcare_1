import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đào tạo - KỶ NGUYÊN HEALTH CARE",
  description:
    "Chương trình đào tạo chăm sóc mẹ và bé sau sinh của KỶ NGUYÊN HEALTH CARE",
};

export default function TeachingPage() {
  return (
    <>
      {/* Teaching Intro Section */}
      <section className="teaching-intro" style={{ paddingTop: "8rem" }}>
        <div className="container">
          <div className="teaching-intro-wrapper">
            <div className="teaching-intro-content">
              <h2 className="teaching-intro-title">
                Đào tạo – Điểm nhấn của sự khác biệt
              </h2>
              <p>
                Nhiều năm kinh nghiệm trong lĩnh vực Y tế, đội ngũ{" "}
                <span style={{ color: "#008a47", fontWeight: "bold" }}>
                  KỶ NGUYÊN HEALTH CARE
                </span>{" "}
                hiểu được tầm quan trọng của việc chăm sóc đúng cách và mong
                mỏi của những gia đình cần tìm kiếm người chăm sóc có tâm, đáng
                tin cậy.
              </p>
              <p>
                <span style={{ color: "#008a47", fontWeight: "bold" }}>
                  KỶ NGUYÊN HEALTH CARE
                </span>{" "}
                đã xây dựng chương trình đào tạo riêng, được sự tư vấn chuyên
                môn và công nhận của nhiều Bệnh viện lớn, nội dung đào tạo là
                lớp chăm sóc mẹ và bé sau sinh.
              </p>
            </div>
            <div className="teaching-intro-images">
              <div className="teaching-image-item">
                <img
                  src="https://raw.githubusercontent.com/thanhtran1607/kynguyenhealthcare_1/refs/heads/main/image/f03f7be64174ce2a9765.jpg"
                  alt="Đào tạo KỶ NGUYÊN HEALTH CARE"
                />
              </div>
              <div className="teaching-image-item">
                <img
                  src="https://raw.githubusercontent.com/thanhtran1607/kynguyenhealthcare_1/refs/heads/main/image/c9d340067a94f5caac85.jpg"
                  alt="Lớp học đào tạo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Teaching Section */}
      <section id="teaching" className="teaching">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">LỚP CHĂM SÓC MẸ VÀ BÉ SAU SINH</h2>
          </div>
          <div className="teaching-content">
            {/* Phần lý thuyết */}
            <div className="teaching-section">
              <div className="teaching-cards">
                <div className="teaching-card">
                  <div className="teaching-card-content">
                    <ul className="teaching-content-list">
                      <li>Tổng quan quá trình mang thai</li>
                      <li>
                        Thay đổi giải phẫu sinh lý của phụ nữ có thai
                      </li>
                      <li>Chăm sóc bà mẹ trong thời kỳ mang thai</li>
                      <li>
                        Chăm sóc bà mẹ trong thời kỳ mang thai (tiếp)
                      </li>
                      <li>
                        Những thay đổi giải phẫu sinh lý bà mẹ sau đẻ
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="teaching-card">
                  <div className="teaching-card-content">
                    <ul className="teaching-content-list">
                      <li>Nuôi con bằng sữa mẹ</li>
                      <li>Chăm sóc vú cho bà mẹ sau sinh</li>
                      <li>
                        Chăm sóc bà mẹ và trẻ sơ sinh sau đẻ tại Bệnh viện
                      </li>
                      <li>Chăm sóc bà mẹ sau đẻ tại nhà</li>
                      <li>
                        Đặc điểm trẻ sơ sinh đủ tháng, non tháng
                      </li>
                      <li>Đặc điểm da của trẻ sơ sinh</li>
                    </ul>
                  </div>
                </div>
                <div className="teaching-card">
                  <div className="teaching-card-content">
                    <ul className="teaching-content-list">
                      <li>Chăm sóc trẻ sơ sinh sau đẻ tại nhà</li>
                      <li>Chăm sóc da cho trẻ sơ sinh</li>
                      <li>Chăm sóc rốn cho trẻ sơ sinh</li>
                      <li>Kỹ thuật tắm cho trẻ sơ sinh</li>
                      <li>Massage cho bé</li>
                      <li>Massage cho bà mẹ sau sinh</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
