

import { useState } from 'react';
import Head from 'next/head';
import type { NextPage } from 'next';
import jobs from '../data.json';
import Card from '../components/card';
import TagFilter from '../components/TagFilter';

const Home: NextPage = () => {
  const [selectedJobTags, setSelectedJobTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>(''); // Added searchTerm state
  const [contractType, setContractType] = useState<string>(''); // Added contractType state

  const handleClearSearch = () => setSearchTerm(''); // Function to clear the search input

  const filteredJobs = jobs.filter((job) => {
    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
    const matchesTags = selectedJobTags.every((tag) => jobTags.includes(tag));

    // Trim the search term and split it into an array of words
    const searchWords = searchTerm.trim().toLowerCase().split(/\s+/);

    // Check if the job matches any of the search words
    const matchesSearchTerm = searchWords.some((word) => {
      return (
        job.company.toLowerCase().includes(word) ||
        job.role.toLowerCase().includes(word) ||
        job.position.toLowerCase().includes(word) ||
        job.level.toLowerCase().includes(word) ||
        job.languages.some((language) => language.toLowerCase().includes(word)) ||
        job.tools.some((tool) => tool.toLowerCase().includes(word))
      );
    });

    const matchesContractType = !contractType || job.contract === contractType;

    return matchesTags && matchesSearchTerm && matchesContractType;
  });

  return (
    <>
      <Head>
        <title>Static Job Listings</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <header className="bg-cyan bg-header-mobile sm:bg-header-desktop bg-center bg-cover h-156px mb-12 flex items-center justify-center">
        <h1 className="text-white text-3xl font-bold">Find Your Job</h1>
      </header>

      <div className="w-full px-6 lg:px-20 xl:px-40">
        <div className="flex items-center mb-6 space-x-4">
          {/* Search Input */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search by company, role, position, level, or languages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-3 pr-10 border rounded-md focus:outline-none focus:border-cyan"
            />
            {/* Clear Button */}
            {searchTerm && (
              <button
                onClick={handleClearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                ✕
              </button>
            )}
          </div>

          {/* Contract Type Filter */}
          <select
            value={contractType}
            onChange={(e) => setContractType(e.target.value)}
            className="p-3 border rounded-md focus:outline-none focus:border-cyan"
          >
            <option value="">All Types</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
          </select>
        </div>

        {selectedJobTags.length > 0 && (
          <TagFilter
            selectedJobTags={selectedJobTags}
            setSelectedJobTags={setSelectedJobTags}
          />
        )}

        {filteredJobs.length === 0 ? (
          <p className="text-gray-500">No job listings match your search criteria.</p>
        ) : (
          filteredJobs.map((job) => (
            <Card
              key={job.id}
              job={job}
              selectedJobTags={selectedJobTags}
              setSelectedJobTags={setSelectedJobTags}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Home;
