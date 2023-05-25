import { baseUrl } from "../../configs/configs.js";
import { getUserId } from "../../utils/storage.js";

export const viewCart = async () => {
  let userId = await getUserId();

  return await fetch(`${baseUrl}/user/view-cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id: userId }),
  }).then((response) => response.json());
};
