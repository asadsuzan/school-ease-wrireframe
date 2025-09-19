import {
    Home,
    Settings,
    Users,
    Book,
    User,
    Briefcase,
    FileText,
    Eye,
    
    BarChart3,
    Calendar,
   
 
    
    DollarSign,
    
    
    
    Plus,
    
    UserPlus,
    BookOpen,
    GraduationCap,
    Building,
    CreditCard,
    Wallet,
    Clock,
    CalendarDays
} from 'lucide-react';

const sidebarItems = [
    {
        id: 'dashboard',
        icon: Home,
        label: 'ড্যাশবোর্ড',
        path: '/'
    },
    {
        id: 'settings',
        icon: Settings,
        label: 'সাধারণ সেটিংস',
        path: '/settings',
        hasAdd: true,
        children: [
            { icon: Building, label: 'স্কুল তথ্য', path: '/settings/school-info' },
            { icon: Settings, label: 'সিস্টেম সেটিংস', path: '/settings/system' },
            { icon: User, label: 'ব্যবহারকারী ব্যবস্থাপনা', path: '/settings/users' }
        ]
    },
    {
        id: 'classes',
        icon: GraduationCap,
        label: 'ক্লাস',
        path: '/classes',
        hasAdd: true,
        children: [
            { icon: Plus, label: 'নতুন ক্লাস যোগ করুন', path: '/classes/add' },
            { icon: Eye, label: 'সব ক্লাস দেখুন', path: '/classes/all' },
           
        ]
    },
    {
        id: 'subjects',
        icon: Book,
        label: 'বিষয়',
        path: '/subjects',
        hasAdd: true,
        children: [
            { icon: BookOpen, label: 'বিষয় তালিকা', path: '/subjects/list' },
            { icon: Plus, label: 'নতুন বিষয়', path: '/subjects/add' },
            { icon: Settings, label: 'বিষয় সেটিংস', path: '/subjects/settings' }
        ]
    },
    {
        id: 'students',
        icon: Users,
        label: 'ছাত্রছাত্রী',
        path: '/students',
        hasAdd: true,
        children: [
            { icon: UserPlus, label: 'নতুন ছাত্র ভর্তি', path: '/students/admission' },
            { icon: Users, label: 'সব ছাত্র', path: '/students/all' },
            { icon: Eye, label: 'ছাত্র প্রোফাইল', path: '/students/profiles' },
            { icon: FileText, label: 'ছাত্র রিপোর্ট', path: '/students/reports' }
        ]
    },
    {
        id: 'employees',
        icon: Briefcase,
        label: 'কর্মচারী',
        path: '/employees',
        hasAdd: true,
        children: [
            { icon: UserPlus, label: 'নতুন কর্মচারী', path: '/employees/add' },
            { icon: Users, label: 'কর্মচারী তালিকা', path: '/employees/list' },
            { icon: Wallet, label: 'বেতন ব্যবস্থাপনা', path: '/employees/salary' }
        ]
    },
    {
        id: 'reports',
        icon: FileText,
        label: 'রিপোর্ট',
        path: '/reports',
        hasAdd: true,
        children: [
            { icon: BarChart3, label: 'একাডেমিক রিপোর্ট', path: '/reports/academic' },
            { icon: DollarSign, label: 'আর্থিক রিপোর্ট', path: '/reports/financial' },
            { icon: Users, label: 'উপস্থিতি রিপোর্ট', path: '/reports/attendance' }
        ]
    },
    {
        id: 'fees',
        icon: CreditCard,
        label: 'ফি',
        path: '/fees',
        hasAdd: true,
        children: [
            { icon: Plus, label: 'ফি সংগ্রহ', path: '/fees/collection' },
            { icon: Eye, label: 'ফি রিপোর্ট', path: '/fees/reports' },
            { icon: Settings, label: 'ফি সেটিংস', path: '/fees/settings' }
        ]
    },
    {
        id: 'salary',
        icon: Wallet,
        label: 'বেতন',
        path: '/salary',
        hasAdd: true,
        children: [
            { icon: DollarSign, label: 'বেতন প্রদান', path: '/salary/payment' },
            { icon: FileText, label: 'বেতন রিপোর্ট', path: '/salary/reports' },
            { icon: Settings, label: 'বেতন সেটিংস', path: '/salary/settings' }
        ]
    },
    {
        id: 'attendance',
        icon: Clock,
        label: 'উপস্থিতি',
        path: '/attendance',
        hasAdd: true,
        children: [
            { icon: Users, label: 'ছাত্র উপস্থিতি', path: '/attendance/students' },
            { icon: Briefcase, label: 'কর্মচারী উপস্থিতি', path: '/attendance/employees' },
            { icon: BarChart3, label: 'উপস্থিতি রিপোর্ট', path: '/attendance/reports' }
        ]
    },
    {
        id: 'schedule',
        icon: CalendarDays,
        label: 'সময়সূচী',
        path: '/schedule',
        hasAdd: true,
        children: [
            { icon: Calendar, label: 'ক্লাস রুটিন', path: '/schedule/classes' },
            { icon: Clock, label: 'পরীক্ষার সময়সূচী', path: '/schedule/exams' },
            { icon: CalendarDays, label: 'একাডেমিক ক্যালেন্ডার', path: '/schedule/calendar' }
        ]
    },
];


export default sidebarItems;