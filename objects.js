var playlist = {
  Queen: 'Bicycle Race'
}



function updatePlaylist(playlist, name, title) {
  Object.assign(playlist, {[name]: title})
  console.log(playlist)
  return playlist
}

function removeFromPlaylist(playlist, name) {
  delete playlist[name]
  return playlist
}
