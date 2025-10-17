// File: dotaislash-schemas/tests/profile.test.ts
// What: Tests for profile schema validation
// Why: Ensure profile schema correctly validates tool-specific overrides
// Related: src/validator.ts, schemas/profile.schema.json

import { describe, test, expect } from 'vitest';
import { validateProfile } from '../src/validator.js';
import type { Profile } from '../src/types.js';

describe('Profile Schema Validation', () => {
  test('validates deep merge profile', () => {
    const profile: Profile = {
      version: '1.0',
      merge: 'deep',
      rules: ['rules/cursor-specific.md']
    };
    
    const result = validateProfile(profile);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
  
  test('validates shallow merge profile', () => {
    const profile: Profile = {
      version: '1.0',
      merge: 'shallow',
      context: ['src/**/*.tsx']
    };
    
    const result = validateProfile(profile);
    expect(result.valid).toBe(true);
  });
  
  test('validates replace profile', () => {
    const profile: Profile = {
      version: '1.0',
      merge: 'replace',
      settings: {
        model: 'gpt-4-turbo'
      }
    };
    
    const result = validateProfile(profile);
    expect(result.valid).toBe(true);
  });
  
  test('rejects missing merge strategy', () => {
    const invalid = {
      version: '1.0',
      rules: ['rules/test.md']
    };
    
    const result = validateProfile(invalid);
    expect(result.valid).toBe(false);
    expect(result.errors.some(e => e.keyword === 'required')).toBe(true);
  });
  
  test('rejects invalid merge value', () => {
    const invalid = {
      version: '1.0',
      merge: 'invalid-strategy'
    };
    
    const result = validateProfile(invalid);
    expect(result.valid).toBe(false);
    expect(result.errors.some(e => e.keyword === 'enum')).toBe(true);
  });
  
  test('validates profile with all fields', () => {
    const full: Profile = {
      version: '1.0',
      merge: 'deep',
      metadata: {
        name: 'Cursor Profile',
        description: 'Cursor-specific overrides'
      },
      rules: ['rules/cursor.md'],
      context: ['**/*.tsx'],
      agents: ['agents/cursor-agent.json'],
      prompts: ['prompts/cursor-prompt.md'],
      tools: ['tools/cursor-tools.json'],
      knowledge: ['knowledge/cursor-docs.json'],
      settings: {
        model: 'claude-sonnet-4',
        temperature: 0.5,
        customField: 'allowed'  // settings allows additional properties
      },
      permissions: {
        files: {
          read: ['**/*']
        }
      }
    };
    
    const result = validateProfile(full);
    expect(result.valid).toBe(true);
  });
  
  test('allows partial settings override', () => {
    const profile: Profile = {
      version: '1.0',
      merge: 'deep',
      settings: {
        temperature: 0.3  // Only override temperature
      }
    };
    
    const result = validateProfile(profile);
    expect(result.valid).toBe(true);
  });
});
