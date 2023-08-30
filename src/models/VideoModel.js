class Video {
  constructor(
    title,
    channelTitle,
    description,
    publishedAt,
    videoThumbnail,
    videoDuration,
    videoId,
    videoHeader,
  ) {
    (this.videoTitle = title.split('').slice(0, 35).join('')),
      (this.videoPublishedDate = publishedAt.split('').slice(11, 46).join('')),
      (this.videoThumbnail = `${videoThumbnail}`),
      (this.videoDuration = videoDuration),
      (this.channelTitle = channelTitle),
      (this.videoId = videoId),
      (this.videoHeader = videoHeader);
  }
}

export default Video;
