import type { PrivacyPolicy } from '@/types/privacy-policy';

export const privacyPolicy: PrivacyPolicy = {
  lastUpdatedAt: new Date('2026-02-01'),
  sections: [
    {
      title: 'Who We Are',
      html: `
        <p>Reclaim Physiotherapy with Beth (“Reclaim with Beth”, “we”, “us”) provides home-visit physiotherapy services across Blackpool and the Fylde Coast.</p>
        <p>For the purposes of UK data protection law, Reclaim Physiotherapy with Beth is the Data Controller of your personal data.</p>
        <p>Data Controller:&nbsp;Bethany Purvor<br />
        Email:&nbsp;reclaimphysio.beth@gmail.com<br />
        ICO Registration Number:&nbsp;<em>Pending details</em><br />
        </p>
        `,
    },
  ],
};
