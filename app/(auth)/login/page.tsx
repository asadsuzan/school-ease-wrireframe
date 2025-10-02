'use client';

import { useState } from 'react';
import { GraduationCap, User, Users, SquareUser as UserSquare2, Mail, Lock, Lightbulb, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default function Home() {
  const [userType, setUserType] = useState<'admin' | 'employee' | 'student'>('admin');
  const [email, setEmail] = useState('asadsuzan7@gmail.com');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-10 h-10 text-gray-800" />
              <span className="text-4xl font-semibold">
                <span className="text-sky-500">School</span>
                <span className="text-gray-800">Ease</span>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8 text-gray-400">
            <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center">
              <span className="text-gray-400">?</span>
            </div>
            <span className="text-sm">I do not have an account yet</span>
          </div>

          <div className="mb-8">
            <p className="text-center text-gray-600 mb-6">I am</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setUserType('admin')}
                className={`flex flex-col items-center justify-center w-24 h-24 rounded-full border-2 transition-all ${
                  userType === 'admin'
                    ? 'bg-sky-500 border-sky-500 text-white'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-sky-300'
                }`}
              >
                <User className="w-8 h-8 mb-1" />
                <span className="text-xs font-medium">Admin</span>
              </button>

              <button
                onClick={() => setUserType('employee')}
                className={`flex flex-col items-center justify-center w-24 h-24 rounded-full border-2 transition-all ${
                  userType === 'employee'
                    ? 'bg-sky-500 border-sky-500 text-white'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-sky-300'
                }`}
              >
                <Users className="w-8 h-8 mb-1" />
                <span className="text-xs font-medium">Employee</span>
              </button>

              <button
                onClick={() => setUserType('student')}
                className={`flex flex-col items-center justify-center w-24 h-24 rounded-full border-2 transition-all ${
                  userType === 'student'
                    ? 'bg-sky-500 border-sky-500 text-white'
                    : 'bg-white border-gray-200 text-gray-600 hover:border-sky-300'
                }`}
              >
                <UserSquare2 className="w-8 h-8 mb-1" />
                <span className="text-xs font-medium">Student</span>
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-12 h-14 bg-gray-50 border-gray-200"
                placeholder="Email"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-12 h-14 bg-gray-50 border-gray-200"
                placeholder="Password"
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                checked={rememberMe}
                onCheckedChange={(checked) => setRememberMe(checked as boolean)}
              />
              <label
                htmlFor="remember"
                className="text-sm text-gray-600 cursor-pointer"
              >
                Remember Me
              </label>
            </div>

            <Button
              className="w-full h-14 bg-sky-500 hover:bg-sky-600 text-white rounded-full text-lg font-medium"
            >
              Log in
            </Button>
          </div>
        </div>
      </div>

      <div className="hidden lg:flex lg:w-1/2 bg-sky-500 items-center justify-center p-12 relative overflow-hidden">
        <div className="absolute top-8 left-8">
          <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
            <Settings className="w-6 h-6 text-white" />
          </div>
        </div>

        <div className="absolute top-1/4 left-20">
          <Lightbulb className="w-24 h-24 text-white fill-white" />
        </div>

        <div className="absolute bottom-32 left-12">
          <Settings className="w-32 h-32 text-blue-600" />
        </div>

        <div className="absolute bottom-12 right-20">
          <Settings className="w-24 h-24 text-blue-600" />
        </div>

        <div className="relative z-10 text-center text-white max-w-xl">
          <h1 className="text-5xl font-bold mb-6">Start managing now</h1>
          <p className="text-xl mb-12 leading-relaxed">
            Stop struggling with common tasks and focus on the real choke points. Discover a full featured & 100% Free School management platform.
          </p>

          <div className="relative inline-block">
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-sky-500 rounded-full px-12 py-6 text-lg font-medium"
            >
              Get started
            </Button>

            <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="bg-blue-700 h-full rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>

                <div className="absolute top-12 right-8 w-16 h-16 rounded-full bg-blue-800 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>

                <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
                  <div className="bg-blue-800 rounded-lg p-3 space-y-2 w-48">
                    <div className="h-3 bg-blue-600 rounded-full w-full"></div>
                    <div className="h-3 bg-blue-600 rounded-full w-3/4"></div>
                  </div>
                </div>

                <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center -mb-16">
                  <User className="w-16 h-16 text-blue-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
