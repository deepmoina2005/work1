import React, { useState, useEffect, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MobileMenu from './components/MobileMenu';

// Lazy loading components
const Home = React.lazy(() => import('./pages/Home'));
const Goals = React.lazy(() => import('./pages/Goals'));
const FindMemory = React.lazy(() => import('./pages/Memories/FindMemory'));
const AddNewMemory = React.lazy(() => import('./pages/Memories/AddNewMemory'));
const ToDoLists = React.lazy(() => import('./pages/ToDoLists'));
const Archive = React.lazy(() => import('./pages/Archive'));
const Settings = React.lazy(() => import('./pages/settings/Settings'));
const Insight = React.lazy(() => import('./pages/Insight'));
const Subscription = React.lazy(() => import('./pages/Subscription'));
const Vaults = React.lazy(() => import('./pages/Vaults'));
const GoalsShowPage = React.lazy(() => import('./pages/GoalsShowPage'));
const VaultViewPage = React.lazy(() => import('./pages/VaultViewPage'));
const Memories = React.lazy(() => import('./pages/Memories'));
// Settings Pages
const AccountSettings = React.lazy(() => import('./pages/settings/AccountSettings'));
const SubcriptionManagmentSettings = React.lazy(() => import('./pages/settings/SubcriptionManagmentSettings'));
const NotificationsSettings = React.lazy(() => import('./pages/settings/NotificationsSettings'));
const PerferencesSettings = React.lazy(() => import('./pages/settings/PerferencesSettings'));
const PrivacySecuritySettings = React.lazy(() => import('./pages/settings/PrivacySecuritySettings'));
const HelpandSupportSettings = React.lazy(() => import('./pages/settings/HelpandSupportSettings'));

const App = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="bg-[#F3F3F3] min-h-screen flex">
      {/* Conditionally render Sidebar or MobileMenu */}
      {isMobile ? <MobileMenu /> : <Sidebar />}

      {/* Main content area */}
      <div className={`flex flex-1 ${isMobile ? '' : 'ml-64'}`}>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
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
        </Suspense>
      </div>
    </div>
  );
};

export default App;
