/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly PUBLIC_CMS_API: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}