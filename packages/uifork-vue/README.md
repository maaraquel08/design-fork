# uifork-vue

UIFork for Vue 3. A dev tool for exploring UI ideas directly inside your Vue app.

- **Instant switching:** Flip between variations quickly. No reloads, no interrupting your flow.

- **In-context comparison:** Same app, state, props, and edge cases.

- **Embedded prototyping:** Explore ideas directly inside your own codebase.

- **Multi-variant deploys:** Deploy to one URL. Gather feedback on many ideas.

- **AI-friendly by design:** Versions are separate files so it's easy to generate alternatives or prompt a forked version.

---

## Getting started

Install the package:

```bash
npm install uifork-vue
```

### 1. Add UIFork to your app

Add the component anywhere in your Vue app, ideally at the root level:

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

### 2. Initialize a component for versioning

```bash
npx uifork-vue src/components/ContactCard.vue
```

This will:

- Move your component to `ContactCard.v1.vue`
- Generate a `ContactCard.versions.ts` file to track all versions
- Create a `ContactCard.vue` wrapper that dynamically renders the active version

**Note:** Each version file must default-export its component.

### 3. Start the watch server

```bash
npx uifork-vue watch
```

The watch server keeps `versions.ts` in sync with the filesystem and powers the fork/rename/delete/promote actions in the widget.

### 4. Use your component as usual

```vue
<script setup>
import ContactCard from "./components/ContactCard.vue"
</script>

<template>
  <!-- Works exactly as before — the active version is controlled by the UIFork widget -->
  <ContactCard />
</template>
```

---

## Using the versioning UI

The versioning widget floats in the corner of your screen and lets you switch between versions of a forked component. Use **Cmd+Arrow Up/Down** (Mac) or **Ctrl+Arrow Up/Down** (Windows/Linux) to cycle through versions without opening the widget.

With the watch server running, you can also fork, rename, delete, and create new versions directly from the UI.

---

## How it works

### File-based versions

Each UI variation is a separate `.vue` file:

```
ContactCard.v1.vue
ContactCard.v2.vue
ContactCard.v3.vue
```

This enables source control history per variation, AI generation of new versions, file-level diffing, and clean promotion.

### Wrapper-based rendering

When you initialize a component:

```bash
npx uifork-vue init ContactCard.vue
```

UIFork converts it into a wrapper that dynamically renders the active version:

```vue
<!-- ContactCard.vue (generated wrapper) -->
<script setup lang="ts">
import { ForkedComponent } from "uifork-vue"
import { VERSIONS } from "./ContactCard.versions"
</script>

<template>
  <ForkedComponent id="ContactCard" :versions="VERSIONS" v-bind="$attrs" />
</template>
```

The wrapper reads the active version from localStorage, renders the correct component, and re-renders instantly when switched. No rebuilds or reloads required.

### Promotion flow

When you're done iterating:

```bash
npx uifork-vue promote ContactCard v2
```

This replaces `ContactCard.vue` with `ContactCard.v2.vue`, deletes all version files, and removes the wrapper. You're left with a single component file.

---

## File structure (after init)

```
src/components/
├── ContactCard.vue           # Wrapper (import this)
├── ContactCard.versions.ts   # Version config
├── ContactCard.v1.vue        # Original
├── ContactCard.v2.vue        # More versions
└── ContactCard.v1_1.vue      # Sub-versions (v1.1, etc.)
```

**Version IDs:** `v1`, `v2`, `v3` = major; `v1_1`, `v1_2` = sub (shown as V1.1, V1.2 in the UI).

---

## CLI reference

Use `npx uifork-vue <command>`. All of these can also be done from the UIFork widget.

### Initialize a component (shorthand)

```bash
npx uifork-vue src/components/Dropdown.vue
```

Or use the explicit form:

```bash
npx uifork-vue init src/components/Dropdown.vue
```

- **`-w`** — Start watch after init.

### `watch [directory]`

Start the watch server so the widget can talk to your codebase.

```bash
npx uifork-vue watch                    # current directory (port 3030)
npx uifork-vue watch ./src              # specific directory
npx uifork-vue watch --port 3002        # custom port
npx uifork-vue watch ./src --port 3002  # directory + custom port
```

- **`--port <port>`** — Port for the watch server (default: 3030). Also respects the `PORT` environment variable.
- **`--lazy`** — Use lazy loading for component versions.

### `new <component> [version-id]`

Create a new empty version file.

```bash
npx uifork-vue new ContactCard       # auto-increment
npx uifork-vue new ContactCard v3    # explicit id
```

### `fork <component> <version-id> [target-version]`

Fork an existing version. Alias: `duplicate`.

```bash
npx uifork-vue fork ContactCard v1       # auto-increment target
npx uifork-vue fork ContactCard v1 v2    # target v2
```

### `rename <component> <version-id> <new-version-id>`

Rename a version.

```bash
npx uifork-vue rename ContactCard v1 v2
```

### `delete <component> <version-id>`

Delete a version (at least one must remain).

```bash
npx uifork-vue delete ContactCard v2
```

### `promote <component> <version-id>`

Promote a version to the main component and remove versioning.

```bash
npx uifork-vue promote ContactCard v2
```

- Replaces `ContactCard.vue` with the content of `ContactCard.v2.vue`
- Deletes all `ContactCard.v*.vue` and `ContactCard.versions.ts`
- You're left with a single `ContactCard.vue`

---

## Watch server

The watch server does two things:

1. Watches the filesystem for new version files and displays them in the UIFork widget.
2. Allows the UIFork widget to fork, rename, delete, and create new versions.

**Important:** After generating new version files (manually or via AI agents), run the watch command to regenerate the `versions.ts` files.

**Custom port:** The watch server defaults to port 3030. To use a different port, pass `--port` to the CLI and set the `port` prop on the UIFork component. Both must match.

```bash
npx uifork-vue watch --port 3002
```

```vue
<UIFork :port="3002" />
```

---

## Component API

### `<UIFork>`

The floating widget for switching between component versions.

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `port` | `number` | `3030` | Port for the watch server connection |
| `className` | `string` | `""` | Additional CSS class for the container |
| `style` | `CSSProperties` | — | Additional inline styles for the container |

### `<ForkedComponent>`

Renders the active version of a component. You don't typically use this directly — it's generated by the `init` command.

| Prop | Type | Description |
|------|------|-------------|
| `id` | `string` | Unique component identifier |
| `versions` | `VersionsType` | Version map from the generated `.versions.ts` file |
| `defaultVersion` | `string` | Optional default version key |

All other attributes are passed through to the active version via `v-bind="$attrs"`.

### `<LazyForkedComponent>`

Same as `ForkedComponent` but uses `defineAsyncComponent()` for lazy-loaded versions. Use this with the `--lazy` watch flag.

---

## Nuxt

For Nuxt 3, add the component in your `app.vue` or a layout:

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

---

## When to use UIFork

UIFork is useful when:

- Exploring multiple UI directions
- Running design/dev spikes
- Comparing interaction models
- Gathering stakeholder feedback
- Testing agent-generated UI variants

Not intended for:

- Production feature flagging
- Long-lived A/B tests
- Runtime user segmentation

---

## License

MIT
