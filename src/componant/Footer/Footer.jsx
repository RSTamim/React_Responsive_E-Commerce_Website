import React from "react";
import css from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UsersIcon,
  LinkIcon,
} from "@heroicons/react/outline";
const Footer = () => {
  return (
    <div className={css.cFooterWeapper}>
      <hr />

      <div className={css.cFooter}>
        <div className={css.clogo}>
          <img src={Logo} alt="" />
          <span>mrtamim</span>
        </div>

        <div className={css.block}>
          <div className={css.detail}>
            <span>Contact Us</span>
            {/* Address Section */}
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon} />
              <span>103/A , Road-06, Mohammadpur,Dhaka 1207</span>
            </span>

            {/* Phone Section */}
            <span className={css.pngLine}>
              {""}
              <PhoneIcon className={css.icon} />
              <a href="tel:01300-306993">01300-306993</a>
            </span>

            {/* Email Section */}
            <span className={css.pngLine}>
              {""}
              <InboxIcon className={css.icon} />
              <a href="mailto:mrtamimrasel56@gmail.com">
                mrtamimrasel56@gmail.com
              </a>
            </span>
          </div>
        </div>

        {/* Sign In */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon} />
              Sign In
            </span>
          </div>
        </div>

        {/* About Us */}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UsersIcon className={css.icon} />
              <a href="/about">
                <p>About Us</p>
              </a>
            </span>
          </div>
        </div>

        {/* Safety Privacy & Terms*/}
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon} />
              <p>Safety Privacy & Terms</p>
            </span>
          </div>
        </div>
      </div>
      <div className={css.copyright}>
        <span>Copyright @2022 by Tamim, Inc.</span>
        <span>All right reserved</span>
      </div>
    </div>
  );
};

export default Footer;
