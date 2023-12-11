"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Post {
  id: number;
  name: string;
  internalName: string;
}

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:4000/restaurant');
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
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
  );
};

export default Page;
