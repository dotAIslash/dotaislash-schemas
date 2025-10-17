// File: dotaislash-schemas/src/schemas.ts
// What: Export JSON Schema definitions as typed constants
// Why: Provide programmatic access to schemas for validation and tooling
// Related: schemas/*.json, types.ts, validator.ts
import contextSchemaJson from '../schemas/context.schema.json';
import profileSchemaJson from '../schemas/profile.schema.json';
import agentSchemaJson from '../schemas/agent.schema.json';
import ruleMetadataSchemaJson from '../schemas/rule-metadata.schema.json';
import toolSchemaJson from '../schemas/tool.schema.json';
import knowledgeSchemaJson from '../schemas/knowledge.schema.json';
import memorySchemaJson from '../schemas/memory.schema.json';
import permissionsSchemaJson from '../schemas/permissions.schema.json';
/**
 * JSON Schema for VERSA context.json
 */
export const contextSchema = contextSchemaJson;
/**
 * JSON Schema for VERSA profile configurations
 */
export const profileSchema = profileSchemaJson;
/**
 * JSON Schema for VERSA agent definitions
 */
export const agentSchema = agentSchemaJson;
/**
 * JSON Schema for VERSA rule metadata (front matter)
 */
export const ruleMetadataSchema = ruleMetadataSchemaJson;
/**
 * JSON Schema for VERSA tool configurations
 */
export const toolSchema = toolSchemaJson;
/**
 * JSON Schema for VERSA knowledge configurations
 */
export const knowledgeSchema = knowledgeSchemaJson;
/**
 * JSON Schema for VERSA memory policies
 */
export const memorySchema = memorySchemaJson;
/**
 * JSON Schema for VERSA permissions
 */
export const permissionsSchema = permissionsSchemaJson;
/**
 * All schemas as a map
 */
export const schemas = {
    context: contextSchema,
    profile: profileSchema,
    agent: agentSchema,
    ruleMeta: ruleMetadataSchema,
    tool: toolSchema,
    knowledge: knowledgeSchema,
    memory: memorySchema,
    permissions: permissionsSchema,
};
//# sourceMappingURL=schemas.js.map