/**
 * Validate glob pattern format
 * Ensures pattern is valid for file matching
 */
export declare function globPattern(value: string): boolean;
/**
 * Validate model name format
 * Ensures model identifier follows expected patterns
 */
export declare function modelName(value: string): boolean;
/**
 * Validate file path format
 * Ensures path is relative and doesn't escape the .ai/ folder
 */
export declare function filePath(value: string): boolean;
/**
 * All custom formats
 */
export declare const formats: {
    readonly 'glob-pattern': typeof globPattern;
    readonly 'model-name': typeof modelName;
    readonly 'file-path': typeof filePath;
};
//# sourceMappingURL=formats.d.ts.map