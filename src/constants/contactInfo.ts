export const contactInfo = {
  phone: process.env.NEXT_PUBLIC_PHONE,
  email: process.env.NEXT_PUBLIC_EMAIL,
  address: process.env.NEXT_PUBLIC_ADDRESS,
  city: process.env.NEXT_PUBLIC_CITY,
  mapUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    process.env.NEXT_PUBLIC_ADDRESS + ", " + process.env.NEXT_PUBLIC_CITY
  )}`,
  workHoursWeek: process.env.NEXT_PUBLIC_WORK_HOURS_WEEK,
  workHoursWeekend: process.env.NEXT_PUBLIC_WORK_HOURS_WEEKEND,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
  telegram: process.env.NEXT_PUBLIC_TELEGRAM_URL,
  facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL,
};
