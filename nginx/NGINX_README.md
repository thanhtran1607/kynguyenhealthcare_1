# Cấu hình Nginx + SSL (Let's Encrypt) cho admin.kynguyenhealthcare.com

## Tổng quan

- **Domain**: `admin.kynguyenhealthcare.com`
- **Backend**: service `backend` trong docker-compose, port **3987**
- **HTTPS**: Let's Encrypt (miễn phí); HTTP tự động redirect sang HTTPS
- **API**: `https://admin.kynguyenhealthcare.com/api`, Swagger: `https://admin.kynguyenhealthcare.com/api/docs`

---

## Cài đặt trên server

### Bước 1: Trỏ domain về IP server

Đảm bảo DNS đã trỏ `admin.kynguyenhealthcare.com` đúng IP máy chủ (A record).

### Bước 2: Lấy SSL certificate (lần đầu)

**Cách A – Certbot standalone (khi chưa có config Nginx cho domain):**

```bash
# Tạm dừng Nginx để Certbot dùng port 80
sudo systemctl stop nginx

# Lấy certificate
sudo certbot certonly --standalone -d admin.kynguyenhealthcare.com

# Bật lại Nginx
sudo systemctl start nginx
```

**Cách B – Certbot với Nginx (khi đã có server block HTTP 80 cho domain):**

```bash
sudo certbot certonly --nginx -d admin.kynguyenhealthcare.com
```

Certificate sẽ nằm tại:
- `/etc/letsencrypt/live/admin.kynguyenhealthcare.com/fullchain.pem`
- `/etc/letsencrypt/live/admin.kynguyenhealthcare.com/privkey.pem`

### Bước 3: Copy và bật cấu hình Nginx

```bash
# Copy file cấu hình (điều chỉnh đường dẫn project nếu cần)
sudo cp /root/project/admin-kynguyen/nginx/admin.kynguyenhealthcare.com.conf /etc/nginx/sites-available/

# Kích hoạt site
sudo ln -sf /etc/nginx/sites-available/admin.kynguyenhealthcare.com.conf /etc/nginx/sites-enabled/

# Kiểm tra cấu hình
sudo nginx -t

# Tải lại Nginx
sudo systemctl reload nginx
```

### Bước 4: Đảm bảo backend chạy

```bash
cd /root/project/admin-kynguyen
docker compose up -d
```

---

## SSL / HTTPS

- **Certificate**: Let's Encrypt tại `/etc/letsencrypt/live/admin.kynguyenhealthcare.com/`
- **HTTP (80)** → 301 redirect → **HTTPS (443)**
- **Gia hạn**: Certbot thường đã cấu hình cron; gia hạn thủ công:

```bash
sudo certbot renew
# Kiểm tra dry-run
sudo certbot renew --dry-run
```

---

## Kiểm tra

- **API**: https://admin.kynguyenhealthcare.com/api  
- **Swagger**: https://admin.kynguyenhealthcare.com/api/docs  
- **Redirect**: http://admin.kynguyenhealthcare.com → https://admin.kynguyenhealthcare.com  

---

## Log

- Access: `/var/log/nginx/admin.kynguyen.access.log`
- Error: `/var/log/nginx/admin.kynguyen.error.log`

```bash
sudo tail -f /var/log/nginx/admin.kynguyen.access.log
```
