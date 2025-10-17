/**
 * JSON Schema for VERSA context.json
 */
export declare const contextSchema: {
    $schema: string;
    $id: string;
    title: string;
    description: string;
    type: string;
    required: string[];
    properties: {
        version: {
            type: string;
            enum: string[];
            description: string;
        };
        metadata: {
            type: string;
            description: string;
            properties: {
                name: {
                    type: string;
                    description: string;
                };
                description: {
                    type: string;
                    description: string;
                };
                tags: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                };
                author: {
                    type: string;
                    description: string;
                };
                created: {
                    type: string;
                    format: string;
                    description: string;
                };
                updated: {
                    type: string;
                    format: string;
                    description: string;
                };
                license: {
                    type: string;
                    description: string;
                };
            };
        };
        rules: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        context: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        agents: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        prompts: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        tools: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        knowledge: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        settings: {
            type: string;
            description: string;
            properties: {
                model: {
                    type: string;
                    description: string;
                };
                temperature: {
                    type: string;
                    minimum: number;
                    maximum: number;
                    description: string;
                };
                maxTokens: {
                    type: string;
                    minimum: number;
                    description: string;
                };
                topP: {
                    type: string;
                    minimum: number;
                    maximum: number;
                    description: string;
                };
                streaming: {
                    type: string;
                    description: string;
                };
            };
        };
        permissions: {
            type: string;
            description: string;
            properties: {
                files: {
                    type: string;
                    properties: {
                        read: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                        write: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                        deny: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                    };
                };
                network: {
                    type: string;
                    properties: {
                        allow: {
                            type: string;
                            items: {
                                type: string;
                                format: string;
                            };
                            description: string;
                        };
                        deny: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                    };
                };
                commands: {
                    type: string;
                    properties: {
                        allow: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                        deny: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                    };
                };
                secrets: {
                    type: string;
                    properties: {
                        bindings: {
                            type: string;
                            additionalProperties: {
                                type: string;
                            };
                            description: string;
                        };
                    };
                };
            };
        };
    };
    additionalProperties: boolean;
};
/**
 * JSON Schema for VERSA profile configurations
 */
export declare const profileSchema: {
    $schema: string;
    $id: string;
    title: string;
    description: string;
    type: string;
    required: string[];
    properties: {
        version: {
            type: string;
            enum: string[];
            description: string;
        };
        merge: {
            type: string;
            enum: string[];
            description: string;
        };
        metadata: {
            type: string;
            description: string;
            properties: {
                name: {
                    type: string;
                };
                description: {
                    type: string;
                };
                tags: {
                    type: string;
                    items: {
                        type: string;
                    };
                };
            };
        };
        rules: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        context: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        agents: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        prompts: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        tools: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        knowledge: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        settings: {
            type: string;
            description: string;
            properties: {
                model: {
                    type: string;
                };
                temperature: {
                    type: string;
                    minimum: number;
                    maximum: number;
                };
                maxTokens: {
                    type: string;
                    minimum: number;
                };
                topP: {
                    type: string;
                    minimum: number;
                    maximum: number;
                };
                streaming: {
                    type: string;
                };
            };
            additionalProperties: boolean;
        };
        permissions: {
            type: string;
            description: string;
            properties: {
                files: {
                    type: string;
                    properties: {
                        read: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                        write: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                        deny: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                    };
                };
                network: {
                    type: string;
                    properties: {
                        allow: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                        deny: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                    };
                };
                commands: {
                    type: string;
                    properties: {
                        allow: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                        deny: {
                            type: string;
                            items: {
                                type: string;
                            };
                        };
                    };
                };
                secrets: {
                    type: string;
                    properties: {
                        bindings: {
                            type: string;
                            additionalProperties: {
                                type: string;
                            };
                        };
                    };
                };
            };
        };
    };
    additionalProperties: boolean;
};
/**
 * JSON Schema for VERSA agent definitions
 */
