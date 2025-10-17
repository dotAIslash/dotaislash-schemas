// File: dotaislash-schemas/tests/integration.test.ts
// What: Integration tests loading and validating real configurations
// Why: Test end-to-end validation with realistic data
// Related: src/validator.ts, src/schemas.ts

import { describe, test, expect } from 'vitest';
import { validateContext, validateProfile, validateAgent } from '../src/validator.js';
import type { Context, Profile, Agent } from '../src/types.js';

describe('Integration Tests', () => {
  test('validates realistic TypeScript project configuration', () => {
    const config: Context = {
      version: '1.0',
      metadata: {
        name: 'TypeScript Project',
        description: 'A modern TypeScript application',
        tags: ['typescript', 'node', 'backend'],
        author: 'Alphin Tom',
        created: '2025-10-17',
        license: 'MIT'
      },
      rules: [
        'rules/typescript-style.md',
        'rules/testing.md',
        'rules/security.md'
      ],
      context: [
        'src/**/*.ts',
        'tests/**/*.test.ts',
        'package.json',
        'tsconfig.json'
      ],
      agents: [
        'agents/code-reviewer.json',
        'agents/documenter.json'
      ],
      settings: {
        model: 'claude-sonnet-4',
        temperature: 0.7,
        maxTokens: 4096
      },
      permissions: {
        files: {
          read: ['src/**', 'tests/**', '*.json', '*.md'],
          write: ['src/**', 'tests/**'],
          deny: ['.env*', '*.key', '*.pem', 'node_modules/**']
        },
        network: {
          allow: ['https://registry.npmjs.org', 'https://api.github.com'],
          deny: ['*']
        },
        commands: {
          allow: ['npm test', 'npm run build', 'git status', 'git diff'],
          deny: ['rm -rf', 'sudo', 'dd']
        }
      }
    };
    
    const result = validateContext(config);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
  
  test('validates Cursor profile with tool-specific settings', () => {
    const profile: Profile = {
      version: '1.0',
      merge: 'deep',
      metadata: {
        name: 'Cursor IDE Profile',
        description: 'Optimized settings for Cursor'
      },
      rules: [
        'rules/cursor-shortcuts.md'
      ],
      settings: {
        temperature: 0.5,
        shortcuts: {
          review: 'agents/code-reviewer.json',
          document: 'agents/documenter.json',
          test: 'agents/tester.json'
        },
        sidebar: 'expanded',
        theme: 'dark'
      }
    };
    
    const result = validateProfile(profile);
    expect(result.valid).toBe(true);
  });
  
  test('validates specialized code reviewer agent', () => {
    const agent: Agent = {
      version: '1.0',
      name: 'Security-Focused Code Reviewer',
      description: 'Reviews code with emphasis on security vulnerabilities',
      model: 'claude-sonnet-4',
      temperature: 0.3,
      maxTokens: 8192,
      rules: [
        'rules/security-checklist.md',
        'rules/owasp-top-10.md',
        'rules/code-quality.md'
      ],
      tools: [
        'tools/linter.json',
        'tools/security-scanner.json'
      ],
      systemPrompt: `You are an expert security-focused code reviewer.
        
Your responsibilities:
1. Identify security vulnerabilities (XSS, SQLi, CSRF, etc.)
2. Check for proper input validation
3. Verify authentication and authorization
4. Review cryptographic implementations
5. Assess dependency security

Be thorough but constructive. Prioritize critical issues.`,
      capabilities: [
        'code-review',
        'security-audit',
        'vulnerability-detection',
        'dependency-analysis'
      ]
    };
    
    const result = validateAgent(agent);
    expect(result.valid).toBe(true);
  });
  
  test('cross-schema validation: profile references valid fields', () => {
    // Profile can override any Context field
    const profile: Profile = {
      version: '1.0',
      merge: 'deep',
      rules: ['new-rule.md'],
      context: ['additional/**/*.ts'],
      settings: {
        model: 'gpt-4-turbo',
        temperature: 0.8
      },
      permissions: {
        files: {
          read: ['docs/**']
        }
      }
    };
    
    const result = validateProfile(profile);
    expect(result.valid).toBe(true);
  });
  
  test('validates complete multi-agent system', () => {
    const reviewer: Agent = {
      version: '1.0',
      name: 'Code Reviewer',
      temperature: 0.3
    };
    
    const documenter: Agent = {
      version: '1.0',
      name: 'Documentation Generator',
      temperature: 0.7
    };
    
    const tester: Agent = {
      version: '1.0',
      name: 'Test Generator',
      temperature: 0.5
    };
    
    expect(validateAgent(reviewer).valid).toBe(true);
    expect(validateAgent(documenter).valid).toBe(true);
    expect(validateAgent(tester).valid).toBe(true);
  });
});
