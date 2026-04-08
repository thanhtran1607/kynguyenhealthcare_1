export default function BenefitsSection() {
  const reasons = [
    {
      icon: 'fas fa-heart',
      title: 'Tận tâm',
      desc: 'Người bệnh của bạn là ưu tiên của chúng tôi – chăm sóc bằng sự tử tế, kiên nhẫn và tôn trọng.',
    },
    {
      icon: 'fas fa-graduation-cap',
      title: 'Chuyên nghiệp',
      desc: 'Chăm sóc viên/điều dưỡng được tuyển chọn và đào tạo bài bản theo quy trình chăm sóc an toàn, đúng tác phong.',
    },
    {
      icon: 'fas fa-star',
      title: 'Linh hoạt',
      desc: 'Sắp xếp ca theo nhu cầu: theo giờ/ca/ngày, tại nhà hoặc tại viện. Dễ dàng điều chỉnh khi tình trạng thay đổi.',
    },
    {
      icon: 'fas fa-sliders-h',
      title: 'Đảm bảo',
      desc: 'Đánh giá ban đầu – xây kế hoạch chăm sóc – theo dõi và tái đánh giá định kỳ để đảm bảo đúng mục tiêu chăm sóc.',
    },
    {
      icon: 'fas fa-check-circle',
      title: 'Minh bạch',
      desc: 'Báo giá rõ ràng theo gói/hạng mục, cam kết dịch vụ cụ thể, hạn chế tối đa phát sinh – không "phí ẩn".',
    },
    {
      icon: 'fas fa-shield-alt',
      title: 'An tâm',
      desc: 'Hồ sơ xác minh, lý lịch rõ ràng; quy trình bàn giao – ghi nhận công việc; có kênh hỗ trợ khi cần.',
    },
  ];

  return (
    <section className="reasons">
      <div className="container">
        <div className="reasons-wrapper">
          <div className="section-header reasons-header">
            <h2 className="section-title">
              6 lý do lựa chọn<br />
              <span style={{ color: '#008a47', fontWeight: 'bold' }}>
                KỶ NGUYÊN HEALTH CARE
              </span>
            </h2>
          </div>
          {reasons.map((r, i) => (
            <div className="reason-card" key={i}>
              <div className="reason-icon">
                <i className={r.icon}></i>
              </div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
