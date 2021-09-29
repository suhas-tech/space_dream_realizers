export const getImageStaticUrl = (fileName) => {
    if (window.location.origin === "http://localhost:3000") {
      return "http://localhost:1234";
    } else {
      return window.location.origin;
    }
  };