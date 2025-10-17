// File: dotaislash-schemas/tests/context.test.ts
// What: Tests for context.json schema validation
// Why: Ensure context schema correctly validates configurations
// Related: src/validator.ts, schemas/context.schema.json

import { describe, test, expect } from 'vitest';
import { validateContext } from '../src/validator.js';
import type { Context } from '../src/types.js';

describe('Context Schema Validation', () => {
  test('validates minimal valid context', () => {
    const minimal: Context = {
      version: '1.0'
    };
    
    const result = validateContext(minimal);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
  
  test('validates full-featured context', () => {
    const full: Context = {
      version: '1.0',
      metadata: {
        name: 'My Project',
        description: 'A test project',
        tags: ['typescript', 'versa'],
        author: 'Alphin Tom',
        created: '2025-10-17',
        license: 'MIT'
      },
      rules: ['rules/style.md', 'rules/security.md'],
      context: ['src/**/*.ts', 'docs/**/*.md'],
      agents: ['agents/reviewer.json'],
      prompts: ['prompts/bug-report.md'],
      tools: ['tools/mcp-servers.json'],
      knowledge: ['knowledge/sources.json'],
      settings: {
        model: 'claude-sonnet-4',
        temperature: 0.7,
        maxTokens: 4096,
        topP: 1.0,
        streaming: true
      },
      permissions: {
        files: {
          read: ['src/**', 'docs/**'],
          write: ['src/**'],
          deny: ['*.key', '*.pem', '.env*']
        },
        network: {
          allow: ['https://api.anthropic.com'],
          deny: ['*']
        },
        commands: {
          allow: ['npm test', 'git status'],
          deny: ['rm -rf', 'sudo']
        },
        secrets: {
          bindings: {
            'OPENAI_API_KEY': 'env:OPENAI_API_KEY'
          }
        }
      }
    };
    
    const result = validateContext(full);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
  
  test('rejects missing version', () => {
    const invalid = {
      rules: ['rules/style.md']
    };
    
    const result = validateContext(invalid);
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
    expect(result.errors[0].keyword).toBe('required');
  });
  
  test('rejects wrong version format', () => {
    const invalid = {
      version: '2.0'
    };
    
    const result = validateContext(invalid);
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });
  
  test('rejects invalid temperature range', () => {
    const invalid = {
      version: '1.0',
      settings: {
        temperature: 3.0  // Max is 2.0
      }
    };
    
    const result = validateContext(invalid);
    expect(result.valid).toBe(false);
    expect(result.errors.some(e => e.keyword === 'maximum')).toBe(true);
  });
  
  test('rejects negative maxTokens', () => {
    const invalid = {
      version: '1.0',
      settings: {
        maxTokens: -100
      }
    };
    
    const result = validateContext(invalid);
    expect(result.valid).toBe(false);
  });
  
  test('validates all optional fields', () => {
    const withOptionals: Context = {
      version: '1.0',
      metadata: {
        name: 'Test',
        tags: ['test']
      },
      rules: [],
      context: [],
      agents: [],
      prompts: [],
      tools: [],
      knowledge: []
    };
    
    const result = validateContext(withOptionals);
    expect(result.valid).toBe(true);
  });
  
  test('rejects additional properties', () => {
    const invalid = {
      version: '1.0',
      unknownField: 'should not be here'
    };
    
    const result = validateContext(invalid);
    expect(result.valid).toBe(false);
    expect(result.errors.some(e => e.keyword === 'additionalProperties')).toBe(true);
  });
  
  test('validates empty arrays', () => {
    const valid: Context = {
      version: '1.0',
      rules: [],
      context: []
    };
    
    const result = validateContext(valid);
    expect(result.valid).toBe(true);
  });
});
