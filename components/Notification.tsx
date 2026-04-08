"use client";

import { useState, useEffect, useCallback, createContext, useContext } from "react";

type NotificationType = "success" | "error";

interface NotificationData {
  message: string;
  type: NotificationType;
  id: number;
}

interface NotificationContextType {
  showNotification: (message: string, type: NotificationType) => void;
}

const NotificationContext = createContext<NotificationContextType>({
  showNotification: () => {},
});

export function useNotification() {
  return useContext(NotificationContext);
}

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notifications, setNotifications] = useState<NotificationData[]>([]);

  const showNotification = useCallback(
    (message: string, type: NotificationType) => {
      const id = Date.now();
      setNotifications((prev) => [...prev, { message, type, id }]);
    },
    []
  );

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <NotificationContainer
        notifications={notifications}
        onRemove={removeNotification}
      />
    </NotificationContext.Provider>
  );
}

function NotificationContainer({
  notifications,
  onRemove,
}: {
  notifications: NotificationData[];
  onRemove: (id: number) => void;
}) {
  return (
    <>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={onRemove}
        />
      ))}
    </>
  );
}

function NotificationItem({
  notification,
  onRemove,
}: {
  notification: NotificationData;
  onRemove: (id: number) => void;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger slide-in animation on next frame
    const showTimer = requestAnimationFrame(() => {
      setShow(true);
    });

    // Auto-hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setShow(false);
      // Remove from DOM after animation completes
      setTimeout(() => {
        onRemove(notification.id);
      }, 300);
    }, 5000);

    return () => {
      cancelAnimationFrame(showTimer);
      clearTimeout(hideTimer);
    };
  }, [notification.id, onRemove]);

  const typeClass =
    notification.type === "success"
      ? "notification-success"
      : "notification-error";

  const iconClass =
    notification.type === "success"
      ? "fas fa-check-circle"
      : "fas fa-exclamation-circle";

  return (
    <div className={`notification ${typeClass}${show ? " show" : ""}`}>
      <div className="notification-content">
        <i className={iconClass}></i>
        <span>{notification.message}</span>
      </div>
    </div>
  );
}
