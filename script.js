const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', event => {
  if (navigator.share && window.isSecureContext) {
    navigator.share({
      text: 'Please read this great article: ',
      url: 'https://www.google.com/'
    })
    .then(() => {
      console.log('Thanks for sharing!');
    })
    .catch((err) => console.error('Error sharing:', err));
  } else {
    // Fallback: copy URL to clipboard
    const url = 'https://www.google.com/';
    navigator.clipboard.writeText(url)
      .then(() => {
        alert('Link copied to clipboard! Please share manually.');
      })
      .catch((err) => console.error('Error copying to clipboard:', err));
  }
});
