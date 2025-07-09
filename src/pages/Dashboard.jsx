import React, { useEffect, useState } from 'react';
import DataTable from '../components/DataTable';
import Pagination from '../components/Pagination';
import SearchBar from '../components/SearchBar';

const Dashboard = () => {
  const [comments, setComments] = useState([]);
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('searchQuery') || '');
  const [sortConfig, setSortConfig] = useState(
    JSON.parse(localStorage.getItem('sortConfig')) || { key: '', direction: '' }
  );
  const [currentPage, setCurrentPage] = useState(Number(localStorage.getItem('currentPage')) || 1);
  const [pageSize, setPageSize] = useState(Number(localStorage.getItem('pageSize')) || 10);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  // Save states to localStorage
  useEffect(() => {
    localStorage.setItem('searchQuery', searchQuery);
    localStorage.setItem('sortConfig', JSON.stringify(sortConfig));
    localStorage.setItem('currentPage', currentPage.toString());
    localStorage.setItem('pageSize', pageSize.toString());
  }, [searchQuery, sortConfig, currentPage, pageSize]);

  // Filtering
  const filteredComments = comments.filter((comment) => {
    const query = searchQuery.toLowerCase();
    return (
      comment.name.toLowerCase().includes(query) ||
      comment.email.toLowerCase().includes(query) ||
      comment.body.toLowerCase().includes(query)
    );
  });

  // Sorting
  const sortedComments = [...filteredComments].sort((a, b) => {
    const { key, direction } = sortConfig;
    if (!key || !direction) return 0;

    const aValue = a[key].toString().toLowerCase();
    const bValue = b[key].toString().toLowerCase();

    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  // Handle sort click
  const handleSort = (key) => {
    let direction = 'asc';

    if (sortConfig.key === key) {
      if (sortConfig.direction === 'asc') direction = 'desc';
      else if (sortConfig.direction === 'desc') direction = '';
      else direction = 'asc';
    }

    setSortConfig({ key, direction });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Comments Dashboard</h1>
        <a
          href="/profile"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Go to Profile
        </a>
      </div>

      <SearchBar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <DataTable
        comments={sortedComments}
        searchQuery={searchQuery}
        sortConfig={sortConfig}
        onSort={handleSort}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />

      <Pagination
        currentPage={currentPage}
        totalItems={filteredComments.length}
        pageSize={pageSize}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
      />
    </div>
  );
};

export default Dashboard;
