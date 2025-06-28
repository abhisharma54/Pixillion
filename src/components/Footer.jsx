import { Credit, Logo, SocialLink } from "../index";

function Footer() {
  return (
    <div className="w-full h-full p-8 bg-[var(--bg-secondary)] text-[var(--text-primary)]">
      <div className="flex justify-between">
        <Logo className="text-2xl text-[var(--text-primary)]" />
        <SocialLink component="footer" />
      </div>
      <Credit className="mt-24" />
    </div>
  );
}

export default Footer;
