interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Company',
  applicationName: 'Construction tool rental v1',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read tool information',
    'Create rental requests',
    'Read rental request status',
    'Read company information',
  ],
  ownerAbilities: [
    'Manage user information',
    'Manage company information',
    'Manage tool information',
    'Manage rental requests',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/99962074-3375-462d-b89e-1e1c1c42894a',
};
