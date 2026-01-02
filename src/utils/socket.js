import { io } from "socket.io-client";

let socket;

export const initiateSocket = (url) => {
  if (!socket) {
    socket = io(url, {
      transports: ["websocket"],
      withCredentials: true,
      path: "/open-socket",
    });
  }
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};
