---
name: uifork
description: Install and work with uifork, a CLI tool and component library for managing UI component versions. Supports React (uifork) and Vue 3 (uifork-vue). Use when the user wants to version components, test UI variations, gather stakeholder feedback, or work with uifork commands like init, watch, new, fork, promote.
---

# UIFork

UIFork is a CLI tool and component library for managing UI component versions. Available for **React** (`uifork`) and **Vue 3** (`uifork-vue`). Create multiple versions of components, let stakeholders switch between them to test and gather feedback, and promote the best one when ready.

## When to Use

- User wants to version React or Vue components for A/B testing or stakeholder feedback
- User mentions uifork, component versioning, or UI variations
- User needs help with uifork CLI commands (init, watch, new, fork, promote, etc.)
- User wants to set up uifork in a React app (Vite, Next.js) or Vue app (Vite, Nuxt)

## Installation

```bash
# React
npm install uifork

# Vue 3
npm install uifork-vue
```

Or use yarn, pnpm, or bun.

## Quick Setup — React

### 1. Add UIFork Component

Add the `UIFork` component to your React app root. Typically shown in development and preview/staging (not production):

**Vite:**

```tsx
import { UIFork } from "uifork";

const showUIFork = import.meta.env.MODE !== "production";

function App() {
  return (
    <>
      <YourApp />
      {showUIFork && <UIFork />}
    </>
  );
}
```

**Next.js (App Router):**

```tsx
// components/UIForkProvider.tsx
"use client";
import { UIFork } from "uifork";

export function UIForkProvider() {
  if (process.env.NODE_ENV === "production") return null;
  return <UIFork />;
}

// app/layout.tsx
import { UIForkProvider } from "@/components/UIForkProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <UIForkProvider />
      </body>
    </html>
  );
}
```

**Next.js (Pages Router):**

```tsx
// pages/_app.tsx
import { UIFork } from "uifork";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      {process.env.NODE_ENV !== "production" && <UIFork />}
    </>
  );
}
```

No separate CSS import needed - styles are automatically included.

### 2. Initialize Component Versioning

```bash
npx uifork src/components/Button.tsx
```

Or use the explicit form:

```bash
npx uifork init src/components/Button.tsx
```

This will:

- Convert the component into a forked component that can be versioned
- Generate a `versions.ts` file to track all versions
- Optionally start the watch server (use `-w` flag with either form)

**Requirement:** For now, each version file must default-export its component. Named exports are being considered for the future.

**When the target file lacks a default export:** Prompt the user to update the component to use a default export, then update any files that import it (e.g., change `import { Foo }` to `import Foo`). Only run `npx uifork init` after the component has a default export.

### 3. Use Component Normally

```tsx
import Button from "./components/Button";

// Works exactly as before - active version controlled by UIFork widget
<Button onClick={handleClick}>Click me</Button>;
```

## Quick Setup — Vue 3

### 1. Add UIFork Component

Add the `UIFork` component to your Vue app root. Typically shown in development only:

**Vite + Vue:**

```vue
<!-- App.vue -->
<script setup>
import { UIFork } from "uifork-vue"

const isDev = import.meta.env.DEV
</script>

<template>
  <YourApp />
  <UIFork v-if="isDev" />
</template>
```

**Nuxt 3:**

```vue
<!-- app.vue -->
<script setup>
import { UIFork } from "uifork-vue"

const isDev = import.meta.env.DEV
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <UIFork v-if="isDev" />
</template>
```

No separate CSS import needed - styles are automatically included.

### 2. Initialize Component Versioning

```bash
npx uifork-vue src/components/ContactCard.vue
```

Or use the explicit form:

```bash
npx uifork-vue init src/components/ContactCard.vue
```

This will:

- Move the component to `ContactCard.v1.vue`
- Generate a `ContactCard.versions.ts` file to track all versions
- Create a `ContactCard.vue` wrapper that dynamically renders the active version
- Optionally start the watch server (use `-w` flag)

**Requirement:** Each version file must default-export its component.

### 3. Use Component Normally

```vue
<script setup>
import ContactCard from "./components/ContactCard.vue"
</script>

<template>
  <!-- Works exactly as before — active version controlled by UIFork widget -->
  <ContactCard />
</template>
```

## CLI Commands

Use `npx uifork` for React or `npx uifork-vue` for Vue. Commands are the same for both. Examples below use `uifork` — replace with `uifork-vue` and `.vue` extensions for Vue projects.

### Initialize a component (shorthand)

Initialize versioning for an existing component by passing the path directly.

```bash
npx uifork src/components/Dropdown.tsx          # React
npx uifork-vue src/components/Dropdown.vue      # Vue
npx uifork src/components/Dropdown.tsx -w        # Start watching after init
```

Or use the explicit form:

```bash
npx uifork init src/components/Dropdown.tsx
npx uifork-vue init src/components/Dropdown.vue
```

### `watch [directory]`

Start the watch server (enables UI widget communication).

