import React, { useState } from "react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "@apollo/react-hooks";
import FileUpload from "../../components/FileUpload";
import { MESSAGE_CREATE } from "../../graphql/mutations";
import { MESSAGES_BY_USER } from "../../graphql/queries";
import MessageCard from "../../components/MessageCard";

const initialState = {
  content: "",
  image: {
    url: "https://via.placeholder.com/200x200.png?text=Post",
    public_id: "123",
  },
};

const Post = () => {
  const [values, setValues] = useState(initialState);
  const [loading, setLoading] = useState(false);

  //query
  const { data: messages } = useQuery(MESSAGES_BY_USER);

  // destrecture
  const { content } = values;

  // mutation
  const [postCreate] = useMutation(MESSAGE_CREATE, {
    // read query from cache / write query to cache
    update: (cache, { data: { messageCreate } }) => {
      // read Query from cache
      const { messagesByUser } = cache.readQuery({
        query: MESSAGES_BY_USER,
      });
      // write Query to cache
      cache.writeQuery({
        query: MESSAGES_BY_USER,
        data: {
          postsByUser: [messageCreate, ...messagesByUser],
        },
      });
    },
    onError: (err) => console.log(err.graphqlQLError[0].message),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    postCreate({ variables: { input: values } });
    setValues(initialState);
    setLoading(false);
    toast.success("Post created");
  };

  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const createForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <textarea
          value={content}
          onChange={handleChange}
          name="content"
          rows="5"
          className="md-textarea form-control"
          placeholder="Write something cool"
          maxLength="150"
          disabled={loading}
        ></textarea>
      </div>

      <button
        className="btn btn-primary"
        type="submit"
        disabled={loading || !content}
      >
        Messages
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      {loading ? <h4 className="text-danger">Loading</h4> : <h4>Create</h4>}

      <FileUpload
        values={values}
        loading={loading}
        setValues={setValues}
        setLoading={setLoading}
        singleUpload={true}
      />

      <div className="row">
        <div className="col">{createForm()}</div>
      </div>
      <hr />
      <div className="row p-5">
        {messages &&
          messages.messagesByUser.map((message) => (
            <div className="col-md-6 pt-5" key={message._id}>
              <MessageCard message={message} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Post;
