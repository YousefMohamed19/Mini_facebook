import { commentModel } from "../../../../db/models/comment.model.js";

//create comment
export const createComment = async (req, res,next) => {
    const { content, postId ,userId} = req.body;
    try {
      const comment = await commentModel.create({ content, postId, userId });
      return res.status(201).json({ message: 'Comment created successfully', data: comment, success: true });
    } catch (error) {
      return res.status(500).json({ message: 'Error creating comment', error, success: false });
    }
}


// reading comment
export const readingComment = async(req,res,next) =>{
    try {
        const comments = await commentModel.findAll();
        return res.status(200).json({ data: comments, success: true });
      } catch (error) {
        return res.status(500).json({ message: 'Error fetching comments', error, success: false });
      }
}

// update comment
export const updateComment = async(req,res,next) =>{
    const { id } = req.params;
    const { content, userId } = req.body;
    try {
      const comment = await commentModel.findByPk(id);
      if (!comment) {
        return res.status(404).json({ message: 'Comment not found', success: false });
      }
      if (comment.userId !== userId) {
        return res.status(403).json({ message: 'Unauthorized', success: false });
      }
      comment.content = content;
      await comment.save();
      return res.status(200).json({ message: 'Comment updated successfully', data: comment, success: true });
    } catch (error) {
      return res.status(500).json({ message: 'Error updating comment', error, success: false });
    }

}

// delete comment
export const deleteComment= async(req,res,next) =>{
    const { id } = req.params;
  const { userId } = req.body;
  try {
    const comment = await commentModel.findByPk(id);
    if (!comment) {
      return res.status(404).json({ message: 'Comment not found', success: false });
    }
    if (comment.userId !== userId) {
      return res.status(403).json({ message: 'Unauthorized', success: false });
    }
    await comment.destroy();
    return res.status(200).json({ message: 'Comment deleted successfully', success: true });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting comment', error, success: false });
  }

}