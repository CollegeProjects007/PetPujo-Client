import { baseUrl } from "../../configs/configs.js";
import { getUserId } from "../../utils/storage.js";

export const placeOrder = async () => {
  let userId = await getUserId();

  return fetch(`${baseUrl}/user/place-order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ _id: userId }),
  }).then((response) => response.json());
};
