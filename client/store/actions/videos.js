export const GET_VIDEOS = "GET_VIDEOS";

export const getVideos = (data) => {
  return {
    type: GET_VIDEOS,
    videoData: data,
  };
};

export function fetchVideos(userId) {
  return function (dispatch) {
    return fetch(`http://172.16.12.117:8080/streamer/new-video`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    })
      .then(
        (response) => response.json(),
        (error) =>
          console.log("An error occurred on attempt to backend.", error)
      )
      .then((res) => {
        dispatch(getVideos(res.data));
      });
  };
}
