export function updateComment(content, id, comments) {
  console.log("comments", comments);
  let commentsCopy = JSON.parse(JSON.stringify(comments));
  for (let comment of commentsCopy) {
    if (comment.id === id) {
      comment.replies.push({
        id: new Date().getTime(),
        content: content,
        replies: [],
      });
    } else if (comment.replies.length > 0) {
      comment.replies = updateComment(content, id, comment.replies);
    }
  }
  return commentsCopy;
}
