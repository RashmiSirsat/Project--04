const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// prompt to select media stream,pass to video  element,than play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play() ;
        }
    } catch (error) {
        // catch error here
        console.log('whoops,error here:',error);
    }
}

button.addEventListener('click',async () => {
    // Disable button
    button.disabled = true;
    // start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
}); 

// On LOad
selectMediaStream();