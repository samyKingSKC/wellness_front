// src/data/business.js

let data = {};

try {
  const response = await fetch("http://demo.swiftwingcourier.com/backend/api/business-info");
  if (response.ok) {
    data = await response.json();
  } else {
    console.error("Failed to fetch business info:", response.status);
  }
} catch (error) {
  console.error("Error fetching business info:", error);
}

// Fallback with API merge
export const business = {
  name: data.name || "Harmony Wellness",
  tagline: data.tagline || "Rebalance your mind, body, and spirit.",
  location: data.location || "New York, NY",
  phone: data.phone || "+1 (212) 555-0199",
  email: data.email || "hello@harmonywellness.com",
  theme: {
    primary: data.primaryTheme || "from-emerald-400 to-green-600",
    accent: data.accentTheme || "text-emerald-600",
  },
  heroImage:
    data.heroImage ||
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=2000&q=80",
  aboutImage:
    data.aboutImage ||
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80",
  services: data.services?.length
    ? data.services
    : [
        {
          title: "Reiki Healing",
          description:
            "Gentle energy work to release blocks and restore natural balance.",
          image:
            "https://images.unsplash.com/photo-1598901986949-f593ff2a31a6?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Life & Wellness Coaching",
          description:
            "Find clarity, purpose, and emotional strength with personalized coaching.",
          image:
            "https://plus.unsplash.com/premium_photo-1664475637311-d931fe79f789?auto=format&fit=crop&w=800&q=80",
        },
        {
          title: "Energy Therapy",
          description:
            "Release negative energy and raise your vibration with holistic treatments.",
          image:
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=800&q=80",
        },
      ],
};
