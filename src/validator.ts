// File: dotaislash-schemas/src/validator.ts
// What: JSON Schema validation using Ajv
// Why: Provide runtime validation for all VERSA configurations
// Related: schemas.ts, types.ts, formats.ts

import Ajv, { type ErrorObject } from 'ajv';
import addFormats from 'ajv-formats';
import type { ValidationResult, Context, Profile, Agent, RuleMeta, ToolConfig, KnowledgeConfig, MemoryConfig, Permissions } from './types.js';
import { schemas } from './schemas.js';
import { formats } from './formats.js';

/**
 * Create and configure Ajv instance
 */
function createValidator(): Ajv {
  const ajv = new Ajv({
    allErrors: true,
    verbose: true,
    strict: false,  // Don't validate against meta-schema
    validateFormats: true,
    validateSchema: false,  // Skip meta-schema validation
  });
  
  // Add standard formats (date, uri, email, etc.)
  addFormats(ajv);
  
  // Add custom formats
  for (const [name, validator] of Object.entries(formats)) {
    ajv.addFormat(name, validator);
  }
  
  // Add all schemas
  ajv.addSchema(schemas.context, 'context');
  ajv.addSchema(schemas.profile, 'profile');
  ajv.addSchema(schemas.agent, 'agent');
  ajv.addSchema(schemas.ruleMeta, 'ruleMeta');
  ajv.addSchema(schemas.tool, 'tool');
  ajv.addSchema(schemas.knowledge, 'knowledge');
  ajv.addSchema(schemas.memory, 'memory');
  ajv.addSchema(schemas.permissions, 'permissions');
  
  return ajv;
}

/**
 * Global Ajv instance (lazy-initialized)
 */
let ajv: Ajv | null = null;

function getAjv(): Ajv {
  if (!ajv) {
    ajv = createValidator();
  }
  return ajv;
}

/**
 * Convert Ajv errors to ValidationResult
 */
function toValidationResult(errors: ErrorObject[] | null | undefined): ValidationResult {
  if (!errors || errors.length === 0) {
    return { valid: true, errors: [] };
  }
  
  return {
    valid: false,
    errors: errors.map(err => ({
      instancePath: err.instancePath || '/',
      schemaPath: err.schemaPath || '',
      keyword: err.keyword || 'unknown',
      params: err.params || {},
      message: err.message,
    })),
  };
}

/**
 * Validate context.json configuration
 */
export function validateContext(data: unknown): ValidationResult {
  const instance = getAjv();
  const validate = instance.getSchema<Context>('context');
  if (!validate) {
    throw new Error('Context schema not found');
  }
  
  validate(data);
  return toValidationResult(validate.errors);
}

/**
 * Validate profile configuration
 */
export function validateProfile(data: unknown): ValidationResult {
  const instance = getAjv();
  const validate = instance.getSchema<Profile>('profile');
  if (!validate) {
    throw new Error('Profile schema not found');
  }
  
  validate(data);
  return toValidationResult(validate.errors);
}

/**
 * Validate agent definition
 */
export function validateAgent(data: unknown): ValidationResult {
  const instance = getAjv();
  const validate = instance.getSchema<Agent>('agent');
  if (!validate) {
    throw new Error('Agent schema not found');
  }
  
  validate(data);
  return toValidationResult(validate.errors);
}

/**
 * Validate rule metadata
 */
export function validateRuleMeta(data: unknown): ValidationResult {
  const instance = getAjv();
  const validate = instance.getSchema<RuleMeta>('ruleMeta');
  if (!validate) {
    throw new Error('Rule metadata schema not found');
  }
  
  validate(data);
  return toValidationResult(validate.errors);
}

/**
 * Validate tool configuration
 */
export function validateTool(data: unknown): ValidationResult {
  const instance = getAjv();
  const validate = instance.getSchema<ToolConfig>('tool');
  if (!validate) {
    throw new Error('Tool schema not found');
  }
  
  validate(data);
  return toValidationResult(validate.errors);
}

/**
 * Validate knowledge configuration
 */
export function validateKnowledge(data: unknown): ValidationResult {
  const instance = getAjv();
  const validate = instance.getSchema<KnowledgeConfig>('knowledge');
  if (!validate) {
    throw new Error('Knowledge schema not found');
  }
  
  validate(data);
  return toValidationResult(validate.errors);
}

/**
 * Validate memory policy configuration
 */
export function validateMemory(data: unknown): ValidationResult {
  const instance = getAjv();
  const validate = instance.getSchema<MemoryConfig>('memory');
  if (!validate) {
    throw new Error('Memory schema not found');
  }
  
  validate(data);
  return toValidationResult(validate.errors);
}

/**
 * Validate permissions configuration
 */
export function validatePermissions(data: unknown): ValidationResult {
  const instance = getAjv();
  const validate = instance.getSchema<Permissions>('permissions');
  if (!validate) {
    throw new Error('Permissions schema not found');
  }
  
  validate(data);
  return toValidationResult(validate.errors);
}

/**
 * Export the Ajv instance getter for advanced usage
 */
export { getAjv as ajv };
