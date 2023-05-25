import { baseUrl } from "../../configs/configs.js";
import { getUserId } from "../../utils/storage.js";

export const addToCart = async (itemId) => {
  let userId = await getUserId();
  console.log(userId);
  return await fetch(`${baseUrl}/user/add-to-cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ itemId: itemId, userId: userId, quantity: 1 }),
  }).then((response) => response.json());
};
