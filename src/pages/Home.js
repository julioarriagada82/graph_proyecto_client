import React, { useContext } from "react";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { AuthContext } from "../context/authContext";
import { useHistory } from "react-router-dom";
import { GET_ALL_POST } from "../graphql/queries";
import PostCard from "../components/PostCard";

const Home = () => {
  const { data, loading } = useQuery(GET_ALL_POST);
  const [fetchPosts, { data: posts }] = useLazyQuery(GET_ALL_POST);
  // access context
  const { state } = useContext(AuthContext);
  // react router
  let history = useHistory();

  if (loading) return <p className="p-5">Loading...</p>;

  return (
    <div className="container">
      <div className="row p-5">
        {data &&
          data.allPosts.map((post) => (
            <div className="col-md-4 pt-5" key={post._id}>
              <PostCard post={post} />
            </div>
          ))}
      </div>
      <div className="row p-5">
        <button
          onClick={() => fetchPosts()}
          className="btn-btn-raised btn-primary"
        >
          Fetch Posts
        </button>
      </div>
      <hr />
      {JSON.stringify(posts)}
      <hr />
      {JSON.stringify(state.user)}
      <hr />
      {JSON.stringify(history)}
    </div>
  );
};

export default Home;
