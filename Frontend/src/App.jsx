import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';

// Import all components directly (no lazy loading)
import Home from './pages/Home';
import Goals from './pages/Goals';
import FindMemory from './pages/Memories/FindMemory';
import AddNewMemory from './pages/Memories/AddNewMemory';
import ToDoLists from './pages/ToDoLists';
import Archive from './pages/Archive';
import Settings from './pages/settings/Settings';
import Insight from './pages/Insight';
import Subscription from './pages/Subscription';
import Vaults from './pages/Vaults';
import GoalsShowPage from './pages/GoalsShowPage';
import VaultViewPage from './pages/VaultViewPage';
import Memories from './pages/Memories';
// Settings Pages
import AccountSettings from './pages/settings/AccountSettings';
import SubcriptionManagmentSettings from './pages/settings/SubcriptionManagmentSettings';
import NotificationsSettings from './pages/settings/NotificationsSettings';
import PerferencesSettings from './pages/settings/PerferencesSettings';
import PrivacySecuritySettings from './pages/settings/PrivacySecuritySettings';
import HelpandSupportSettings from './pages/settings/HelpandSupportSettings';

const App = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Initial check for mobile screen

  // Hook to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Update state on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div>
      {/* Show Mobile Menu for small screens */}
      {isMobile ? (
        <>
          <MobileMenu />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vaults" element={<Vaults />} />
            <Route path="/goals-view" element={<GoalsShowPage />} />
            <Route path="/goals" element={<Goals />} />
            <Route path="/find-memory" element={<FindMemory />} />
            <Route path="/add-new-memory" element={<AddNewMemory />} />
            <Route path="/memories" element={<Memories />} />
            <Route path="/todo-lists" element={<ToDoLists />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/vault-view" element={<VaultViewPage />} />
            <Route path="/insight" element={<Insight />} />
            <Route path="/subscription" element={<Subscription />} />
            {/* Settings Sub-Routes */}
            <Route path="/settings-account" element={<AccountSettings />} />
            <Route path="/settings-subscription" element={<SubcriptionManagmentSettings />} />
            <Route path="/settings-notification" element={<NotificationsSettings />} />
            <Route path="/settings-preference" element={<PerferencesSettings />} />
            <Route path="/settings-privacy" element={<PrivacySecuritySettings />} />
            <Route path="/settings-help" element={<HelpandSupportSettings />} />
          </Routes>
        </>
      ) : (
        <div className="min-h-screen flex bg-white lg:bg-[#F3F3F3]">
          {/* Sidebar for larger screens */}
          <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
          {/* Main content area */}
          <div className={`flex flex-1 ${isSidebarExpanded ? 'ml-[270px]' : 'ml-24'} lg:bg-[#F3F3F3] bg-white transition-all duration-300`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/vaults" element={<Vaults />} />
              <Route path="/goals-view" element={<GoalsShowPage />} />
              <Route path="/goals" element={<Goals />} />
              <Route path="/find-memory" element={<FindMemory />} />
              <Route path="/add-new-memory" element={<AddNewMemory />} />
              <Route path="/memories" element={<Memories />} />
              <Route path="/todo-lists" element={<ToDoLists />} />
              <Route path="/archive" element={<Archive />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/vault-view" element={<VaultViewPage />} />
              <Route path="/insight" element={<Insight />} />
              <Route path="/subscription" element={<Subscription />} />
              {/* Settings Sub-Routes */}
              <Route path="/settings-account" element={<AccountSettings />} />
              <Route path="/settings-subscription" element={<SubcriptionManagmentSettings />} />
              <Route path="/settings-notification" element={<NotificationsSettings />} />
              <Route path="/settings-preference" element={<PerferencesSettings />} />
              <Route path="/settings-privacy" element={<PrivacySecuritySettings />} />
              <Route path="/settings-help" element={<HelpandSupportSettings />} />
            </Routes>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
