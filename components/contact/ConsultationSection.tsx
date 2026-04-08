"use client";

import { useState, FormEvent } from "react";
import { useNotification } from "@/components/Notification";

export default function ConsultationSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showNotification } = useNotification();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://admin.kynguyenhealthcare.com/api/consultation-bookings",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        showNotification(
          "Đặt lịch tư vấn thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.",
          "success"
        );
        setFormData({ name: "", phone: "", email: "" });
      } else {
        showNotification(
          "Có lỗi xảy ra. Vui lòng thử lại sau.",
          "error"
        );
      }
    } catch {
      showNotification(
        "Có lỗi xảy ra. Vui lòng thử lại sau.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="consultation-wrapper">
      <div className="consultation-info">
        <div className="company-logo-section">
          <h2 className="company-name">
            <span style={{ color: "#008a47", fontWeight: "bold" }}>
              KỶ NGUYÊN HEALTH CARE
            </span>
          </h2>
          <p className="company-tagline">
            Kỷ luật tạo an toàn - Tinh tế tạo niềm tin
          </p>
        </div>
        <div className="contact-info-section">
          <div className="contact-info-item">
            <i className="fas fa-map-marker-alt"></i>
            <div className="contact-info-text">
              <strong>Địa chỉ</strong>
              <p>
                SB23 - 151 KĐT Vinmones Ocean Park
                <br />
                Gia Lâm - Hà Nội
              </p>
            </div>
          </div>
          <div className="contact-info-item">
            <i className="fas fa-phone"></i>
            <div className="contact-info-text">
              <strong>Liên hệ</strong>
              <p>Hotline: 02456780289</p>
              <p>Mail: ytekynguyen@gmail.com</p>
            </div>
          </div>
          <div className="social-media">
            <a href="#" className="social-icon zalo">
              <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
                zalo
              </span>
            </a>
            <a href="#" className="social-icon facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="social-icon instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.096069742!2d105.9121233154305!3d21.028693785998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a9b8b8b8b8b8%3A0x8b8b8b8b8b8b8b8b!2s151%20K%C4%90T%20Vinmones%20Ocean%20Park%2C%20Gia%20L%C3%A2m%2C%20H%C3%A0%20N%E1%BB%99i!5e0!3m2!1svi!2s!4v1234567890123!5m2!1svi!2s"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="consultation-form-section">
        <div className="consultation-form-header">
          <h2 className="consultation-form-title">Đặt lịch tư vấn</h2>
          <p className="consultation-form-subtitle">
            Điền thông tin liên hệ và đặt lịch.
          </p>
        </div>
        <form className="consultation-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="consult-name">Họ và Tên *</label>
            <input
              type="text"
              id="consult-name"
              name="name"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="consult-phone">Số điện thoại *</label>
            <input
              type="tel"
              id="consult-phone"
              name="phone"
              required
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="consult-email">Email</label>
            <input
              type="email"
              id="consult-email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn-submit" disabled={isSubmitting}>
            {isSubmitting ? "Đang gửi..." : "Nhận tư vấn miễn phí"}
          </button>
        </form>
      </div>
    </div>
  );
}
