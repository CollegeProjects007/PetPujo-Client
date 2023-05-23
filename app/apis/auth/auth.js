import { baseUrl } from "../../configs/configs.js";
import { storeUserId, getUserId, removeUserId } from "../../utils/storage.js";

export const signUp = async (name, location, email, password) => {
  let response = await fetch(`${baseUrl}/user/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      location: location,
      email: email,
      password: password,
    }),
  });
  let body = await response.json();

  await storeUserId(body.data.UserId);
  console.log(body.data);

  return body.status == 201 ? "success" : "failure";
};

export const signIn = async (email, password) => {
  console.log(email, password);
  let response = await fetch(`${baseUrl}/user/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  });
  let body = await response.json();

  // Have to remove the unnecessary nesting of data at backend
  await storeUserId(body.data.data._id);
  // console.log(await getUserId());
  console.log(body.status);

  return body.status == 200 ? "success" : "failure";
};

export const signOut = async () => {
  await removeUserId();
  console.log(await getUserId());
  return "success";
};
