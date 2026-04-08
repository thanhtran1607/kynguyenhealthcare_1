import type { Metadata } from "next";
import Link from "next/link";
import TestimonialCard from "@/components/caregivers/TestimonialCard";

export const metadata: Metadata = {
  title: "Chăm sóc viên - KỶ NGUYÊN HEALTH CARE",
  description:
    "Chăm sóc viên Mẹ & Bé tại KỶ NGUYÊN HEALTH CARE - Đội ngũ chuyên nghiệp, tận tâm, được đào tạo bài bản.",
};

const KN_HIGHLIGHT = (
  <span style={{ color: "#008a47", fontWeight: "bold" }}>
    KỶ NGUYÊN HEALTH CARE
  </span>
);

export default function CaregiversPage() {
  return (
    <>
      {/* Caregivers Intro Section */}
      <section className="caregivers-intro">
        <div className="container">
          <h2 className="caregivers-intro-title">Chăm sóc viên là ai?</h2>
          <div className="caregivers-intro-content">
            <p>
              Nhiều gia đình vẫn quen gọi người hỗ trợ sau sinh là &ldquo;người
              chăm mẹ&rdquo; hay &ldquo;người chăm bé&rdquo;. Nhưng với{" "}
              {KN_HIGHLIGHT},{" "}
              <strong>chăm sóc viên Mẹ &amp; Bé</strong> là{" "}
              <strong>người đồng hành chuyên nghiệp</strong> trong giai đoạn
              nhạy cảm nhất của gia đình: giúp mẹ hồi phục an toàn, giúp bé
              được chăm đúng cách, và giúp người nhà bớt bối rối trong những
              ngày đầu. Đây không chỉ là một công việc, mà là{" "}
              <strong>sự tận tâm</strong> thể hiện qua từng thao tác nhỏ: sạch
              sẽ, nhẹ nhàng và tôn trọng.
            </p>
            <p>
              {KN_HIGHLIGHT} lựa chọn những chăm sóc viên có{" "}
              <strong>đạo đức nghề nghiệp</strong>,{" "}
              <strong>yêu trẻ, kiên nhẫn và kỷ luật</strong>. Các bạn được
              hướng dẫn <strong>quy trình chăm sóc Mẹ &amp; Bé</strong>: hỗ
              trợ mẹ sau sinh (vệ sinh – ăn uống – nghỉ ngơi – theo dõi), chăm
              bé sơ sinh (giữ ấm – thay tã – tắm bé – hỗ trợ bú, vỗ ợ), và
              phối hợp với gia đình một cách tinh tế để mỗi ca chăm sóc diễn ra
              êm ái, đúng việc. Mục tiêu là để mẹ được nghỉ, bé được chăm an
              toàn, còn gia đình thì thật sự an tâm.
            </p>
            <p>
              {KN_HIGHLIGHT} <strong>cam kết</strong> xây dựng{" "}
              <strong>môi trường làm việc nhân văn</strong>, tôn trọng và{" "}
              <strong>đào tạo liên tục</strong> để chăm sóc viên ngày càng vững
              nghề. Nếu bạn đang tìm một công việc ý nghĩa trong lĩnh vực chăm
              sóc Mẹ &amp; Bé, hãy đồng hành cùng chúng tôi để mỗi ngày đi làm
              là một ngày lan toả sự tử tế và nâng niu những khởi đầu mới của
              một gia đình.
            </p>
          </div>
        </div>
      </section>

      {/* Caregivers Testimonials Section */}
      <section className="caregivers-testimonials">
        <div className="container">
          <div className="testimonials-grid">
            {/* Testimonial Card 1 */}
            <TestimonialCard
              id="testimonial-1"
              imageSrc="https://raw.githubusercontent.com/thanhtran1607/kynguyenhealthcare_1/refs/heads/main/image/d0287b59-289f-4993-92aa-d5b91943ad15.jfif"
              imageAlt="CSV Nguyễn Thị Minh Anh"
              name="CSV Nguyễn Thị Minh Anh"
              previewText={
                <>
                  Có những giai đoạn tôi từng lo không biết mình có thể trụ vững
                  với cuộc sống và gia đình. Nhưng từ ngày trở thành Chăm sóc
                  viên Mẹ &amp; Bé tại{" "}
                  <span style={{ color: "#008a47", fontWeight: "bold" }}>
                    KỶ NGUYÊN HEALTH CARE
                  </span>
                  ...
                </>
              }
              fullText={
                <>
                  <br />
                  <p>
                    Có những giai đoạn tôi từng lo không biết mình có thể trụ
                    vững với cuộc sống và gia đình. Nhưng từ ngày trở thành Chăm
                    sóc viên Mẹ &amp; Bé tại{" "}
                    <span style={{ color: "#008a47", fontWeight: "bold" }}>
                      KỶ NGUYÊN HEALTH CARE
                    </span>
                    , tôi tìm thấy sự ổn định và một công việc thật sự ý nghĩa.
                  </p>
                  <p>
                    Mỗi ca chăm là một lần tôi được đồng hành cùng mẹ sau sinh
                    hồi phục nhẹ nhàng hơn và giúp bé được chăm an toàn – sạch
                    sẽ – đúng cách. Từ hỗ trợ mẹ nghỉ ngơi, ăn uống, vệ sinh,
                    đến chăm bé sơ sinh: thay tã, giữ ấm, tắm bé, hỗ trợ bú và
                    vỗ ợ... tôi luôn làm bằng sự tinh tế và kiên nhẫn.
                  </p>
                  <p>
                    Tôi thấy mình trưởng thành hơn mỗi ngày, vì được góp một
                    phần nhỏ để những ngày đầu làm mẹ của mỗi gia đình bớt vất
                    vả và nhiều an tâm hơn.
                  </p>
                </>
              }
            />

            {/* Testimonial Card 2 */}
            <TestimonialCard
              id="testimonial-2"
              imageSrc="https://raw.githubusercontent.com/thanhtran1607/kynguyenhealthcare_1/refs/heads/main/image/6ad03cb3-6d58-469f-b808-c0a5fa56caff.jfif"
              imageAlt="CSV Trần Thị Thuỳ Dung"
              name="CSV Trần Thị Thuỳ Dung"
              previewText={
                <>
                  Tôi luôn tin chăm sóc Mẹ &amp; Bé là công việc cần rất nhiều
                  tình yêu và trách nhiệm. Trước đây tôi mong tìm một công việc
                  ổn định, vừa có thu nhập...
                </>
              }
              fullText={
                <>
                  <p>
                    Tôi luôn tin chăm sóc Mẹ &amp; Bé là công việc cần rất nhiều
                    tình yêu và trách nhiệm. Trước đây tôi mong tìm một công
                    việc ổn định, vừa có thu nhập, vừa được sống đúng với điều
                    mình yêu: chăm sóc và lắng nghe.
                  </p>
                  <p>
                    May mắn là{" "}
                    <span style={{ color: "#008a47", fontWeight: "bold" }}>
                      KỶ NGUYÊN HEALTH CARE
                    </span>{" "}
                    cho tôi cả hai. Ở đây, tôi được đào tạo và làm việc theo quy
                    trình rõ ràng: giữ vệ sinh, đảm bảo an toàn, thao tác nhẹ
                    nhàng, theo dõi nhịp bú – ngủ của bé và hỗ trợ mẹ phục hồi
                    sau sinh.
                  </p>
                  <p>
                    Mỗi lần thấy mẹ bớt mệt, bé ngủ ngoan hơn và gia đình yên
                    tâm hơn, tôi càng tin rằng nghề mình chọn tuy giản dị nhưng
                    vô cùng đáng tự hào.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Caregivers Section */}
      <section id="caregivers" className="caregivers">
        <div className="container">
          <div className="caregivers-wrapper">
            <div className="caregivers-left">
              <div className="caregivers-header">
                <h2 className="caregivers-title">Chăm sóc viên</h2>
                <p className="caregivers-brand">
                  <span style={{ color: "#008a47", fontWeight: "bold" }}>
                    KỶ NGUYÊN HEALTH CARE
                  </span>
                </p>
              </div>
              <div className="caregivers-image-wrapper">
                <div className="caregivers-image">
                  <img
                    src="https://raw.githubusercontent.com/thanhtran1607/kynguyenhealthcare_1/refs/heads/main/image/d5d2d668-8913-4484-8f10-180e0b3ced24.jfif"
                    alt="Chăm sóc viên"
                  />
                </div>
              </div>
            </div>
            <div className="caregivers-content">
              <div className="caregivers-list">
                <div className="caregiver-list-item visible" data-index="0">
                  <i className="fas fa-check-circle"></i>
                  <p>
                    Hỗ trợ cho trẻ bú, bế trẻ, vỗ ợ hơi, ru ngủ và theo dõi
                    giấc ngủ.
                  </p>
                </div>
                <div className="caregiver-list-item visible" data-index="1">
                  <i className="fas fa-check-circle"></i>
                  <p>
                    Thực hiện vệ sinh cá nhân, thay tã, chăm sóc và trấn an trẻ
                    khi cần.
                  </p>
                </div>
                <div className="caregiver-list-item visible" data-index="2">
                  <i className="fas fa-check-circle"></i>
                  <p>
                    Theo dõi, phát hiện và báo kịp thời các dấu hiệu bất thường
                    của trẻ.
                  </p>
                </div>
                <div className="caregiver-list-item visible" data-index="3">
                  <i className="fas fa-check-circle"></i>
                  <p>
                    Hỗ trợ sản phụ trong sinh hoạt, đi lại, vệ sinh cá nhân và
                    nghỉ ngơi.
                  </p>
                </div>
                <div className="caregiver-list-item visible" data-index="4">
                  <i className="fas fa-check-circle"></i>
                  <p>
                    Nhắc uống thuốc, hỗ trợ ăn uống theo chỉ định chuyên môn.
                  </p>
                </div>
                <div className="caregiver-list-item visible" data-index="5">
                  <i className="fas fa-check-circle"></i>
                  <p>
                    Hướng dẫn tư thế cho trẻ bú đúng, hỗ trợ kỹ thuật bế trẻ an
                    toàn.
                  </p>
                </div>
                <div className="caregiver-list-item visible" data-index="6">
                  <i className="fas fa-check-circle"></i>
                  <p>
                    Hỗ trợ thư giãn và chăm sóc tuyến vú nhằm hỗ trợ tiết sữa.
                  </p>
                </div>
                <div className="caregiver-list-item visible" data-index="7">
                  <i className="fas fa-check-circle"></i>
                  <p>
                    Luôn có mặt hỗ trợ trong thời gian dịch vụ; báo ngay nhân
                    viên y tế khi có bất thường.
                  </p>
                </div>
              </div>
              <div className="caregivers-cta">
                <Link href="/lien-he?tab=recruitment" className="btn-caregiver">
                  Đăng ký tuyển dụng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
