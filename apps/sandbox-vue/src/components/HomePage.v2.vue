<script setup lang="ts">
defineOptions({ name: "HomePageV2" });
</script>

<template>
  <div style="font-family: system-ui, sans-serif; padding: 40px; max-width: 900px; margin: 0 auto">
    <h1 style="margin-bottom: 40px">UIFork Vue Sandbox</h1>

    <!-- Profile Card -->
    <section style="margin-bottom: 48px">
      <h2 style="margin-bottom: 16px">Profile Card</h2>
      <div
        style="
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 16px;
          padding: 32px;
          max-width: 400px;
          color: white;
        "
      >
        <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 20px">
          <div
            style="
              width: 80px;
              height: 80px;
              border-radius: 50%;
              background: rgba(255, 255, 255, 0.2);
              backdrop-filter: blur(10px);
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 28px;
              font-weight: bold;
            "
          >
            JD
          </div>
          <div>
            <div style="font-size: 22px; font-weight: 700">Jane Doe</div>
            <div style="opacity: 0.85; font-size: 14px">Product Designer</div>
            <div style="opacity: 0.7; font-size: 13px; margin-top: 4px">San Francisco, CA</div>
          </div>
        </div>
        <div style="font-size: 14px; line-height: 1.6; opacity: 0.9; margin-bottom: 20px">
          Passionate about creating intuitive user experiences and design systems that scale.
        </div>
        <div style="display: flex; gap: 12px">
          <div
            style="
              flex: 1;
              text-align: center;
              padding: 12px;
              background: rgba(255, 255, 255, 0.15);
              border-radius: 10px;
            "
          >
            <div style="font-size: 20px; font-weight: 700">142</div>
            <div style="font-size: 12px; opacity: 0.8">Projects</div>
          </div>
          <div
            style="
              flex: 1;
              text-align: center;
              padding: 12px;
              background: rgba(255, 255, 255, 0.15);
              border-radius: 10px;
            "
          >
            <div style="font-size: 20px; font-weight: 700">2.4k</div>
            <div style="font-size: 12px; opacity: 0.8">Followers</div>
          </div>
          <div
            style="
              flex: 1;
              text-align: center;
              padding: 12px;
              background: rgba(255, 255, 255, 0.15);
              border-radius: 10px;
            "
          >
            <div style="font-size: 20px; font-weight: 700">89</div>
            <div style="font-size: 12px; opacity: 0.8">Reviews</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Section -->
    <section style="margin-bottom: 48px">
      <h2 style="margin-bottom: 16px">Products</h2>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px">
        <div
          v-for="product in products"
          :key="product.name"
          style="
            border: 1px solid #e5e7eb;
            border-radius: 12px;
            overflow: hidden;
            transition: box-shadow 0.2s;
          "
        >
          <div
            :style="{
              height: '140px',
              background: product.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
            }"
          >
            {{ product.icon }}
          </div>
          <div style="padding: 16px">
            <div style="font-weight: 600; font-size: 16px; margin-bottom: 4px">
              {{ product.name }}
            </div>
            <div style="font-size: 13px; color: #6b7280; margin-bottom: 12px">
              {{ product.description }}
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center">
              <span style="font-weight: 700; font-size: 18px; color: #111827">
                {{ product.price }}
              </span>
              <button
                style="
                  padding: 8px 16px;
                  background: #4f46e5;
                  color: white;
                  border: none;
                  border-radius: 8px;
                  font-size: 13px;
                  font-weight: 600;
                  cursor: pointer;
                "
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
const products = [
  {
    name: "Wireless Headphones",
    description: "Premium noise-cancelling over-ear headphones",
    price: "$299",
    icon: "🎧",
    color: "linear-gradient(135deg, #ffecd2, #fcb69f)",
  },
  {
    name: "Smart Watch",
    description: "Fitness tracking with heart rate monitor",
    price: "$199",
    icon: "⌚",
    color: "linear-gradient(135deg, #a1c4fd, #c2e9fb)",
  },
  {
    name: "Portable Speaker",
    description: "Waterproof Bluetooth speaker, 20hr battery",
    price: "$79",
    icon: "🔊",
    color: "linear-gradient(135deg, #d4fc79, #96e6a1)",
  },
];
</script>
