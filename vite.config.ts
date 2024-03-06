import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
	plugins: [
		react(),
		federation({
			name: "CanDoVSDidDo",
			filename: "remoteEntry.js",
			exposes: {},
			shared: [],
		}),
	],
	optimizeDeps: {
		esbuildOptions: {
			target: "esnext",
		},
	},
	build: {
		target: "esnext",
		cssCodeSplit: true,
		minify: "esbuild",
		cssMinify: "esbuild",
	},
});
