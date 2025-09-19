"use client";

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import sidebarItems from '@/lib/SidebarItems';
import Sidebar from './Sidebar';
import Header from './Header';


export default function SchoolEaseSystemLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [expandedItems, setExpandedItems] = useState<string[]>([]);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    const isParentActive = (path: string) => {
        if (path === "/") {
            return pathname === "/"; // Dashboard only active on root
        }
        return pathname.startsWith(path);
    };


    const toggleExpanded = (itemId: string) => {
        setExpandedItems(prev =>
            prev.includes(itemId)
                ? prev.filter(id => id !== itemId)
                : [...prev, itemId]
        );
    };

    const handleNavigation = (path: string) => {
        router.push(path);
        // setSidebarOpen(false); // Close mobile sidebar on navigation
    };


    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
        }
    };

    // Keep track of fullscreen changes
    useEffect(() => {
        const handleChange = () => setIsFullscreen(!!document.fullscreenElement);
        document.addEventListener("fullscreenchange", handleChange);
        return () => document.removeEventListener("fullscreenchange", handleChange);
    }, []);


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
           <Header  {...{setSidebarOpen, isFullscreen, toggleFullscreen }}/>

            <div className="flex pt-16">
                {/* Sidebar */}
                <Sidebar {...{ sidebarItems, sidebarOpen, setSidebarOpen, toggleExpanded, expandedItems, handleNavigation, isActive, isParentActive }} />


                {/* Main Content */}
                <main className="flex-1 overflow-x-hidden">{children}</main>
            </div>

            {/* Mobile overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}
        </div>
    );
}
