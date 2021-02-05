import React from "react";
import { BsEye } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import "./postList.scss";

export class PostList extends React.Component {
  render() {
    const homePost = this.props.posts;
    return homePost.map((post) => {
      return (
        <div className="col-4 post">
          <div className="post__wrapper" id={post.id}>
            <figure
              className="post__image"
              style={{ backgroundImage: `url(${post.img})` }}
            ></figure>
            <div className="post__content">
              <div className="post__details">
                <div className="post__img">
                  <MdAccountCircle className="post__picture" />
                </div>
                <div className="post__personal">
                  <h4 className="post__author">{post.author}</h4>
                  <h4 className="post__date">Apr 8, 2020</h4>
                </div>
              </div>
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
    });
  }
}
