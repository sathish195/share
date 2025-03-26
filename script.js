const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', event => {
  // Check if the Web Share API is available and if the environment is secure (HTTPS)
  if (navigator.share && window.isSecureContext) {
    navigator.share({
      title: 'Great Article!',
      text: 'Please read this great article: ',
      url: window.location.href // Dynamically share the current URL
    })
    .then(() => {
      console.log('Thanks for sharing!');
    })
    .catch((err) => console.error('Error sharing:', err));
  } else {
    // Fallback for unsupported browsers or non-HTTPS context
    if (!navigator.share) {
      console.log('Web Share API is not supported.');
    }
    if (!window.isSecureContext) {
      console.log('This site is not in a secure context (HTTPS).');
    }

    // Provide a manual share link (copy to clipboard option or a share dialog)
    alert("The current browser does not support the share function or it's not in a secure context. Please, manually share the link.");
    
    // Optional: If you'd like to provide a fallback where users can copy the URL:
    const textToCopy = window.location.href;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('URL copied to clipboard!');
        alert("The URL has been copied to your clipboard. Please share it!");
      })
      .catch((err) => {
        console.error('Error copying URL to clipboard:', err);
        alert("Couldn't copy the URL. Please share it manually.");
      });
  }
});
