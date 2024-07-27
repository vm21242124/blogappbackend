import { BlogModel } from "../models/BlogModel.js";

export const createBlog = async (req, res) => {
    const { title, content, author } = req.body;
  
    try {
      if (!title || !content || !author) {
        return res.status(400).json({ error: 'All fields are required' });
      }
  
      const newBlog = new BlogModel({
        title,
        content,
        author,
      });
  
      await newBlog.save();
  
      return res.status(201).json({ success: 'Blog created successfully', blog: newBlog });
    } catch (error) {
      console.error('Error creating blog:', error);
      return res.status(500).json({ error: 'Something went wrong' });
    }
};

export const updateBlog = async (req, res) => {
    const { id } = req.params; 
    const { title, content } = req.body;
  
    try {
      const updatedBlog = await BlogModel.findByIdAndUpdate(
        id,
        { title, content },
        { new: true, runValidators: true }
      );
  
      if (!updatedBlog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
  
      return res.status(200).json({ success: 'Blog updated successfully', blog: updatedBlog });
    } catch (error) {
      console.error('Error updating blog:', error);
      return res.status(500).json({ error: 'Something went wrong' });
    }
};

export const deleteBlog = async (req, res) => {
    const { id } = req.params; 
  
    try {
      const deletedBlog = await BlogModel.findByIdAndDelete(id);
  
      if (!deletedBlog) {
        return res.status(404).json({ error: 'Blog not found' });
      }
  
      return res.status(200).json({ success: 'Blog deleted successfully' });
    } catch (error) {
      console.error('Error deleting blog:', error);
      return res.status(500).json({ error: 'Something went wrong' });
    }
  };

  export const getAllBlogsByAuthor = async (req, res) => {
    const { authorId } = req.params; 
  
    try {
     
      const blogs = await BlogModel.find({ author: authorId });
  
      if (blogs.length === 0) {
        return res.status(404).json({ error: 'No blogs found for this author' });
      }
  
    
      return res.status(200).json({ blogs });
    } catch (error) {
      console.error('Error retrieving blogs by author:', error);
      return res.status(500).json({ error: 'Something went wrong' });
    }
  };