import React from "react";
import { PostList } from "../components/posts/postList";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";

import posts from "../components/posts/posts";
import "../scss/blog.scss";

const AllPost = [];
const news = [];
const recipes = [];
const events = [];

for (let i = 0; i < posts.length; i++) {
  let post = posts[i];
  AllPost.push(post);
  if (post.category === "news") {
    news.push(post);
  } else if (post.category === "recipes") {
    recipes.push(post);
  } else if (post.category === "events") {
    events.push(post);
  } else {
    continue;
  }
}

export class Blog extends React.Component {
  render() {
    return (
      <Router>
        <div className="blog">
          <div className="blog__background">
            <div className="blog__wrapper">
              <div className="blog__text">
                <h1 className="blog__title">Our Blog</h1>
                <div className="blog__links">
                  <Link className="blog__link" to="/blog">
                    All Post
                  </Link>
                  <Link className="blog__link" to="/category/news">
                    News
                  </Link>
                  <Link className="blog__link" to="/category/recipes">
                    Recipes
                  </Link>
                  <Link className="blog__link" to="/category/events">
                    Events
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="blog__wrapper">
            <div className="blog__posts grid">
              <Switch>
                <Route exact path="/blog">
                  <PostList posts={AllPost} info="active" />
                </Route>
                <Route path="/category/news">
                  <PostList posts={news} info="active" />
                </Route>
                <Route path="/category/recipes">
                  <PostList posts={recipes} info="active" />
                </Route>
                <Route path="/category/events">
                  <PostList posts={events} info="active" />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
{
  /* <div className="blog">
<div className="blog__wrapper">
  <div className="blog__text">
    <h1 className="blog__title">Our Blog</h1>
    <hr className="blog__line" />
  </div>
  <div className="blog__posts grid">
    <PostList posts={AllPost} />
  </div>
</div>
</div> */
}

// function CheckPost(cat) {
//   console.log(cat);
//   const list = [];
//   posts.forEach((el) => {
//     if (el.category === cat) {
//       return list.push(el);
//     } else {
//       console.log("bad work");
//     }
//   });

//   console.log(list);

// return <h1>hello {list.length}</h1>;
// return list;

// posts.map((el) => {
//   if (catName === el.category) {
//     list.push(el);
//   }
// });
// return <PostList posts={list} />;
// }

// const cat = "news";
// CheckPost("news");

// CheckPost("recipes");
// CheckPost("events");
