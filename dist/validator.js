// File: dotaislash-schemas/src/validator.ts
// What: JSON Schema validation using Ajv
// Why: Provide runtime validation for all VERSA configurations
// Related: schemas.ts, types.ts, formats.ts
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { schemas } from './schemas.js';
import { formats } from './formats.js';
/**
 * Create and configure Ajv instance
 */
function createValidator() {
    const ajv = new Ajv({
        allErrors: true,
        verbose: true,
        strict: false, // Don't validate against meta-schema
        validateFormats: true,
        validateSchema: false, // Skip meta-schema validation
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
let ajv = null;
function getAjv() {
    if (!ajv) {
        ajv = createValidator();
    }
    return ajv;
}
/**
 * Convert Ajv errors to ValidationResult
 */
function toValidationResult(errors) {
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
export function validateContext(data) {
    const instance = getAjv();
    const validate = instance.getSchema('context');
    if (!validate) {
        throw new Error('Context schema not found');
    }
    validate(data);
    return toValidationResult(validate.errors);
}
/**
 * Validate profile configuration
 */
export function validateProfile(data) {
    const instance = getAjv();
    const validate = instance.getSchema('profile');
    if (!validate) {
        throw new Error('Profile schema not found');
    }
    validate(data);
    return toValidationResult(validate.errors);
}
/**
 * Validate agent definition
 */
export function validateAgent(data) {
    const instance = getAjv();
    const validate = instance.getSchema('agent');
    if (!validate) {
        throw new Error('Agent schema not found');
    }
    validate(data);
    return toValidationResult(validate.errors);
}
/**
 * Validate rule metadata
 */
export function validateRuleMeta(data) {
    const instance = getAjv();
    const validate = instance.getSchema('ruleMeta');
    if (!validate) {
        throw new Error('Rule metadata schema not found');
    }
    validate(data);
    return toValidationResult(validate.errors);
}
/**
 * Validate tool configuration
 */
export function validateTool(data) {
    const instance = getAjv();
    const validate = instance.getSchema('tool');
    if (!validate) {
        throw new Error('Tool schema not found');
    }
    validate(data);
    return toValidationResult(validate.errors);
}
/**
 * Validate knowledge configuration
 */
export function validateKnowledge(data) {
    const instance = getAjv();
    const validate = instance.getSchema('knowledge');
    if (!validate) {
        throw new Error('Knowledge schema not found');
    }
    validate(data);
    return toValidationResult(validate.errors);
}
/**
 * Validate memory policy configuration
 */
export function validateMemory(data) {
    const instance = getAjv();
    const validate = instance.getSchema('memory');
    if (!validate) {
        throw new Error('Memory schema not found');
    }
    validate(data);
    return toValidationResult(validate.errors);
}
/**
 * Validate permissions configuration
 */
export function validatePermissions(data) {
    const instance = getAjv();
    const validate = instance.getSchema('permissions');
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
//# sourceMappingURL=validator.js.map