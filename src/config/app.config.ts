interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Property Manager'],
  tenantName: 'Company',
  applicationName: 'longstaygolf',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
