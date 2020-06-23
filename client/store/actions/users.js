export const LOGIN_USER = "LOGIN_USER";
export const IS_LOADING = "IS_LOADING";

export const loginUser = (id, login, display_name, profile_img_url) => {
  return {
    type: LOGIN_USER,
    userId: id,
    userLogin: login,
    userDisplayName: display_name,
    userProfileImg: profile_img_url,
  };
};

export const isAppLoading = (isLoading) => {
  return {
    type: IS_LOADING,
    appIsLoading: isLoading,
  };
};

export function fetchPosts(twitch_code) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(isAppLoading(true));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://172.16.12.117:8080/auth/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: twitch_code,
      }),
    })
      .then(
        (response) => response.json(),
        // Do not use catch, because that will also catch
        // any errors in the dispatch and resulting render,
        // causing a loop of 'Unexpected batch number' errors.
        // https://github.com/facebook/react/issues/6895
        (error) =>
          console.log("An error occurred on attempt to backend.", error)
      )
      .then((data) => {
        dispatch(
          loginUser(
            data.id,
            data.login,
            data.display_name,
            data.profile_image_url
          )
        );
      });
  };
}
