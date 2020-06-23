export const NEW_UPLOAD = "NEW_UPLOAD";
export const DEL_UPLOAD = "DEL_UPLOAD";

export const newUpload = (data) => {
  return {
    type: NEW_UPLOAD,
    uploadData: data,
  };
};

export const delUpload = (data) => {
  return {
    type: DEL_UPLOAD,
    deleteData: data,
  };
};