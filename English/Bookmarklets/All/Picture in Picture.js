javascript:void function(){let a=!1;document.querySelectorAll("video").forEach(b=>{b.removeAttribute("disablepictureinpicture"),b.disablePictureInPicture=!1,b.paused%26%26"content-video-player"!==b.id||a||"function"!=typeof b.requestPictureInPicture||b.requestPictureInPicture().then(()=>{a=!0}).catch(a=>{console.error(`failed to pop video`,b,a)})})}();
