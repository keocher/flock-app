"use client";
import React, { useState, useMemo } from "react";
import { modulesData } from "@/mock/module";

export default function BrowseModules() {
  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState<string | null>(null);
  const [semesterFilter, setSemesterFilter] = useState<string | null>(null);

  const filteredModules = useMemo(() => {
    return modulesData.filter((mod) => {
      const matchesSearch =
        mod.name.toLowerCase().includes(search.toLowerCase()) ||
        mod.code.toLowerCase().includes(search.toLowerCase());
      const matchesDepartment = departmentFilter ? mod.department === departmentFilter : true;
      const matchesSemester = semesterFilter ? mod.semester === semesterFilter : true;
      return matchesSearch && matchesDepartment && matchesSemester;
    });
  }, [search, departmentFilter, semesterFilter]);

  const buttonStyle = {
    border: "none",
    borderRadius: "0.375rem",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    transition: "background-color 0.2s",
  };

 /* const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement | HTMLSelectElement>) =>
    (e.currentTarget.style.backgroundColor = "#7C7C6F");

 /const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement | HTMLSelectElement>) =>
    (e.currentTarget.style.backgroundColor = "#414142"); */

  return (
    <div
      className="min-h-screen w-full p-6 flex flex-col items-center"
      
    >
      <h1 className="text-3xl font-bold mb-6 ">Browse Modules</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full max-w-6xl flex-wrap">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by module name or code..."
          className=" rounded-sm px-3 py-2 flex-1 bg-gruvgray "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />


        {/* Department Filter */}
        <select
          className="px-3 py-2 rounded appearance-none bg-gruvgray hover:cursor-pointer hover:bg-gruvgray/50 duration-300 "
        
          value={departmentFilter ?? ""}
          onChange={(e) => setDepartmentFilter(e.target.value || null)}
         // onMouseEnter={handleMouseEnter}
         // onMouseLeave={handleMouseLeave}
        >
          <option value="">All Departments</option>
          <option value="Computer Science">Computer Science</option>
          
        </select>

        {/* Semester Filter */}
        <select
          className="px-3 py-2 rounded appearance-none bg-gruvgray hover:cursor-pointer hover:bg-gruvgray/50 duration-300 "
          value={semesterFilter ?? ""}
          onChange={(e) => setSemesterFilter(e.target.value || null)}
          //onMouseEnter={handleMouseEnter}
          //onMouseLeave={handleMouseLeave}
        >
          <option value="">All Semesters</option>
          <option value="Semester 1">Semester 1</option>
          <option value="Semester 2">Semester 2</option>
        </select>

        {/* Clear Filters Button */}
        <button
        className="bg-gruvorange hover:bg-gruvorange/80 "
          style={buttonStyle}
         // onMouseEnter={handleMouseEnter}
         // onMouseLeave={handleMouseLeave}
          onClick={() => {
            setSearch("");
            setDepartmentFilter(null);
            setSemesterFilter(null);
          }}
        >
          Clear Filters
        </button>
      </div>

      {/* Module Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {filteredModules.map((mod) => (
          <div
            key={mod.code}
            className="rounded-md p-4 shadow hover:shadow-lg transition-shadow bg-gruvgray/35"
          >
            <h2 className="text-xl font-semibold  ">{mod.name}</h2>
            <p className="text-sm text-gruvred/50">{mod.code}</p>
            <p className="mt-2 ">{mod.description}</p>
            <p className="mt-2 text-xs ">
              {mod.department} | {mod.semester}
            </p>
          </div>
        ))}

        {filteredModules.length === 0 && (
          <p className=" col-span-full">No modules found.</p>
        )}
      </div>
    </div>
  );
}