export declare const agentSchema: {
    $schema: string;
    $id: string;
    title: string;
    description: string;
    type: string;
    required: string[];
    properties: {
        version: {
            type: string;
            enum: string[];
            description: string;
        };
        name: {
            type: string;
            minLength: number;
            description: string;
        };
        description: {
            type: string;
            description: string;
        };
        model: {
            type: string;
            description: string;
        };
        temperature: {
            type: string;
            minimum: number;
            maximum: number;
            description: string;
        };
        maxTokens: {
            type: string;
            minimum: number;
            description: string;
        };
        tools: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        rules: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        systemPrompt: {
            type: string;
            description: string;
        };
        capabilities: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
    };
    additionalProperties: boolean;
};
/**
 * JSON Schema for VERSA rule metadata (front matter)
 */
export declare const ruleMetadataSchema: {
    $schema: string;
    $id: string;
    title: string;
    description: string;
    type: string;
    properties: {
        priority: {
            type: string;
            enum: string[];
            default: string;
            description: string;
        };
        attach: {
            type: string;
            enum: string[];
            default: string;
            description: string;
        };
        scope: {
            oneOf: ({
                type: string;
                items?: undefined;
            } | {
                type: string;
                items: {
                    type: string;
                };
            })[];
            description: string;
        };
        applies_to: {
            type: string;
            items: {
                type: string;
            };
            description: string;
        };
        created: {
            type: string;
            format: string;
            description: string;
        };
        updated: {
            type: string;
            format: string;
            description: string;
        };
        author: {
            type: string;
            description: string;
        };
        variables: {
            type: string;
            items: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                    };
                    type: {
                        type: string;
                        enum: string[];
                    };
                    required: {
                        type: string;
                        default: boolean;
                    };
                    default: {
                        description: string;
                    };
                    enum: {
                        type: string;
                        description: string;
                    };
                    description: {
                        type: string;
                    };
                };
            };
            description: string;
        };
    };
    additionalProperties: boolean;
};
/**
 * JSON Schema for VERSA tool configurations
 */
export declare const toolSchema: {
    $schema: string;
    $id: string;
    title: string;
    description: string;
    type: string;
    required: string[];
    properties: {
        version: {
            type: string;
            enum: string[];
            description: string;
        };
        servers: {
            type: string;
            items: {
                type: string;
                required: string[];
                properties: {
                    name: {
                        type: string;
                        minLength: number;
                        description: string;
                    };
                    type: {
                        type: string;
                        enum: string[];
                        description: string;
                    };
                    command: {
                        type: string;
                        description: string;
                    };
                    args: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                    env: {
                        type: string;
                        additionalProperties: {
                            type: string;
                        };
                        description: string;
                    };
                    baseUrl: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    auth: {
                        type: string;
                        properties: {
                            type: {
                                type: string;
                                enum: string[];
                                description: string;
                            };
                            tokenEnv: {
                                type: string;
                                description: string;
                            };
                            header: {
                                type: string;
                                description: string;
                            };
                        };
                        description: string;
                    };
                    timeout: {
                        type: string;
                        minimum: number;
                        description: string;
                    };
                    enabled: {
                        type: string;
                        default: boolean;
                        description: string;
                    };
                };
            };
            description: string;
        };
    };
    additionalProperties: boolean;
};
/**
 * JSON Schema for VERSA knowledge configurations
 */
export declare const knowledgeSchema: {
    $schema: string;
    $id: string;
    title: string;
    description: string;
    type: string;
    required: string[];
    properties: {
        version: {
            type: string;
            enum: string[];
            description: string;
        };
        sources: {
            type: string;
            items: {
                type: string;
                required: string[];
                properties: {
                    type: {
                        type: string;
                        enum: string[];
                        description: string;
                    };
                    url: {
                        type: string;
                        description: string;
                    };
                    paths: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                    selector: {
                        type: string;
                        description: string;
                    };
                    refresh: {
                        type: string;
                        enum: string[];
                        default: string;
                        description: string;
                    };
                    enabled: {
                        type: string;
                        default: boolean;
                        description: string;
                    };
                };
            };
            description: string;
        };
        redaction: {
            type: string;
            properties: {
                patterns: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                };
                fields: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                };
            };
            description: string;
        };
    };
    additionalProperties: boolean;
};
/**
 * JSON Schema for VERSA memory policies
 */
