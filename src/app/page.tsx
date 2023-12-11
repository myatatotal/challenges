"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  id: number;
  name: string;
  internalName: string;
}

interface Menus {
  sections: any;
  items: any;
  id: number;
  name: string;
  description: string;
}

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const [menus, setMenu] = useState<Menus[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/restaurant");
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDataMenu = async () => {
      try {
        const res = await axios.get("http://localhost:4000/menu");
        setMenu(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    fetchDataMenu();
  }, []);

  return (
    <>
      <>
        <div>
          <h1>Posts</h1>
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <h2>{post.name}</h2>
                <p>{post.internalName}</p>
              </li>
            ))}
          </ul>
        </div>
      </>
      <>
        <div>
          <h1>Menu</h1>
          {menus.map((menu) => (
            <li key={menu.id}>
              <h2>{menu.name}</h2>
              {/* Check if sections and items arrays exist before accessing properties */}
              {menu.sections && menu.sections[0]?.items && (
                <p>{menu.sections[0].items[0].description}</p>
              )}
            </li>
          ))}
        </div>
      </>
    </>
  );
};

export default Page;
