<div align="center">

<img src="logo.png" alt="dotAIslash Logo" width="120" />

# 📐 VERSA Schemas

### JSON Schema Definitions for the `.ai/` Folder Standard

[![npm](https://img.shields.io/npm/v/@dotaislash/schemas?style=for-the-badge&logo=npm&color=violet)](https://www.npmjs.com/package/@dotaislash/schemas)
[![License](https://img.shields.io/badge/License-MIT-cyan?style=for-the-badge)](LICENSE)
[![Discussions](https://img.shields.io/github/discussions/dotAIslash/dotaislash-schemas?style=for-the-badge&logo=github&color=lime)](https://github.com/dotAIslash/dotaislash-schemas/discussions)

[**Schema Docs**](https://dotaislash.github.io/schemas) · [**VERSA Spec**](https://github.com/dotAIslash/dotaislash-spec) · [**Validator**](https://github.com/dotAIslash/dotaislash-cli)

</div>

---

## 🎯 What is this?

**JSON Schema definitions** that validate every file in your `.ai/` folder. Ensures your VERSA configuration is correct before runtime.

```json
{
  "$schema": "https://dotaislash.github.io/schemas/context.json",
  "version": "1.0",
  "rules": ["rules/style.md"],
  "settings": {
    "model": "claude-sonnet-4"
  }
}
```

---

## ✨ Features

- ✅ **Validation** - Catch errors before they reach production
- 🔧 **Autocomplete** - IDE suggestions for all properties
- 📝 **Documentation** - Inline descriptions for every field
- 🎯 **Type Safety** - Generate TypeScript types from schemas
- 🔄 **Versioned** - Support for multiple VERSA versions

---

## 📦 Installation

```bash
# npm
npm install --save-dev @dotaislash/schemas

# yarn
yarn add -D @dotaislash/schemas

# pnpm
pnpm add -D @dotaislash/schemas
```

---

## 🎯 Available Schemas

### Core Schemas

| Schema | File | Purpose |
|--------|------|---------|
| **context** | `context.json` | Base `.ai/` configuration |
| **profile** | `profiles/*.json` | Tool-specific overrides |
| **agent** | `agents/*.json` | Agent definitions |
| **rule** | `rules/*.md` | Markdown rule metadata |
| **tool** | `tools/*.json` | MCP server configs |
| **permission** | `permissions.json` | Security policies |
| **settings** | Settings embedded | Model and UI preferences |
| **memory** | `memory.json` | Retention policies |

---

## 🔧 Usage

### In your IDE

Add `$schema` to your JSON files for validation and autocomplete:

```json
{
  "$schema": "https://dotaislash.github.io/schemas/context.json",
  "version": "1.0",
  "rules": ["rules/style.md"]
}
```

### VS Code Setup

```json
// .vscode/settings.json
{
  "json.schemas": [
    {
      "fileMatch": [".ai/context.json"],
      "url": "https://dotaislash.github.io/schemas/context.json"
    },
    {
      "fileMatch": [".ai/profiles/*.json"],
      "url": "https://dotaislash.github.io/schemas/profile.json"
    },
    {
      "fileMatch": [".ai/agents/*.json"],
      "url": "https://dotaislash.github.io/schemas/agent.json"
    }
  ]
}
```

### Programmatic Validation

```typescript
import Ajv from 'ajv';
import { contextSchema, profileSchema } from '@dotaislash/schemas';

const ajv = new Ajv();

// Validate context.json
const validateContext = ajv.compile(contextSchema);
const valid = validateContext(yourContextData);

if (!valid) {
  console.error(validateContext.errors);
}
```

### With VERSA CLI

```bash
# Automatically validates using schemas
versa lint
```

---

## 📚 Schema Reference

### context.json

```jsonc
{
  "$schema": "https://dotaislash.github.io/schemas/context.json",
  "version": "1.0",                    // Required: VERSA version
  "rules": ["rules/style.md"],         // Optional: Rule files
  "context": ["src/**/*.ts"],          // Optional: File patterns
  "agents": ["agents/reviewer.json"],  // Optional: Agent configs
  "tools": ["tools/mcp-servers.json"], // Optional: Tool configs
  "settings": {                        // Optional: Settings
    "model": "claude-sonnet-4",
    "temperature": 0.7
  },
  "permissions": {                     // Optional: Permissions
    "files": { "read": ["src/**"] },
    "network": { "allow": ["https://api.openai.com"] }
  }
}
```

### profile.json

```jsonc
{
  "$schema": "https://dotaislash.github.io/schemas/profile.json",
  "version": "1.0",
  "merge": "deep",                     // Required: Merge strategy
  "rules": ["rules/cursor-specific.md"],
  "settings": {
    "shortcuts": {
      "review": "agents/code-reviewer.json"
    }
  }
}
```

### agent.json

```jsonc
{
  "$schema": "https://dotaislash.github.io/schemas/agent.json",
  "version": "1.0",
  "name": "Code Reviewer",
  "description": "Reviews code for quality and best practices",
  "model": "claude-sonnet-4",
  "temperature": 0.3,
  "tools": ["tools/linter.json"],
  "rules": ["rules/review-checklist.md"],
  "systemPrompt": "You are an expert code reviewer..."
}
```

---

## 🎨 Schema Features

### Autocomplete Support

All schemas include:
- Property descriptions
- Enum values
- Default values
- Examples
- Pattern validation

### Type Generation

Generate TypeScript types from schemas:

```bash
npx json-schema-to-typescript schemas/context.json > types/context.ts
```

```typescript
// Generated types
export interface Context {
  version: "1.0";
  rules?: string[];
  context?: string[];
  agents?: string[];
  settings?: Settings;
  permissions?: Permissions;
}
```

---

## 🔍 Validation Rules

### Required Fields

- `version` - Must be "1.0"
- `merge` - Required in profiles (shallow|deep|replace)

### Format Validation

- **File Paths** - Must match glob patterns
- **URLs** - Must be valid HTTP(S) URLs
- **Models** - Must match known model names
- **Versions** - Semver format (1.0.0)

### Custom Validation

```typescript
import { customFormats } from '@dotaislash/schemas';

// Add custom validators
ajv.addFormat('glob-pattern', customFormats.globPattern);
ajv.addFormat('model-name', customFormats.modelName);
```

---

## 🧪 Testing

```bash
# Run schema tests
pnpm test

# Validate example files
pnpm test:examples

# Generate type definitions
pnpm generate:types
```

---

## 📊 Schema Versions

| Version | Release Date | Status | Breaking Changes |
|---------|--------------|--------|------------------|
| 1.0 | Q4 2025 | 🟡 Draft | - |
| 0.9 | Q3 2025 | 🔴 Deprecated | Multiple |

---

## 🛠️ Development

```bash
# Clone repository
git clone https://github.com/dotAIslash/dotaislash-schemas.git
cd dotaislash-schemas

# Install dependencies
pnpm install

# Validate schemas
pnpm validate

# Run tests
pnpm test

# Build package
pnpm build
```

---

## 📖 Documentation

- [Schema Reference](https://dotaislash.github.io/schemas)
- [Validation Guide](docs/VALIDATION.md)
- [Custom Formats](docs/FORMATS.md)
- [Type Generation](docs/TYPES.md)

---

## 🤝 Contributing

Help improve VERSA schemas!

- 🐛 Report schema bugs
- 💡 Suggest new fields
- 📝 Improve documentation
- 🧪 Add test cases

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📄 License

MIT © [dotAIslash](https://github.com/dotAIslash)

---

<div align="center">

**Part of the VERSA ecosystem**

[Spec](https://github.com/dotAIslash/dotaislash-spec) · [CLI](https://github.com/dotAIslash/dotaislash-cli) · [Examples](https://github.com/dotAIslash/dotaislash-examples) · [Adapters](https://github.com/dotAIslash/dotaislash-adapters)

[⭐ Star us on GitHub](https://github.com/dotAIslash/dotaislash-schemas)

</div>
