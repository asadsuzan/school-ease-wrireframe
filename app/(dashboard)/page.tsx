
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from "@/components/ui/button";
import {
  
  Settings,
  Users,
  
  User,

  BarChart3,

 
  DollarSign,

  ChevronRight,


} from 'lucide-react';
export default function Dashboard() {
  const statsCards = [
    {
      title: 'মোট শিক্ষার্থী',
      value: '0',
      subtitle: 'এই মাসে: 0',
      bgColor: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
      icon: Users
    },
    {
      title: 'মোট কর্মচারী',
      value: '5',
      subtitle: 'এই মাসে: 5',
      bgColor: 'bg-gradient-to-br from-purple-400 to-purple-600',
      icon: User
    },
    {
      title: 'রাজস্ব',
      value: '0',
      subtitle: '$ 0',
      bgColor: 'bg-gradient-to-br from-pink-400 to-pink-600',
      icon: DollarSign
    },
    {
      title: 'মোট লাভ',
      value: '0',
      subtitle: '$ 0',
      bgColor: 'bg-gradient-to-br from-pink-400 to-pink-600',
      icon: DollarSign
    },
  ];

  return (

    <div className="p-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {statsCards.map((card, index) => (
          <Card key={index} className={`${card.bgColor} text-white border-0 shadow-lg hover:shadow-xl transition-shadow`}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm opacity-90 mb-1">{card.title}</p>
                  <p className="text-3xl font-bold">{card.value}</p>
                  <p className="text-xs opacity-75 mt-1">{card.subtitle}</p>
                </div>
                <card.icon size={32} className="opacity-80" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Promotional Section */}
        <div className="lg:col-span-2">
          <Card className="bg-gradient-to-r from-pink-50 to-purple-50 border-0 shadow-lg mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-center">
                <div className="flex-1 mb-4 md:mb-0 md:mr-6">
                  <h3 className="text-xl font-bold text-pink-600 mb-2">আমাদের অ্যাপবোর্ড ব্যবহার করুন!</h3>
                  <p className="text-gray-600 mb-3">আমার আক্টিভিটি এবং প্রোডাক্ট দেখতে চান |</p>
                  <p className="text-gray-600 mb-4">অনুগ্রহ করে আপনার ইমেইল ঠিকানা প্রদান করুন | এবং আমার মোবাইল নম্বর |</p>
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white">
                    আরও পড়ুন
                  </Button>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-40 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                    <User size={48} className="text-white" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Analytics Chart */}
          <Card className="shadow-lg">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">পরিসংখ্যান</CardTitle>
                <Button variant="ghost" size="sm">
                  <ChevronRight size={16} />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-pink-400 rounded"></div>
                  <span className="text-sm text-gray-600">Expenses</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded"></div>
                  <span className="text-sm text-gray-600">Income</span>
                </div>
              </div>
              <div className="h-48 bg-gray-50 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BarChart3 size={48} className="mx-auto mb-2 opacity-50" />
                  <p className="text-sm">চার্ট ডেটা লোড হচ্ছে...</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <Card className="shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center text-sm">
                <Settings size={16} className="mr-2" />
                আ্যাকাউন্ট সেটিংস
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm">প্রোফাইল্টার</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="text-sm">লগআউট</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-lg">
            <CardContent className="p-4">
              <h3 className="font-bold mb-2">এই মাসে</h3>
              <p className="text-2xl font-bold">$ 0</p>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">এই মাসের আনুমানিক ফি</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">অনুমান</span>
                <span className="text-pink-500 text-lg font-bold">$ 0</span>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-lg font-bold">$ 0</p>
                  <p className="text-xs text-gray-500">আয়</p>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <p className="text-lg font-bold text-pink-500">$ 0</p>
                  <p className="text-xs text-gray-500">খরচ</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>





  );
}