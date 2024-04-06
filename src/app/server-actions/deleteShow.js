"use server";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export const deleteShow = async (formData) => {
  const showId = formData.get("id");

  const cookieStore = cookies();
  const supabase = createServerComponentClient({ cookies: () => cookieStore });

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const user = session?.user;

  if (!user) {
    console.error("User is not authorized to eelete this entry");
    return;
  }

  const { error } = await supabase
    .from("series")
    .delete()
    .match({ id: showId, user_id: user.id });

  if (error) {
    console.error("Error deleting data into the database", error);
    return;
  }

  revalidatePath("/watch-list");

  return { message: "Success" };
};
