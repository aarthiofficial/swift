import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const comment = location.state;

  // Fallback if no state is passed
  if (!comment) {
    return (
      <div className="max-w-xl mx-auto p-4">
        <h2 className="text-xl font-semibold text-red-600 mb-4">No user data found</h2>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">User Profile</h1>

      <div className="space-y-4">
        <div>
          <label className="block font-medium text-gray-600">Name:</label>
          <div className="border px-4 py-2 rounded bg-gray-100">{comment.name}</div>
        </div>

        <div>
          <label className="block font-medium text-gray-600">Email:</label>
          <div className="border px-4 py-2 rounded bg-gray-100">{comment.email}</div>
        </div>

        <div>
          <label className="block font-medium text-gray-600">Post ID:</label>
          <div className="border px-4 py-2 rounded bg-gray-100">{comment.postId}</div>
        </div>

        <div>
          <label className="block font-medium text-gray-600">Comment:</label>
          <div className="border px-4 py-2 rounded bg-gray-100">{comment.body}</div>
        </div>
      </div>

      <button
        onClick={() => navigate('/')}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Back to Dashboard
      </button>
    </div>
  );
};

export default Profile;
