"use client"
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  Bell,
  LogOut,
  LucideUniversity,
  Maximize2,
  Menu,
  MessageSquareIcon,
  Minimize2,
  Settings,
} from "lucide-react";
import Link from "next/link";
import useAuth from '@/hooks/useAuth';

export interface HeaderProps {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
}

const Header = ({ setSidebarOpen, isFullscreen, toggleFullscreen }: HeaderProps) => {
  const [isProfileDropdownOpen, setProfileDropdownOpen] = React.useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-pink-400 to-pink-500 text-white px-4 py-3 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-4">
          {/* Sidebar toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-pink-600"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={20} />
          </Button>

          {/* Fullscreen toggle */}
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:bg-pink-600"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
          </Button>

          {/* Logo + Title */}
          <div className="flex items-center space-x-2">
            <Image src="/logo.png" alt="SchoolEase Logo" width={30} height={30} />
            <div className="text-lg font-semibold">SchoolEase</div>
          </div>
        </div>

        {/* Right side */}
  
<div className="flex items-center space-x-4">
  {/* Notification bell with blinking dot */}
  <div className="relative">
    <Bell className="w-5 h-5 cursor-pointer hover:text-pink-200" />
    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-white animate-ping"></span>
    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
  </div>

  {/* Message icon with blinking dot */}
  <div className="relative">
    <MessageSquareIcon className="w-5 h-5 cursor-pointer hover:text-pink-200" />
    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-white animate-ping"></span>
    <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-green-500"></span>
  </div>

  {/* Profile dropdown */}
  <div className="relative" ref={dropdownRef}>
    <div
      onClick={() => setProfileDropdownOpen((prev) => !prev)}
      className="flex items-center space-x-2 cursor-pointer select-none"
    >
      <span className="hidden md:inline font-medium">হাবিপ্রবি স্কুল</span>
      <Image
        src="/logo.png"
        alt="User Avatar"
        width={28}
        height={28}
        className="rounded-full"
      />
    </div>

    {/* Dropdown menu */}
    <ul
      className={`absolute right-0 mt-2 w-56 bg-white text-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-all duration-200 origin-top-right ${
        isProfileDropdownOpen
          ? "scale-100 opacity-100"
          : "scale-95 opacity-0 pointer-events-none"
      }`}
    >
      <li>
        <Link
          href="/profile"
          className="flex items-center px-4 py-2 text-sm hover:bg-pink-50 hover:text-pink-600"
        >
          <Settings size={16} className="mr-2" />
          অ্যাকাউন্ট সেটিংস
        </Link>
      </li>
      <li>
        <Link
          href="/profile"
          className="flex items-center px-4 py-2 text-sm hover:bg-pink-50 hover:text-pink-600"
        >
          <LucideUniversity size={16} className="mr-2" />
          Institute Profile
        </Link>
      </li>
      <li>
        <button
          onClick={() => {
            setProfileDropdownOpen(false);
            useAuth().logOut()
          }}
          className="w-full text-left flex items-center px-4 py-2 text-sm hover:bg-pink-50 hover:text-red-600"
        >
          <LogOut size={16} className="mr-2" />
          Logout
        </button>
      </li>
    </ul>
  </div>
</div>

      </div>
    </header>
  );
};

export default Header;
