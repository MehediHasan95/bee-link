import React from "react";

const DeletePopup = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-center text-xl">
            Are you sure you want to delete this item?
          </h3>

          <div className="flex justify-center">
            <button className="py-2 px-3 mx-2 bg-rose-600 text-white rounded-lg">
              Yes, I'm sure
            </button>
            <button className="py-2 px-3 mx-2 bg-emerald-600 rounded-lg">
              <label htmlFor="my-modal">No, cancel</label>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DeletePopup };
