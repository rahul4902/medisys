import { toast } from "react-toastify";

export const handleApiResponse = (
  response,
  onSuccess,
  onError,
  setErrors,
  showMessage = true
) => {
  if (response.data.status === 422) {
    toast.error(response.data.message);
    if (response.data.errors) {
      setErrors(response.data.errors);
    }
  } else if (response.data.status === 200) {
    if (showMessage) {
      toast.success(response.data.message);
    }
    onSuccess(response.data);
  } else if (response.data.status === 400) {
    toast.error(response.data.message);
    onError();
  } else {
    toast.error("Something Went Wrong.");
  }
};
