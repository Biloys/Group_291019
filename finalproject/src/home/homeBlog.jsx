import React from "react";
import "../scss/grid.scss";
import { Button } from "../components/button/button";
import posts from "../components/posts/posts";
import { PostList } from "../components/posts/postList";
import "../scss/homeBlog.scss";
const homePost = [];

for (let i = 0; i < 3; i++) {
  let post = posts[i];
  homePost.push(post);
}

export class HomeBlog extends React.Component {
  render() {
    return (
      <div className="home-blog">
        <div className="home-blog__wrapper">
          <div className="home-blog__text">
            <h1 className="home-blog__title"> From Our Blog</h1>
            <hr className="home-blog__line" />
          </div>
          <div className="home-blog__posts grid">
            <PostList posts={homePost} />
          </div>
          <div className="home-blog__link">
            <Button text="See more" class="home-blog__btn" link="/blog" />
          </div>
        </div>
      </div>
    );
  }
}
