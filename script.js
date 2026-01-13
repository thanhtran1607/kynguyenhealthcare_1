// Smooth scrolling for navigation links with offset
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      const header = document.querySelector(".header");
      const headerHeight = header ? header.offsetHeight : 100;
      // Thêm offset để lùi lên một đoạn (chiều cao header + thêm 20px)
      const offset = headerHeight + 20;

      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  });
});

// Form submission
const form = document.querySelector(".form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Lấy các trường input
    const nameInput = form.querySelector("#name");
    const phoneInput = form.querySelector("#phone");
    const emailInput = form.querySelector("#email");

    // Kiểm tra validation
    let isValid = true;
    let errorMessage = "";

    // Kiểm tra Họ và Tên (required)
    if (!nameInput.value.trim()) {
      isValid = false;
      errorMessage = "Vui lòng nhập Họ và Tên";
      nameInput.focus();
    }
    // Kiểm tra Số điện thoại (required)
    else if (!phoneInput.value.trim()) {
      isValid = false;
      errorMessage = "Vui lòng nhập Số điện thoại";
      phoneInput.focus();
    }
    // Kiểm tra định dạng số điện thoại
    else if (
      phoneInput.value.trim() &&
      !/^[0-9]{10,11}$/.test(phoneInput.value.replace(/\s/g, ""))
    ) {
      isValid = false;
      errorMessage = "Số điện thoại không hợp lệ. Vui lòng nhập 10-11 chữ số";
      phoneInput.focus();
    }
    // Kiểm tra định dạng email nếu có nhập
    else if (
      emailInput.value.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)
    ) {
      isValid = false;
      errorMessage = "Email không hợp lệ";
      emailInput.focus();
    }

    if (!isValid) {
      // Hiển thị thông báo lỗi
      showNotification(errorMessage, "error");
      return;
    }

    // Nếu form hợp lệ, hiển thị thông báo thành công
    showNotification(
      "Cảm ơn bạn đã liên hệ! Chúng tôi đã ghi nhận thông tin của bạn và sẽ phản hồi trong vòng 24h.",
      "success"
    );

    // Reset form
    form.reset();
  });
}

