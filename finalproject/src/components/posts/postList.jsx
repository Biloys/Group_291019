import React from "react";
import { BsEye } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";

export class PostList extends React.Component {
  render() {
    const homePost = this.props.posts;
    console.log("home post" + homePost);
    return (
      <div className="home-blog__posts grid">
        {homePost.map((post) => {
          return (
            <div className="col-4 post">
              <div className="post__wrapper" id={post.id}>
                <figure className="post__image">
                  <img
                    src={post.img}
                    alt={post.img}
                    className="post__pic"
                    width="290px"
                    height="165px"
                  />
                </figure>
                <div className="post__content">
                  <h2 className="post__title">{post.title}</h2>
                  <div className="post__statistics">
                    <hr className="post__hr" />
                    <div className="post__info">
                      <div className="post__view">
                        <BsEye className="post__eye" />
                        {post.views}
                      </div>
                      <div className="post__comment">Write a comment</div>
                      <div className="post__likes">
                        {post.likes}
                        <AiFillHeart className="post__heart" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
