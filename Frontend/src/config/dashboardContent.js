import {
  CalendarDays,
  Syringe,
  HeartPulse,
  MessageCircle,
  BookOpen,
  Baby,
} from "lucide-react";

export const dashboardFeatures = [
  {
    title: "Appointments",
    description:
      "Appointment tracking requires a connected account and backend service.",
    icon: CalendarDays,
    status: "Not connected",
    linkText: "View appointments",
    path: "/dashboard/appointments",
    className: "appointment-card",
  },
  {
    title: "Child Health",
    description:
      "Child profiles and vaccination records are not connected in this preview.",
    icon: Syringe,
    status: "Not connected",
    linkText: "View child health",
    path: "/dashboard/child-health",
    className: "immunisation-card",
  },
  {
    title: "My Pregnancy",
    icon: Baby,
    status: "Estimate only",
    linkText: "View pregnancy",
    path: "/dashboard/pregnancy",
    className: "pregnancy-card",
    showPregnancyProgress: true,
  },
  {
    title: "Ask Jali Mama",
    description:
      "Get helpful maternal and child health information from your AI assistant.",
    image: "/images/ai1.png",
    icon: MessageCircle,
    status: "AI Support",
    linkText: "Start a conversation",
    path: "/dashboard/ai-assistant",
    className: "assistant-card",
  },
  {
    title: "Health Tips & Priorities 4 You",
    tips: [
      "Attend at least 4 antenatal visit during pregnancy.",
      "Plan to give birth at a health facility.",
      "Keep track of your baby's movements.",
      "Get enough rest and sleep.",
      "Stay hydrated.",
    ],
    icon: HeartPulse,
    status: "General guidance",
    linkText: "Explore more",
    path: "/dashboard/health-education",
    className: "tips-card",
  },
  {
    title: "Health Resources",
    icon: BookOpen,
    status: "External videos",
    linkText: "Explore more",
    path: "/dashboard/health-education",
    className: "resources-card",
    isYouTube: true,
  },
];



export const healthVideos = [
  {
    id: 1,
    title: "Maternal and Child Health Education",
    // dashboardTitle: "Nutrition During Pregnancy",
    description: "Best food for a healthy pregnancy.",
    videoId: "tBuj99QV10g",
    showOnDashboard: true,
  },
  {
    id: 2,
    title: "Pregnancy and Antenatal Care",
    description: "Nutritional needs during pregnancy.",
    videoId: "Kz0_Q-LVFM4",
  },
];

export const dashboardVideos = healthVideos.filter(
  (video) => video.showOnDashboard
);
