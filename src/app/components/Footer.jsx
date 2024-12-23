import { FaGithub, FaInstagram, FaLinkedinIn, } from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";

import { metaData, socialLinks } from "./../data/config";


const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white transition hover:opacity-75 hover:text-indigo-700">
      <Icon />
    </a>
  );
}

function SocialLinks() {
  return (
    <div className="mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end">
      <SocialLink href={socialLinks.github} icon={FaGithub} />
      <SocialLink href={socialLinks.instagram} icon={FaInstagram} />
      <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
      <SocialLink href={socialLinks.email} icon={TbMailFilled} />
    </div>
  );
}

function Footer() {
  return (
    <footer>
  <div className="mx-auto max-w-screen-xl px-4 pb-8 pt-10 sm:px-6 lg:px-8 lg:pt-10">

    <div className="mt-8 border-t border-gray-100 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-24">
      <ul className="flex flex-wrap justify-center gap-4 text-xs lg:justify-end">
        <li>
          <a href="https://www.remy-chevalier.fr" className="text-gray-500 dark:text-gray-100 transition hover:opacity-75 hover:text-indigo-700">&copy; {YEAR}. Rémy CHEVALIER. All rights reserved. </a>
        </li>
      </ul>

      <SocialLinks />
    </div>
  </div>
</footer>
  )
}

export default Footer


