<script setup lang="ts">
defineOptions({ name: "ContactCardV2" });
</script>

<template>
  <div
    style="
      border: 1px solid #e0e0e0;
      border-radius: 12px;
      padding: 32px;
      max-width: 280px;
      font-family: system-ui, sans-serif;
      text-align: center;
    "
  >
    <div
      style="
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: #6366f1;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: 24px;
        margin: 0 auto 16px;
      "
    >
      JD
    </div>

    <div style="font-weight: 600; font-size: 18px; margin-bottom: 4px">Jane Doe</div>
    <div style="color: #666; font-size: 14px; margin-bottom: 16px">Product Designer</div>

    <div style="font-size: 14px; color: #444; line-height: 1.5; margin-bottom: 20px">
      Passionate about creating intuitive user experiences and design systems.
    </div>

    <div
      style="
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        padding: 10px 16px;
        background: #f5f3ff;
        border-radius: 8px;
        font-size: 14px;
        color: #4f46e5;
      "
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
      +1 (555) 123-4567
    </div>
  </div>
</template>
