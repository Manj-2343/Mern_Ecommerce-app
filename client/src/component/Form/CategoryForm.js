import React from "react";

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="res-input">
        <div className="form-group  res-1-input">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="form-control class-input "
            placeholder="Enter new Category"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Submit
        </button>
      </form>
    </>
  );
};
export default CategoryForm;
