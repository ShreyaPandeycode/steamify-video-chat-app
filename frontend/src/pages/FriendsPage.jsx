import React from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getUserFriends,
  getRecommendedUsers,
  sendFriendRequest,
} from "../lib/api";
import { toast } from "react-hot-toast";

const FriendsPage = () => {
  const {
    data: friends = [],
    isLoading: friendsLoading,
  } = useQuery({
    queryKey: ["friends"],
    queryFn: getUserFriends,
  });

  const {
    data: recommendedUsers = [],
    isLoading: recommendedLoading,
  } = useQuery({
    queryKey: ["recommendedUsers"],
    queryFn: getRecommendedUsers,
  });

  const handleSendRequest = async (userId) => {
    try {
      await sendFriendRequest(userId);
      toast.success("Friend request sent!");
    } catch (error) {
      toast.error("Error sending request.");
    }
  };

  if (friendsLoading || recommendedLoading) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0b14] text-white p-8">
      {/* --- YOUR FRIENDS --- */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-yellow-400">Your Friends</h1>
          <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg">
            Friend Requests
          </button>
        </div>

        {friends.length === 0 ? (
          <div className="text-center text-gray-400 bg-[#191621] rounded-xl p-8">
            <p className="text-xl font-semibold mb-2">No friends yet</p>
            <p>Connect with learners below to start chatting!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {friends.map((friend) => (
              <div
                key={friend._id}
                className="bg-[#191621] p-5 rounded-xl flex flex-col items-center justify-center text-center shadow-lg"
              >
                <img
                  src={friend.profilePic || "/default-avatar.png"}
                  alt={friend.fullName}
                  className="w-20 h-20 rounded-full mb-3 object-cover"
                />
                <h2 className="text-lg font-semibold">{friend.fullName}</h2>
                <p className="text-sm text-gray-400">{friend.location}</p>
                <button className="mt-4 bg-green-500 hover:bg-green-400 text-black px-4 py-1 rounded-full">
                  Message
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* --- MEET NEW LEARNERS --- */}
      <section>
        <h2 className="text-3xl font-bold text-yellow-400 mb-6">
          Meet New Learners
        </h2>
        <p className="text-gray-400 mb-6">
          Discover perfect language exchange partners below.
        </p>

        {recommendedUsers.length === 0 ? (
          <p className="text-center text-gray-500">No new learners available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedUsers.map((user) => (
              <div
                key={user._id}
                className="bg-[#191621] p-5 rounded-xl flex flex-col items-center text-center shadow-lg"
              >
                <img
                  src={user.profilePic || "/default-avatar.png"}
                  alt={user.fullName}
                  className="w-20 h-20 rounded-full mb-3 object-cover"
                />
                <h3 className="text-lg font-semibold">{user.fullName}</h3>
                <p className="text-sm text-gray-400">{user.location}</p>

                <div className="flex gap-2 mt-2 text-sm">
                  <span className="bg-gray-700 px-2 py-1 rounded-md">
                    🇬🇧 Native: {user.nativeLanguage || "English"}
                  </span>
                  <span className="bg-gray-700 px-2 py-1 rounded-md">
                    🌍 Learning: {user.learningLanguage || "Spanish"}
                  </span>
                </div>

                <p className="text-gray-400 mt-2 text-sm">
                  {user.bio || "Looking for language partners!"}
                </p>

                <button
                  onClick={() => handleSendRequest(user._id)}
                  className="mt-4 bg-green-500 hover:bg-green-400 text-black px-4 py-1 rounded-full"
                >
                  Send Friend Request
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default FriendsPage;
