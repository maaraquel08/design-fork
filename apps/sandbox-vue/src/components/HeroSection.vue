<script setup lang="ts">
defineOptions({ name: "HeroSection" });
</script>

<template>
  <div
    style="
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 16px;
      padding: 48px 32px;
      text-align: center;
      color: white;
    "
  >
    <h2 style="font-size: 28px; font-weight: 700; margin: 0 0 12px">
      Build better UIs, faster
    </h2>
    <p style="font-size: 16px; opacity: 0.9; margin: 0 0 24px; max-width: 400px; margin-left: auto; margin-right: auto">
      Version your components, compare variations, and ship with confidence.
    </p>
    <button
      style="
        background: white;
        color: #667eea;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 15px;
        font-weight: 600;
        cursor: pointer;
      "
    >
      Get Started
    </button>
  </div>
</template>
