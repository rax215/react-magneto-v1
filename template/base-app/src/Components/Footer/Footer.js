import "./Footer.css";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { FiTwitter, FiFacebook, FiInstagram } from "react-icons/fi";

export default function Footer(props) {
  const copyRightText = `Copyright 2001-2021 Accenture. 
    All rights reserved.
    Accenture Confidential.  
    For internal use only. `;
  const termsOfUse = "Terms of use";
  const privacyStmt = "Privacy Statement";
  const companyLinks = ["About us", "Contact Us"];
  const socialMediaLinks = ["twitter", "instagram", "facebook"];
  const chatBotlink = "Talk to us!";
  return (
    <div className="footer">
      {copyRightText && (
        <div className="col">
          <div className="col copy-right-col">
            <div>
              <span className="copyright">{copyRightText}</span>
            </div>
            {(termsOfUse || privacyStmt) && (
              <div>
                {termsOfUse && (
                  <a className="link" href="#">
                    {termsOfUse}
                  </a>
                )}
                {termsOfUse && privacyStmt && (
                  <span className="vertical-line"> | </span>
                )}
                {privacyStmt && (
                  <a className="link" href="#">
                    {privacyStmt}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
      {companyLinks && companyLinks.length > 0 && (
        <div className="col">
          <div className="row">
            <div>
              <span className="heading">Company</span>
            </div>
            <div>
              {companyLinks.map((link, index) => (
                <div className="footer-link" key={index}>
                  <a className="footer-link" href="#">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {socialMediaLinks && socialMediaLinks.length > 0 && (
        <div className="col">
          <div className="row">
            <div>
              <span className="heading">Follow Us</span>
            </div>
            <div>
              {socialMediaLinks.includes("twitter") && (
                <a
                  href="https://wwww.twitter.com"
                  className="social-media-link"
                >
                  <FiTwitter />
                </a>
              )}
              {socialMediaLinks.includes("instagram") && (
                <a
                  href="http://www.instagram.com/"
                  className="social-media-link"
                >
                  <FiInstagram />
                </a>
              )}
              {socialMediaLinks.includes("facebook") && (
                <a
                  href="https://www.facebook.com"
                  className="social-media-link"
                >
                  <FiFacebook />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
      {chatBotlink && (
        <div className="col chat">
          <a className="footer-link" href="#">
            {chatBotlink}
            <HiOutlineChatAlt2 />
          </a>
        </div>
      )}
    </div>
  );
}