// Hàm hiển thị thông báo
function showNotification(message, type = "success") {
  // Xóa thông báo cũ nếu có
  const existingNotification = document.querySelector(".notification");
  if (existingNotification) {
    existingNotification.remove();
  }

  // Tạo element thông báo
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${
              type === "success" ? "fa-check-circle" : "fa-exclamation-circle"
            }"></i>
            <span>${message}</span>
        </div>
    `;

  // Thêm vào body
  document.body.appendChild(notification);

  // Hiển thị với animation
  setTimeout(() => {
    notification.classList.add("show");
  }, 10);

  // Tự động ẩn sau 5 giây
  setTimeout(() => {
    notification.classList.remove("show");
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 5000);
}

// Service tabs with drag detection
const serviceTabs = document.querySelectorAll(".service-tab");
const serviceContents = document.querySelectorAll(".service-content");
const servicesTabsContainer = document.querySelector(".services-tabs");

let isDragging = false;
let startX = 0;
let scrollLeft = 0;
let containerTouchDragging = false;

// Detect drag/scroll on tabs container
if (servicesTabsContainer) {
  servicesTabsContainer.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.pageX - servicesTabsContainer.offsetLeft;
    scrollLeft = servicesTabsContainer.scrollLeft;
    servicesTabsContainer.style.cursor = "grabbing";
    servicesTabsContainer.style.userSelect = "none";
  });

  servicesTabsContainer.addEventListener("mouseleave", () => {
    isDragging = false;
    servicesTabsContainer.style.cursor = "grab";
    servicesTabsContainer.style.userSelect = "auto";
  });

  servicesTabsContainer.addEventListener("mouseup", () => {
    isDragging = false;
    servicesTabsContainer.style.cursor = "grab";
    servicesTabsContainer.style.userSelect = "auto";
  });

  servicesTabsContainer.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - servicesTabsContainer.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed
    servicesTabsContainer.scrollLeft = scrollLeft - walk;
  });

  // Touch events for mobile
  let touchStartX = 0;
  let touchScrollLeft = 0;

  servicesTabsContainer.addEventListener("touchstart", (e) => {
    containerTouchDragging = true;
    touchStartX = e.touches[0].pageX;
    touchScrollLeft = servicesTabsContainer.scrollLeft;
  });

  servicesTabsContainer.addEventListener("touchend", () => {
    containerTouchDragging = false;
  });

  servicesTabsContainer.addEventListener("touchmove", (e) => {
    if (!containerTouchDragging) return;
    const x = e.touches[0].pageX;
    const walk = (x - touchStartX) * 2;
    servicesTabsContainer.scrollLeft = touchScrollLeft - walk;
  });
}

serviceTabs.forEach((tab) => {
  let clickStartX = 0;
  let clickStartY = 0;
  let hasMoved = false;

  tab.addEventListener("mousedown", (e) => {
    clickStartX = e.clientX;
    clickStartY = e.clientY;
    hasMoved = false;
  });

  tab.addEventListener("mousemove", (e) => {
    if (
      Math.abs(e.clientX - clickStartX) > 5 ||
      Math.abs(e.clientY - clickStartY) > 5
    ) {
      hasMoved = true;
    }
  });

  tab.addEventListener("click", (e) => {
    // Only switch tab if it was a click, not a drag
    if (!hasMoved && !isDragging) {
      e.preventDefault();
      const targetTab = tab.getAttribute("data-tab");

      // Remove active class from all tabs
      serviceTabs.forEach((t) => t.classList.remove("active"));
      // Add active class to clicked tab
      tab.classList.add("active");

      // Hide all service contents
      serviceContents.forEach((content) => {
        content.classList.remove("active");
      });

      // Show target service content
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add("active");

        // Reset sub-tabs if service has sub-tabs (service1 or service2)
        if (targetTab === "service1" || targetTab === "service2") {
          const subTabs = targetContent.querySelectorAll(".sub-tab");
          const subContents = targetContent.querySelectorAll(".sub-content");

          // Reset to first sub-tab
          subTabs.forEach((st, index) => {
            if (index === 0) {
              st.classList.add("active");
            } else {
              st.classList.remove("active");
            }
          });

          subContents.forEach((sc, index) => {
            if (index === 0) {
              sc.classList.add("active");
            } else {
              sc.classList.remove("active");
            }
          });
        }
      }
    }
    hasMoved = false;
  });

  // Touch events for mobile
  let touchStartX = 0;
  let touchStartY = 0;
  let touchHasMoved = false;

  tab.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    touchHasMoved = false;
  });

  tab.addEventListener("touchmove", (e) => {
    if (
      Math.abs(e.touches[0].clientX - touchStartX) > 5 ||
      Math.abs(e.touches[0].clientY - touchStartY) > 5
    ) {
      touchHasMoved = true;
    }
  });

  tab.addEventListener("touchend", (e) => {
    if (!touchHasMoved) {
      e.preventDefault();
      const targetTab = tab.getAttribute("data-tab");

      serviceTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      serviceContents.forEach((content) => {
        content.classList.remove("active");
      });

      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add("active");

        if (targetTab === "service1" || targetTab === "service2") {
          const subTabs = targetContent.querySelectorAll(".sub-tab");
          const subContents = targetContent.querySelectorAll(".sub-content");

          subTabs.forEach((st, index) => {
            if (index === 0) {
              st.classList.add("active");
            } else {
              st.classList.remove("active");
            }
          });

          subContents.forEach((sc, index) => {
            if (index === 0) {
              sc.classList.add("active");
            } else {
              sc.classList.remove("active");
            }
            // Reset expand/collapse state when switching main tabs
            const summary = sc.querySelector(".service-summary");
            const full = sc.querySelector(".service-full");
            if (summary && full) {
              summary.style.display = "block";
              full.style.display = "none";
            }
          });
        }
      }
    }
    touchHasMoved = false;
  });
});

// Sub-tabs for Service 1 and Service 2
const subTabs = document.querySelectorAll(".sub-tab");
const subContents = document.querySelectorAll(".sub-content");

subTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const targetSubTab = tab.getAttribute("data-subtab");

    // Remove active class from all sub-tabs in the same container
    const parentContainer = tab.closest(".sub-tabs-container");
    if (parentContainer) {
      parentContainer
        .querySelectorAll(".sub-tab")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
    }

    // Hide all sub-contents in the same container
    if (parentContainer) {
      parentContainer.querySelectorAll(".sub-content").forEach((content) => {
        content.classList.remove("active");
        // Reset expand/collapse state when switching tabs
        const summary = content.querySelector(".service-summary");
        const full = content.querySelector(".service-full");
        if (summary && full) {
          summary.style.display = "block";
          full.style.display = "none";
        }
      });
    }

    // Show target sub-content
    const targetSubContent = document.getElementById(targetSubTab);
    if (targetSubContent) {
      targetSubContent.classList.add("active");
    }
  });
});

// Expand/Collapse buttons for service details
document.addEventListener("click", (e) => {
  // Handle "Xem thêm" button - check if clicked element is button or icon inside button
  const expandBtn = e.target.closest(".btn-expand");
  if (expandBtn) {
    e.preventDefault();
    e.stopPropagation();

    const targetId = expandBtn.getAttribute("data-target");
    const fullContent = document.getElementById(targetId);
    const summary = expandBtn.closest(".service-summary");

    if (fullContent && summary) {
      // Hide summary
      summary.style.setProperty("display", "none", "important");
      // Show full content
      fullContent.style.setProperty("display", "block", "important");

      // Smooth scroll to the expanded content
      setTimeout(() => {
        fullContent.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
    return false;
  }

  // Handle "Thu gọn" button - check if clicked element is button or icon inside button
  const collapseBtn = e.target.closest(".btn-collapse");
  if (collapseBtn) {
    e.preventDefault();
    e.stopPropagation();

    const targetId = collapseBtn.getAttribute("data-target");
    const fullContent = document.getElementById(targetId);
    const parentContent = fullContent?.closest(".sub-content");
    const summary = parentContent?.querySelector(".service-summary");

    if (fullContent && summary) {
      // Hide full content
      fullContent.style.setProperty("display", "none", "important");
      // Show summary
      summary.style.setProperty("display", "block", "important");

      // Smooth scroll to the summary
      setTimeout(() => {
        summary.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 100);
    }
    return false;
  }
});

// Partner tabs
const partnerTabs = document.querySelectorAll(".partner-tab");
partnerTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    partnerTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
  });
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navMenu = document.getElementById("navMenu");

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileMenuToggle.classList.toggle("active");
  });

  // Đóng menu khi click vào link
  const navLinks = navMenu.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
    });
  });

  // Đóng menu khi click bên ngoài
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
      navMenu.classList.remove("active");
      mobileMenuToggle.classList.remove("active");
    }
  });
}

// Initialize animations
document.addEventListener("DOMContentLoaded", () => {
  // Animations initialized
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset || window.scrollY;

  if (currentScroll > 500) {
    header.classList.add("scrolled");
    header.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.1)";
  } else {
    header.classList.remove("scrolled");
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }

  lastScroll = currentScroll;
});

// Fade in animation on scroll
const fadeInElements = document.querySelectorAll(
  ".service-card, .caregiver-item, .reason-card, .testimonial-card"
);

const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

fadeInElements.forEach((element) => {
  element.style.opacity = "0";
  element.style.transform = "translateY(20px)";
  element.style.transition = "opacity 0.6s, transform 0.6s";
  fadeInObserver.observe(element);
});

// Caregivers content fade on scroll (chỉ phần danh sách và button)
const caregiversContent = document.querySelector(".caregivers-content");

if (caregiversContent) {
  const handleScroll = () => {
    const rect = caregiversContent.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const contentTop = rect.top;
    const contentHeight = rect.height;

    // Tính toán opacity dựa trên vị trí scroll
    // Khi content mới vào view từ trên, opacity tăng từ 0 lên 1
    // Khi scroll xuống và content ra khỏi view, opacity giảm từ 1 xuống 0

    let opacity = 0;

    if (contentTop < windowHeight && contentTop > -contentHeight) {
      // Content đang trong viewport
      if (contentTop > 0) {
        // Content đang vào view từ trên
        const fadeInProgress = 1 - contentTop / windowHeight;
        opacity = Math.max(0, Math.min(1, fadeInProgress));
      } else {
        // Content đã vào view, có thể fade out khi scroll xuống
        const fadeOutProgress = Math.abs(contentTop) / (windowHeight * 0.5);
        opacity = Math.max(0, Math.min(1, 1 - fadeOutProgress * 0.3));
      }
    } else if (contentTop <= -contentHeight) {
      // Content đã scroll qua hoàn toàn
      opacity = 0;
    }

    // Áp dụng opacity với smooth transition
    caregiversContent.style.opacity = opacity;
  };

  // Thêm event listener cho scroll với throttle để tối ưu performance
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleScroll();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Gọi lần đầu để set giá trị ban đầu
  handleScroll();
}

// Caregivers list items animation on scroll
const caregiverListItems = document.querySelectorAll(".caregiver-list-item");
const caregiversListContainer = document.querySelector(".caregivers-list");

if (caregiversListContainer && caregiverListItems.length > 0) {
  const listObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Khi container vào view, thêm class visible cho từng item với delay
          caregiverListItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("visible");
            }, index * 100);
          });
          // Unobserve sau khi đã trigger để không trigger lại
          listObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  listObserver.observe(caregiversListContainer);
}
