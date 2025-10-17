// File: dotaislash-schemas/src/formats.ts
// What: Custom format validators for JSON Schema
// Why: Provide validation for VERSA-specific formats (globs, model names, etc.)
// Related: validator.ts, schemas/*.json
/**
 * Validate glob pattern format
 * Ensures pattern is valid for file matching
 */
export function globPattern(value) {
    if (typeof value !== 'string')
        return false;
    if (value.length === 0)
        return false;
    // Basic glob pattern validation
    // Allow: *, **, ?, [abc], {a,b}
    // Disallow: .. (parent references)
    if (value.includes('..'))
        return false;
    // Check for balanced braces and brackets
    let braceCount = 0;
    let bracketCount = 0;
    for (const char of value) {
        if (char === '{')
            braceCount++;
        if (char === '}')
            braceCount--;
        if (char === '[')
            bracketCount++;
        if (char === ']')
            bracketCount--;
        if (braceCount < 0 || bracketCount < 0)
            return false;
    }
    return braceCount === 0 && bracketCount === 0;
}
/**
 * Validate model name format
 * Ensures model identifier follows expected patterns
 */
export function modelName(value) {
    if (typeof value !== 'string')
        return false;
    if (value.length === 0)
        return false;
    // Allow alphanumeric, hyphens, underscores, dots, and forward slashes
    // Examples: claude-sonnet-4, gpt-4-turbo, gemini-1.5-pro
    const modelNameRegex = /^[a-zA-Z0-9][a-zA-Z0-9._\/-]*$/;
    return modelNameRegex.test(value);
}
/**
 * Validate file path format
 * Ensures path is relative and doesn't escape the .ai/ folder
 */
export function filePath(value) {
    if (typeof value !== 'string')
        return false;
    if (value.length === 0)
        return false;
    // Must be relative (no absolute paths)
    if (value.startsWith('/'))
        return false;
    // No parent directory references
    if (value.includes('..'))
        return false;
    // Use forward slashes only
    if (value.includes('\\'))
        return false;
    return true;
}
/**
 * All custom formats
 */
export const formats = {
    'glob-pattern': globPattern,
    'model-name': modelName,
    'file-path': filePath,
};
//# sourceMappingURL=formats.js.map