import SeriesForm from "../../components/AddSeriesForm";
import EditShow from "../../components/EditShow";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { deleteShow } from "../server-actions/deleteShow";

const WatchList = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;
  const { data: shows, error } = await supabase
    .from("series")
    .select("*")
    .eq("user_id", user.id)
    .order("title", { ascending: true });

  if (error) {
    console.error("Error fetching shows");
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-900 max-w-screen-2xl ">
      {" "}
      {/* Gray background for entire component */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-200">Your Watch List</h1>{" "}
        <form action="/auth/signout" method="post">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign out
          </button>
        </form>
      </div>
      <SeriesForm />
      <div>
        {shows.map((show) => (
          <div key={show.id} className="my-4 border rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold text-gray-200">
              {show.title} - {show.publisher}
            </h2>{" "}
            {/* Show info styles */}
            <div className="flex justify-between items-center">
              <form action={deleteShow} method="POST">
                <input type="hidden" name="id" value={show.id} />
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Delete
                </button>
              </form>
              <EditShow show={show} />{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchList;
