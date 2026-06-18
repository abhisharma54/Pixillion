import React from "react";
import { Credit, Logo, SocialLink } from "../../index";

function Footer() {
  return (
    <div className="w-full h-full p-8 bg-muted text-ink">
      <div className="flex justify-between">
        <Logo className="text-2xl text-ink" />
        <SocialLink />
      </div>
      <Credit className="mt-24" />
    </div>
  );
}

export default React.memo(Footer);
