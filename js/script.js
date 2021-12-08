const time = {
  countdown(futureDate) {
    let countdownDate = new Date(futureDate).getTime();
    return time.updateCountdown(countdownDate);
  },

  updateCountdown(countdownDate) {
    setInterval(() => {
      let now = new Date().getTime();
      let distance = countdownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      days = days < 10 ? '0' + days : days;
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      let timer = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };

      DOM.render(timer);

      if (distance < 0) {
        clearInterval();
        return DOM.render('Tempo Expirado');
      }
    }, 1000);
  }
};

const DOM = {
  countdown: document.getElementById('countdown'),

  render(timer) {
    if (timer === 'Tempo Expirado') return (countdown.innerHTML = timer);

    const { days, hours, minutes, seconds } = timer;

    countdown.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
  }
};

const Modal = {
  toggle() {
    document.querySelector('.modal-overlay').classList.toggle('active');
  },

  send() {
    alert('Inscrito com sucesso');
    Modal.toggle();
  }
};

const App = {
  init() {
    time.countdown('May 15, 2022 12:00:00');
    Modal.toggle();
  }
};

App.init();
