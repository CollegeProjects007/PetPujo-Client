import { baseUrl } from "../../configs/configs.js";

export const viewMenu = async () => {
  let response = await fetch(`${baseUrl}/inventory/view-items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  let data = await response.json();
  console.log(data.data);
  return data; 
};
