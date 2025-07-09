import React from 'react';
import { useNavigate } from 'react-router-dom';

const getSortSymbol = (field, sortConfig) => {
  if (sortConfig.key !== field) return '↕';
  if (sortConfig.direction === 'asc') return '▲';
  if (sortConfig.direction === 'desc') return '▼';
  return '↕';
};

const DataTable = ({
  comments,
  searchQuery,
  onSort,
  sortConfig,
  currentPage,
  pageSize,
  onPageChange,
  onPageSizeChange,
}) => {
  const navigate = useNavigate();

  const totalPages = Math.ceil(comments.length / pageSize);
  const startIdx = (currentPage - 1) * pageSize;
  const endIdx = startIdx + pageSize;
  const currentData = comments.slice(startIdx, endIdx);

  const handleRowClick = (comment) => {
    navigate('/profile', { state: comment });
  };

  return (
    <div className="table-wrapper">
      <table className="w-full border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th
              className="p-2 cursor-pointer"
              onClick={() => onSort('postId')}
            >
              Post ID {getSortSymbol('postId', sortConfig)}
            </th>
            <th
              className="p-2 cursor-pointer"
              onClick={() => onSort('name')}
            >
              Name {getSortSymbol('name', sortConfig)}
            </th>
            <th
              className="p-2 cursor-pointer"
              onClick={() => onSort('email')}
            >
              Email {getSortSymbol('email', sortConfig)}
            </th>
            <th className="p-2">Comment</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((comment) => (
            <tr
              key={comment.id}
              onClick={() => handleRowClick(comment)}
              className="border-b hover:bg-gray-100 cursor-pointer"
            >
              <td className="p-2">{comment.postId}</td>
              <td className="p-2">{comment.name}</td>
              <td className="p-2">{comment.email}</td>
              <td className="p-2">{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <div>
          <label className="mr-2">Page Size:</label>
          <select
            value={pageSize}
            onChange={(e) => onPageSizeChange(Number(e.target.value))}
            className="border px-2 py-1 rounded"
          >
            {[10, 50, 100].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <button
            className="px-3 py-1 bg-gray-200 rounded"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="px-3 py-1 bg-gray-200 rounded"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
