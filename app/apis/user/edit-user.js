import { baseUrl } from "../../configs/configs.js";

export const editUser = (user) => {
  return fetch(`${baseUrl}/user/edit-user`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user }),
  }).then((response) => response.json());
};
