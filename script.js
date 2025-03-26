const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', event => {
  // Check if the Web Share API is available and if the environment is suitable
  if (navigator.share && window.isSecureContext) {
    navigator.share({
      text: 'Please read this great article: ',
    })
    .then(() => {
      console.log('Thanks for sharing!');
    })
    .catch((err) => console.error('Error sharing:', err));
  } else {
    // Fallback
    alert("The current browser does not support the share function or it's not in a secure context. Please, manually share the link.");
  }
});
