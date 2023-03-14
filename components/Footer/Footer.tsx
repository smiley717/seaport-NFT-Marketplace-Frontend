import Link from "next/link";
import { FaTwitter, FaDiscord } from "react-icons/fa";
import { siteConfig } from "../../shared/config";
import {
  ContainerBackground,
  ContainerExtended,
  FooterGrid,
  FooterRow,
  FooterSectionGrid,
  Logo,
  Title,
  Description,
  FooterIcon,
  Divider,
} from "./styles";

export const Footer = () => {
  return (
    <ContainerBackground>
      <ContainerExtended>
        <FooterGrid>
          <FooterRow>
            <FooterSectionGrid className="vertical">
              <Logo>
                <Link href="/" passHref>
                  <a>Kreatorland</a>
                </Link>
              </Logo>
              <Description>
              Discover, trade & launch digital items on<br />
                the largest marketplace of zkSync Era
              </Description>
            </FooterSectionGrid>
            <FooterSectionGrid className="vertical">
              <Title>Join the community</Title>
              <FooterSectionGrid className="socials">
                <a
                  href="https://twitter.com/qx_app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FooterIcon>
                    <FaTwitter />
                  </FooterIcon>
                </a>
                <a
                  href="https://discord.gg/EXksHxP4Re"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FooterIcon>
                    <FaDiscord />
                  </FooterIcon>
                </a>
              </FooterSectionGrid>
            </FooterSectionGrid>
          </FooterRow>
          <Divider />
          <FooterRow className="copyright">
            © {new Date().getFullYear()} Kreatorland. All rights reserved.
            <FooterSectionGrid>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Help
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Status
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                API
              </a>
              <Link href="/brand-assets">
                <a>Brand</a>
              </Link>

              <Link href="/terms">
                <a>Terms</a>
              </Link>
              <Link href="/privacy">
                <a>Privacy</a>
              </Link>
            </FooterSectionGrid>
          </FooterRow>
        </FooterGrid>
      </ContainerExtended>
    </ContainerBackground>
  );
};
