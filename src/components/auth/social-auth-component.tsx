"use client";
import {
  SUPPORTED_OAUTH_PROVIDERS,
  SUPPORTED_OAUTH_PROVIDERS_DETAILS,
} from "@/lib/oauth-providers";
import React from "react";
import { Button } from "../atoms/button";
import { authClient } from "@/lib/auth-client";

const SocialAuthComponent = () => {
  return SUPPORTED_OAUTH_PROVIDERS.map((provider) => {
    const Icon = SUPPORTED_OAUTH_PROVIDERS_DETAILS[provider].Icon;

    return (
      <Button
        key={provider}
        onClick={() => {
          authClient.signIn.social({
            provider: provider,
          });
        }}
      >
        <Icon />
        {SUPPORTED_OAUTH_PROVIDERS_DETAILS[provider].name}
      </Button>
    );
  });
};

export default SocialAuthComponent;
