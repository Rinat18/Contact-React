import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { productContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ContactItem = ({ name, phone, image, id }) => {
  const {deleteContact} = useContext(productContext)
  const navigate = useNavigate()
  return (
      <div className="cardContact">
        <img src={image} alt="" />
        <div className="cardText">
          <div className="information">
            <div>
              Имя:<strong className="name">{name}</strong>
            </div>
            <span>
              Телефон: <strong className="phone">{phone}</strong>
            </span>
          </div>
          <div className="btns">
            <button onClick={() => navigate(`/edit/${id}`)} className="editBtn">
              <EditIcon />
              Edit
            </button>
            <button onClick={() => {deleteContact(id)}} className="deleteBtn">
              <DeleteIcon /> Delete
            </button>
            <button onClick={() => navigate(`/detail/${id}`)} className="more">
              <MoreVertIcon />
            </button>
          </div>
        </div>
      </div>
  );
};

export default ContactItem;
