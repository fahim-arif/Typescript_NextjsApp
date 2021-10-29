const removeEmptyFields = (data: any) => {
  Object.keys(data).forEach(key => {
    if (!data[key]) {
      delete data[key];
    }
  });
} 

export default removeEmptyFields;