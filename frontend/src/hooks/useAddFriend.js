import { useMutation } from "@tanstack/react-query";
import { addFriend } from "../lib/api";

const useAddFriend = () => {
  return useMutation({
    mutationFn: addFriend,
    onSuccess: () => alert("Friend added successfully!"),
  });
};

export default useAddFriend;
