"use client";

import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";
import { Post } from "@/types/post";

interface PromptCardListProps {
  data: Post[];
  handleTagClick: (tag: string) => void;
}

const PromptCardList: React.FC<PromptCardListProps> = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {
        data.map((post: any) => (
          <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />
        ))
      }
    </div>
  )
}

const Feed = () => {

  const [searchText, setSearchText] = useState('')
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e: any) => {
    
  }

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()

      setPosts(data);
    }

    fetchPost();
  }, [])

  return (
    <section className="feed">
      <form action="" className="w-full relative flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form> 
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
