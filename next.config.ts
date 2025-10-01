import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["fakestoreapi.com"], // разрешаем загрузку картинок с fakestoreapi.com
  },
};

export default nextConfig;
