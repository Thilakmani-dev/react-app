import { useState } from "react";
import PropTypes from "prop-types";
import COMMENTS from "./Comment.json";

import { updateComment } from "./Comment.utils";

import "./Comment.css";

export const Comments = () => {
  const [comments, setComments] = useState(COMMENTS.comments);
  console.log("comments", comments);
  const [newComment, setNewComment] = useState("");

  function formSubmitHandler(e) {
    e.preventDefault();
    setComments([
      ...comments,
      {
        id: new Date().getTime(),
        content: newComment,
        replies: [],
      },
    ]);
    setNewComment("");
  }

  function updateNewComment(value) {
    setNewComment(value);
  }

  function updateComments(val) {
    console.log("val", val);
    setComments(val);
  }
  return (
    <div className="commentSection">
      <Comment.Input
        formSubmitHandler={formSubmitHandler}
        inputValue={newComment}
        updateInputValue={updateNewComment}
        placeholder="write a comment"
      />
      {comments.map((comment) => (
        <Comment
          comment={comment}
          key={comment.id}
          comments={comments}
          updateComments={updateComments}
        />
      ))}
    </div>
  );
};

function Comment({ comment, comments, updateComments }) {
  const [isShowReply, setIsShowReply] = useState(false);
  const [isReplyEditorVisible, setIsReplyEditorVisible] = useState(false);

  function viewReply() {
    setIsShowReply(true);
  }

  function addReply() {
    setIsReplyEditorVisible(true);
  }

  const [newReply, setNewReply] = useState("");

  function formSubmitHandler(e) {
    e.preventDefault();
    let updatedcomments = updateComment(newReply, comment.id, comments);
    updateComments(updatedcomments);
    setNewReply("");
  }

  function updateNewComment(value) {
    setIsShowReply(true);
    setNewReply(value);
  }

  return (
    <div className="commentWrapper" key={comment.id}>
      <div className="mainContent">
        <p className="commentMessage" key={comment.id}>
          {comment.content}
        </p>
        <div className="actions">
          {comment.replies.length > 0 && (
            <div onClick={viewReply}>View Replies</div>
          )}
          <div onClick={addReply}>Add reply</div>
        </div>
      </div>
      {isShowReply && (
        <div className="replyWrapper">
          {comment.replies.map((reply) => (
            <Comment
              comment={reply}
              key={reply.id}
              comments={comments}
              updateComments={updateComments}
            />
          ))}
        </div>
      )}
      {isReplyEditorVisible && (
        <Comment.Input
          formSubmitHandler={formSubmitHandler}
          inputValue={newReply}
          updateInputValue={updateNewComment}
          placeholder="write a reply"
        />
      )}
    </div>
  );
}

Comment.propTypes = {
  comment: PropTypes.object,
  comments: PropTypes.array,
  updateComments: PropTypes.func,
};

Comments.propTypes = {
  initialComments: PropTypes.object,
};

function CommentInput(props) {
  const { formSubmitHandler, placeholder, inputValue, updateInputValue } =
    props;
  return (
    <form onSubmit={formSubmitHandler}>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => updateInputValue(e.target.value)}
      />
      <input type="submit" value="Create" />
    </form>
  );
}

CommentInput.propTypes = {
  formSubmitHandler: PropTypes.func,
  placeholder: PropTypes.string,
  inputValue: PropTypes.string,
  updateInputValue: PropTypes.func,
};

Comment.Input = CommentInput;
