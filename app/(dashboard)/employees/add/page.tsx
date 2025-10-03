"use client";

import { useForm } from "react-hook-form";
import { CalendarIcon, RefreshCw, Check } from "lucide-react";

type EmployeeFormInputs = {
  name: string;
  mobile: string;
  role: string;
  joinDate: string;
  salary: string;
  father: string;
  nid: string;
  education: string;
  address: string;
  gender: string;
  religion: string;
  blood: string;
  experience: string;
  email: string;
  dob: string;
};

export default function Add() {
  const { register, handleSubmit } = useForm<EmployeeFormInputs>();

  const onSubmit = (data: EmployeeFormInputs) => {
    console.log("Submitted", data);
  };

  return (
    <div className="w-full bg-white rounded-md shadow p-6">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-semibold">Employee Form</h1>
        <p className="text-sm mt-1">
          <span className="text-[#5b4efc] font-semibold">Required*</span>{" "}
          <span className="text-gray-500">Optional</span>
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Section 1 */}
        <div>
          <h2 className="font-semibold mb-4 flex items-center">
            <span className="bg-[#5b4efc] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
              1
            </span>
            Basic Information
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Employee Name*
              </label>
              <input
                {...register("name")}
                className="mt-1 rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#5b4efc] outline-none"
                placeholder="Name of Employee"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Mobile No for SMS/WhatsApp
              </label>
              <input
                {...register("mobile")}
                className="mt-1 rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#5b4efc]"
                placeholder="e.g +44xxxxxxxxxx"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Employee Role*
              </label>
              <select
                {...register("role")}
                className="mt-1 rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#5b4efc]"
              >
                <option value="">Select*</option>
                <option value="teacher">Teacher</option>
                <option value="staff">Staff</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Picture – Optional
              </label>
              <input
                type="file"
                className="mt-1 rounded-full border border-gray-300 px-4 py-1 focus:ring-2 focus:ring-[#5b4efc]"
              />
              <span className="text-xs text-amber-600 mt-1">
                Max size 100KB
              </span>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Date of Joining*
              </label>
              <div className="relative">
                <input
                  type="date"
                  {...register("joinDate")}
                  className="mt-1 rounded-full border border-gray-300 px-4 py-2 w-full focus:ring-2 focus:ring-[#5b4efc]"
                />
                <CalendarIcon className="absolute right-3 top-3 h-4 w-4 text-gray-500" />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Monthly Salary*
              </label>
              <input
                {...register("salary")}
                className="mt-1 rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#5b4efc]"
                placeholder="Monthly Salary"
              />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div>
          <h2 className="font-semibold mb-4 flex items-center">
            <span className="bg-[#5b4efc] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">
              2
            </span>
            Other Information
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Father / Husband Name
              </label>
              <input
                {...register("father")}
                className="mt-1 rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#5b4efc]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Gender
              </label>
              <select
                {...register("gender")}
                className="mt-1 rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#5b4efc]"
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Experience
              </label>
              <input
                {...register("experience")}
                className="mt-1 rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#5b4efc]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                National ID
              </label>
              <input
                {...register("nid")}
                className="mt-1 rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#5b4efc]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Religion
              </label>
              <select
                {...register("religion")}
                className="mt-1 rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#5b4efc]"
              >
                <option value="">Select</option>
                <option>Islam</option>
                <option>Christianity</option>
                <option>Hinduism</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                {...register("email")}
                className="mt-1 rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#5b4efc]"
                placeholder="Email Address"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Education
              </label>
              <input
                {...register("education")}
                className="mt-1 rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#5b4efc]"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Blood Group
              </label>
              <select
                {...register("blood")}
                className="mt-1 rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#5b4efc]"
              >
                <option value="">Select</option>
                <option>A+</option>
                <option>B+</option>
                <option>O+</option>
                <option>AB+</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <div className="relative">
                <input
                  type="date"
                  {...register("dob")}
                  className="mt-1 rounded-full border border-gray-300 px-4 py-2 w-full focus:ring-2 focus:ring-[#5b4efc]"
                />
                <CalendarIcon className="absolute right-3 top-3 h-4 w-4 text-gray-500" />
              </div>
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <label className="text-sm font-medium text-gray-700">
              Home Address
            </label>
            <input
              {...register("address")}
              className="mt-1 rounded-full border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-[#5b4efc]"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-center gap-4 pt-6">
          <button
            type="reset"
            className="flex items-center gap-2 rounded-full bg-amber-400 text-black px-6 py-2 font-medium shadow hover:bg-amber-500"
          >
            <RefreshCw className="h-4 w-4" /> Reset
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-full bg-[#5b4efc] text-white px-6 py-2 font-medium shadow hover:bg-[#4a3dd9]"
          >
            <Check className="h-4 w-4" /> Submit
          </button>
        </div>
      </form>
    </div>
  );
}
