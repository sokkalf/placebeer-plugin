for(i in document.images) {
    w = document.images[i].clientWidth;
    h = document.images[i].clientHeight;
    
    if((w > 30) && (h > 30) && (w < 1921) && (h < 1921)) {
      document.images[i].src = 'https://placebeer.com/' + w + '/' + h;
    }
}
