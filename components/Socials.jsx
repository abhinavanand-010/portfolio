import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socials = [
  {
    icon: FaGithub,
    path: "https://github.com/abhinavanand-010", // Add your actual GitHub URL
  },
  {
    icon: FaLinkedin,
    path: "https://www.linkedin.com/in/abhinav-anand-987450234/", // Add your actual LinkedIn URL
  },
  {
    icon: FaTwitter,
    path: "https://twitter.com/abhinav_2398", // Add your actual Twitter URL
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        const IconComponent = item.icon; // Get the icon component
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank" aria-label={`Link to ${item.icon.name}`}>
            <IconComponent size={24} /> {/* Render the icon as a component */}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
