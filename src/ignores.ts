import { globalIgnores as createGlobalIgnores } from 'eslint/config';
import { type FlatConfig } from './types.js';

export const globalIgnores: FlatConfig = createGlobalIgnores([
  // Dependencies
  '**/node_modules/',
  // Build outputs
  '**/.next/',
  '**/out/',
  '**/build/',
  '**/dist/',
  '**/coverage/',
  '**/.turbo/',

  // Generated files
  'lib/generated-api/',
  '**/next-env.d.ts',

  // Lock files
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',

  // Database
  '**/database/',
  '**/prisma/migrations/',

  // Git
  '**/.git/',

  // AWS Amplify
  '**/.amplify/',
  '**/amplify/{data,auth}/',

  // Tool directories
  '**/.vscode/',
  '**/.claude/',
  '**/.specify/',
  '**/.cursor/',

  // Config files
  '.env*',
  '.gitignore',

  // Static assets
  '**/public/',

  // ESLint config package
  '@eslint-config/',
  '.eslint-config/',

  // CSS
  '**/*.css',
  '**/*.scss',
  '**/*.sass',

  // Project-specific
  'app/examples/auth-usage-examples.tsx',
  'components/event-calendar/README.md',
  'docs/',
  'examples/**/README.md',
  'lib/mock-data/',
]);

export default globalIgnores;
