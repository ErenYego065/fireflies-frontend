import qs from "qs";

const API_URL = process.env.NEXT_PUBLIC_CMS_URL || "http://localhost:3002";

export const getBlogs = async (limit?: number) => {
  const query = {
    status: {
      equals: "published",
    },
  };

  const stringifiedQuery = qs.stringify(
    {
      where: query,
    },
    {
      addQueryPrefix: true,
    }
  );

  const response = await fetch(
    `${API_URL}/api/blogs${stringifiedQuery}&limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch blogs");
  }

  const data = await response.json();
  return data;
};

export const getBlog = async (id: string) => {
  const response = await fetch(`${API_URL}/api/blogs/${id}`);

  if (!response.ok) {
    throw new Error("Invalid blog ID");
  }

  const data = await response.json();
  return data;
};
