// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Lấy các trường input
        const nameInput = form.querySelector('#name');
        const phoneInput = form.querySelector('#phone');
        const emailInput = form.querySelector('#email');
        
        // Kiểm tra validation
        let isValid = true;
        let errorMessage = '';
        
        // Kiểm tra Họ và Tên (required)
        if (!nameInput.value.trim()) {
            isValid = false;
            errorMessage = 'Vui lòng nhập Họ và Tên';
            nameInput.focus();
        }
        // Kiểm tra Số điện thoại (required)
        else if (!phoneInput.value.trim()) {
            isValid = false;
            errorMessage = 'Vui lòng nhập Số điện thoại';
            phoneInput.focus();
        }
        // Kiểm tra định dạng số điện thoại
        else if (phoneInput.value.trim() && !/^[0-9]{10,11}$/.test(phoneInput.value.replace(/\s/g, ''))) {
            isValid = false;
            errorMessage = 'Số điện thoại không hợp lệ. Vui lòng nhập 10-11 chữ số';
            phoneInput.focus();
        }
        // Kiểm tra định dạng email nếu có nhập
        else if (emailInput.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            isValid = false;
            errorMessage = 'Email không hợp lệ';
            emailInput.focus();
        }
        
        if (!isValid) {
            // Hiển thị thông báo lỗi
            showNotification(errorMessage, 'error');
            return;
        }
        
        // Nếu form hợp lệ, hiển thị thông báo thành công
        showNotification('Cảm ơn bạn đã liên hệ! Chúng tôi đã ghi nhận thông tin của bạn và sẽ phản hồi trong vòng 24h.', 'success');
        
        // Reset form
        form.reset();
    });
}

// Hàm hiển thị thông báo
function showNotification(message, type = 'success') {
    // Xóa thông báo cũ nếu có
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Tạo element thông báo
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Thêm vào body
    document.body.appendChild(notification);
    
    // Hiển thị với animation
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // Tự động ẩn sau 5 giây
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Partner tabs
const partnerTabs = document.querySelectorAll('.partner-tab');
partnerTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        partnerTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });

    // Đóng menu khi click vào link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Đóng menu khi click bên ngoài
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Animations initialized
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Fade in animation on scroll
const fadeInElements = document.querySelectorAll('.service-card, .caregiver-item, .reason-card, .testimonial-card');

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

fadeInElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s, transform 0.6s';
    fadeInObserver.observe(element);
});