```bash
npx uifork watch                    # Watch current directory (port 3030)
npx uifork watch ./src              # Watch specific directory
npx uifork watch --port 3002        # Custom port
npx uifork watch ./src --port 3002  # Directory + custom port
```

When using a custom port, pass the same port to the UIFork component:
- React: `<UIFork port={3002} />`
- Vue: `<UIFork :port="3002" />`

**Important:** After generating new version files (e.g., manually or via AI agents), run the watch command to regenerate the corresponding `versions.ts` files.

### `new <component-path> [version-id]`

Create a new empty version file.

```bash
npx uifork new Button         # Auto-increment version number
npx uifork new Button v3      # Specify version explicitly
```

### `fork <component-path> <version-id> [target-version]`

Fork an existing version to create a new one.

```bash
npx uifork fork Button v1           # Fork v1 to auto-incremented version
npx uifork fork Button v1 v2        # Fork v1 to specific version
npx uifork duplicate Button v1 v2   # Alias for fork
```

### `rename <component-path> <version-id> <new-version-id>`

Rename a version.

```bash
npx uifork rename Button v1 v2
```

### `delete <component-path> <version-id>`

Delete a version (must have at least one version remaining).

```bash
npx uifork delete Button v2
```

### `promote <component-path> <version-id>`

Promote a version to be the main component and remove all versioning scaffolding.

```bash
npx uifork promote Button v2
```

This will:

- Replace the wrapper with the promoted version's content
- Delete all version files
- Delete the `versions.ts` file
- Effectively "undo" the versioning system

## File Structure

**React** (after `npx uifork src/components/Button.tsx`):

```
src/components/
├── Button.tsx              # Wrapper component (import this)
├── Button.versions.ts      # Version configuration
├── Button.v1.tsx           # Original component (version 1)
├── Button.v2.tsx           # Additional versions
└── Button.v1_1.tsx         # Sub-versions (v1.1, v2.1, etc.)
```

**Vue** (after `npx uifork-vue src/components/ContactCard.vue`):

```
src/components/
├── ContactCard.vue           # Wrapper component (import this)
├── ContactCard.versions.ts   # Version configuration
├── ContactCard.v1.vue        # Original component (version 1)
├── ContactCard.v2.vue        # Additional versions
└── ContactCard.v1_1.vue      # Sub-versions (v1.1, v1.2, etc.)
```

Each version file must default-export its component.

## Version Naming

- `v1`, `v2`, `v3` - Major versions
- `v1_1`, `v1_2` - Sub-versions (displayed as V1.1, V1.2 in UI)
- `v2_1`, `v2_2` - Sub-versions of v2

## UIFork Widget Features

The `UIFork` component provides a floating UI widget that allows:

- **Switch versions** - Click to switch between versions
- **Create new versions** - Click "+" to create blank version
- **Fork versions** - Fork existing version to iterate
- **Rename versions** - Give versions meaningful names
- **Delete versions** - Remove versions no longer needed
- **Promote versions** - Promote version to become main component
- **Open in editor** - Click to open version file in VS Code/Cursor

**Keyboard shortcuts:** `Cmd/Ctrl + Arrow Up/Down` to cycle through versions

**Settings:** Theme (light/dark/system), position, code editor preference

## Custom Environment Gating

For more control over when UIFork appears:

**React:**
```tsx
const showUIFork =
  process.env.NODE_ENV !== "production" ||
  process.env.NEXT_PUBLIC_ENABLE_UIFORK === "true";
```

**Vue:**
```vue
<script setup>
const showUIFork = import.meta.env.DEV || import.meta.env.VITE_ENABLE_UIFORK === "true"
</script>

<template>
  <UIFork v-if="showUIFork" />
</template>
```

Useful for:

- Showing on specific preview branches
- Enabling for internal stakeholders on staging
- Gating behind feature flags

## Common Workflows

### Starting Versioning on a Component

**React:**
1. Install: `npm install uifork`
2. Add `<UIFork />` to app root
3. Initialize: `npx uifork src/components/MyComponent.tsx`
4. Start watch server: `npx uifork watch`
5. Use the widget to create and switch between versions

**Vue:**
1. Install: `npm install uifork-vue`
2. Add `<UIFork v-if="isDev" />` to app root
3. Initialize: `npx uifork-vue src/components/MyComponent.vue`
4. Start watch server: `npx uifork-vue watch`
5. Use the widget to create and switch between versions

### Creating a New Version

```bash
# Create empty version
npx uifork new Button

# Or fork existing version
npx uifork fork Button v1
```

### Promoting a Version to Production

```bash
npx uifork promote Button v2
```

This removes all versioning and makes v2 the main component.

## How It Works

1. `ForkedComponent` reads active version from localStorage and renders corresponding component
2. `UIFork` connects to watch server and displays all available versions
3. Selecting a version updates localStorage, triggering `ForkedComponent` to re-render
4. Watch server monitors file system for new version files and updates `versions.ts` automatically

**After generating new version files:** When creating version files manually or via AI agents, run `npx uifork watch` (or `npx uifork-vue watch`) to regenerate the `versions.ts` files so the new versions appear in the UIFork widget.
