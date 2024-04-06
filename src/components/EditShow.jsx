"use client";

import { useState } from "react";

import { UpdateShow } from "../app/server-actions/updateShow";

const EditShow = ({ show }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: show.title,
    ep_num: show.ep_num,
    genre: show.genre,
    producer: show.producer,
    publisher: show.publisher,
    Description: show.Description,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="mr-8">
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 rounded-md bg-green-500 hover:bg-green-600 text-center"
      >
        Edit
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center px-4">
          <div className="bg-gray-900 p-6 rounded-lg w-full max-w-md">
            <span
              onClick={() => setShowModal(false)}
              className="text-white text-xl leading-none hover:text-gray-300 cursor-pointer float-right"
            >
              Close
            </span>
            <form
              action={UpdateShow}
              onSubmit={() => setShowModal(false)}
              className="mt-4"
            >
              <div className="mb-4">
                <input name="id" value={show.id} type="hidden" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="ep_num">
                  Number of episodes
                </label>
                <input
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                  type="text"
                  id="ep_num"
                  name="ep_num"
                  value={formData.ep_num}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="genre">
                  Genre
                </label>
                <input
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                  type="text"
                  id="genre"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="producer">
                  Producer
                </label>
                <input
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                  type="text"
                  id="producer"
                  name="producer"
                  value={formData.producer}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-300 mb-2" htmlFor="publisher">
                  Publisher
                </label>
                <input
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                  type="text"
                  j
                  id="publisher"
                  name="publisher"
                  value={formData.publisher}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-300 mb-2"
                  htmlFor="Description"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  id="Description"
                  name="Description"
                  value={formData.Description}
                  onChange={handleChange}
                  className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-blue-500"
                />
              </div>
              <button
                type="submit"
                className=" bg-green-500 py-2 px-4 font-semibold rounded hover:bg-green-600"
              >
                Update Show
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditShow;
