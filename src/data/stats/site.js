import dayjs from 'dayjs';

/* Keys match keys returned by the github api. To see everything returned by the github api, run:
 curl https://api.github.com/repos/{profile}/{repo-name}}}
 */
const {GITHUB_URL, GITHUB_REPO_NAME} = require('../../constants');

const data = [
  {
    label: 'Stars this repository has on github',
    key: 'stargazers_count',
    link: `${GITHUB_URL}/${GITHUB_REPO_NAME}/stargazers`,
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    link: `${GITHUB_URL}/${GITHUB_REPO_NAME}/stargazers`,
  },
  {
    label: 'Number of forks',
    key: 'forks',
    link: `${GITHUB_URL}/${GITHUB_REPO_NAME}/network`,
  },
  // {
  //   label: 'Number of spoons',
  //   value: '0',
  // },
  // {
  //   label: 'Number of linter warnings',
  //   value: '0', // enforced via github workflow
  // },
  {
    label: 'Open github issues',
    key: 'open_issues_count',
    link: `${GITHUB_URL}/${GITHUB_REPO_NAME}/issues`,
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    link: `${GITHUB_URL}/${GITHUB_REPO_NAME}/commits`,
    format: (x) => dayjs(x).format('MMMM DD, YYYY'),
  },
  {
    // TODO update this with a pre-commit hook
    /* find . | grep ".js" | grep -vE ".min.js|node_modules|.git|.json" |
    xargs -I file cat file | wc -l */
    // label: 'Lines of Javascript powering this website',
    // value: '2150',
    // link: 'https://github.com/{profile}/{repo-name}/graphs/contributors',
  },
];

export default data;
