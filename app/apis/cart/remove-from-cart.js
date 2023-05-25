import { baseUrl } from "../../configs/configs.js";
import { getUserId } from "../../utils/storage.js";

export const removeFromCart = async (itemId) => {
  let userId = await getUserId();

  return await fetch(`${baseUrl}/user/remove-from-cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ itemId: itemId, userId: userId, quantity: 1 }),
  }).then((response) => response.json());
};
