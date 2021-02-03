import React from "react";

import { Button } from "../components/button/button";
import "../scss/grid.scss";
import "../scss/homeBlog.scss";
import posts from "../components/posts/posts";
import { PostList } from "../components/posts/postList";

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
          <PostList posts={homePost} />
          <div className="home-blog__link">
            <Button text="See more" class="home-blog__btn" link="/blog" />
          </div>
        </div>
      </div>
    );
  }
}
