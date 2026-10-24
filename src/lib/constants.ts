export const BRAND = {
  name: "Velvet Brow by Tannaz",
  tagline: "Where Precision Meets Beauty",
  description:
    "Velvet Brow by Tannaz is a luxury permanent makeup studio in Costa Mesa, CA, specializing in microblading, ombre/powder brows, combo brows, lip blush, and eye liner. Our expert artists combine artistry with precision to enhance your natural beauty.",
  location: "Orange County, LA & Upland, CA",
  address: "Orange County · LA · Upland, CA",
  phone: "(909) 996-5307",
  email: "Velvetbrowbytannaz@gmail.com",
  instagram: "@velvet_brow_by_tannaz",
} as const;

export const BUSINESS_HOURS: Record<string, { open: string; close: string } | null> = {
  Monday: { open: "10:00 AM", close: "8:00 PM" },
  Tuesday: { open: "10:00 AM", close: "8:00 PM" },
  Wednesday: { open: "10:00 AM", close: "8:00 PM" },
  Thursday: { open: "10:00 AM", close: "8:00 PM" },
  Friday: { open: "10:00 AM", close: "8:00 PM" },
  Saturday: { open: "10:00 AM", close: "8:00 PM" },
  Sunday: null,
};

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/velvet_brow_by_tannaz",
  tiktok: "#",
  facebook: "#",
} as const;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
] as const;

import { readJsonObject, writeJsonObject } from "@/lib/data";

export interface SiteContent {
  brand: {
    name: string;
    tagline: string;
    description: string;
    location: string;
    address: string;
    phone: string;
    email: string;
    instagramHandle: string;
  };
  businessHours: Record<string, { open: string; close: string } | null>;
  socialLinks: { instagram: string; tiktok: string; facebook: string };
  contactVersion?: number;
  hoursVersion?: number;
}

// Bump to force a one-time refresh of code-managed brand fields (name, contact,
// Instagram) into an already-seeded site-content blob. Other admin edits are
// preserved.
export const CONTACT_VERSION = 5;

// Bump to force a one-time overwrite of businessHours with BUSINESS_HOURS.
// Kept separate from CONTACT_VERSION so contact refreshes never clobber hours
// edited in the admin panel.
export const HOURS_VERSION = 1;

const DEFAULT_SITE_CONTENT: SiteContent = {
  brand: {
    name: BRAND.name,
    tagline: BRAND.tagline,
    description: BRAND.description,
    location: BRAND.location,
    address: BRAND.address,
    phone: BRAND.phone,
    email: BRAND.email,
    instagramHandle: BRAND.instagram,
  },
  businessHours: BUSINESS_HOURS,
  socialLinks: { ...SOCIAL_LINKS },
  contactVersion: CONTACT_VERSION,
  hoursVersion: HOURS_VERSION,
};

export async function getSiteContent(): Promise<SiteContent> {
  const stored = await readJsonObject<SiteContent>("site-content.json");
  if (!stored) {
    await writeJsonObject("site-content.json", DEFAULT_SITE_CONTENT);
    return DEFAULT_SITE_CONTENT;
  }
  let migrated = stored;
  // One-time migration: refresh code-managed contact fields (phone/email) when behind.
  if (migrated.contactVersion !== CONTACT_VERSION) {
    migrated = {
      ...migrated,
      contactVersion: CONTACT_VERSION,
      brand: {
        ...migrated.brand,
        name: BRAND.name,
        phone: BRAND.phone,
        email: BRAND.email,
        location: BRAND.location,
        address: BRAND.address,
        instagramHandle: BRAND.instagram,
      },
      socialLinks: {
        ...migrated.socialLinks,
        instagram: SOCIAL_LINKS.instagram,
      },
    };
  }
  // One-time migration: replace business hours with the code defaults when behind.
  if (migrated.hoursVersion !== HOURS_VERSION) {
    migrated = {
      ...migrated,
      hoursVersion: HOURS_VERSION,
      businessHours: { ...BUSINESS_HOURS },
    };
  }
  if (migrated !== stored) {
    await writeJsonObject("site-content.json", migrated);
  }
  return migrated;
}

export async function getBrand(): Promise<SiteContent["brand"]> {
  return (await getSiteContent()).brand;
}

export async function getBusinessHours(): Promise<
  SiteContent["businessHours"]
> {
  return (await getSiteContent()).businessHours;
}

export async function getSocialLinks(): Promise<SiteContent["socialLinks"]> {
  return (await getSiteContent()).socialLinks;
}

export const BOOKING_TIMES = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
  "7:00 PM",
] as const;
