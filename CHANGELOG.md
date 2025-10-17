# Changelog

All notable changes to @dotaislash/schemas will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-17

### Added

- Complete JSON Schema definitions for VERSA 1.0 specification
- `context.schema.json` - Base configuration schema with all VERSA primitives
- `profile.schema.json` - Tool-specific profile overrides with merge strategies
- `agent.schema.json` - Declarative agent definitions
- `rule-metadata.schema.json` - Markdown rule front matter validation
- `tool.schema.json` - MCP server and API configurations
- `knowledge.schema.json` - Knowledge source ingestion configuration
- `memory.schema.json` - Memory retention policies
- `permissions.schema.json` - Security and access control policies
- TypeScript type definitions for all schemas
- Runtime validation using Ajv with JSON Schema Draft 2020-12
- Custom format validators for glob patterns, model names, and file paths
- Comprehensive test suite with 100% coverage of core functionality
- Full TypeScript support with strict type checking
- Export of all schemas, types, and validators for external use

### Technical Details

- Uses JSON Schema Draft 2020-12 for maximum compatibility
- Built with TypeScript 5.8.3 in strict mode
- Validated with Ajv 8.12.0 for runtime type checking
- Tested with Vitest for comprehensive coverage
- Zero runtime dependencies beyond ajv and ajv-formats
- Works with Bun, Node.js, and browser environments

### Documentation

- Complete API documentation for all exported functions
- Detailed examples for each schema type
- TypeScript type definitions for all interfaces
- Inline JSDoc comments for IDE support

[1.0.0]: https://github.com/dotAIslash/dotaislash-schemas/releases/tag/v1.0.0
