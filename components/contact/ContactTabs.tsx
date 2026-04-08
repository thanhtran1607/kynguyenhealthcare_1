"use client";

import { useState, useEffect, useCallback } from "react";
import FAQSection from "./FAQSection";
import ConsultationSection from "./ConsultationSection";
import RecruitmentSection from "./RecruitmentSection";

type TabType = "faq" | "consultation" | "recruitment";

const tabs: { id: TabType; label: string }[] = [
  { id: "faq", label: "FAQ" },
  { id: "consultation", label: "Tư vấn dịch vụ" },
  { id: "recruitment", label: "Tuyển dụng" },
];

export default function ContactTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("faq");

  useEffect(() => {
    // Check URL hash first
    const hash = window.location.hash.replace("#", "") as TabType;
    if (hash && ["faq", "consultation", "recruitment"].includes(hash)) {
      setActiveTab(hash);
      return;
    }

    // Check query params
    const params = new URLSearchParams(window.location.search);
    const tabParam = params.get("tab") as TabType;
    if (tabParam && ["faq", "consultation", "recruitment"].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, []);

  const switchTab = useCallback((tab: TabType) => {
    setActiveTab(tab);
    window.history.replaceState(null, "", `#${tab}`);
  }, []);

  const handleSwitchToConsultation = useCallback(() => {
    switchTab("consultation");
  }, [switchTab]);

  return (
    <section className="contact-section">
      <div className="contact-tabs-wrapper">
        <div className="contact-tabs-overlay"></div>
        <div
          className="elementor-shape elementor-shape-top"
          aria-hidden="true"
          data-negative="true"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 20"
            preserveAspectRatio="none"
          >
            <path
              className="elementor-shape-fill-2"
              d="M790.5,19c-59.3-1-116.8-3.5-192.6-8c-29.6-2.5-76.9-5.5-100.5-6.5c-23.6-1-52.6-1.5-75.5-1
            c-10.2,0.2-22.6,0.2-50.1,1.5c-27.2,1-58.2,2.5-79.4,4c-41.3,2.5-94.9,3.5-134,3.8C72,8,0,3,0,3V20h1000V12
            c0,0-51.5,3.5-106.2,4.5C839.5,18.5,814.1,18.8,790.5,19z"
            ></path>
          </svg>
        </div>
        <div className="container">
          <div className="contact-tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`contact-tab${activeTab === tab.id ? " active" : ""}`}
                data-contact-tab={tab.id}
                onClick={() => switchTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="contact-content">
          {/* FAQ Tab */}
          <div
            className={`contact-tab-content${activeTab === "faq" ? " active" : ""}`}
            id="faq"
          >
            <FAQSection onSwitchToConsultation={handleSwitchToConsultation} />
          </div>

          {/* Consultation Tab */}
          <div
            className={`contact-tab-content${activeTab === "consultation" ? " active" : ""}`}
            id="consultation"
          >
            <ConsultationSection />
          </div>

          {/* Recruitment Tab */}
          <div
            className={`contact-tab-content${activeTab === "recruitment" ? " active" : ""}`}
            id="recruitment"
          >
            <RecruitmentSection />
          </div>
        </div>
      </div>
    </section>
  );
}
