<script setup lang="ts">
defineOptions({ name: "ContactCard" });
</script>

<template>
  <div
    style="
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      padding: 24px;
      max-width: 320px;
      font-family: system-ui, sans-serif;
    "
  >
    <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px">
      <div
        style="
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #6366f1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 18px;
        "
      >
        JD
      </div>
      <div>
        <div style="font-weight: 600; font-size: 16px">Jane Doe</div>
        <div style="color: #666; font-size: 14px">Product Designer</div>
      </div>
    </div>
    <div style="font-size: 14px; color: #444; line-height: 1.5">
      Passionate about creating intuitive user experiences and design systems.
    </div>
  </div>
</template>
