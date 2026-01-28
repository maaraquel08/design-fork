# uifork

A CLI tool for managing UI component versions and switching between them.

## Installation

### Global Installation

```bash
npm install -g uifork
```

### Local Development Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Make the CLI script executable:
   ```bash
   chmod +x cli.js
   ```
4. Link the package globally for development:
   ```bash
   npm link
   ```

## Usage

### Initialize a UI Switcher

Convert a single component file into a versioned UI switcher:

```bash
uifork init frontend/src/SomeDropdownComponent.tsx
```

This will:

- Rename the original file to `ComponentName.v1.tsx` (or `.ts`)
- Generate a `ComponentName.versions.ts` file
- Create a `ComponentName.UISwitcher.tsx` component
- Create a `ComponentName.tsx` wrapper file that exports the component

### Watch for Changes

Watch a component directory for version file changes:

```bash
uifork watch SomeDropdownComponent
```

The watch command will:

- Automatically find files matching `*.versions.ts` pattern
- Watch for new version files (ComponentName.v*.tsx or ComponentName.v*.ts)
- Auto-update imports in `versions.ts`
- Handle file renames bidirectionally

### Promote a Version

Promote a specific version to be the main component and remove all versioning scaffolding:

```bash
uifork promote SomeDropdownComponent v2
```

This will:

- Replace `ComponentName.tsx` with the content from `ComponentName.v2.tsx`
- Delete all version files (`ComponentName.v*.tsx`)
- Delete `ComponentName.versions.ts`
- Delete `ComponentName.UISwitcher.tsx`
- Effectively "undo" the versioning system, leaving just the promoted version as the main component

## Component Structure

After running `uifork init`, your component files will be created in the same directory:

```
src/components/
├── ComponentName.tsx              # Main wrapper export (use this for imports)
├── ComponentName.UISwitcher.tsx   # Version switcher component
├── ComponentName.versions.ts      # Version configuration
├── ComponentName.v1.tsx           # Your original component (version 1)
├── ComponentName.v2.tsx           # Additional versions as needed
└── ComponentName.v1_1.tsx        # Sub-versions (e.g., v1_1, v2_1)
```

All files are created in the same directory as your original component, using a flat naming convention.

## Adding New Versions

1. Create new version files: `ComponentName.v2.tsx`, `ComponentName.v1_1.tsx`, etc.
2. Run `uifork watch ComponentName.versions.ts` (or just `uifork watch ComponentName`) to automatically update `versions.ts`
3. Or manually add imports and version entries to `ComponentName.versions.ts`

## UI Switcher Controls

- **Cmd + Arrow Up/Down**: Cycle through versions
- **Bottom-right selector**: Click to choose specific version
- Selections are saved to localStorage per component ID

## Commands

- `uifork init <component-path>` - Initialize a UI switcher from a component file
- `uifork watch <component-name>` - Watch for version changes in a component
- `uifork promote <component-path> <version-id>` - Promote a version to be the main component and remove versioning scaffolding
- `uifork --help` - Show help information
- `uifork --version` - Show version number

## Examples

```bash
# Initialize a new UI switcher
uifork init src/components/Button.tsx
# Creates: Button.tsx, Button.v1.tsx, Button.versions.ts, Button.UISwitcher.tsx

# Watch for changes (by component name or path)
uifork watch Button
# or
uifork watch src/components/Button.versions.ts

# Promote a version to be the main component (removes all versioning)
uifork promote Button v2
# This replaces Button.tsx with Button.v2.tsx and deletes all version files

# Import and use the component
import Button from './Button'  # Uses Button.tsx wrapper
```
