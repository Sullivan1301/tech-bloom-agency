/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GA_MEASUREMENT_ID?: string;
  readonly VITE_FB_PIXEL_ID?: string;
  readonly VITE_EMBEDSOCIAL_API_KEY?: string;
  readonly VITE_EMBEDSOCIAL_ENABLED?: string;
  readonly VITE_WALLSIO_API_KEY?: string;
  readonly VITE_WALLSIO_WALL_ID?: string;
  readonly VITE_WALLSIO_ENABLED?: string;
  readonly VITE_FACEBOOK_APP_ID?: string;
  readonly VITE_FACEBOOK_APP_SECRET?: string;
  readonly VITE_FACEBOOK_PAGE_ID?: string;
  readonly VITE_FACEBOOK_ACCESS_TOKEN?: string;
  readonly VITE_FACEBOOK_ENABLED?: string;
  readonly VITE_INSTAGRAM_ACCESS_TOKEN?: string;
  readonly VITE_INSTAGRAM_USER_ID?: string;
  readonly VITE_INSTAGRAM_ENABLED?: string;
  readonly VITE_LINKEDIN_CLIENT_ID?: string;
  readonly VITE_LINKEDIN_CLIENT_SECRET?: string;
  readonly VITE_LINKEDIN_ENABLED?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
