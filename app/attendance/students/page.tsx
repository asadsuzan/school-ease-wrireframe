import { Clock, Users, Briefcase, BarChart3, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function AttendancePage() {
    const attendanceStats = [
        { title: 'আজকের উপস্থিতি', value: '০%', icon: Clock, color: 'bg-blue-500' },
        { title: 'ছাত্র উপস্থিতি', value: '০/০', icon: Users, color: 'bg-green-500' },
        { title: 'কর্মচারী উপস্থিতি', value: '৫/৫', icon: Briefcase, color: 'bg-purple-500' },
        { title: 'গড় উপস্থিতি', value: '০%', icon: BarChart3, color: 'bg-orange-500' },
    ];

    return (


        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">উপস্থিতি ব্যবস্থাপনা</h1>
                <p className="text-gray-600">ছাত্রছাত্রী ও কর্মচারীদের উপস্থিতি পরিচালনা করুন</p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {attendanceStats.map((stat, index) => (
                    <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardContent className="p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                                </div>
                                <div className={`p-3 rounded-lg ${stat.color}`}>
                                    <stat.icon className="w-6 h-6 text-white" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-3">
                            <Users className="w-8 h-8 text-blue-500" />
                            <div>
                                <h3 className="font-semibold text-gray-800">ছাত্র উপস্থিতি</h3>
                                <p className="text-sm text-gray-600">ছাত্রদের উপস্থিতি নিন</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-3">
                            <Briefcase className="w-8 h-8 text-green-500" />
                            <div>
                                <h3 className="font-semibold text-gray-800">কর্মচারী উপস্থিতি</h3>
                                <p className="text-sm text-gray-600">কর্মচারীদের উপস্থিতি নিন</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer border-l-4 border-l-purple-500">
                    <CardContent className="p-6">
                        <div className="flex items-center space-x-3">
                            <BarChart3 className="w-8 h-8 text-purple-500" />
                            <div>
                                <h3 className="font-semibold text-gray-800">উপস্থিতি রিপোর্ট</h3>
                                <p className="text-sm text-gray-600">উপস্থিতির রিপোর্ট দেখুন</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Today's Attendance */}
            <Card className="mb-6">
                <CardHeader>
                    <div className="flex items-center justify-between">
                        <CardTitle className="flex items-center space-x-2">
                            <Calendar className="w-5 h-5" />
                            <span>আজকের উপস্থিতি</span>
                        </CardTitle>
                        <div className="text-sm text-gray-600">
                            {new Date().toLocaleDateString('bn-BD')}
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="text-center py-12">
                        <Clock className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-600 mb-2">আজকের উপস্থিতি নেওয়া হয়নি</h3>
                        <p className="text-gray-500 mb-4">ছাত্রছাত্রী ও কর্মচারীদের উপস্থিতি নিন।</p>
                        <div className="flex justify-center space-x-4">
                            <Button className="bg-blue-500 hover:bg-blue-600">
                                <Users className="w-4 h-4 mr-2" />
                                ছাত্র উপস্থিতি
                            </Button>
                            <Button className="bg-green-500 hover:bg-green-600">
                                <Briefcase className="w-4 h-4 mr-2" />
                                কর্মচারী উপস্থিতি
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Attendance Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>সাপ্তাহিক উপস্থিতি</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm">রবিবার</span>
                                <div className="flex items-center space-x-2">
                                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                                        <div className="w-0 h-2 bg-blue-500 rounded-full"></div>
                                    </div>
                                    <span className="text-sm text-gray-600">০%</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm">সোমবার</span>
                                <div className="flex items-center space-x-2">
                                    <div className="w-20 h-2 bg-gray-200 rounded-full">
                                        <div className="w-0 h-2 bg-blue-500 rounded-full"></div>
                                    </div>
                                    <span className="text-sm text-gray-600">০%</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>ক্লাসভিত্তিক উপস্থিতি</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-center py-8">
                            <Users className="w-12 h-12 text-gray-300 mx-auto mb-2" />
                            <p className="text-sm text-gray-600">কোন ক্লাস নেই</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>


    );
}