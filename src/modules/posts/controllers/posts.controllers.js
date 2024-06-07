import { postModel } from "../../../../db/models/post.model.js";


//create post
export const createPost = async (req, res,next) => {
    const { title ,content ,author,userId } = req.body;
    const post=await postModel.create({title ,content ,author,userId})
    return res.status(201).json({message:'post created successfully',data:post,success:true});
}


// reading post
export const readingPost = async(req,res,next) =>{
    
    try {
        const posts = await postModel.findAll();
        return res.status(200).json({ data: posts, success: true });
      } catch (error) {
        return res.status(500).json({ message: 'Error fetching posts', error, success: false });
      }
}

// update post
export const updatePost = async(req,res,next) =>{
    const { id } = req.params;
  const { title, content, author } = req.body;
  try {
    const post = await postModel.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found', success: false });
    }
    post.title = title;
    post.content = content;
    post.author = author;
    await post.save();
    return res.status(200).json({ message: 'Post updated successfully', data: post, success: true });
  } catch (error) {
    return res.status(500).json({ message: 'Error updating post', error, success: false });
  };
}

// delete post
export const deletePost = async(req,res,next) =>{
  const { id } = req.params;
  const { userId } = req.body;
  try {
    const post = await postModel.findByPk(id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found', success: false });
    }
    if (post.userId !== userId) {
      return res.status(403).json({ message: 'Unauthorized', success: false });
    }
    const delPost = await postModel.destroy({
      where:{
        id:id
      }
    })
    return res.status(200).json({ message: 'Post deleted successfully', success: true });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting post', error, success: false });
  }

}