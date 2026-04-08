"use client";

import { useState, useEffect, FormEvent, useRef } from "react";
import { useNotification } from "@/components/Notification";

interface JobPosition {
  _id: string;
  title: string;
}

export default function RecruitmentSection() {
  const [positions, setPositions] = useState<JobPosition[]>([]);
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    position: "",
    experience: "",
  });
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { showNotification } = useNotification();

  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const res = await fetch(
          "https://admin.kynguyenhealthcare.com/api/job-positions/active"
        );
        if (res.ok) {
          const data = await res.json();
          setPositions(data);
        }
      } catch {
        // Silently fail - positions will remain empty
      }
    };
    fetchPositions();
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        showNotification("File CV không được vượt quá 5MB.", "error");
        e.target.value = "";
        setCvFile(null);
        return;
      }
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        showNotification(
          "Chỉ chấp nhận file PDF, DOC hoặc DOCX.",
          "error"
        );
        e.target.value = "";
        setCvFile(null);
        return;
      }
      setCvFile(file);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!cvFile) {
      showNotification("Vui lòng tải lên CV của bạn.", "error");
      return;
    }

    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append("lastName", formData.lastName);
      submitData.append("firstName", formData.firstName);
      submitData.append("phone", formData.phone);
      submitData.append("email", formData.email);
      submitData.append("position", formData.position);
      submitData.append("experience", formData.experience);
      submitData.append("cv", cvFile);

      const res = await fetch(
        "https://admin.kynguyenhealthcare.com/api/job-applications",
        {
          method: "POST",
          body: submitData,
        }
      );

      if (res.ok) {
        showNotification(
          "Gửi hồ sơ ứng tuyển thành công! Chúng tôi sẽ liên hệ bạn sớm nhất.",
          "success"
        );
        setFormData({
          lastName: "",
          firstName: "",
          phone: "",
          email: "",
          position: "",
          experience: "",
        });
        setCvFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
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
    <>
      <h2 className="contact-title">Tuyển dụng</h2>
      <div className="recruitment-content">
        <p className="recruitment-intro">
          <span style={{ color: "#008a47", fontWeight: "bold" }}>
            KỶ NGUYÊN HEALTH CARE
          </span>{" "}
          đang tìm kiếm những ứng viên tâm huyết, có đạo đức nghề nghiệp và
          mong muốn đồng hành cùng các gia đình trong giai đoạn quan trọng
          nhất.
        </p>
        <div className="recruitment-form-wrapper">
          <form className="recruitment-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="recruit-lastName">Họ *</label>
              <input
                type="text"
                id="recruit-lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="recruit-firstName">Tên *</label>
              <input
                type="text"
                id="recruit-firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="recruit-phone">Số điện thoại *</label>
              <input
                type="tel"
                id="recruit-phone"
                name="phone"
                required
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="recruit-email">Email *</label>
              <input
                type="email"
                id="recruit-email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div className="form-group">
              <label htmlFor="position">Vị trí ứng tuyển *</label>
              <select
                id="position"
                name="position"
                required
                value={formData.position}
                onChange={(e) =>
                  setFormData({ ...formData, position: e.target.value })
                }
              >
                <option value="">Chọn vị trí</option>
                {positions.map((pos) => (
                  <option key={pos._id} value={pos._id}>
                    {pos.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="experience">Kinh nghiệm</label>
              <textarea
                id="experience"
                name="experience"
                rows={4}
                placeholder="Mô tả kinh nghiệm của bạn..."
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
              ></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="recruit-cv">Tải lên CV *</label>
              <input
                type="file"
                id="recruit-cv"
                name="cv"
                accept=".pdf,.doc,.docx"
                required
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <small className="file-hint">
                Chấp nhận file: PDF, DOC, DOCX (tối đa 5MB)
              </small>
            </div>
            <button
              type="submit"
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Đang gửi..." : "Gửi hồ sơ ứng tuyển"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
