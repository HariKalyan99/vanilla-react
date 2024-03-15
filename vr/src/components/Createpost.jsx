import React from "react";
import Editpost from "./Editpost";

const Createpost = () => {
  return (
    <div class="col g-5 d-flex bg-dark justify-content-center m-5 flex-wrap">
      <div class="col-sm-12 col-md-8 col-lg-5">
        <h2 className="mt-4 text-center">Create a Post</h2>
        <form class="needs-validation" novalidate="">
          <div class="row g-3">
            <div class="col-12">
              <label for="firstName" class="form-label">
                User Id
              </label>
              <input
                type="text"
                class="form-control"
                id="firstName"
                placeholder=""
                required=""
              />
              <div class="invalid-feedback">Valid first name is required.</div>
            </div>

            <div class="col-12">
              <label for="title" class="form-label">
                Title
              </label>
              <input type="text" class="form-control" id="title" required="" />
              <div class="invalid-feedback">
                Please enter your shipping title.
              </div>
            </div>
          </div>

          <hr class="my-4" />
          <h4 class="mb-3"> Body</h4>

          <div class="form-floating">
            <textarea
              class="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea2"
              style={{ height: "100px" }}
            ></textarea>
            <label for="floatingTextarea2">Comments</label>
          </div>

          <hr class="my-4" />

          <div class="col-12">
            <label for="username" class="form-label">
              Tags
            </label>
            <div class="input-group has-validation">
              <span class="input-group-text text-bg-dark">#</span>
              <input
                type="text"
                class="form-control"
                id="username"
                placeholder="Username"
                required=""
              />
              <div class="invalid-feedback">Tags must be entered with ','.</div>
            </div>
          </div>
          <hr class="my-4" />
          <label for="username" class="form-label">
            Reactions
          </label>
          <div class="input-group has-validation">
            <span class="input-group-text text-bg-dark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chat-heart-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15m0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
              </svg>
            </span>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Username"
              required=""
            />
            <div class="invalid-feedback">Tags must be entered with ','.</div>
          </div>
          <hr class="my-4" />
          <button class="w-100 btn btn-danger btn-lg mb-3" type="submit">
            Add Post
          </button>
        </form>
      </div>
      <div className="container m-3" style={{width: "600px"}}>
        <h1>Take a look!</h1>
      <Editpost />
      </div>
    </div>
  );
};

export default Createpost;
