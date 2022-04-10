const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt User To Select Media Stream, pass to video element, then play

async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
        
    } catch (error) {
        // Catch Error Here
        // console.log('Ya fucked this one up, bro', error);
    }
}

button.addEventListener('click', async () => {
    // Disable the button when clicked
    button.disabled = true;
    // Start picture in picture
    await videoElement.requestPictureInPicture();
    // Reset button
    button.disabled = false;
});

// On Load
selectMediaStream();





