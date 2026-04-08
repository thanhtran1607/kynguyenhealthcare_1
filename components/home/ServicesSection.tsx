'use client';

import { useState, useRef, useCallback } from 'react';

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string>('service1');
  const [activeSubTab, setActiveSubTab] = useState<Record<string, string>>({
    service1: 'day',
    service2: 'basic',
  });
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Drag detection for tabs
  const isDragging = useRef(false);
  const startX = useRef(0);

  const handleTabMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    isDragging.current = false;
    startX.current = 'touches' in e ? e.touches[0].clientX : e.clientX;
  };

  const handleTabMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
    const currentX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    if (Math.abs(currentX - startX.current) > 5) {
      isDragging.current = true;
    }
  };

  const handleMainTabClick = useCallback((tab: string) => {
    if (isDragging.current) return;
    setActiveService(tab);
  }, []);

  const handleSubTabClick = useCallback((service: string, subTab: string) => {
    if (isDragging.current) return;
    setActiveSubTab(prev => ({ ...prev, [service]: subTab }));
    // Reset expanded sections when switching sub-tabs
    setExpandedSections({});
  }, []);

  const toggleExpand = useCallback((target: string) => {
    setExpandedSections(prev => ({ ...prev, [target]: !prev[target] }));
  }, []);

  const mainTabs = [
    { id: 'service1', label: 'Chăm sóc sản phụ tại bệnh viện' },
    { id: 'service2', label: 'Chăm sóc sản phụ tại nhà' },
  ];

  const service1SubTabs = [
    { id: 'day', label: 'Gói ngày' },
    { id: 'night', label: 'Gói đêm' },
    { id: 'fulltime', label: 'Toàn thời gian' },
  ];

  const service2SubTabs = [
    { id: 'basic', label: 'Chăm sóc bé cơ bản' },
    { id: 'advanced', label: 'Chăm sóc bé chuyên sâu' },
    { id: 'recovery', label: 'Gói phục hồi trị liệu sau sinh cho mẹ' },
    { id: 'relax', label: 'Gói phục hồi thư giãn sau sinh cho mẹ' },
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <p className="section-description">
            <span style={{ color: '#008a47', fontWeight: 'bold' }}>
              Chăm sóc viên KỶ NGUYÊN HEALTH CARE
            </span>{' '}
            luôn kề cận, túc trực và hỗ trợ đúng lúc để mẹ yên tâm hồi phục, bé
            được chăm sóc an toàn – sạch sẽ – đúng phương pháp. Chúng tôi quan
            tâm không chỉ đến sức khoẻ thể chất mà cả tinh thần của mẹ sau sinh,
            giúp gia đình giảm bớt áp lực, có người đồng hành tin cậy trong
            những ngày đầu nhiều bỡ ngỡ tại viện hoặc khi đã về nhà.
          </p>
          <p className="section-description">
            <span style={{ color: '#008a47', fontWeight: 'bold' }}>
              Hãy để KỶ NGUYÊN HEALTH CARE
            </span>{' '}
            chăm sóc mẹ và bé của bạn như chính người nhà của chúng tôi.
          </p>
        </div>

        {/* Main Tabs */}
        <div
          className="services-tabs"
          onMouseDown={handleTabMouseDown}
          onMouseMove={handleTabMouseMove}
          onTouchStart={handleTabMouseDown}
          onTouchMove={handleTabMouseMove}
        >
          {mainTabs.map(tab => (
            <button
              key={tab.id}
              className={`service-tab${activeService === tab.id ? ' active' : ''}`}
              data-tab={tab.id}
              onClick={() => handleMainTabClick(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="services-content">
          {/* Service 1 - Chăm sóc sản phụ tại bệnh viện */}
          <div className={`service-content${activeService === 'service1' ? ' active' : ''}`} id="service1">
            <div className="service-content-wrapper">
              <div className="service-text">
                <div className="sub-tabs-container">
                  <div className="sub-tabs">
                    {service1SubTabs.map(tab => (
                      <button
                        key={tab.id}
                        className={`sub-tab${activeSubTab.service1 === tab.id ? ' active' : ''}`}
                        data-subtab={tab.id}
                        onClick={() => handleSubTabClick('service1', tab.id)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Day sub-content */}
                  <div className={`sub-content${activeSubTab.service1 === 'day' ? ' active' : ''}`} id="day">
                    <div className="service-summary" style={{ display: expandedSections['day-full'] ? 'none' : undefined }}>
                      <ul className="service-list">
                        <li>Thời gian dịch vụ: 07h đến 19h</li>
                        <li>Phù hợp với: Sản phụ sau sinh cần người hỗ trợ chăm sóc mẹ và trẻ ban ngày</li>
                        <li>Hỗ trợ bà mẹ cho trẻ bú (bú mẹ trực tiếp hoặc bú bình, ăn qua đổ thìa)</li>
                        <li>Bế trẻ, vỗ ợ hơi sau ăn, ru trẻ ngủ, theo dõi khi trẻ ngủ</li>
                        <li>Vệ sinh hàng ngày cho trẻ, bao gồm thay tã, vệ sinh cá nhân</li>
                        <li>Hỗ trợ bà mẹ đi lại, thay đổi tư thế, hỗ trợ trong sinh hoạt hằng ngày</li>
                        <li>Hỗ trợ massage vú, chườm ấm, vệ sinh vú kích thích sữa nhanh về</li>
                        <li>Quan sát các biểu hiện bất thường để kịp thời báo cho gia đình và nhân viên y tế</li>
                      </ul>
                      <button type="button" className="btn-expand" onClick={() => toggleExpand('day-full')}>
                        Xem thêm <i className="fas fa-chevron-down"></i>
                      </button>
                    </div>
                    <div className="service-full" id="day-full" style={{ display: expandedSections['day-full'] ? 'block' : 'none' }}>
                      <div className="service-info">
                        <p><strong>Thời gian dịch vụ:</strong> 07h đến 19h</p>
                        <p><strong>Phù hợp với:</strong> Sản phụ sau sinh cần người hỗ trợ chăm sóc mẹ và trẻ ban ngày.</p>
                      </div>
                      <div className="service-details">
                        <h4>Nội dung chăm sóc trẻ:</h4>
                        <ul className="service-list">
                          <li>Hỗ trợ bà mẹ cho trẻ bú (bú mẹ trực tiếp hoặc bú bình, ăn qua đổ thìa).</li>
                          <li>Bế trẻ, vỗ ợ hơi sau ăn.</li>
                          <li>Ru trẻ ngủ, theo dõi khi trẻ ngủ.</li>
                          <li>Vệ sinh hàng ngày cho trẻ, bao gồm thay tã, vệ sinh cá nhân.</li>
                          <li>Chăm sóc trẻ khi trẻ thức giấc.</li>
                          <li>Massage chân, tay cho trẻ.</li>
                          <li>Quan sát các biểu hiện bất thường của trẻ để kịp thời báo cho gia đình và nhân viên y tế.</li>
                          <li>Bế trẻ đi làm các dịch vụ: massage, lấy máu gót chân, đo thính lực, đo tim, siêu âm.</li>
                        </ul>
                      </div>
                      <div className="service-details">
                        <h4>Nội dung chăm sóc mẹ:</h4>
                        <ul className="service-list">
                          <li>Hỗ trợ bà mẹ đi lại, thay đổi tư thế, hỗ trợ trong sinh hoạt hằng ngày.</li>
                          <li>Hỗ trợ mẹ đi vệ sinh, thay bỉm mẹ (nếu cần).</li>
                          <li>Nhắc mẹ uống thuốc, hỗ trợ ăn uống đúng giờ theo chỉ định của bác sĩ.</li>
                          <li>Hỗ trợ bà mẹ tư thế cho trẻ bú, cách bú đúng.</li>
                          <li>Hướng dẫn bà mẹ cách bế trẻ.</li>
                          <li>Hỗ trợ gội đầu cho mẹ (nếu sức khỏe cho phép và bệnh viện đồng ý).</li>
                          <li>Hỗ trợ bà mẹ tắm khi sức khỏe cho phép và bệnh viện đồng ý.</li>
                          <li>Massage cổ, vai gáy, chân khi bà mẹ có nhu cầu.</li>
                          <li>Hỗ trợ massage vú, chườm ấm, vệ sinh vú kích thích sữa nhanh về.</li>
                          <li>Hỗ trợ chướm ấm bàng quang giúp nhanh đi tiểu.</li>
                          <li>Hỗ trợ xoa đáy tử cung giúp co hồi tử cung và tống sản dịch.</li>
                          <li>Quan sát tình trạng sức khỏe mẹ phát hiện các dấu hiệu bất thường để kịp thời báo người nhà hoặc nhân viên y tế.</li>
                          <li>Hỗ trợ đưa bà mẹ đi xông hơi sàn chậu, siêu âm.</li>
                        </ul>
                      </div>
                      <div className="service-scope">
                        <h4>Phạm vi và nguyên tắc dịch vụ:</h4>
                        <ul className="service-list">
                          <li>Chăm sóc được thực hiện trong khung giờ ca ban ngày đã đăng ký.</li>
                          <li>Chăm sóc viên luôn có mặt trong phòng trong suốt thời gian ca làm việc.</li>
                          <li>Dịch vụ tập trung hỗ trợ sinh hoạt và chăm sóc cơ bản cho mẹ và bé ban ngày</li>
                          <li>Không bao gồm trông đêm và các dịch vụ chăm sóc chuyên sâu.</li>
                        </ul>
                      </div>
                      <button type="button" className="btn-collapse" onClick={() => toggleExpand('day-full')}>
                        Thu gọn <i className="fas fa-chevron-up"></i>
                      </button>
                    </div>
                  </div>

                  {/* Night sub-content */}
                  <div className={`sub-content${activeSubTab.service1 === 'night' ? ' active' : ''}`} id="night">
                    <div className="service-summary" style={{ display: expandedSections['night-full'] ? 'none' : undefined }}>
                      <ul className="service-list">
                        <li>Thời gian dịch vụ: 19h đến 07h sáng hôm sau</li>
                        <li>Phù hợp với: Sản phụ cần được nghỉ ngơi trọn vẹn vào ban đêm, gia đình không có người trông bé ban đêm</li>
                        <li>Hỗ trợ bà mẹ cho trẻ bú (bú mẹ trực tiếp hoặc bú bình, ăn qua đổ thìa)</li>
                        <li>Bế trẻ, vỗ ợ hơi sau ăn, ru trẻ ngủ, theo dõi khi trẻ ngủ</li>
                        <li>Vệ sinh, thay tã cho trẻ, chăm sóc trẻ khi trẻ thức giấc</li>
                        <li>Hỗ trợ mẹ ngồi dậy, thay đổi tư thế khi đau mỏi</li>
                        <li>Hỗ trợ massage vú, chườm ấm, vệ sinh vú kích thích sữa nhanh về</li>
                        <li>Chăm sóc viên ở trong phòng suốt ca đêm, không rời vị trí</li>
                      </ul>
                      <button className="btn-expand" onClick={() => toggleExpand('night-full')}>
                        Xem thêm <i className="fas fa-chevron-down"></i>
                      </button>
                    </div>
                    <div className="service-full" id="night-full" style={{ display: expandedSections['night-full'] ? 'block' : 'none' }}>
                      <div className="service-info">
                        <p><strong>Thời gian dịch vụ:</strong> 19h đến 07h sáng hôm sau</p>
                        <p><strong>Phù hợp với:</strong></p>
                        <ul className="service-list">
                          <li>Sản phụ cần được nghỉ ngơi trọn vẹn vào ban đêm.</li>
                          <li>Gia đình không có người trông bé ban đêm.</li>
                        </ul>
                      </div>
                      <div className="service-details">
                        <h4>Nội dung hỗ trợ trông và chăm sóc bé ban đêm:</h4>
                        <ul className="service-list">
                          <li>Hỗ trợ bà mẹ cho trẻ bú (bú mẹ trực tiếp hoặc bú bình, ăn qua đổ thìa).</li>
                          <li>Bế trẻ, vỗ ợ hơi sau ăn.</li>
                          <li>Ru trẻ ngủ, theo dõi khi trẻ ngủ.</li>
                          <li>Vệ sinh, thay tã cho trẻ.</li>
                          <li>Chăm sóc trẻ khi trẻ thức giấc.</li>
                          <li>Quan sát các biểu hiện bất thường của trẻ để kịp thời báo cho gia đình và nhân viên y tế</li>
                          <li>Có mặt trong phòng suốt thời gian ca đêm để hỗ trợ mẹ và bé khi cần.</li>
                          <li>Trấn an bé để bé ngủ lại, giữ không gian yên tĩnh.</li>
                        </ul>
                      </div>
                      <div className="service-details">
                        <h4>Nội dung hỗ trợ mẹ ban đêm:</h4>
                        <ul className="service-list">
                          <li>Hỗ trợ mẹ ngồi dậy, thay đổi tư thế khi đau mỏi.</li>
                          <li>Hỗ trợ bà mẹ đi lại, thay đổi tư thế.</li>
                          <li>Hỗ trợ mẹ đi vệ sinh, thay bỉm mẹ (nếu cần).</li>
                          <li>Nhắc mẹ uống thuốc, hỗ trợ ăn uống đúng giờ theo chỉ định của bác sĩ.</li>
                          <li>Lấy nước uống, đồ dùng cá nhân cho mẹ trong đêm.</li>
                          <li>Hỗ trợ bà mẹ tư thế cho trẻ bú, cách bú đúng.</li>
                          <li>Massage cổ, vai gáy, chân khi bà mẹ có nhu cầu.</li>
                          <li>Hỗ trợ massage vú, chườm ấm, vệ sinh vú kích thích sữa nhanh về.</li>
                          <li>Hỗ trợ chướm ấm bàng quang giúp nhanh đi tiểu.</li>
                          <li>Quan sát các biểu hiện bất thường của trẻ để kịp thời báo cho gia đình và nhân viên y tế.</li>
                        </ul>
                      </div>
                      <div className="service-scope">
                        <h4>Nguyên tắc trông đêm:</h4>
                        <ul className="service-list">
                          <li>Chăm sóc viên ở trong phòng suốt ca đêm, không rời vị trí.</li>
                          <li>Có thể chợp mắt ngắn khi bé ngủ yên, nhưng không ngủ sâu.</li>
                          <li>Luôn sẵn sàng phản ứng ngay khi mẹ hoặc bé cần hỗ trợ.</li>
                        </ul>
                      </div>
                      <button className="btn-collapse" onClick={() => toggleExpand('night-full')}>
                        Thu gọn <i className="fas fa-chevron-up"></i>
                      </button>
                    </div>
                  </div>

                  {/* Fulltime sub-content */}
                  <div className={`sub-content${activeSubTab.service1 === 'fulltime' ? ' active' : ''}`} id="fulltime">
                    <div className="service-summary" style={{ display: expandedSections['fulltime-full'] ? 'none' : undefined }}>
                      <ul className="service-list">
                        <li>Thời gian dịch vụ: 24 giờ liên tục mỗi ngày, chăm sóc được chia theo ca</li>
                        <li>Phù hợp với: Sản phụ sinh thường, sinh mổ, sinh khó, phục hồi chậm, gia đình không có người nhà hỗ trợ thường xuyên</li>
                        <li>Chăm sóc bé 24h: Hỗ trợ cho bú, bế trẻ, vỗ ợ hơi, ru ngủ, vệ sinh, massage</li>
                        <li>Chăm sóc mẹ 24h: Hỗ trợ đi lại, thay đổi tư thế, vệ sinh, massage, kích thích sữa</li>
                        <li>Hỗ trợ sinh hoạt và suất ăn cho mẹ (áp dụng khi gia đình có nhu cầu)</li>
                        <li>Chăm sóc viên chuyên nghiệp, có mặt liên tục trong phòng</li>
                      </ul>
                      <button className="btn-expand" onClick={() => toggleExpand('fulltime-full')}>
                        Xem thêm <i className="fas fa-chevron-down"></i>
                      </button>
                    </div>
                    <div className="service-full" id="fulltime-full" style={{ display: expandedSections['fulltime-full'] ? 'block' : 'none' }}>
                      <div className="service-info">
                        <p><strong>Thời gian dịch vụ:</strong> 24 giờ liên tục mỗi ngày, chăm sóc được chia theo ca để đảm bảo sức khỏe chăm sóc viên và duy trì chất lượng dịch vụ ổn định.</p>
                        <p><strong>Phù hợp với:</strong></p>
                        <ul className="service-list">
                          <li>Sản phụ sinh thường, sinh mổ, sinh khó, phục hồi chậm.</li>
                          <li>Gia đình không có người nhà hỗ trợ thường xuyên.</li>
                        </ul>
                      </div>
                      <div className="service-details">
                        <h4>Chăm sóc bé (24h):</h4>
                        <p><strong>Ban ngày:</strong></p>
                        <ul className="service-list">
                          <li>Hỗ trợ bà mẹ cho trẻ bú (bú mẹ trực tiếp hoặc bú bình, ăn qua đổ thìa).</li>
                          <li>Bế trẻ, vỗ ợ hơi sau ăn.</li>
                          <li>Ru trẻ ngủ, theo dõi khi trẻ ngủ.</li>
                          <li>Vệ sinh hàng ngày cho trẻ, bao gồm thay tã, vệ sinh cá nhân.</li>
                          <li>Chăm sóc trẻ khi trẻ thức giấc.</li>
                          <li>Massage chân, tay cho trẻ.</li>
                          <li>Quan sát các biểu hiện bất thường của trẻ để kịp thời báo cho gia đình và nhân viên y tế.</li>
                          <li>Bế trẻ đi làm các dịch vụ: massage, lấy máu gót chân, đo thính lực, đo tim, siêu âm.</li>
                        </ul>
                        <p><strong>Ban đêm:</strong></p>
                        <ul className="service-list">
                          <li>Hỗ trợ bà mẹ cho trẻ bú (bú mẹ trực tiếp hoặc bú bình, ăn qua đổ thìa).</li>
                          <li>Bế trẻ, vỗ ợ hơi sau ăn.</li>
                          <li>Ru trẻ ngủ, theo dõi khi trẻ ngủ.</li>
                          <li>Vệ sinh, thay tã cho trẻ.</li>
                          <li>Chăm sóc trẻ khi trẻ thức giấc.</li>
                          <li>Quan sát các biểu hiện bất thường của trẻ để kịp thời báo cho gia đình và nhân viên y tế</li>
                          <li>Có mặt trong phòng suốt thời gian ca đêm để hỗ trợ mẹ và bé khi cần.</li>
                          <li>Trấn an bé để bé ngủ lại, giữ không gian yên tĩnh.</li>
                        </ul>
                      </div>
                      <div className="service-details">
                        <h4>Chăm sóc mẹ (24h):</h4>
                        <p><strong>Ban ngày:</strong></p>
                        <ul className="service-list">
                          <li>Hỗ trợ bà mẹ đi lại, thay đổi tư thế, hỗ trợ trong sinh hoạt hằng ngày.</li>
                          <li>Hỗ trợ mẹ đi vệ sinh, thay bỉm mẹ (nếu cần).</li>
                          <li>Nhắc mẹ uống thuốc, hỗ trợ ăn uống đúng giờ theo chỉ định của bác sĩ.</li>
                          <li>Hỗ trợ bà mẹ tư thế cho trẻ bú, cách bú đúng.</li>
                          <li>Hướng dẫn bà mẹ cách bế trẻ.</li>
                          <li>Hỗ trợ gội đầu cho mẹ (nếu sức khỏe cho phép và bệnh viện đồng ý).</li>
                          <li>Hỗ trợ bà mẹ tắm khi sức khỏe cho phép và bệnh viện đồng ý.</li>
                          <li>Massage cổ, vai gáy, chân khi bà mẹ có nhu cầu.</li>
                          <li>Hỗ trợ massage vú, chườm ấm, vệ sinh vú kích thích sữa nhanh về.</li>
                          <li>Hỗ trợ chướm ấm bàng quang giúp nhanh đi tiểu.</li>
                          <li>Hỗ trợ xoa đáy tử cung giúp co hồi tử cung và tống sản dịch.</li>
                          <li>Quan sát tình trạng sức khỏe mẹ phát hiện các dấu hiệu bất thường để kịp thời báo người nhà hoặc nhân viên y tế.</li>
                          <li>Hỗ trợ đưa bà mẹ đi xông hơi sàn chậu, siêu âm.</li>
                        </ul>
                        <p><strong>Ban đêm:</strong></p>
                        <ul className="service-list">
                          <li>Hỗ trợ mẹ ngồi dậy, thay đổi tư thế khi đau mỏi.</li>
                          <li>Hỗ trợ bà mẹ đi lại, thay đổi tư thế.</li>
                          <li>Hỗ trợ mẹ đi vệ sinh, thay bỉm mẹ (nếu cần).</li>
                          <li>Nhắc mẹ uống thuốc, hỗ trợ ăn uống đúng giờ theo chỉ định của bác sĩ.</li>
                          <li>Lấy nước uống, đồ dùng cá nhân cho mẹ trong đêm.</li>
                          <li>Hỗ trợ bà mẹ tư thế cho trẻ bú, cách bú đúng.</li>
                          <li>Massage cổ, vai gáy, chân khi bà mẹ có nhu cầu.</li>
                          <li>Hỗ trợ massage vú, chườm ấm, vệ sinh vú kích thích sữa nhanh về.</li>
                          <li>Hỗ trợ chướm ấm bàng quang giúp nhanh đi tiểu.</li>
                          <li>Quan sát các biểu hiện bất thường của trẻ để kịp thời báo cho gia đình và nhân viên y tế.</li>
                        </ul>
                      </div>
                      <div className="service-details">
                        <h4>Hỗ trợ sinh hoạt và suất ăn cho mẹ (áp dụng khi gia đình có nhu cầu):</h4>
                        <ul className="service-list">
                          <li>Bao gồm 3 bữa ăn chính/ngày cho mẹ, phù hợp với sản phụ sau sinh.</li>
                          <li>Hỗ trợ sắp xếp, nhắc giờ ăn để đảm bảo mẹ ăn uống đầy đủ.</li>
                          <li>Giữ không gian phòng gọn gàng, sạch sẽ ở mức cơ bản trong quá trình chăm sóc.</li>
                        </ul>
                      </div>
                      <button className="btn-collapse" onClick={() => toggleExpand('fulltime-full')}>
                        Thu gọn <i className="fas fa-chevron-up"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2 - Chăm sóc sản phụ tại nhà */}
          <div className={`service-content${activeService === 'service2' ? ' active' : ''}`} id="service2">
            <div className="service-content-wrapper">
              <div className="service-text">
                <div className="sub-tabs-container">
                  <div className="sub-tabs">
                    {service2SubTabs.map(tab => (
                      <button
                        key={tab.id}
                        className={`sub-tab${activeSubTab.service2 === tab.id ? ' active' : ''}`}
                        data-subtab={tab.id}
                        onClick={() => handleSubTabClick('service2', tab.id)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Basic sub-content */}
                  <div className={`sub-content${activeSubTab.service2 === 'basic' ? ' active' : ''}`} id="basic">
                    <div className="service-summary" style={{ display: expandedSections['basic-full'] ? 'none' : undefined }}>
                      <ul className="service-list">
                        <li>Thời gian dịch vụ: 40-50 phút/buổi</li>
                        <li>Phù hợp với: Chăm sóc trẻ sơ sinh cơ bản đạt chuẩn y khoa</li>
                        <li>Đánh giá tình trạng sức khỏe của bé trước khi chăm sóc</li>
                        <li>Tắm bé chuẩn quy trình đảm bảo giữ ấm, tránh sặc nước, an toàn</li>
                        <li>Vệ sinh mắt, mũi, tai ngoài và rơ lưỡi bằng nước muối sinh lý</li>
                        <li>Sát khuẩn và chăm sóc rốn bằng dung dịch vô khuẩn</li>
                        <li>Hướng dẫn gia đình cách bế bé, chăm sóc và vệ sinh bé tại nhà</li>
                      </ul>
                      <button className="btn-expand" onClick={() => toggleExpand('basic-full')}>
                        Xem thêm <i className="fas fa-chevron-down"></i>
                      </button>
                    </div>
                    <div className="service-full" id="basic-full" style={{ display: expandedSections['basic-full'] ? 'block' : 'none' }}>
                      <div className="service-info">
                        <p><strong>Thời gian dịch vụ:</strong> 40-50 phút/buổi</p>
                        <p><strong>Phù hợp với:</strong> Chăm sóc trẻ sơ sinh cơ bản đạt chuẩn y khoa</p>
                      </div>
                      <div className="service-details">
                        <h4>Nội dung gói dịch vụ:</h4>
                        <ul className="service-list">
                          <li>Đánh giá tình trạng sức khỏe của bé trước khi chăm sóc (đo thân nhiệt, theo dõi nhịp thở, đánh giá phản xạ...)</li>
                          <li>Tắm bé chuẩn quy trình đảm bảo giữ ấm, tránh sặc nước, an toàn.</li>
                          <li>Vệ sinh mắt, mũi, tai ngoài và rơ lưỡi bằng nước muối sinh lý.</li>
                          <li>Sát khuẩn và chăm sóc rốn bằng dung dịch vô khuẩn.</li>
                          <li>Vệ sinh bộ phận sinh dục đúng kỹ thuật theo giới tính.</li>
                          <li>Trò chuyện, tương tác nhẹ nhàng giúp kích thích giác quan cho bé.</li>
                          <li>Chiếu đèn hồng ngoại giúp giữ ấm, giảm vàng da, bổ xung vitamin D3 chống còi xương.</li>
                          <li>Thoa tinh dầu giữ ấm hoặc kem chống hăm trước khi đóng bỉm.</li>
                          <li>Hướng dẫn gia đình cách bế bé, chăm sóc và vệ sinh bé tại nhà.</li>
                          <li>Hướng dẫn người nhà cách phát hiện các dấu hiệu bất thường.</li>
                        </ul>
                      </div>
                      <div className="service-scope">
                        <h4>Phạm vi và nguyên tắc gói dịch vụ:</h4>
                        <ul className="service-list">
                          <li>Dịch vụ thực hiện tại nhà theo lịch hẹn.</li>
                          <li>Chăm sóc viên có chuyên môn điều dưỡng/hộ sinh.</li>
                          <li>Thao tác nhẹ nhàng, an toàn, phù hợp thể trạng từng bé.</li>
                          <li>Không thay thế chẩn đoán và điều trị của bác sĩ.</li>
                        </ul>
                      </div>
                      <button className="btn-collapse" onClick={() => toggleExpand('basic-full')}>
                        Thu gọn <i className="fas fa-chevron-up"></i>
                      </button>
                    </div>
                  </div>

                  {/* Advanced sub-content */}
                  <div className={`sub-content${activeSubTab.service2 === 'advanced' ? ' active' : ''}`} id="advanced">
                    <div className="service-summary" style={{ display: expandedSections['advanced-full'] ? 'none' : undefined }}>
                      <ul className="service-list">
                        <li>Thời gian dịch vụ: 60-70 phút/buổi</li>
                        <li>Phù hợp với: Chăm sóc trẻ sơ sinh cơ bản đạt chuẩn y khoa, tăng cường miễn dịch, kích thích phát triển hệ thần kinh sớm</li>
                        <li>Đánh giá tình trạng sức khỏe của bé trước khi chăm sóc</li>
                        <li>Tắm bé chuẩn quy trình đảm bảo giữ ấm, tránh sặc nước, an toàn</li>
                        <li>Massage nhẹ nhàng giúp bé thư giãn, kích thích đào thải phân su</li>
                        <li>Trẻ nghe nhạc trong khi tắm, khi massage kích thích thính giác</li>
                        <li>Giúp bà mẹ chỉnh tư thế trẻ bú đúng đảm bảo trẻ phát triển khung hàm</li>
                      </ul>
                      <button className="btn-expand" onClick={() => toggleExpand('advanced-full')}>
                        Xem thêm <i className="fas fa-chevron-down"></i>
                      </button>
                    </div>
                    <div className="service-full" id="advanced-full" style={{ display: expandedSections['advanced-full'] ? 'block' : 'none' }}>
                      <div className="service-info">
                        <p><strong>Thời gian dịch vụ:</strong> 60-70 phút/buổi</p>
                        <p><strong>Phù hợp với:</strong> Chăm sóc trẻ sơ sinh cơ bản đạt chuẩn y khoa, tăng cường miễn dịch, kích thích phát triển hệ thần kinh sớm tại nhà, chống còi xương, giảm vàng da, kích thích hệ tiêu hóa.</p>
                      </div>
                      <div className="service-details">
                        <h4>Nội dung gói dịch vụ:</h4>
                        <ul className="service-list">
                          <li>Đánh giá tình trạng sức khỏe của bé trước khi chăm sóc (đo thân nhiệt, theo dõi nhịp thở, đánh giá phản xạ...)</li>
                          <li>Tắm bé chuẩn quy trình đảm bảo giữ ấm, tránh sặc nước, an toàn.</li>
                          <li>Vệ sinh mắt, mũi, tai ngoài và rơ lưỡi bằng nước muối sinh lý.</li>
                          <li>Sát khuẩn và chăm sóc rốn bằng dung dịch vô khuẩn.</li>
                          <li>Vệ sinh bộ phận sinh dục đúng kỹ thuật theo giới tính.</li>
                          <li>Trò chuyện, tương tác nhẹ nhàng giúp kích thích giác quan cho bé.</li>
                          <li>Chiếu đèn hồng ngoại giúp giữ ấm, giảm vàng da, bổ xung vitamin D3 chống còi xương.</li>
                          <li>Thoa tinh dầu giữ ấm hoặc kem chống hăm trước khi đóng bỉm.</li>
                          <li>Hướng dẫn gia đình cách bế bé, chăm sóc và vệ sinh bé tại nhà.</li>
                          <li>Hướng dẫn người nhà cách phát hiện các dấu hiệu bất thường.</li>
                          <li>Massage nhẹ nhàng giúp bé thư giãn, kích thích đào thải phân su, kích thích các giác quan, cơ quan vận động.</li>
                          <li>Trẻ nghe nhạc trong khi tắm, khi massage kích thích thính giác, giúp trẻ thơ giãn ngủ ngon.</li>
                          <li>Giúp bà mẹ chỉnh tư thế trẻ bú đúng đảm bảo trẻ phát triển khung hàm, tăng số lượng sữa, giảm các bệnh lý về vú của mẹ.</li>
                        </ul>
                      </div>
                      <div className="service-scope">
                        <h4>Phạm vi và nguyên tắc gói dịch vụ:</h4>
                        <ul className="service-list">
                          <li>Dịch vụ thực hiện tại nhà theo lịch hẹn.</li>
                          <li>Chăm sóc viên có chuyên môn điều dưỡng/hộ sinh.</li>
                          <li>Thao tác nhẹ nhàng, an toàn, phù hợp thể trạng từng bé.</li>
                          <li>Không thay thế chẩn đoán và điều trị của bác sĩ.</li>
                        </ul>
                      </div>
                      <button className="btn-collapse" onClick={() => toggleExpand('advanced-full')}>
                        Thu gọn <i className="fas fa-chevron-up"></i>
                      </button>
                    </div>
                  </div>

                  {/* Recovery sub-content */}
                  <div className={`sub-content${activeSubTab.service2 === 'recovery' ? ' active' : ''}`} id="recovery">
                    <div className="service-summary" style={{ display: expandedSections['recovery-full'] ? 'none' : undefined }}>
                      <ul className="service-list">
                        <li>Thời gian dịch vụ: 75-90 phút</li>
                        <li>Liệu trình khuyến nghị: 5-7-10 buổi</li>
                        <li>Phù hợp với: Bà mẹ sinh thường, sinh mổ, phục hồi chậm sau sinh, đau vết mổ, đau vết khâu tầng sinh môn</li>
                        <li>Đánh giá tình trạng sức khỏe của mẹ sau sinh</li>
                        <li>Chăm sóc vết mổ hoặc vết khâu tầng sinh môn</li>
                        <li>Massage giúp tống sản dịch, thúc đẩy co hồi tử cung</li>
                        <li>Thông tắc tia sữa, giảm đau tức ngực bằng các phương pháp khoa học</li>
                      </ul>
                      <button className="btn-expand" onClick={() => toggleExpand('recovery-full')}>
                        Xem thêm <i className="fas fa-chevron-down"></i>
                      </button>
                    </div>
                    <div className="service-full" id="recovery-full" style={{ display: expandedSections['recovery-full'] ? 'block' : 'none' }}>
                      <div className="service-info">
                        <p><strong>Thời gian dịch vụ:</strong> 75-90 phút</p>
                        <p><strong>Liệu trình khuyến nghị:</strong> 5-7-10 buổi</p>
                        <p><strong>Phù hợp với:</strong> Bà mẹ sinh thường, sinh mổ, phục hồi chậm sau sinh, đau vết mổ, đau vết khâu tầng sinh môn, bế sản dịch, bí tiểu, sữa về chậm, căng tức ngực, đau mỏi cổ -- vai -- gáy -- thắt lưng, mệt mỏi sau sinh...</p>
                      </div>
                      <div className="service-details">
                        <h4>Nội dung gói dịch vụ:</h4>
                        <ul className="service-list">
                          <li>Đánh giá tình trạng sức khỏe của mẹ sau sinh.</li>
                          <li>Chăm sóc vết mổ hoặc vết khâu tầng sinh môn.</li>
                          <li>Massage giúp tống sản dịch, thúc đẩy co hồi tử cung.</li>
                          <li>Hỗ trợ giảm bí tiểu, tiểu khó sau sinh.</li>
                          <li>Thông tắc tia sữa, giảm đau tức ngực bằng các phương pháp khoa học hiện đại.</li>
                          <li>Hướng dẫn tư thế cho bé bú đúng, hạn chế tổn thương đầu ti.</li>
                          <li>Massage, chiếu đèn vùng cổ -- vai -- gáy giảm đau mỏi, tăng cường tuần hoàn, tránh loãng xương.</li>
                          <li>Massage chân, ngâm chân thảo dược giúp giảm phù nề, giảm tắc mạch, tăng tuần hoàn máu.</li>
                          <li>Tư vấn cách chăm sóc, phục hồi sức khỏe sau sinh tại nhà.</li>
                          <li>Hướng dẫn người nhà cách phát hiện các dấu hiệu bất thường.</li>
                        </ul>
                      </div>
                      <div className="service-scope">
                        <h4>Phạm vi và nguyên tắc gói dịch vụ:</h4>
                        <ul className="service-list">
                          <li>Dịch vụ thực hiện tại nhà theo lịch hẹn.</li>
                          <li>Chăm sóc viên có chuyên môn điều dưỡng/hộ sinh.</li>
                          <li>Thao tác nhẹ nhàng, an toàn, phù hợp thể trạng từng bé.</li>
                          <li>Không thay thế chẩn đoán và điều trị của bác sĩ.</li>
                        </ul>
                      </div>
                      <button className="btn-collapse" onClick={() => toggleExpand('recovery-full')}>
                        Thu gọn <i className="fas fa-chevron-up"></i>
                      </button>
                    </div>
                  </div>

                  {/* Relax sub-content */}
                  <div className={`sub-content${activeSubTab.service2 === 'relax' ? ' active' : ''}`} id="relax">
                    <div className="service-summary" style={{ display: expandedSections['relax-full'] ? 'none' : undefined }}>
                      <ul className="service-list">
                        <li>Thời lượng gói dịch vụ: 90-120 phút</li>
                        <li>Phù hợp với: Bà mẹ sinh thường, sinh mổ, phục hồi chậm sau sinh, mẹ stress, khó ngủ, phục hồi da giảm nám</li>
                        <li>Đánh giá tình trạng sức khỏe của mẹ sau sinh</li>
                        <li>Massage giúp tống sản dịch, thúc đẩy co hồi tử cung</li>
                        <li>Kỹ thuật massage chậm, áp lực đều giúp cơ thể thư giãn sâu</li>
                        <li>Massage và chăm sóc da mặt giúp giảm sạm nám, phục hồi da</li>
                        <li>Tạo không gian thư giãn giúp mẹ nghỉ ngơi trọn vẹn</li>
                      </ul>
                      <button className="btn-expand" onClick={() => toggleExpand('relax-full')}>
                        Xem thêm <i className="fas fa-chevron-down"></i>
                      </button>
                    </div>
                    <div className="service-full" id="relax-full" style={{ display: expandedSections['relax-full'] ? 'block' : 'none' }}>
                      <div className="service-info">
                        <p><strong>Thời lượng gói dịch vụ:</strong> 90-120 phút</p>
                        <p><strong>Phù hợp với:</strong> Bà mẹ sinh thường, sinh mổ, phục hồi chậm sau sinh, đau vết mổ, đau vết khâu tầng sinh môn, bế sản dịch, bí tiểu, sữa về chậm, căng tức ngực, đau mỏi cổ -- vai -- gáy -- thắt lưng, mệt mỏi sau sinh... mẹ stress, khó ngủ, ngủ không sâu, phục hồi da giảm nám, thư giãn giảm stress, tái tạo sức khỏe.</p>
                      </div>
                      <div className="service-details">
                        <h4>Nội dung gói dịch vụ:</h4>
                        <ul className="service-list">
                          <li>Đánh giá tình trạng sức khỏe của mẹ sau sinh.</li>
                          <li>Chăm sóc vết mổ hoặc vết khâu tầng sinh môn.</li>
                          <li>Massage giúp tống sản dịch, thúc đẩy co hồi tử cung.</li>
                          <li>Hỗ trợ giảm bí tiểu, tiểu khó sau sinh.</li>
                          <li>Thông tắc tia sữa, giảm đau tức ngực bằng các phương pháp khoa học hiện đại.</li>
                          <li>Hướng dẫn tư thế cho bé bú đúng, hạn chế tổn thương đầu ti.</li>
                          <li>Massage, chiếu đèn vùng cổ -- vai -- gáy giảm đau mỏi, tăng cường tuần hoàn, tránh loãng xương.</li>
                          <li>Massage chân, ngâm chân thảo dược giúp giảm phù nề, giảm tắc mạch, tăng tuần hoàn máu.</li>
                          <li>Tư vấn cách chăm sóc, phục hồi sức khỏe sau sinh tại nhà.</li>
                          <li>Hướng dẫn người nhà cách phát hiện các dấu hiệu bất thường.</li>
                          <li>Massage tay và chân bằng dầu tự nhiên giảm phù nề, đau mỏi, kích thích cơ xương khớp.</li>
                          <li>Massage lưng, hông giúp giảm đau do nằm, ngồi lâu, căng cơ.</li>
                          <li>Kỹ thuật massage chậm, áp lực đều giúp cơ thể thư giãn sâu, hỗ trợ hệ thần kinh ổn định.</li>
                          <li>Ngâm chân thảo dược tại giường giúp tăng tuần hoàn, làm ấm cơ thể và dễ vào giấc ngủ.</li>
                          <li>Massage và chăm sóc da mặt giúp giảm sạm nám, phục hồi da.</li>
                          <li>Tạo không gian thư giãn giúp mẹ nghỉ ngơi trọn vẹn trong suốt buổi chăm sóc.</li>
                          <li>Tư vấn mẹ cách thư giãn, nghỉ ngơi và hồi phục năng lượng tại nhà giữa các buổi chăm sóc.</li>
                        </ul>
                      </div>
                      <button className="btn-collapse" onClick={() => toggleExpand('relax-full')}>
                        Thu gọn <i className="fas fa-chevron-up"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
