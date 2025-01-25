import { FaLinkedin, FaGithub, FaTwitter, FaGlobe, FaFacebook, FaInstagram } from "react-icons/fa";

const SocialLinks: React.FC = () => {
  return (
    <section className="py-16  text-gray-800 dark:text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-[#008082] dark:text-[#00b3b3]">
          Connect with Me
        </h2>
        <div className="flex justify-center space-x-8">
          <a
            href="https://www.linkedin.com/in/nitesh-sahu-a427951b1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/niteshsahujhansi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/niteshsahujhs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com/nitesh.sahu.1612147/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/nitesh.sahu920/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl text-[#008082] dark:text-[#00b3b3] hover:text-[#00b3b3]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
