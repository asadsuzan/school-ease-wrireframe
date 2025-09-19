import React from 'react'
import { X, ChevronRight, ChevronDown, Plus } from "lucide-react";
import { Button } from '../ui/button';
export interface SidebarChild {
    icon: React.ElementType;
    label: string;
    path: string;
}

export interface SidebarItem {
    id: string;
    icon: React.ElementType;
    label: string;
    path: string;
    hasAdd?: boolean;
    children?: SidebarChild[];
}

export interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
    sidebarItems: SidebarItem[];
    expandedItems: string[];
    toggleExpanded: (id: string) => void;
    handleNavigation: (path: string) => void;
    isParentActive: (path: string) => boolean;
    isActive: (path: string) => boolean;
}

const Sidebar = ({
    sidebarOpen,
    setSidebarOpen,
    sidebarItems,
    expandedItems,
    toggleExpanded,
    handleNavigation,
    isParentActive,
    isActive,
}: SidebarProps) => {
    return (
        <aside className={`fixed lg:sticky lg:top-16  transform ${sidebarOpen ? 'translate-x-0 w-64' : '-translate-x-full w-0'} transition-transform duration-300 ease-in-out z-30  bg-white shadow-lg h-screen lg:h-[calc(100vh-4rem)] overflow-y-auto`}>
            <div className="p-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-lg font-semibold text-gray-800">মেনু</h2>
                    <Button
                        variant="ghost"
                        size="sm"
                        className=""
                        onClick={() => setSidebarOpen(false)}
                    >
                        <X size={20} />
                    </Button>
                </div>

                <nav className="space-y-2">
                    {sidebarItems.map((item) => (
                        <div key={item.id} className="space-y-1">
                            {/* Main Item */}
                            <div
                                className={`mb-4 flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer ${isParentActive(item?.path) ? 'bg-pink-500 text-white' : 'hover:bg-gray-100 text-gray-700'
                                    }`}
                                onClick={() => {
                                    if (item.children) {
                                        toggleExpanded(item.id);
                                    } else {
                                        handleNavigation(item.path);
                                    }
                                }}
                            >
                                <div className="flex items-center space-x-3">
                                    {item.icon && <item.icon size={18} />}
                                    <span className="text-sm">{item.label}</span>
                                </div>
                                <div className="flex items-center space-x-1">
                                    {item.hasAdd && (
                                        <Plus size={14} className="opacity-50 hover:opacity-100 cursor-pointer" />
                                    )}
                                    {item.children && (
                                        <div className="p-1">
                                            {expandedItems.includes(item.id) ? (
                                                <ChevronDown size={14} className="opacity-70" />
                                            ) : (
                                                <ChevronRight size={14} className="opacity-70" />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Nested Items */}
                            {item.children && expandedItems.includes(item.id) && (
                                <div className="ml-6  space-y-1 border-l-2 border-gray-200 pl-4">
                                    {item.children.map((child, childIndex) => (
                                        <div
                                            key={childIndex}
                                            className={`flex group relative items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${isActive(child.path)
                                                ? 'bg-pink-100 text-pink-700'
                                                : 'hover:bg-gray-50 text-gray-600 hover:text-gray-800'
                                                }`}
                                            onClick={() => handleNavigation(child.path)}
                                        >
                                            {child.icon && <child.icon size={16} />}
                                            <span className="text-sm">{child.label}</span>
                                            {/* the circle indicator */}
                                            <div className={`absolute -translate-x-8 left-0 top-1/2 h-[8px] w-[8px]  rounded-full ${isActive(child.path) ? 'bg-pink-500' : 'bg-transparent group-hover:bg-pink-300'}`}></div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar