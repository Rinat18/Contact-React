import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../context/ProductContext";

const EditContact = () => {
  const { id } = useParams();
  const { readEdit, edit, editFunction } = useContext(productContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  useEffect(() => {
    readEdit(id);
    setName(edit.name);
    setImage(edit.image);
    setPhone(edit.phone);
  }, [id]);

  return (
    <div>
      <div>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
        />
        <input
          value={image}
          onChange={(e) => setImage(e.target.value)}
          type="text"
        />
        <button
          onClick={() => {
            if (!name || !image || !phone) return;
            const obj = {
              name: name,
              image: image,
              phone: phone,
            };

            editFunction(id, obj);
            setName("");
            setPhone("");
            setImage("");
            navigate("/");
          }}
        >
          EDIT
        </button>
      </div>
    </div>
  );
};

export default EditContact;
