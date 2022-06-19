  /*   Slider Script */
  let slideIndex = 1;
  showSlides(slideIndex);

  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
          slideIndex = 1
      }
      if (n < 1) {
          slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
  }


  /*popup script */
  const button1 = document.getElementById('button1');
  const wrapper1 = document.querySelector('.wrapper1');
  const closeIt1 = document.querySelector('.close1');

  const button2 = document.getElementById('button2');
  const wrapper2 = document.querySelector('.wrapper2');
  const closeIt2 = document.querySelector('.close2');

  const button3 = document.getElementById('button3');
  const wrapper3 = document.querySelector('.wrapper3');
  const closeIt3 = document.querySelector('.close3');

  const button4 = document.getElementById('button4');
  const wrapper4 = document.querySelector('.wrapper4');
  const closeIt4 = document.querySelector('.close4');

  const button5 = document.getElementById('button5');
  const wrapper5 = document.querySelector('.wrapper5');
  const closeIt5 = document.querySelector('.close5');

  const button6 = document.getElementById('button6');
  const wrapper6 = document.querySelector('.wrapper6');
  const closeIt6 = document.querySelector('.close6');

  const button7 = document.getElementById('button7');
  const wrapper7 = document.querySelector('.wrapper7');
  const closeIt7 = document.querySelector('.close7');

  const button8 = document.getElementById('button8');
  const wrapper8 = document.querySelector('.wrapper8');
  const closeIt8 = document.querySelector('.close8');


  button1.addEventListener('click', () => {
      wrapper1.style.display = 'block';
  });
  closeIt1.addEventListener('click', () => {
      wrapper1.style.display = 'none';
  });

  button2.addEventListener('click', () => {
      wrapper2.style.display = 'block';
  });
  closeIt2.addEventListener('click', () => {
      wrapper2.style.display = 'none';
  });

  button3.addEventListener('click', () => {
      wrapper3.style.display = 'block';
  });
  closeIt3.addEventListener('click', () => {
      wrapper3.style.display = 'none';
  });

  button4.addEventListener('click', () => {
      wrapper4.style.display = 'block';
  });
  closeIt4.addEventListener('click', () => {
      wrapper4.style.display = 'none';
  });

  button5.addEventListener('click', () => {
      wrapper5.style.display = 'block';
  });
  closeIt5.addEventListener('click', () => {
      wrapper5.style.display = 'none';
  });

  button6.addEventListener('click', () => {
      wrapper6.style.display = 'block';
  });
  closeIt6.addEventListener('click', () => {
      wrapper6.style.display = 'none';
  });

  button7.addEventListener('click', () => {
      wrapper7.style.display = 'block';
  });
  closeIt7.addEventListener('click', () => {
      wrapper7.style.display = 'none';
  });

  button8.addEventListener('click', () => {
      wrapper8.style.display = 'block';
  });
  closeIt8.addEventListener('click', () => {
      wrapper8.style.display = 'none';
  });