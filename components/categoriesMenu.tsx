import { ICategory } from "boundless-api-client";
import { apiClient, revalidate } from "@/lib/api";
import Link from "next/link";

export default async function CategoriesMenu() {
  const categories = await fetchCategoriesMenu();

  return (
    <div className={"container mb-4"}>
      <ul
        className={"d-flex flex-wrap justify-content-center m-0"}
        style={{ gap: "15px" }}
      >
        {categories.map(({ category_id, title, url_key }) => (
          <div key={category_id} className="flex">
            <Link
              href={`/collections/${url_key || category_id}`}
              className={"fs-4"}
            >
              <p className="bg-slate-300 rounded-full px-6 p-2">{title}</p>
            </Link>
          </div>
        ))}
      </ul>
    </div>
  );
}

const fetchCategoriesMenu = async (): Promise<ICategory[]> => {
  return apiClient.catalog.getCategoryTree(
    {
      menu: "category",
    },
    {
      next: {
        revalidate,
        tags: ["categories"],
      },
    }
  );
};
