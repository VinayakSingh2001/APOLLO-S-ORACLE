// src/components/ResponsiveFooter.js
import React from 'react';
import { FacebookOutlined, InstagramOutlined, GithubOutlined, TwitterOutlined } from '@ant-design/icons';

const ResponsiveFooter = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-lg">
            <FacebookOutlined style={{ fontSize: '1.5em' }} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-lg">
            <InstagramOutlined style={{ fontSize: '1.5em' }} />
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-lg">
            <GithubOutlined style={{ fontSize: '1.5em' }} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-lg">
            <TwitterOutlined style={{ fontSize: '1.5em' }} />
          </a>
        </div>
        <p className="text-sm">© 2023 Your Company</p>
      </div>
    </footer>
  );
};

export default ResponsiveFooter;
