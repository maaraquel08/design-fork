// Components
export { default as UIFork } from "./components/UIFork.vue";
export { default as ForkedComponent } from "./components/ForkedComponent.vue";
export { default as LazyForkedComponent } from "./components/LazyForkedComponent.vue";

// Composables
export { useLocalStorage } from "./composables/useLocalStorage";

// Types
export type {
  VersionType,
  VersionsType,
  ForkedComponentProps,
  UIForkProps,
  ComponentInfo,
} from "./types";
