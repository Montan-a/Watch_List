"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const addShow = async (formData) => {
  const title = formData.get("title");
  const ep_num = formData.get("ep_num");
  const genre = formData.get("genre");
  const publisher = formData.get("publisher");
  const producer = formData.get("producer");
  const Description = formData.get("Description");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) {
    console.error("User is not authorized to add a show");
    return;
  }

  const { data, error } = await supabase.from("series").insert([
    {
      title,
      ep_num,
      genre,
      publisher,
      producer,
      Description,
      user_id: user.id,
    },
  ]);
  const test = await data;

  if (error) {
    console.error("Error inserting data into the database", error);
    return;
  }

  revalidatePath("/watch-list");

  return { message: "Success" };
};