export declare const memorySchema: {
    $schema: string;
    $id: string;
    title: string;
    description: string;
    type: string;
    required: string[];
    properties: {
        version: {
            type: string;
            enum: string[];
            description: string;
        };
        retention: {
            type: string;
            properties: {
                session: {
                    type: string;
                    properties: {
                        enabled: {
                            type: string;
                            default: boolean;
                            description: string;
                        };
                        duration: {
                            type: string;
                            pattern: string;
                            description: string;
                        };
                        maxSize: {
                            type: string;
                            pattern: string;
                            description: string;
                        };
                    };
                    description: string;
                };
                project: {
                    type: string;
                    properties: {
                        enabled: {
                            type: string;
                            default: boolean;
                            description: string;
                        };
                        duration: {
                            type: string;
                            pattern: string;
                            description: string;
                        };
                        maxSize: {
                            type: string;
                            pattern: string;
                            description: string;
                        };
                        persist: {
                            type: string;
                            items: {
                                type: string;
                                enum: string[];
                            };
                            description: string;
                        };
                    };
                    description: string;
                };
                persistent: {
                    type: string;
                    properties: {
                        enabled: {
                            type: string;
                            default: boolean;
                            description: string;
                        };
                        maxSize: {
                            type: string;
                            pattern: string;
                            description: string;
                        };
                    };
                    description: string;
                };
            };
            description: string;
        };
    };
    additionalProperties: boolean;
};
/**
 * JSON Schema for VERSA permissions
 */
export declare const permissionsSchema: {
    $schema: string;
    $id: string;
    title: string;
    description: string;
    type: string;
    properties: {
        files: {
            type: string;
            properties: {
                read: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                };
                write: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                };
                deny: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                };
            };
            description: string;
        };
        network: {
            type: string;
            properties: {
                allow: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                };
                deny: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                };
            };
            description: string;
        };
        commands: {
            type: string;
            properties: {
                allow: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                };
                deny: {
                    type: string;
                    items: {
                        type: string;
                    };
                    description: string;
                };
            };
            description: string;
        };
        secrets: {
            type: string;
            properties: {
                bindings: {
                    type: string;
                    additionalProperties: {
                        type: string;
                    };
                    description: string;
                };
            };
            description: string;
        };
    };
    additionalProperties: boolean;
};
/**
 * All schemas as a map
 */
