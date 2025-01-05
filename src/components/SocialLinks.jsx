import React from "react";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4  my-4">
      {/* Facebook */}
      <a
        href="https://www.facebook.com/profile.php?id=61566181406939"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
          alt="Facebook"
          className="w-8 h-8"
        />
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/ferdous_hasan__?igsh=MWdoeDVpZjAxeG1nOQ=="
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
          alt="Instagram"
          className="w-8 h-8"
        />
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/ferdous-hasan-shifat-b77865327/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="LinkedIn"
          className="w-8 h-8"
        />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/Shifat507"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:scale-110 transition-transform"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="GitHub"
          className="w-8 h-8"
        />
      </a>
    </div>
  );
};

export default SocialLinks;
