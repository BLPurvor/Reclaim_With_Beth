export type PrivacyPolicy = {
  lastUpdatedAt: Date | string;
  sections: Array<PolicySection>;
};

export type PrivacyPolicySection = {
  title: string;
  html: string;
};
