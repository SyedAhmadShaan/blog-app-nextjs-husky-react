import fs from "fs";
import path from "path";

interface BlogPost {
  id: string;
  title: string;
  description: string;
  image: string;
  content: string;
  date: string;
}

export const getBlogPosts = (dataDir: string): BlogPost[] => {
  const files = fs.readdirSync(dataDir);
  return files.map((filename) => {
    const filePath = path.join(dataDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const blogPost = JSON.parse(fileContents) as BlogPost;

    return {
      ...blogPost,
      id: filename.replace(".json", ""),
    };
  });
};
