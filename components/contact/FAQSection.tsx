"use client";

import { useState } from "react";

interface FAQItemData {
  question: React.ReactNode;
  answer: React.ReactNode;
}

const faqData: FAQItemData[] = [
  {
    question: (
      <>
        <span style={{ color: "#008a47", fontWeight: "bold" }}>
          KỶ NGUYÊN HEALTH CARE
        </span>{" "}
        có những dịch vụ gì?
      </>
    ),
    answer: (
      <>
        <p>
          <span style={{ color: "#008a47", fontWeight: "bold" }}>
            KỶ NGUYÊN HEALTH CARE
          </span>{" "}
          phát triển hệ sinh thái chăm sóc theo hướng{" "}
          <strong>chuyên sâu và chuẩn hoá</strong>.
        </p>
        <p>
          Chúng tôi có hai mảng dịch vụ trọng tâm:{" "}
          <strong>chăm sóc Mẹ &amp; Bé sau sinh</strong> (tại bệnh viện và tại
          nhà) và <strong>chăm sóc sức khoẻ cá nhân</strong> cho người
          bệnh/người cao tuổi (tại viện và tại nhà). Dù là ca chăm mẹ &amp; bé
          hay ca chăm người bệnh,{" "}
          <span style={{ color: "#008a47", fontWeight: "bold" }}>
            Kỷ Nguyên
          </span>{" "}
          đều đặt ưu tiên vào{" "}
          <strong>
            an toàn – vệ sinh – quy trình – bàn giao rõ ràng
          </strong>
          , để gia đình luôn an tâm.
        </p>
      </>
    ),
  },
  {
    question: (
      <>
        Dịch vụ chăm sóc bệnh nhân của{" "}
        <span style={{ color: "#008a47", fontWeight: "bold" }}>
          KỶ NGUYÊN HEALTH CARE
        </span>{" "}
        có mặt ở những tỉnh/thành nào?
      </>
    ),
    answer: (
      <p>
        <span style={{ color: "#008a47", fontWeight: "bold" }}>
          KỶ NGUYÊN HEALTH CARE
        </span>{" "}
        hiện đang cung cấp dịch vụ chăm sóc Mẹ &amp; Bé và chăm sóc sức khoẻ
        cá nhân tại Hà Nội. Với các tỉnh/thành khác, vui lòng liên hệ hotline{" "}
        <strong>0984 891 968</strong> để được tư vấn khu vực phục vụ và phương
        án sắp xếp phù hợp.
      </p>
    ),
  },
  {
    question: (
      <>Mức phí của dịch vụ chăm sóc tại nhà và tại viện là bao nhiêu?</>
    ),
    answer: (
      <p>
        Dịch vụ chăm sóc tại nhà và tại bệnh viện của{" "}
        <span style={{ color: "#008a47", fontWeight: "bold" }}>
          KỶ NGUYÊN HEALTH CARE
        </span>{" "}
        có mức giá từ <strong>600.000 VNĐ</strong> (tuỳ theo loại dịch vụ, thời
        lượng ca ngày/đêm/24h và nhu cầu chăm sóc thực tế). Vui lòng liên hệ
        hotline <strong>0984 891 968</strong> để được tư vấn gói phù hợp và báo
        giá chi tiết.
      </p>
    ),
  },
  {
    question: <>Ai sẽ chăm sóc người nhà của tôi?</>,
    answer: (
      <>
        <p>
          <strong>Chăm sóc viên được đào tạo bài bản:</strong>{" "}
          <span style={{ color: "#008a47", fontWeight: "bold" }}>
            Kỷ Nguyên
          </span>{" "}
          sắp xếp chăm sóc viên phù hợp theo nhu cầu từng gia đình.
        </p>
        <p>
          Với Mẹ &amp; Bé, chăm sóc viên hỗ trợ mẹ hồi phục sau sinh và chăm
          bé an toàn (giữ vệ sinh, thay tã, tắm bé, hỗ trợ bú – vỗ ợ, theo
          dõi nhịp bú/ngủ, bàn giao cuối ca).
        </p>
        <p>
          Với <strong>chăm sóc sức khoẻ cá nhân</strong>, chăm sóc viên hỗ trợ
          sinh hoạt hằng ngày, dinh dưỡng, vận động và theo dõi cơ bản theo
          hướng dẫn của gia đình/nhân viên y tế.
        </p>
        <p>
          <strong>Điều dưỡng/nhân viên y tế (khi cần):</strong> Với các trường
          hợp cần theo dõi chuyên môn hoặc thực hiện theo chỉ định,{" "}
          <span style={{ color: "#008a47", fontWeight: "bold" }}>
            Kỷ Nguyên
          </span>{" "}
          có thể sắp xếp điều dưỡng/nhân viên y tế để hỗ trợ các hạng mục phù
          hợp (theo dõi dấu hiệu sinh tồn, chăm sóc vết thương, hướng dẫn chăm
          sóc và phối hợp cùng bác sĩ/điều dưỡng tại cơ sở y tế).
        </p>
      </>
    ),
  },
  {
    question: (
      <>
        Chăm sóc viên{" "}
        <span style={{ color: "#008a47", fontWeight: "bold" }}>
          KỶ NGUYÊN HEALTH CARE
        </span>{" "}
        khác gì với người nuôi bệnh tự do?
      </>
    ),
    answer: (
      <ul>
        <li>
          <strong>Được tuyển chọn &amp; đào tạo bài bản:</strong> nắm quy trình
          chăm sóc an toàn (Mẹ &amp; Bé hoặc chăm sóc sức khoẻ cá nhân), thao
          tác đúng – thái độ chuẩn.
        </li>
        <li>
          <strong>Chăm sóc theo kế hoạch cá nhân hoá:</strong> dựa trên nhu cầu
          thực tế, lịch ca (ngày/đêm/24h) và mục tiêu chăm sóc của gia đình.
        </li>
        <li>
          <strong>Có đội ngũ điều phối &amp; hỗ trợ chuyên môn:</strong> theo
          dõi chất lượng ca chăm, hỗ trợ xử lý tình huống và kết nối điều
          dưỡng/nhân viên y tế khi cần.
        </li>
        <li>
          <strong>An toàn – tin cậy:</strong> hồ sơ xác minh, lý lịch rõ ràng;
          quy trình bàn giao cuối ca minh bạch.
        </li>
        <li>
          <strong>Linh hoạt &amp; liên tục:</strong> dễ dàng đổi ca/điều chỉnh
          lịch theo tình trạng, hỗ trợ nhanh khi phát sinh.
        </li>
        <li>
          <strong>Chi phí rõ ràng:</strong> báo giá minh bạch theo gói/ca, hạn
          chế phát sinh, không &quot;phí ẩn&quot;.
        </li>
      </ul>
    ),
  },
  {
    question: (
      <>
        Tôi cần đặt lịch dịch vụ chăm sóc của{" "}
        <span style={{ color: "#008a47", fontWeight: "bold" }}>
          KỶ NGUYÊN HEALTH CARE
        </span>{" "}
        trước bao lâu?
      </>
    ),
    answer: (
      <>
        <p>
          <strong>Dịch vụ theo ca (ngày/đêm/24h):</strong> Quý khách vui lòng
          đặt lịch trước tối thiểu <strong>02 giờ</strong> so với thời gian mong
          muốn sử dụng dịch vụ.
        </p>
        <p>
          <strong>Dịch vụ theo giờ:</strong> Quý khách vui lòng đặt lịch trước
          tối thiểu <strong>01 ngày</strong> để{" "}
          <span style={{ color: "#008a47", fontWeight: "bold" }}>
            Kỷ Nguyên
          </span>{" "}
          sắp xếp chăm sóc viên phù hợp.
        </p>
        <p>
          Trường hợp cần gấp, vui lòng gọi <strong>0984 891 968</strong> để
          được hỗ trợ nhanh.
        </p>
      </>
    ),
  },
];

interface FAQSectionProps {
  onSwitchToConsultation: () => void;
}

export default function FAQSection({
  onSwitchToConsultation,
}: FAQSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <>
      <div className="faq-header">
        <h2 className="faq-title">Các câu hỏi thường gặp</h2>
        <button
          className="btn-consultation"
          onClick={onSwitchToConsultation}
        >
          Liên hệ tư vấn
        </button>
      </div>
      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item${activeIndex === index ? " active" : ""}`}
          >
            <div
              className="faq-question-wrapper"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="faq-question">{item.question}</h3>
              <span className="faq-icon">
                {activeIndex === index ? "\u2212" : "+"}
              </span>
            </div>
            <div className="faq-answer">{item.answer}</div>
          </div>
        ))}
      </div>
    </>
  );
}
