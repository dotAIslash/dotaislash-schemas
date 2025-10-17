// File: dotaislash-schemas/tests/agent.test.ts
// What: Tests for agent schema validation
// Why: Ensure agent definitions are validated correctly
// Related: src/validator.ts, schemas/agent.schema.json

import { describe, test, expect } from 'vitest';
import { validateAgent } from '../src/validator.js';
import type { Agent } from '../src/types.js';

describe('Agent Schema Validation', () => {
  test('validates minimal agent', () => {
    const agent: Agent = {
      version: '1.0',
      name: 'Code Reviewer'
    };
    
    const result = validateAgent(agent);
    expect(result.valid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
  
  test('validates full agent definition', () => {
    const agent: Agent = {
      version: '1.0',
      name: 'Code Reviewer',
      description: 'Reviews code for quality and best practices',
      model: 'claude-sonnet-4',
      temperature: 0.3,
      maxTokens: 4096,
      tools: ['tools/linter.json', 'tools/test-runner.json'],
      rules: ['rules/review-checklist.md'],
      systemPrompt: 'You are an expert code reviewer.',
      capabilities: ['code-review', 'security-audit', 'performance-analysis']
    };
    
    const result = validateAgent(agent);
    expect(result.valid).toBe(true);
  });
  
  test('rejects missing name', () => {
    const invalid = {
      version: '1.0',
      description: 'An agent without a name'
    };
    
    const result = validateAgent(invalid);
    expect(result.valid).toBe(false);
    expect(result.errors.some(e => e.keyword === 'required')).toBe(true);
  });
  
  test('rejects empty name', () => {
    const invalid = {
      version: '1.0',
      name: ''
    };
    
    const result = validateAgent(invalid);
    expect(result.valid).toBe(false);
    expect(result.errors.some(e => e.keyword === 'minLength')).toBe(true);
  });
  
  test('rejects temperature out of range', () => {
    const invalid = {
      version: '1.0',
      name: 'Test Agent',
      temperature: 2.5  // Max is 2.0
    };
    
    const result = validateAgent(invalid);
    expect(result.valid).toBe(false);
    expect(result.errors.some(e => e.keyword === 'maximum')).toBe(true);
  });
  
  test('rejects negative temperature', () => {
    const invalid = {
      version: '1.0',
      name: 'Test Agent',
      temperature: -0.1
    };
    
    const result = validateAgent(invalid);
    expect(result.valid).toBe(false);
    expect(result.errors.some(e => e.keyword === 'minimum')).toBe(true);
  });
  
  test('validates agent with all tools and rules', () => {
    const agent: Agent = {
      version: '1.0',
      name: 'Multi-Tool Agent',
      tools: ['tool1.json', 'tool2.json', 'tool3.json'],
      rules: ['rule1.md', 'rule2.md', 'rule3.md']
    };
    
    const result = validateAgent(agent);
    expect(result.valid).toBe(true);
  });
  
  test('validates agent with empty arrays', () => {
    const agent: Agent = {
      version: '1.0',
      name: 'Simple Agent',
      tools: [],
      rules: [],
      capabilities: []
    };
    
    const result = validateAgent(agent);
    expect(result.valid).toBe(true);
  });
});
