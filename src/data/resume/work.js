/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'EPAM Systems',
    position: 'Solution Architect',
    url: 'https://www.epam.com/',
    startDate: '2028-03-01',
    summary: `Consulting and Development Services for Omnichannel adidas area. TODO: Add more details`,
    highlights: [
      `consulting Adidas teams on payment integrations and payment related initiatives/projects`,
      `working with business stakeholders on collecting business requirements/needs`,
      `leading 'Payment Service Suite' product (SME and architecture)`,
      `owning a payment process e2e (from storefront page to finance system and reconciliation phase)`,
      `supervising / consulting other architects`,
      `providing tech design / architecture documentation to storefront or back office Adidas dev teams`,
      `working with external vendors (SVS, ACI) on communicating both business and technical requirements`,
    ],
  },
  
];

export default work;
