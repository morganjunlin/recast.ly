var searchYouTube = (options, callback) => {
  $.get ({
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      key: options.key,
      q: options.query,
      maxResults: options.max,
      part: 'snippet',
      type: 'video',
      videoEmbeddable: 'true'
    },
    dataType: 'json',
    success: callback,
    error: (error) => console.error('Failed to get data', error)
  })
};

export default searchYouTube;
