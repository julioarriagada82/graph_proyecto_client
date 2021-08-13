import React from "react";
import Image from "./Image";

const MessageCard = ({ message }) => {
  const { image, content, postedBy } = post;
  return (
    <div className="card text-center" style={{ minHeight: "375px " }}>
      <div className="card-body">
        <Image image={image} />
        <h4 className="text-primary">@{message.postedBy.username}</h4>
        <hr />
        <small>{content}</small>
      </div>
    </div>
  );
};

export default MessageCard;
