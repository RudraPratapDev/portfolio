import React from 'react';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

interface ContactProps {
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  discordId: string;
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ email, githubUrl, linkedinUrl, discordId, isDarkMode }) => {
  return (
    // Main container for the contact section, with support for light/dark modes
    <section id="contact" className={`w-full py-14 ${isDarkMode ? 'bg-black text-white' : 'bg-gray-50 text-gray-900'} flex justify-center items-center overflow-hidden`}>
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Section title - Now with a dynamic gradient hover effect */}
        <h2 className={`group text-4xl font-extrabold text-center mb-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-600'} transition-all duration-300
                       group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 group-hover:text-transparent group-hover:bg-clip-text`}>
          Let's Connect
        </h2>

        {/* Horizontal line separator */}
        <div className={`w-24 h-1 mx-auto ${isDarkMode ? 'bg-gray-700' : 'bg-gray-400'} rounded-full mb-10`}></div>

        {/* Integrated inviting call to action */}
        <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-center mb-10 max-w-2xl mx-auto`}>
          Interested in working together? We should queue up a time to chat. I'll buy the coffee.
        </p>

        {/* Contact links grid - More compact, circular, with smaller icons and gradient hover */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 justify-items-center">
          {/* Email Card */}
          <a
            href={`mailto:${email}`}
            className="group relative p-px rounded-full overflow-hidden shadow-lg transition-all duration-300
                       hover:scale-110
                       before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500 before:via-purple-500 before:to-fuchsia-500
                       before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Send an email to ${email}`}
          >
            <div className={`relative h-14 w-14 ${isDarkMode ? 'bg-gray-900' : 'bg-white border border-gray-300'} rounded-full flex items-center justify-center z-10`}>
              <Mail className={`h-7 w-7 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300 group-hover:text-blue-400`} />
            </div>
          </a>

          {/* GitHub Card */}
          <a
            href={githubUrl}
            className="group relative p-px rounded-full overflow-hidden shadow-lg transition-all duration-300
                       hover:scale-110
                       before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500 before:via-purple-500 before:to-fuchsia-500
                       before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my GitHub profile"
          >
            <div className={`relative h-14 w-14 ${isDarkMode ? 'bg-gray-900' : 'bg-white border border-gray-300'} rounded-full flex items-center justify-center z-10`}>
              <Github className={`h-7 w-7 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300 group-hover:text-purple-400`} />
            </div>
          </a>

          {/* LinkedIn Card */}
          <a
            href={linkedinUrl}
            className="group relative p-px rounded-full overflow-hidden shadow-lg transition-all duration-300
                       hover:scale-110
                       before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500 before:via-purple-500 before:to-fuchsia-500
                       before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with me on LinkedIn"
          >
            <div className={`relative h-14 w-14 ${isDarkMode ? 'bg-gray-900' : 'bg-white border border-gray-300'} rounded-full flex items-center justify-center z-10`}>
              <Linkedin className={`h-7 w-7 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300 group-hover:text-fuchsia-400`} />
            </div>
          </a>

          {/* Discord Card - Click to copy */}
          <div
            className="group relative p-px rounded-full overflow-hidden shadow-lg transition-all duration-300
                       hover:scale-110 cursor-pointer
                       before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500 before:via-purple-500 before:to-fuchsia-500
                       before:opacity-0 group-hover:before:opacity-100 before:transition-opacity before:duration-500 before:z-0"
            onClick={() => {
              navigator.clipboard.writeText(discordId).then(() => {
                const messageBox = document.createElement('div');
                messageBox.className = 'fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-xl animate-fade-in-out z-50';
                messageBox.textContent = 'Discord ID copied!';
                document.body.appendChild(messageBox);
                setTimeout(() => messageBox.remove(), 2000);
              }).catch(err => {
                console.error('Failed to copy Discord ID: ', err);
              });
            }}
            aria-label="Click to copy Discord ID"
          >
            <div className={`relative h-14 w-14 ${isDarkMode ? 'bg-gray-900' : 'bg-white border border-gray-300'} rounded-full flex items-center justify-center z-10`}>
              <MessageCircle className={`h-7 w-7 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-300 group-hover:text-blue-400`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
