/**
 * VERSA Context Configuration
 * Base configuration file for VERSA 1.0
 */
export interface Context {
    version: '1.0';
    metadata?: Metadata;
    rules?: string[];
    context?: string[];
    agents?: string[];
    prompts?: string[];
    tools?: string[];
    knowledge?: string[];
    settings?: Settings;
    permissions?: Permissions;
}
/**
 * VERSA Profile Configuration
 * Tool-specific configuration overrides
 */
export interface Profile {
    version: '1.0';
    merge: 'deep' | 'shallow' | 'replace';
    metadata?: Metadata;
    rules?: string[];
    context?: string[];
    agents?: string[];
    prompts?: string[];
    tools?: string[];
    knowledge?: string[];
    settings?: Partial<Settings> & Record<string, unknown>;
    permissions?: Partial<Permissions>;
}
/**
 * VERSA Agent Definition
 * Declarative agent configuration
 */
export interface Agent {
    version: '1.0';
    name: string;
    description?: string;
    model?: string;
    temperature?: number;
    maxTokens?: number;
    tools?: string[];
    rules?: string[];
    systemPrompt?: string;
    capabilities?: string[];
}
/**
 * Rule Metadata
 * Front matter for Markdown rule files
 */
export interface RuleMeta {
    priority?: 'low' | 'medium' | 'high' | 'critical';
    attach?: 'always' | 'on-demand' | 'never';
    scope?: string | string[];
    applies_to?: string[];
    created?: string;
    updated?: string;
    author?: string;
    variables?: VariableDefinition[];
}
/**
 * Variable definition for template rules
 */
export interface VariableDefinition {
    name: string;
    type: 'string' | 'number' | 'boolean' | 'array' | 'object';
    required?: boolean;
    default?: unknown;
    enum?: unknown[];
    description?: string;
}
/**
 * Tool Configuration
 * MCP server and API configurations
 */
export interface ToolConfig {
    version: '1.0';
    servers: Server[];
}
/**
 * Server definition for tools
 */
export interface Server {
    name: string;
    type: 'mcp' | 'http' | 'grpc';
    command?: string;
    args?: string[];
    env?: Record<string, string>;
    baseUrl?: string;
    auth?: {
        type: 'none' | 'basic' | 'bearer' | 'api-key';
        tokenEnv?: string;
        header?: string;
    };
    timeout?: number;
    enabled?: boolean;
}
/**
 * Knowledge Configuration
 * Knowledge source ingestion configuration
 */
export interface KnowledgeConfig {
    version: '1.0';
    sources: KnowledgeSource[];
    redaction?: {
        patterns?: string[];
        fields?: string[];
    };
}
/**
 * Knowledge source definition
 */
export interface KnowledgeSource {
    type: 'repository' | 'url' | 'file' | 'rss';
    url: string;
    paths?: string[];
    selector?: string;
    refresh?: 'never' | 'hourly' | 'daily' | 'weekly' | 'monthly';
    enabled?: boolean;
}
/**
 * Memory Policy Configuration
 * Memory retention policies for agent sessions
 */
export interface MemoryConfig {
    version: '1.0';
    retention: {
        session?: MemoryRetention;
        project?: ProjectMemoryRetention;
        persistent?: PersistentMemoryRetention;
    };
}
/**
 * Session-level memory retention
 */
export interface MemoryRetention {
    enabled?: boolean;
    duration?: string;
    maxSize?: string;
}
/**
 * Project-level memory retention
 */
export interface ProjectMemoryRetention extends MemoryRetention {
    persist?: Array<'decisions' | 'patterns' | 'conventions' | 'preferences' | 'corrections'>;
}
/**
 * Persistent memory retention
 */
export interface PersistentMemoryRetention {
    enabled?: boolean;
    maxSize?: string;
}
/**
 * Permissions Configuration
 * Security and access control policies
 */
export interface Permissions {
    files?: {
        read?: string[];
        write?: string[];
        deny?: string[];
    };
    network?: {
        allow?: string[];
        deny?: string[];
    };
    commands?: {
        allow?: string[];
        deny?: string[];
    };
    secrets?: {
        bindings?: Record<string, string>;
    };
}
/**
 * Settings Configuration
 * Model and runtime preferences
 */
export interface Settings {
    model?: string;
    temperature?: number;
    maxTokens?: number;
    topP?: number;
    streaming?: boolean;
}
/**
 * Metadata for configurations
 */
export interface Metadata {
    name?: string;
    description?: string;
    tags?: string[];
    author?: string;
    created?: string;
    updated?: string;
    license?: string;
}
/**
 * Validation result
 */
export interface ValidationResult {
    valid: boolean;
    errors: ValidationError[];
}
/**
 * Validation error
 */
export interface ValidationError {
    instancePath: string;
    schemaPath: string;
    keyword: string;
    params: Record<string, unknown>;
    message?: string;
}
//# sourceMappingURL=types.d.ts.map