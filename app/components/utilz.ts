// export const fetchNotification = async()=>{

// }

export const fetchNotification = async () => {
  let notification = 10;
  setInterval(() => {
    notification = 20;
  }, 1000);

  return notification;
};

const value = fetchNotification();
console.log(value);
