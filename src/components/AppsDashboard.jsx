import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import ToggleSwitch from '../components/ToggleSwitch'
import github from '../assets/Logos/github.png';
import zoom from '../assets/Logos/zoom.png';
import figma from '../assets/Logos/figma.png';
import zapier from '../assets/Logos/zapier.png';
import notion from '../assets/Logos/notion.png';
import slack from '../assets/Logos/slack.png';
import chrome from '../assets/Logos/chrome.png';
import discord from '../assets/Logos/discord.png';
import drive from '../assets/Logos/drive.png';
import { FaPlus } from "react-icons/fa";
import { HashLink } from 'react-router-hash-link';


const AppsDashboard = () => {
  const [categories, setCategories] = useState([
    { id: 'all', name: 'View all', active: true },
    { id: 'developer', name: 'Developer tools', active: false },
    { id: 'communication', name: 'Communication', active: false },
    { id: 'productivity', name: 'Productivity', active: false },
    { id: 'browser', name: 'Browser tools', active: false },
    { id: 'marketplace', name: 'Marketplace', active: false },
  ]);

  const [integrations, setIntegrations] = useState([
    {
      id: 'zoom',
      name: 'Zoom',
      icon: <img src={zoom} alt="" srcset="" />,
      description: 'Streamline software projects, sprints, and bug tracking.',
      enabled: false,
      category: 'communication'
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: <img src={github} alt="" />,
      description: 'Link pull requests and automate workflows.',
      enabled: true,
      category: 'developer'
    },
    {
      id: 'figma',
      name: 'Figma',
      icon: <img src={figma} alt="" srcset="" />,
      description: 'Embed file previews in projects.',
      enabled: true,
      category: 'developer'
    },
    {
      id: 'zapier',
      name: 'Zapier',
      icon: <img src={zapier} alt="" srcset="" />,
      description: 'Build custom automations and integrations with apps.',
      enabled: false,
      category: 'productivity'
    },
    {
      id: 'notion',
      name: 'Notion',
      icon: <img src={notion} alt="" srcset="" />,
      description: 'Embed notion pages and notes in projects.',
      enabled: true,
      category: 'productivity'
    },
    {
      id: 'slack',
      name: 'Slack',
      icon: <img src={slack} alt="" srcset="" />,
      description: 'Send notifications to channels and create projects.',
      enabled: true,
      category: 'communication'
    },
    {
      id: 'chrome',
      name: 'Google Chrome',
      icon: <img src={chrome} alt="" srcset="" />,
      description: 'Link your Google account to share bookmarks across your entire team.',
      enabled: true,
      category: 'browser'
    },
    {
      id: 'discord',
      name: 'Discord',
      icon: <img src={discord} alt="" srcset="" />,
      description: 'Keep in touch with your customers without leaving the app.',
      enabled: false,
      category: 'communication'
    },
    {
      id: 'drive',
      name: 'Google Drive',
      icon: <img src={drive} alt="" srcset="" />,
      description: 'Link your Google account to share files across your entire team.',
      enabled: false,
      category: 'productivity'
    },
    {
      id: 'discord',
      name: 'Discord',
      icon: <img src={discord} alt="" srcset="" />,
      description: 'Keep in touch with your customers without leaving the app.',
      enabled: false,
      category: 'communication'
    },
    {
      id: 'drive',
      name: 'Google Drive',
      icon: <img src={drive} alt="" srcset="" />,
      description: 'Link your Google account to share files across your entire team.',
      enabled: false,
      category: 'productivity'
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const integrationsPerPage = 9;

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setCategories(categories.map(category => ({
      ...category,
      active: category.id === categoryId
    })));
    setCurrentPage(1);
  };


  const toggleIntegration = (id) => {
    setIntegrations(integrations.map(integration =>
      integration.id === id ? { ...integration, enabled: !integration.enabled } : integration
    ));
  };

  const filteredIntegrations = selectedCategory === 'all'
    ? integrations
    : integrations.filter(integration => integration.category === selectedCategory);

  const indexOfLastIntegration = currentPage * integrationsPerPage;
  const indexOfFirstIntegration = indexOfLastIntegration - integrationsPerPage;
  const currentIntegrations = filteredIntegrations.slice(indexOfFirstIntegration, indexOfLastIntegration);

  const pageNumbers = [];
  const totalPages = Math.ceil(filteredIntegrations.length / integrationsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className='flex flex-wrap text-center sm:text-left items-start pt-20 mb-10 justify-between container mx-auto'>

        <div className="relative mx-5 sm:mx-0">
          <p className="uppercase font-bold sm:text-[52px] text-[36px] text-[#222222] ">
            Integrations and{" "}
            <br />
            <span className="relative inline-block">
              <span className="-rotate-1 absolute bg-[#67C598] sm:w-[486px] w-[342px] h-[41px] sm:h-[62px] top-[6px] right-[-10px] z-[10]"></span>
              <span className="relative text-white z-[20]">Connected Apps</span>
            </span>
          </p>
          <p className='mt-3 text-[#475467] text-sm'>Supercharge your workflow and connect the tool you use every day.</p>
        </div>

        <HashLink smooth to="/#contactForm" className="relative mx-5 sm:mx-0 mt-10 lg:mt-0">
          <div className='flex bg-[#4EB3DE] items-center gap-3 px-2 pe-5 py-2 rounded-full cursor-pointer'>
            <div className='bg-white p-3 rounded-full'><FaPlus /></div>
            <span className='text-white'>Request Integration</span>
          </div>
        </HashLink>

      </div>


      <div className="justify-between md:flex-col lg:flex-row flex min-h-screen container mx-auto pl-0">
        <div className="w-64 text-start  pr-10 border-gray-200 p-4 pt-6 hidden md:block">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category.id}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleCategorySelect(category.id);
                  }}
                  className={`block px-4 py-2 rounded-md ${category.active
                    ? 'bg-[#4EB3DE] text-white'
                    : 'text-[#667085] hover:bg-[#4EB3DE] hover:text-white'
                    }`}
                >
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

  
        <div className="flex-1 p-6 max-w-6xl mx-auto">
          {currentIntegrations.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No integrations found for this category
            </div>
          ) : (
            <div className="grid  text-start grid-cols-1 md:grid-cols-3 gap-6">
              {currentIntegrations.map((integration) => (
                <div
                  key={integration.id}
                  className="bg-white rounded-xl border hover:shadow-lg border-gray-200 p-4 px-0 flex flex-col h-full"
                >
                  <div className="flex justify-between items-start mb-7 px-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-md flex items-center justify-center mr-3">
                        <span className="text-lg font-semibold">{integration.icon}</span>
                      </div>
                      <h3 className="font-semibold text-xl text-gray-900 ">{integration.name}</h3>
                    </div>
                    <ToggleSwitch
                      checked={integration.enabled}
                      onCheckedChange={() => toggleIntegration(integration.id)}
                    />
                  </div>
                  <p className="px-4 text-[#475467] flex-grow mb-3 pb-2 border-b-gray-100 border-b-2">{integration.description}</p>
                  <a href="#" className="px-4 text-sm text-[#39B5EA] text-end hover:text-[#67C598] mt-auto">
                    View integration
                  </a>
                </div>
              ))}
            </div>
          )}

    
          {filteredIntegrations.length > integrationsPerPage && (
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center text-sm px-4 py-2 rounded-md ${currentPage === 1
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </button>

              <div className="flex space-x-1">
                {pageNumbers.map(number => (
                  <button
                    key={number}
                    onClick={() => setCurrentPage(number)}
                    className={`w-12 h-12 border-none outline-none flex items-center justify-center rounded-full text-sm ${currentPage === number
                      ? 'bg-[#F2F4F7] text-[#475467] font-medium '
                      : 'text-gray-600 hover:bg-gray-100'
                      }`}
                  >
                    {number}
                  </button>
                ))}
              </div>

              <button
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center text-sm px-4 py-2 rounded-md ${currentPage === totalPages
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-700 hover:bg-gray-100'
                  }`}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default AppsDashboard;