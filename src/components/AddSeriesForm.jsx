import { addShow } from "../app/server-actions/addShow";

const SeriesForm = () => {
  return (
    <form
      action={addShow}
      className="flex flex-col items-center justify-center text-center mx-auto"
    >
      <div className="flex flex-col gap-2 w-2/3 mt-3 items-center">
        <label htmlFor="title" className="font-semibold">
          Title
        </label>
        <input
          className="text-gray-900 rounded-md"
          type="text"
          id="title"
          name="title"
          required
        />
      </div>
      <div className="flex flex-col gap-2 w-2/3 mt-3 items-center">
        <label htmlFor="ep_num" className="font-semibold">
          Number of Episodes
          <br />
          [leave blank if standalone movie]
        </label>
        <input
          className="text-gray-900 rounded-md"
          type="text"
          id="ep_num"
          name="ep_num"
        />
      </div>
      <div className="flex flex-col gap-2 w-2/3 mt-3 items-center">
        <label htmlFor="producer" className="font-semibold">
          Producer
        </label>
        <input
          className="text-gray-900 rounded-md"
          type="text"
          id="producer"
          name="producer"
          required
        />
      </div>
      <div className="flex flex-col gap-2 w-2/3 mt-3 items-center">
        <label htmlFor="genre" className="font-semibold">
          Genre
        </label>
        <input
          className="text-gray-900 rounded-md"
          type="text"
          id="genre"
          name="genre"
          required
        />
      </div>
      <div className="flex flex-col gap-2 w-2/3 mt-3 items-center">
        <label htmlFor="publisher" className="font-semibold">
          Publisher
        </label>
        <input
          className="text-gray-900 rounded-md"
          type="text"
          id="publisher"
          name="publisher"
          required
        />
      </div>
      <div className="flex flex-col gap-2 w-2/3 mt-3 items-center">
        <label htmlFor="Description" className="font-semibold">
          Description
        </label>
        <textarea
          className="text-gray-900 rounded-md  w-2/3 min-h-20"
          type="text"
          id="Description"
          name="Description"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-green-500 px-4 py-2 mt-5 rounded-lg text-lg font-semibold hover:bg-green-700"
      >
        Add Show
      </button>
    </form>
  );
};

export default SeriesForm;
