var channels = ["freecodecamp","OgamingSC2","ESL_SC2", "storbeck"];

var urls = {
  'freecodecamp': 'https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png',
  'storbeck': 'https://static-cdn.jtvnw.net/jtv_user_pictures/xarth/404_user_70x70.png'
}

channels.forEach(function(name) {
  var url = `https://www.twitch.tv/${name.toLowerCase()}`

  $.getJSON("https://wind-bow.gomix.me/twitch-api/streams/" + name + "?callback=?", function(data) {
    console.log(data);
    console.log('------')

    var channelData = document.getElementById('tv-body')

    if (data.stream === null) {
      var row = `<td><img src="${urls[name]}" /></td>`
      row += `<td><a href="${url}" target="_blank">${name}</a></td>`
      row += `<td>Offline</td>`
      channelData.insertAdjacentHTML('beforeend', `<tr class="offline">${row}</tr>`)
    } else {
      var row = `<td><img src="${data.stream.channel.logo}" /></td>`
      row += `<td><a href="${url}" target="_blank">${name}</a></td>`
      row += `<td>${data.stream.channel.status}</td>`
      channelData.insertAdjacentHTML('beforeend', `<tr class="online">${row}</tr>`)
    }

  });

});

var showOnline = document.getElementsByClassName("show-online")[0]

showOnline.onclick = function() {
  toggleElements('offline', 'offline hide')
  
  toggleElements('online', 'online')
}

var showOffline = document.getElementsByClassName("show-offline")[0]

showOffline.onclick = function() {
  toggleElements('online', 'online hide')

  toggleElements('offline', 'offline')
}

var showAll = document.getElementsByClassName("all")[0]
showAll.onclick = function() {
  toggleElements('online', 'online')

  toggleElements('offline', 'offline')
}


function toggleElements(first, second) {
  var viewOffline = document.getElementsByClassName(first)

  for (i = 0; i < viewOffline.length; i++) {
    viewOffline[i].classList = second
  }
}
