import {
  InstagramLogoIcon,
  LinkedinLogoIcon,
  TiktokLogoIcon,
  YoutubeLogoIcon,
} from "@phosphor-icons/react";
import { liens } from "../../data/content.js";

const icones = {
  youtube: YoutubeLogoIcon,
  linkedin: LinkedinLogoIcon,
  instagram: InstagramLogoIcon,
  tiktok: TiktokLogoIcon,
};

export default function SocialLinks({ className, linkClassName }) {
  return (
    <nav className={className} aria-label="Réseaux sociaux">
      {liens.map((item) => {
        const Icone = icones[item.icone];
        return (
          <a
            key={item.label}
            href={item.href}
            className={linkClassName}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={item.label}
          >
            <Icone weight="regular" aria-hidden="true" />
          </a>
        );
      })}
    </nav>
  );
}
