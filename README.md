# uifork-vue

> A Vue 3 fork of [uifork](https://github.com/sambernhardt/uifork) - A dev tool for exploring UI ideas directly inside your Vue app.

**⚠️ Note:** This is a Vue-focused fork. For React support, see the [original uifork](https://github.com/sambernhardt/uifork).

---

## Why UIFork?

- **Instant switching:** Flip between UI variations without reloads or losing your flow
- **In-context comparison:** Test variations with the same app state, props, and edge cases
- **Embedded prototyping:** Explore ideas directly inside your codebase
- **Multi-variant deploys:** Deploy once, gather feedback on multiple variations
- **AI-friendly:** Each version is a separate file, making it easy to generate alternatives with AI

---

## Installation

Since this fork is not yet published to npm, install directly from GitHub:

```bash
npm install github:maaraquel08/design-fork
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "uifork-vue": "github:maaraquel08/design-fork"
  }
}
```

---

## Quick Start

### 1. Add UIFork to your project

Add the component at your app's root level:

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

**For Nuxt 3:**

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

### 2. Initialize a component for versioning

```bash
npx uifork-vue src/components/ContactCard.vue
```

This will:
- Move your component to `ContactCard.v1.vue`
- Generate a `ContactCard.versions.ts` file to track versions
- Create a `ContactCard.vue` wrapper that dynamically renders the active version

**Important:** Each version file must default-export its component.

### 3. Use your component as usual

```vue
<script setup>
import ContactCard from "./components/ContactCard.vue"
</script>

<template>
  <!-- The active version is controlled by the UIFork widget -->
  <ContactCard />
</template>
```

### 4. Start the watch server (optional but recommended)

The watch server enables real-time version management:

```bash
npx uifork-vue watch
```

This allows you to:
- Fork, rename, and delete versions from the UI
- Auto-detect new version files
- Keep `versions.ts` in sync with your filesystem

---

## How It Works

### File-based versioning

Each variation is a real file:

```
src/components/
├── ContactCard.vue           # Wrapper (import this)
├── ContactCard.versions.ts   # Version config
├── ContactCard.v1.vue        # Original version
├── ContactCard.v2.vue        # Alternative version
└── ContactCard.v1_1.vue      # Sub-version (shown as V1.1)
```

### Dynamic rendering

The wrapper component loads the active version at runtime:

```vue
<!-- ContactCard.vue (auto-generated) -->
<script setup lang="ts">
import { ForkedComponent } from "uifork-vue"
import { VERSIONS } from "./ContactCard.versions"
</script>

<template>
  <ForkedComponent 
    id="ContactCard" 
    :versions="VERSIONS" 
    v-bind="$attrs" 
  />
</template>
```

Switching versions triggers an instant re-render - no rebuilds needed.

---

## CLI Commands

All commands use `npx uifork-vue <command>`:

### Initialize versioning

```bash
# Shorthand
npx uifork-vue src/components/Button.vue

# Or explicit
npx uifork-vue init src/components/Button.vue

# Start watch server immediately after init
npx uifork-vue src/components/Button.vue -w
```

### Start watch server

```bash
npx uifork-vue watch                    # Current directory, port 3030
npx uifork-vue watch ./src              # Specific directory
npx uifork-vue watch --port 3002        # Custom port
npx uifork-vue watch ./src --port 3002  # Both options

# Or use environment variable
PORT=3002 npx uifork-vue watch
```

### Create new version

```bash
npx uifork-vue new Button       # Auto-increment (e.g., v2)
npx uifork-vue new Button v3    # Explicit version ID
```

### Fork existing version

```bash
npx uifork-vue fork Button v1       # Auto-increment target
npx uifork-vue fork Button v1 v2    # Explicit target
```

Alias: `duplicate`

### Rename version

```bash
npx uifork-vue rename Button v1 v2
```

### Delete version

```bash
npx uifork-vue delete Button v2
```

Note: At least one version must remain.

### Promote version

```bash
npx uifork-vue promote Button v2
```

This will:
- Replace `Button.vue` with the content of `Button.v2.vue`
- Delete all `Button.v*.vue` files and `Button.versions.ts`
- Leave you with a single, clean `Button.vue` file

---

## Keyboard Shortcuts

Switch between versions without opening the widget:

- **Mac:** `Cmd + ↑/↓`
- **Windows/Linux:** `Ctrl + ↑/↓`

---

## Configuration

### Custom port

Both the watch server and UIFork component must use the same port:

```bash
# CLI
npx uifork-vue watch --port 3002
```

```vue
<!-- Component -->
<UIFork port={3002} />
```

### Lazy loading (Vue only)

```bash
npx uifork-vue watch --lazy
```

---

## Use Cases

UIFork is great for:

- 🎨 Exploring multiple UI directions
- 🧪 Running design/dev spikes
- 🔄 Comparing interaction models
- 👥 Gathering stakeholder feedback
- 🤖 Testing AI-generated UI variants

**Not intended for:**

- Production feature flags
- Long-lived A/B tests
- Runtime user segmentation

---

## Version Naming

- **Major versions:** `v1`, `v2`, `v3`
- **Sub-versions:** `v1_1`, `v1_2` (displayed as V1.1, V1.2)

---

## Development Workflow

1. **Create versions** via CLI, UI, or AI agents
2. **Switch instantly** with keyboard shortcuts
3. **Compare in context** with real app state
4. **Promote the winner** when ready
5. **Clean git history** with file-level diffs

---

## AI Integration

UIFork's file-based approach makes it perfect for AI workflows:

```bash
# Ask your AI assistant:
"Fork ContactCard.v1.vue to v2 and make it use a card layout"

# Then run watch to detect the new file:
npx uifork-vue watch
```

Each version is a separate file, so AIs can:
- Generate new variations without touching existing ones
- Create targeted diffs
- Iterate on specific versions

---

## Troubleshooting

### Component not updating?

Make sure the watch server is running:
```bash
npx uifork-vue watch
```

### Version not appearing in UI?

Run watch to regenerate the `versions.ts` file:
```bash
npx uifork-vue watch
```

### Port conflicts?

Change the port in both places:
```bash
npx uifork-vue watch --port 3002
```
```vue
<UIFork :port="3002" />
```

---

## Contributing

This is a fork focused on improving Vue 3 support. Contributions welcome!

### Original Project

This is a fork of [uifork](https://github.com/sambernhardt/uifork) by Sam Bernhardt. Check out the original for React support and the latest features.

---

## License

MIT

---

## Links

- **Original uifork:** https://github.com/sambernhardt/uifork
- **This fork:** https://github.com/maaraquel08/design-fork
- **Issues:** https://github.com/maaraquel08/design-fork/issues
