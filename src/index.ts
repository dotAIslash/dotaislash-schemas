// File: dotaislash-schemas/src/index.ts
// What: Main entry point for @dotaislash/schemas package
// Why: Export all schemas, types, and validators for external use
// Related: schemas.ts, types.ts, validator.ts, formats.ts

// Export schemas
export { schemas, contextSchema, profileSchema, agentSchema, ruleMetadataSchema, toolSchema, knowledgeSchema, memorySchema, permissionsSchema } from './schemas.js';

// Export types
export type { Context, Profile, Agent, RuleMeta, VariableDefinition, ToolConfig, Server, KnowledgeConfig, KnowledgeSource, MemoryConfig, MemoryRetention, ProjectMemoryRetention, PersistentMemoryRetention, Permissions, Settings, Metadata, ValidationResult, ValidationError } from './types.js';

// Export validators
export { validateContext, validateProfile, validateAgent, validateRuleMeta, validateTool, validateKnowledge, validateMemory, validatePermissions, ajv } from './validator.js';

// Export formats
export { formats, globPattern, modelName, filePath } from './formats.js';
