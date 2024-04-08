document.addEventListener('DOMContentLoaded', function() {
  const downLink = document.querySelector('.downLink');
  function myhref() {  
    location.href = '/catalog';  
  }
    downLink.addEventListener("click", (event) => {
    event.preventDefault();
    myhref();
  });

  const stars = document.querySelectorAll('.star');
  let rating = 0;

  stars.forEach(function(star) {
    star.addEventListener('click', function() {
      rating = this.getAttribute('data-value');
      updateStars(rating);
    });
  });
  
  function updateStars(rating) {
    stars.forEach(function(star) {
      if (star.getAttribute('data-value') <= rating) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });
  }

  const comments = document.forms['comment-form'];
  comments.addEventListener('submit', async (event) => {
    event.preventDefault();
    const comment = comments.elements['comment'].value;
    const catalogId = comments.getAttribute('data-id');
    try {
      const body = {
        comment: comment,
        rating: rating
      };
      const data = await fetch(
        `/api/comment/${catalogId}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) },
      );
      const result = await data.json();
      if (result.text === 'OK') {
        location.href = `/catalog/${catalogId}`;
      }
    } catch (error) {
      console.error(error);
    }
  });
});