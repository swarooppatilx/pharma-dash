'use client';

import React, { useState } from 'react';
import {
  PieChart,
  ShoppingCart,
  Pill,
  Package,
  BarChart,
  BoxIcon,
  Users,
  Factory,
  UserCircle,
  Settings as SettingsIcon,
  Bell,
} from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { Purchase } from '@/components/purchase';
import { Dispenser } from '@/components/dispenser';
import { Product } from '@/components/product';
import { Reports } from '@/components/reports';
import { Stock } from '@/components/stock';
import { Customer } from '@/components/customer';
import { Manufacturer } from '@/components/manufacturer';
import { Employee } from '@/components/employee';
import { Settings } from '@/components/settings';
import { DashboardContent } from '@/components/dashboard-content';

const tabs = [
  { name: 'Dashboard', icon: PieChart },
  { name: 'Purchase', icon: ShoppingCart },
  { name: 'Dispenser', icon: Pill },
  { name: 'Product', icon: Package },
  { name: 'Reports', icon: BarChart },
  { name: 'Stock', icon: BoxIcon },
  { name: 'Customer', icon: Users },
  { name: 'Manufacturer', icon: Factory },
  { name: 'Employee', icon: UserCircle },
  { name: 'Settings', icon: SettingsIcon },
];

export default function PharmacyDashboard() {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const renderActiveComponent = () => {
    switch (activeTab) {
      case 'Purchase':
        return <Purchase />;
      case 'Dispenser':
        return <Dispenser />;
      case 'Product':
        return <Product />;
      case 'Reports':
        return <Reports />;
      case 'Stock':
        return <Stock />;
      case 'Customer':
        return <Customer />;
      case 'Manufacturer':
        return <Manufacturer />;
      case 'Employee':
        return <Employee />;
      case 'Settings':
        return <Settings />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className='flex h-screen bg-gray-100 dark:bg-gray-900'>
      {/* Sidebar */}
      <aside className='w-64 bg-white p-4 shadow-md dark:bg-gray-800'>
        <div className='mb-8 flex items-center'>
          <PieChart className='mr-2 h-8 w-8 text-blue-500' />
          <span className='text-xl font-bold text-gray-800 dark:text-white'>
            PharmaDash
          </span>
        </div>
        <nav className='space-y-2'>
          {tabs.map((tab) => (
            <Button
              key={tab.name}
              variant={activeTab === tab.name ? 'default' : 'ghost'}
              className='w-full justify-start'
              onClick={() => setActiveTab(tab.name)}
            >
              <tab.icon className='mr-2 h-5 w-5' />
              {tab.name}
            </Button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className='flex-1 overflow-auto p-8'>
        {/* Header */}
        <header className='mb-8 flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Input className='w-64' placeholder='Search' type='search' />
          </div>
          <div className='flex items-center space-x-4'>
            <Button variant='outline' size='icon'>
              <Bell className='h-5 w-5' />
            </Button>
            <Avatar>
              <AvatarImage src='/placeholder-user.jpg' alt='@shadcn' />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Active Component */}
        {renderActiveComponent()}
      </main>
    </div>
  );
}
