import React, { useRef } from "react";

const AddData = (props) => {
  const idRef = useRef("");
  const titleRef = useRef("");
  const bodyRef = useRef("");

    const submitHandler = (event) => {
    event.preventDefault();

    const post = {
      id: idRef.current.value,
      title: titleRef.current.value,
      body: bodyRef.current.value,
    };
    props.onAddData(post);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <label>Email address</label>
        <input
          type="id"
          class="form-control"
          ref={idRef}
          aria-describedby="emailHelp"
          placeholder="Enter email"
        />
      </div>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          class="form-control"
          ref={titleRef}
          placeholder="name"
        />
      </div>
      <div className="form-group">
        <label>Body</label>
        <input
          type="text"
          class="form-control"
          ref={bodyRef}
          placeholder="body"
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default AddData;
