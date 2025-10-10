import { ComponentProps, ElementType } from "react";
import { FaGoogle, FaFacebook, FaGithub, FaDiscord } from "react-icons/fa";

export const SUPPORTED_OAUTH_PROVIDERS = [
  "google",
  "facebook",
  "github",
  "discord",
] as const;

export type SupportedOAuthProvider = (typeof SUPPORTED_OAUTH_PROVIDERS)[number];

export const SUPPORTED_OAUTH_PROVIDERS_DETAILS: Record<
  SupportedOAuthProvider,
  { name: string; Icon: ElementType<ComponentProps<"svg">> }
> = {
  google: { name: "Google", Icon: FaGoogle },
  facebook: { name: "Facebook", Icon: FaFacebook },
  github: { name: "GitHub", Icon: FaGithub },
  discord: { name: "Discord", Icon: FaDiscord },
};
