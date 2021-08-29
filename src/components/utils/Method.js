import axios from "axios";

export const Capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const ImageSrc = (imgPath) => {
  return require(imgPath);
};

// export const SvgIcon = (imgName) => {
//   const SvgIcon = React.lazy(() => import(`@lazsa/common/assets/img/svg/${imgName}`));
//   return <SvgIcon />;
// };

export const getData = (url) => {
  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};

export const postData = (url) => {
  return axios
    .post(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
};
