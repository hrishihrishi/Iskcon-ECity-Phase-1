export interface Donor {
  initials: string;
  name: string;
  badgeBg: string;
  badgeText: string;
}

export interface SevaCardData {
  id: string;
  category: string;
  categoryColor: string;
  lineBg: string;
  title: string;
  description: string;
  amountInRupees: number;
  incentive: string;
  topDonors: Donor[];
}

export const SEVA_ITEMS: SevaCardData[] = [
  {
    id: 'nitya-seva',
    category: 'Daily Service',
    categoryColor: 'black',
    lineBg: 'bg-amber-800',
    title: 'Nitya Seva',
    description:
      'Sustain the daily temple worship and prasadam for all visitors. Your offering ensures the continuous flow of devotion and nourishment.',
    amountInRupees: 1008,
    incentive: 'Incentive: Get a blessed Krishna Ring with this donation.',
    topDonors: [
      { initials: 'RM', name: 'Rahul M.', badgeBg: 'bg-amber-200', badgeText: 'text-amber-900' },
      { initials: 'SK', name: 'Sneha K.', badgeBg: 'bg-teal-200', badgeText: 'text-teal-900' },
      { initials: 'VR', name: 'Vikram R.', badgeBg: 'bg-orange-200', badgeText: 'text-orange-900' },
    ],
  },
  {
    id: 'uttama-seva',
    category: 'Excellence in Service',
    categoryColor: 'text-amber-700',
    lineBg: 'bg-amber-700',
    title: 'Uttama Seva',
    description:
      'Provide comprehensive care for our sacred cows and support extensive community outreach programs.',
    amountInRupees: 5100,
    incentive: 'Incentive: Receive a special Bhagavad Gita edition.',
    topDonors: [
      { initials: 'AS', name: 'Amit S.', badgeBg: 'bg-amber-200', badgeText: 'text-amber-900' },
      { initials: 'PN', name: 'Pooja N.', badgeBg: 'bg-teal-200', badgeText: 'text-teal-900' },
    ],
  },
  {
    id: 'maha-seva',
    category: 'Grand Service',
    categoryColor: 'text-rose-800',
    lineBg: 'bg-rose-800',
    title: 'Maha Seva',
    description:
      'Sponsor major temple festivals and infrastructural developments to expand the sanctuary’s spiritual reach.',
    amountInRupees: 11000,
    incentive: 'Incentive: Exclusive invite to VIP temple events & Maha Prasadam.',
    topDonors: [
      { initials: 'KD', name: 'Karan D.', badgeBg: 'bg-amber-200', badgeText: 'text-amber-900' },
      { initials: 'MR', name: 'Meera R.', badgeBg: 'bg-teal-200', badgeText: 'text-teal-900' },
      { initials: 'VJ', name: 'Vikas J.', badgeBg: 'bg-orange-200', badgeText: 'text-orange-900' },
    ],
  },
];