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
    } else {
      var row = `<td><img src="${data.stream.channel.logo}" /></td>`
      row += `<td><a href="${url}" target="_blank">${name}</a></td>`
      row += `<td>${data.stream.channel.status}</td>`
    }

    channelData.insertAdjacentHTML('beforeend', `<tr>${row}</tr>`)

    // <table>
    //   <tbody>
    //     <tr>
    //       <td>logo</td>
    //       <td>channel name</td>
    //       <td>status</td>
    //     </tr>
    //   <tbody>
    // </table>


    //console.log(data.stream)
  });


});




// 2. put all the channels into my tv container with an image and styling
// 4. Click on online, get data from JSON about which of the current channels are online
// Click on offline, get data from JSON about which of the current channels are offline //
