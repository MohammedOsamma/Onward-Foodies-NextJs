"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export async function shareMeal(formData) {
  function isInvalidText(text) {
    return !text || text.trim() === "";
  }

  const meal = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.include("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input",
    };
  }

  await saveMeal(meal);

  //   This function tells NextJS to revalidate the cache that belongs to a certain route path.So for example, if I know that I want to visit the meals page and that the meals page depends on data that changed now,
  revalidatePath("/meals");

  //   for Revalidate all project you can make this
  //   revalidatePath("/", "layout");
  redirect("/meals");
}
