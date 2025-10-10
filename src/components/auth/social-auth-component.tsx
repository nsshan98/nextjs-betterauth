import React from "react";
import { FaGoogle, FaFacebook, FaGithub, FaDiscord } from "react-icons/fa";

const SocialAuthComponent = () => {
  return (
    <div>
      <div className="flex justify-center space-x-4">
        <FaGoogle
          size={50}
          style={{
            backgroundColor: "#b3e6c0ff",
            padding: "10px",
            borderRadius: "10px",
          }}
        />
        <FaFacebook
          size={50}
          style={{
            backgroundColor: "#b3e6c0ff",
            padding: "10px",
            borderRadius: "10px",
          }}
        />
        <FaGithub
          size={50}
          style={{
            backgroundColor: "#b3e6c0ff",
            padding: "10px",
            borderRadius: "10px",
          }}
        />
        <FaDiscord
          size={50}
          style={{
            backgroundColor: "#b3e6c0ff",
            padding: "10px",
            borderRadius: "10px",
          }}
        />
      </div>
    </div>
  );
};

export default SocialAuthComponent;
