import React, { useContext, useEffect } from "react";
import { productContext } from "../context/ProductContext";
import { useParams } from "react-router-dom";

const ContactDetail = () => {
  const { id } = useParams();
  const { readEdit, edit } = useContext(productContext);
  useEffect(() => {
    readEdit(id);
  }, [id]);
  console.log(edit);
  return (
    <div className="detail">
      <img className="detailImg" src={edit.image} alt="" />
      <div className="detailText">
        <div className="namedetail">
          NAME:<strong className="name">{edit.name}</strong>
        </div>
        <div className="phonedetail">
          PHONE:<strong className="name">{edit.phone}</strong>
        </div>
        <div className="phonedetail">
          ID:<strong className="name">{id}</strong>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