export declare const schemas: {
    readonly context: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        required: string[];
        properties: {
            version: {
                type: string;
                enum: string[];
                description: string;
            };
            metadata: {
                type: string;
                description: string;
                properties: {
                    name: {
                        type: string;
                        description: string;
                    };
                    description: {
                        type: string;
                        description: string;
                    };
                    tags: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                    author: {
                        type: string;
                        description: string;
                    };
                    created: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    updated: {
                        type: string;
                        format: string;
                        description: string;
                    };
                    license: {
                        type: string;
                        description: string;
                    };
                };
            };
            rules: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            context: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            agents: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            prompts: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            tools: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            knowledge: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            settings: {
                type: string;
                description: string;
                properties: {
                    model: {
                        type: string;
                        description: string;
                    };
                    temperature: {
                        type: string;
                        minimum: number;
                        maximum: number;
                        description: string;
                    };
                    maxTokens: {
                        type: string;
                        minimum: number;
                        description: string;
                    };
                    topP: {
                        type: string;
                        minimum: number;
                        maximum: number;
                        description: string;
                    };
                    streaming: {
                        type: string;
                        description: string;
                    };
                };
            };
            permissions: {
                type: string;
                description: string;
                properties: {
                    files: {
                        type: string;
                        properties: {
                            read: {
                                type: string;
                                items: {
                                    type: string;
                                };
                                description: string;
                            };
                            write: {
                                type: string;
                                items: {
                                    type: string;
                                };
                                description: string;
                            };
                            deny: {
                                type: string;
                                items: {
                                    type: string;
                                };
                                description: string;
                            };
                        };
                    };
                    network: {
                        type: string;
                        properties: {
                            allow: {
                                type: string;
                                items: {
                                    type: string;
                                    format: string;
                                };
                                description: string;
                            };
                            deny: {
                                type: string;
                                items: {
                                    type: string;
                                };
                                description: string;
                            };
                        };
                    };
                    commands: {
                        type: string;
                        properties: {
                            allow: {
                                type: string;
                                items: {
                                    type: string;
                                };
                                description: string;
                            };
                            deny: {
                                type: string;
                                items: {
                                    type: string;
                                };
                                description: string;
                            };
                        };
                    };
                    secrets: {
                        type: string;
                        properties: {
                            bindings: {
                                type: string;
                                additionalProperties: {
                                    type: string;
                                };
                                description: string;
                            };
                        };
                    };
                };
            };
        };
        additionalProperties: boolean;
    };
    readonly profile: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        required: string[];
        properties: {
            version: {
                type: string;
                enum: string[];
                description: string;
            };
            merge: {
                type: string;
                enum: string[];
                description: string;
            };
            metadata: {
                type: string;
                description: string;
                properties: {
                    name: {
                        type: string;
                    };
                    description: {
                        type: string;
                    };
                    tags: {
                        type: string;
                        items: {
                            type: string;
                        };
                    };
                };
            };
            rules: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            context: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            agents: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            prompts: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            tools: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            knowledge: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            settings: {
                type: string;
                description: string;
                properties: {
                    model: {
                        type: string;
                    };
                    temperature: {
                        type: string;
                        minimum: number;
                        maximum: number;
                    };
                    maxTokens: {
                        type: string;
                        minimum: number;
                    };
                    topP: {
                        type: string;
                        minimum: number;
                        maximum: number;
                    };
                    streaming: {
                        type: string;
                    };
                };
                additionalProperties: boolean;
            };
            permissions: {
                type: string;
                description: string;
                properties: {
                    files: {
                        type: string;
                        properties: {
                            read: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            write: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            deny: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                        };
                    };
                    network: {
                        type: string;
                        properties: {
                            allow: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            deny: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                        };
                    };
                    commands: {
                        type: string;
                        properties: {
                            allow: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                            deny: {
                                type: string;
                                items: {
                                    type: string;
                                };
                            };
                        };
                    };
                    secrets: {
                        type: string;
                        properties: {
                            bindings: {
                                type: string;
                                additionalProperties: {
                                    type: string;
                                };
                            };
                        };
                    };
                };
            };
        };
        additionalProperties: boolean;
    };
    readonly agent: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        required: string[];
        properties: {
            version: {
                type: string;
                enum: string[];
                description: string;
            };
            name: {
                type: string;
                minLength: number;
                description: string;
            };
            description: {
                type: string;
                description: string;
            };
            model: {
                type: string;
                description: string;
            };
            temperature: {
                type: string;
                minimum: number;
                maximum: number;
                description: string;
            };
            maxTokens: {
                type: string;
                minimum: number;
                description: string;
            };
            tools: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            rules: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            systemPrompt: {
                type: string;
                description: string;
            };
            capabilities: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
        };
        additionalProperties: boolean;
    };
    readonly ruleMeta: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        properties: {
            priority: {
                type: string;
                enum: string[];
                default: string;
                description: string;
            };
            attach: {
                type: string;
                enum: string[];
                default: string;
                description: string;
            };
            scope: {
                oneOf: ({
                    type: string;
                    items?: undefined;
                } | {
                    type: string;
                    items: {
                        type: string;
                    };
                })[];
                description: string;
            };
            applies_to: {
                type: string;
                items: {
                    type: string;
                };
                description: string;
            };
            created: {
                type: string;
                format: string;
                description: string;
            };
            updated: {
                type: string;
                format: string;
                description: string;
            };
            author: {
                type: string;
                description: string;
            };
            variables: {
                type: string;
                items: {
                    type: string;
                    required: string[];
                    properties: {
                        name: {
                            type: string;
                        };
                        type: {
                            type: string;
                            enum: string[];
                        };
                        required: {
                            type: string;
                            default: boolean;
                        };
                        default: {
                            description: string;
                        };
                        enum: {
                            type: string;
                            description: string;
                        };
                        description: {
                            type: string;
                        };
                    };
                };
                description: string;
            };
        };
        additionalProperties: boolean;
    };
    readonly tool: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        required: string[];
        properties: {
            version: {
                type: string;
                enum: string[];
                description: string;
            };
            servers: {
                type: string;
                items: {
                    type: string;
                    required: string[];
                    properties: {
                        name: {
                            type: string;
                            minLength: number;
                            description: string;
                        };
                        type: {
                            type: string;
                            enum: string[];
                            description: string;
                        };
                        command: {
                            type: string;
                            description: string;
                        };
                        args: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                        env: {
                            type: string;
                            additionalProperties: {
                                type: string;
                            };
                            description: string;
                        };
                        baseUrl: {
                            type: string;
                            format: string;
                            description: string;
                        };
                        auth: {
                            type: string;
                            properties: {
                                type: {
                                    type: string;
                                    enum: string[];
                                    description: string;
                                };
                                tokenEnv: {
                                    type: string;
                                    description: string;
                                };
                                header: {
                                    type: string;
                                    description: string;
                                };
                            };
                            description: string;
                        };
                        timeout: {
                            type: string;
                            minimum: number;
                            description: string;
                        };
                        enabled: {
                            type: string;
                            default: boolean;
                            description: string;
                        };
                    };
                };
                description: string;
            };
        };
        additionalProperties: boolean;
    };
    readonly knowledge: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        required: string[];
        properties: {
            version: {
                type: string;
                enum: string[];
                description: string;
            };
            sources: {
                type: string;
                items: {
                    type: string;
                    required: string[];
                    properties: {
                        type: {
                            type: string;
                            enum: string[];
                            description: string;
                        };
                        url: {
                            type: string;
                            description: string;
                        };
                        paths: {
                            type: string;
                            items: {
                                type: string;
                            };
                            description: string;
                        };
                        selector: {
                            type: string;
                            description: string;
                        };
                        refresh: {
                            type: string;
                            enum: string[];
                            default: string;
                            description: string;
                        };
                        enabled: {
                            type: string;
                            default: boolean;
                            description: string;
                        };
                    };
                };
                description: string;
            };
            redaction: {
                type: string;
                properties: {
                    patterns: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                    fields: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                };
                description: string;
            };
        };
        additionalProperties: boolean;
    };
    readonly memory: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        required: string[];
        properties: {
            version: {
                type: string;
                enum: string[];
                description: string;
            };
            retention: {
                type: string;
                properties: {
                    session: {
                        type: string;
                        properties: {
                            enabled: {
                                type: string;
                                default: boolean;
                                description: string;
                            };
                            duration: {
                                type: string;
                                pattern: string;
                                description: string;
                            };
                            maxSize: {
                                type: string;
                                pattern: string;
                                description: string;
                            };
                        };
                        description: string;
                    };
                    project: {
                        type: string;
                        properties: {
                            enabled: {
                                type: string;
                                default: boolean;
                                description: string;
                            };
                            duration: {
                                type: string;
                                pattern: string;
                                description: string;
                            };
                            maxSize: {
                                type: string;
                                pattern: string;
                                description: string;
                            };
                            persist: {
                                type: string;
                                items: {
                                    type: string;
                                    enum: string[];
                                };
                                description: string;
                            };
                        };
                        description: string;
                    };
                    persistent: {
                        type: string;
                        properties: {
                            enabled: {
                                type: string;
                                default: boolean;
                                description: string;
                            };
                            maxSize: {
                                type: string;
                                pattern: string;
                                description: string;
                            };
                        };
                        description: string;
                    };
                };
                description: string;
            };
        };
        additionalProperties: boolean;
    };
    readonly permissions: {
        $schema: string;
        $id: string;
        title: string;
        description: string;
        type: string;
        properties: {
            files: {
                type: string;
                properties: {
                    read: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                    write: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                    deny: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                };
                description: string;
            };
            network: {
                type: string;
                properties: {
                    allow: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                    deny: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                };
                description: string;
            };
            commands: {
                type: string;
                properties: {
                    allow: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                    deny: {
                        type: string;
                        items: {
                            type: string;
                        };
                        description: string;
                    };
                };
                description: string;
            };
            secrets: {
                type: string;
                properties: {
                    bindings: {
                        type: string;
                        additionalProperties: {
                            type: string;
                        };
                        description: string;
                    };
                };
                description: string;
            };
        };
        additionalProperties: boolean;
    };
};
//# sourceMappingURL=schemas.d.ts.map