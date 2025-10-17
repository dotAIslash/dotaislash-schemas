// File: dotaislash-schemas/tests/validator.test.ts
// What: Tests for validator functions and error reporting
// Why: Ensure validation functions return correct results and helpful errors
// Related: src/validator.ts

import { describe, test, expect } from 'vitest';
import { validateContext, validateProfile, validateAgent, validateTool, validateKnowledge, validateMemory } from '../src/validator.js';

describe('Validator Functions', () => {
  test('validateContext returns correct structure', () => {
    const result = validateContext({ version: '1.0' });
    
    expect(result).toHaveProperty('valid');
    expect(result).toHaveProperty('errors');
    expect(typeof result.valid).toBe('boolean');
    expect(Array.isArray(result.errors)).toBe(true);
  });
  
  test('validation errors include helpful information', () => {
    const invalid = {
      version: '1.0',
      settings: {
        temperature: 5.0  // Invalid: max is 2.0
      }
    };
    
    const result = validateContext(invalid);
    
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
    
    const error = result.errors[0];
    expect(error).toHaveProperty('instancePath');
    expect(error).toHaveProperty('schemaPath');
    expect(error).toHaveProperty('keyword');
    expect(error).toHaveProperty('message');
  });
  
  test('validation succeeds with null data returns errors', () => {
    const result = validateContext(null);
    
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });
  
  test('validation succeeds with undefined data returns errors', () => {
    const result = validateContext(undefined);
    
    expect(result.valid).toBe(false);
    expect(result.errors.length).toBeGreaterThan(0);
  });
  
  test('all validators handle invalid input gracefully', () => {
    const invalidData = { invalid: 'data' };
    
    expect(() => validateContext(invalidData)).not.toThrow();
    expect(() => validateProfile(invalidData)).not.toThrow();
    expect(() => validateAgent(invalidData)).not.toThrow();
    expect(() => validateTool(invalidData)).not.toThrow();
    expect(() => validateKnowledge(invalidData)).not.toThrow();
    expect(() => validateMemory(invalidData)).not.toThrow();
  });
  
  test('validation errors are descriptive', () => {
    const invalid = {
      version: '1.0',
      rules: 'should-be-array'  // Wrong type
    };
    
    const result = validateContext(invalid);
    
    expect(result.valid).toBe(false);
    const typeError = result.errors.find(e => e.keyword === 'type');
    expect(typeError).toBeDefined();
    expect(typeError?.message).toBeTruthy();
  });
});
