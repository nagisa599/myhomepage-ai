import React from 'react';
import { Mail, Github, ExternalLink } from 'lucide-react';

const ContactLink = ({ href, icon: Icon, children }: { href: string; icon: any; children: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-3 text-gray-900 hover:text-red-500 transition-colors"
  >
    <Icon className="h-5 w-5" />
    <span className="text-sm">{children}</span>
    <ExternalLink className="h-4 w-4" />
  </a>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-red-500 text-sm font-medium">Contact</span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">連絡先</h2>
        </div>

        <div className="mt-16 max-w-lg mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="space-y-6">
            <ContactLink href="mailto:nagi46460510@icloud.com" icon={Mail}>
              nagi46460510@icloud.com
            </ContactLink>
            <ContactLink href="https://github.com/nagisa599" icon={Github}>
              GitHub
            </ContactLink>
            <ContactLink
              href="https://zenn.dev/naginagi124"
              icon={() => (
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M.264 23.771h4.984c.264 0 .498-.147.645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72c-.235 0-.44.117-.557.323L.03 23.361c-.088.176.029.41.234.41zM17.445 23.419l6.479-10.408c.205-.323-.029-.733-.41-.733h-4.691c-.176 0-.352.088-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779c.234-.001.468-.118.586-.353z"/>
                </svg>
              )}
            >
              Zenn
            </ContactLink>
          </div>
        </div>
      </div>
    </section>
  );
}