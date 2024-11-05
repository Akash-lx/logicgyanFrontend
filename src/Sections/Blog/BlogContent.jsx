import React, { useEffect, useState } from "react";
import { Box, Typography, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";
import BCards from "./BCards";
import axios from "axios";
import { properties } from "../../config/poperties";

const BlogContent = () => {
  const [fetched, seFetched] = useState(false);
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    if (!fetched) {
      fetchBlogs();
    }
    function fetchBlogs() {
      axios
        .get(`${properties.URLS.BASE_URL_DEV}/api/blogs/allBlogs`)
        .then((res) => {
          setBlogsData(res.data.data);
          seFetched(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [fetched]);

  console.log("--->", blogsData);

  return (
    <Box py={10}>
      <BCards blogsData={blogsData} />
    </Box>
  );
};

export default BlogContent;
