
import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import axios from "axios";

interface Post {
  webSettings: any;
  id: number;
  bannerImage: string;
  name: string;
  description: string;
  price: any;
  internalName: string;
}

interface Menus {
  sections: any;
  items: any;
  id: number;
  image: string;
  name: string;
  price: any;
  description: string;
}

const NewProducts = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const [menus, setMenu] = useState<Menus[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:4000/restaurant", {
          timeout: 5000, // 5 seconds timeout (adjust as needed)
        });
        setPosts(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    
    const fetchDataMenu = async () => {
      try {
        const res = await axios.get("http://localhost:4000/menu", {
          timeout: 5000, // 5 seconds timeout (adjust as needed)
        });
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

{posts.map((post) => (
              <li key={post.id}>
                <h2>{post.name}</h2>
                <p>{post.internalName}</p>           
                </li>
            ))}

{menus.map((menu) => (
  <li key={menu.id}>
    <h2>{menu.name}</h2>
    {/* Check if sections and items arrays exist and are not empty before accessing properties */}
    {menu.sections && menu.sections.length > 0 && menu.sections[0]?.items && menu.sections[0].items.length > 0 && (
      <Image
        src={menu.sections[0].items[0].images[0]?.image}  
        alt={menu.sections[0].items[0].name}  
        height={640}
        width={640}
      />
    )}
  </li>
))}




    </>
  );
};

export default NewProducts;
