import { commentModel } from "../../../../db/models/comment.model.js";
import { postModel } from "../../../../db/models/post.model.js";
import { userModel } from "../../../../db/models/user.model.js";

export const specialSearch = async (req, res) => {
    const { userId, postId } = req.params;
  
    try {
      const user = await userModel.findByPk(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found', success: false });
      }
  
      const post = await postModel.findOne({ where: { id: postId, userId } });
      if (!post) {
        return res.status(404).json({ message: 'Post not found', success: false });
      }
  
      const comment = await commentModel.findAll({ where: { postId } });
  
      return res.status(200).json({ user: user.dataValues.username, post, comment, success: true });
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving user, post, and comments', error, success: false });
    }
  };



  export const specialPost = async (req, res) => {
    const { postId } = req.params;
  
    try {
      // Find post with given postId
      const post = await postModel.findByPk(postId);
      if (!post) {
        return res.status(404).json({ message: 'Post not found', success: false });
      }
  
      // Find author of the post
      const author = await userModel.findByPk(post.userId);
      if (!author) {
        return res.status(404).json({ message: 'Author not found', success: false });
      }
  
      return res.status(200).json({ post, author: author.dataValues.username, success: true });
    } catch (error) {
      return res.status(500).json({ message: 'Error retrieving post with author', error, success: false });
    }
  };