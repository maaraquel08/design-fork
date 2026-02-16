<script setup lang="ts">
import ContactCard from "./ContactCard.vue";
import HeroSection from "./HeroSection.vue";
</script>

<template>
  <div style="font-family: system-ui, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto">
    <h1 style="margin-bottom: 32px">UIFork Vue Sandbox</h1>

    <section style="margin-bottom: 48px">
      <h2 style="margin-bottom: 16px">Contact Card</h2>
      <ContactCard />
    </section>

    <section style="margin-bottom: 48px">
      <h2 style="margin-bottom: 16px">Hero Section</h2>
      <HeroSection />
    </section>
  </div>
</template>
