<script>
  import Prism from 'prismjs';
  import Nav from './nav.svelte';
  let code = 
    `
from moviepy.editor import VideoFileClip
import os

def compress_video(input_path, output_path, target_size_mb):

    video_clip = VideoFileClip(input_path)

    duration = video_clip.duration
    current_bitrate = os.path.getsize(input_path) * 8 / (1024 ** 2) / duration

    new_bitrate = target_size_mb * 8 / duration
    compression_factor = new_bitrate / current_bitrate

    resized_clip = video_clip.resize(compression_factor)
    resized_clip.write_videofile(output_path, codec="h264", audio_codec="aac", bitrate="3000k")

if __name__ == "__main__":
    input_file_path = input("Enter file path: ")
    output_file_path = "compressedvid.mp4"
    target_size_mb = 25

    compress_video(input_file_path, output_file_path, target_size_mb)

    `;
  let language = 'clike';
</script>
<Nav />
<div class="code">
  {@html Prism.highlight(code, Prism.languages[language], "python")}
</div>


<style>
  .code {
    white-space: pre-wrap;
  }
</style>
