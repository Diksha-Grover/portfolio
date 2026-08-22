/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Always revalidate the resume so the newest file is served, never a stale cache.
        source: "/:file*.pdf",
        headers: [
          { key: "Cache-Control", value: "no-cache, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
