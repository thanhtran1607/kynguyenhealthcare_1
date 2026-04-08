"use client";

import { NotificationProvider } from "@/components/Notification";
import ContactTabs from "@/components/contact/ContactTabs";

export default function ContactPageClient() {
  return (
    <NotificationProvider>
      <ContactTabs />
    </NotificationProvider>
  );
}
