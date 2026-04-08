'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [notification, setNotification] = useState<{
    type: 'success' | 'error';
    message: string;
    show: boolean;
  } | null>(null);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message, show: true });
    setTimeout(() => {
      setNotification(prev => prev ? { ...prev, show: false } : null);
      setTimeout(() => setNotification(null), 300);
    }, 5000);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      showNotification('error', 'Vui lòng nhập họ và tên.');
      return;
    }
    if (!formData.phone.trim()) {
      showNotification('error', 'Vui lòng nhập số điện thoại.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://admin.kynguyenhealthcare.com/api/consultation-bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
        }),
      });

      if (response.ok) {
        showNotification('success', 'Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ trong vòng 24h.');
        setFormData({ name: '', phone: '', email: '' });
      } else {
        showNotification('error', 'Có lỗi xảy ra. Vui lòng thử lại sau.');
      }
    } catch {
      showNotification('error', 'Không thể kết nối. Vui lòng thử lại sau.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {notification && (
        <div className={`notification notification-${notification.type}${notification.show ? ' show' : ''}`}>
          <div className="notification-content">
            <i className={notification.type === 'success' ? 'fas fa-check-circle' : 'fas fa-exclamation-circle'}></i>
            <span>{notification.message}</span>
          </div>
        </div>
      )}

      <section id="contact" className="contact-form">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Đặt lịch tư vấn</h2>
            <p className="section-subtitle">
              Điền thông tin liên hệ và đặt lịch<br />
              Chúng tôi sẽ liên hệ trong vòng 24h hoặc<br />
              Đặt lịch qua Zalo mini app
            </p>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Họ và Tên *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Số điện thoại *</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={e => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
              />
            </div>
            <button type="submit" className="btn-primary btn-submit" disabled={isSubmitting}>
              {isSubmitting ? 'Đang gửi...' : 'Nhận tư vấn miễn phí'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
