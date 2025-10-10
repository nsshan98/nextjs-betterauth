import {
  SUPPORTED_OAUTH_PROVIDERS,
  SUPPORTED_OAUTH_PROVIDERS_DETAILS,
} from "@/lib/oauth-providers";
import React from "react";
import { FaGoogle, FaFacebook, FaGithub, FaDiscord } from "react-icons/fa";
import { Button } from "../atoms/button";

const SocialAuthComponent = () => {
  return SUPPORTED_OAUTH_PROVIDERS.map((provider) => {
    const Icon = SUPPORTED_OAUTH_PROVIDERS_DETAILS[provider].Icon;

    return (
        <Button>
          <Icon />
          {SUPPORTED_OAUTH_PROVIDERS_DETAILS[provider].name}
        </Button>
    );
  });
};

export default SocialAuthComponent;
