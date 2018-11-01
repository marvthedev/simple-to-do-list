function songDecoder(song){
    var replacedLyrics = song.replace(/WUB/g,' ');
    return replacedLyrics;
  }
  console.log(songDecoder("WUBFUCKWUBYOU"));