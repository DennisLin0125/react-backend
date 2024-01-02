module.exports = {
  // 可選型別
  types: [
    {
      value: 'feat',
      name: '✨  feat: 新增功能。',
      emoji: ":sparkles:"
    },
    {
      value: 'fix',
      name: '🐞  fix: 修復 bug。',
      emoji: ":bug:"
    },
    {
      value: 'docs',
      name: '📚  docs: 修改文件。',
      emoji: ":memo:"
    },
    {
      value: 'style',
      name: '💅  style: 修改程式碼的風格，不會對產品有任何的功能變動 (空白鍵、格式化、分號...等)。',
      emoji: ":lipstick:"
    },
    {
      value: 'refactor',
      name: '🛠  refactor: 重構、優化程式碼，不是新功能或是修復 bug。',
      emoji: ":recycle:"
    },
    {
      value: 'perf',
      name: '⚡️  性能優化: 新增或修改現有的測試',
      emoji: ":zap:"
    },
    {
      value: 'test',
      name: '🏁  test: 新增或修改現有的測試',
      emoji: ":white_check_mark:"
    },
    {
      value: 'build',
      name: '📦️  建置:  建置流程、外部依賴變更（如升級 npm 套件、修改 vite 配置等）',
      emoji: ":package:"
    },
    {
      value: 'chore',
      name: '🗯  chore: 修改建置流程、包管理、構建過程或輔助工具的變動。不包含修改測試檔、src 裡的檔案。',
      emoji: ":hammer:"
    },
    {
      value: 'revert',
      name: '⏪  revert: 撤銷、復原一次 git commit。',
      emoji: ":rewind:"
    }
  ],
  // 訊息步驟
  
  messages: {
    type: '<type> 用於說明 commit 的類別，只允許使用下面 9 個標識: \n',
    scope: '<scope> 影響範圍，比如會影響到哪個模塊/性能/哪一層（業務層，持久層，緩存，rpc），如果是特性代碼，可以寫特性名稱 (可選): \n',
    customScope: '<scope> 自定義影響範圍，請精簡扼要但不失原意: \n',
    subject: '<subject> 目的的簡短描述，不超過 100 個字符: \n',
    body: '<body> 對本次 commit 的詳細描述，使用第一人稱，應該說明代碼變動的動機，以及與以前行為的對比，可以使用 "|" 分成多行 (可選):\n',
    breaking: '<breaking> 對破壞性變動(Breaking Change)的描述、以及變動理由和遷移方法 (可選):\n',
    footer: '<footer> 針對的 issue，像是：#520, #1314 (可選):\n',
    confirmCommit: '<confirm commit> 請確認以上描述。(y/n/e/h)',
  },
  useEmoji: true,
  emojiAlign: 'right',
  useAI: false,
  aiNumber: 1,
  themeColorCode: '',
  scopes: [],
  allowCustomScopes: true,
  allowEmptyScopes: true,
  customScopesAlign: 'bottom',
  customScopesAlias: 'custom',
  emptyScopesAlias: 'empty',
  upperCaseSubject: false,
  markBreakingChangeMode: false,
  allowBreakingChanges: ['feat', 'fix'],
  breaklineNumber: 100,
  breaklineChar: '|',
  skipQuestions: [],
  issuePrefixes: [{ value: 'closed', name: 'closed:   ISSUES has been processed' }],
  customIssuePrefixAlign: 'top',
  emptyIssuePrefixAlias: 'skip',
  customIssuePrefixAlias: 'custom',
  allowCustomIssuePrefix: true,
  allowEmptyIssuePrefix: true,
  confirmColorize: true,
  maxHeaderLength: Infinity,
  maxSubjectLength: Infinity,
  minSubjectLength: 0,
  scopeOverrides: undefined,
  defaultBody: '',
  defaultIssues: '',
  defaultScope: '',
  defaultSubject: '',
}