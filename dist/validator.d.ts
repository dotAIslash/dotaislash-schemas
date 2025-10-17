import Ajv from 'ajv';
import type { ValidationResult } from './types.js';
declare function getAjv(): Ajv;
/**
 * Validate context.json configuration
 */
export declare function validateContext(data: unknown): ValidationResult;
/**
 * Validate profile configuration
 */
export declare function validateProfile(data: unknown): ValidationResult;
/**
 * Validate agent definition
 */
export declare function validateAgent(data: unknown): ValidationResult;
/**
 * Validate rule metadata
 */
export declare function validateRuleMeta(data: unknown): ValidationResult;
/**
 * Validate tool configuration
 */
export declare function validateTool(data: unknown): ValidationResult;
/**
 * Validate knowledge configuration
 */
export declare function validateKnowledge(data: unknown): ValidationResult;
/**
 * Validate memory policy configuration
 */
export declare function validateMemory(data: unknown): ValidationResult;
/**
 * Validate permissions configuration
 */
export declare function validatePermissions(data: unknown): ValidationResult;
/**
 * Export the Ajv instance getter for advanced usage
 */
export { getAjv as ajv };
//# sourceMappingURL=validator.d.ts.map