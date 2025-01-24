import { FaLinkedin, FaGithub, FaTwitter, FaGlobe } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  return (
    <section className="py-16  text-gray-800 dark:text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#008082] dark:text-[#00b3b3]">
          Connect with Me
        </h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
          >
            <FaGlobe />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
