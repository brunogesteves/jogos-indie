import React, { useEffect, useContext } from "react";
import Admin from "../Admin";
import NewCategory from "../../../components/NewCategory";
import "./Categories.css";

import { useQuery, useMutation } from "@apollo/client";
import { GET_ALL_CATEGORIES } from "../../../Graphql/Queries";
import { DELETE_CATEGORY } from "../../../Graphql/Mutations";

import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import { InfoContext } from "../../../Contexts/Context";

export default function Categories(props) {
  const { data, refetch } = useQuery(GET_ALL_CATEGORIES);
  const [deleteCategory, { data: isdeleted }] = useMutation(DELETE_CATEGORY);

  const { isCategoryAdded, setIsCategoryAdded } = useContext(InfoContext);

  useEffect(() => {
    if (isCategoryAdded) {
      refetch();
      setIsCategoryAdded(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isCategoryAdded]);

  useEffect(() => {
    if (isdeleted && isdeleted.deleteCategory.successfull) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isdeleted]);

  return (
    <div>
      <Admin>
        <div className="category-body">
          <NewCategory />

          {data &&
            data.getAllCategories.map((res, index) => {
              return (
                <div key={index} className="categories">
                  {res.name.toUpperCase()}
                  <IconButton
                    onClick={() => {
                      deleteCategory({ variables: { id: res.id } });
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              );
            })}
        </div>
      </Admin>
    </div>
  );
}
