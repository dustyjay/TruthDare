
let i = 0;

function rotate() {
  $('.coin').html('<img src="img/coin.png">');

  let r = Math.random(); // <1
  let deg = 3000 + Math.round(r * 500);
  deg = Math.pow(-1, i) * deg;
  let angles = [0, 45, 90, 135, 180, -45, -90, -135]
  let coinId = [1, 2, 3, 4, 5, 8, 7, 6]
  let randomInt = Math.floor(Math.random() * angles.length);
  let answerArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
  let answers = [
    "Truth: Is your hottest product or service price aligned with your income goal for the year?",
    "Dare: Brainstorm 20 ways for a cash infusion this month. Choose the juiciest one and take a baby step to begin implementing TODAY.",
    "Truth: Do you truly believe that you can create freedom and wealth through your business in the next 12-24 months? If not, what beliefs need to shift?",
    "Dare: Partner with or hire someone TODAY who can help you master the area of your biz that would most boost your profits.",
    "Truth: Are you playing to win or playing not to lose? (Winners invest, take bold actions and run through the finish line while doing the happy dance!)",
    "Dare: Take no random actions this week. Only do things to support your biggest money-maker.",
    "Truth: Have you created a personal wealth plan so that you know exactly how you're going to spend and invest your business profits?",
    "Dare: Decide to manifest $5000 of new income within the next seven days. Place as much (or more) focus on your inner game as specific strategies. How can you make it fun?",
    "Truth: Each quarter, month and week are you prioritizing your inspired actions based on your biz plan for the year?",
    "Dare: Follow up with five prior clients, potential clients or lead referrals this week. Be of service and give massive value (with no attachment to the outcome) and offer them a way to buy your solution. Who will you reach out to?",
    "Truth: Do you feel in control of how fast profits come in?",
    "Dare: Offer current or past clients a super special deal this week on one of your hottest new products or services or bundle some oldies but goodies. Make it irresistible.",
    "Truth: Are you fully leveraging/monetizing the product or service your tribe loves most?",
    "Dare: Raise the price on one of your offerings to reflect the true value you give your customers. Change it on your website, marketing materials and tell the next person who inquires.",
    "Truth: Are you using your natural gifts and values to maximize profits? (I love games, adventure and fun, so I use that to my advantage in my biz).",
    "Dare: Claim a client or promotional partner. You know someone right now who you can serve... so tell them from your heart! BAM!",
    "Truth: What is standing in the way of you doubling or tripling your profits this year?",
    "Dare: Stop complaining about money for seven days. No remarks about high prices, your bills, the economy, the I.R.S, not being able to afford something, or worrying about sales. Zip it. Focus on what you want instead.",
    "Truth: What is one small step you can take TODAY that would put you on track to boost your income? Are you willing to do it?",
    "Dare: If you want more money to come in the door, clarify how much (say the amount you really want) and how often. Tell someone who will keep you accountable. Make a decision right now to play to win. Run through the finish line (Naked if you want!)"
  ]
  let desiredDeg = angles[randomInt];
  let desiredAngle = 3600 + desiredDeg;
  desiredAngle = Math.pow(-1, i) * desiredAngle;
  pow_value = Math.pow(-1, i);

  if ((pow_value > 0 && desiredDeg > 0) || (pow_value < 0 && desiredDeg < 0)) {
    desiredDeg = Math.abs(desiredDeg);

    for (let j = 0; j <= angles.length; j++) {
      if (angles[j] == desiredDeg) {
        let index = j;
        break;
      }
    }
    setTimeout(function () {

      let load_memory = $('#memory').val();
      if (load_memory != '') { var memory_array = load_memory.split(','); }
      else { var memory_array = []; }


      let clean_array = [];
      $.each(answerArr, function (key, value) {
        let inarray = 0;
        $.each(memory_array, function (key2, value2) {
          if (value == value2) { inarray = 1; }
        });
        if (inarray == 0) { clean_array.push(value); }
      });


      if (clean_array.length === 0) { clean_array = answerArr; memory_array = []; }

      let answer_rnd = clean_array[Math.floor(Math.random() * clean_array.length)];

      memory_array.push(answer_rnd);
      $('#memory').val(memory_array);

      resultQuestion = answers[answer_rnd];
      $('.p' + coinId[index]).html('<img src="img/coin-active.png">');
      swal({
        text: resultQuestion,
        className: ['animated', 'tada'],
        button: 'Close'
      });
    }, 6000);
  } else {
    desiredDeg = (pow_value < 1 && desiredDeg < 180) ? -desiredDeg : desiredDeg;
    for (var j = 0; j <= angles.length; j++) {
      if (angles[j] == desiredDeg) {
        var index = j;
        break;
      }
    }

    setTimeout(function () {

      let load_memory = $('#memory').val();
      if (load_memory != '') { var memory_array = load_memory.split(','); }
      else { var memory_array = []; }


      let clean_array = [];
      $.each(answerArr, function (key, value) {
        let inarray = 0;
        $.each(memory_array, function (key2, value2) {
          if (value == value2) { inarray = 1; }
        });
        if (inarray == 0) { clean_array.push(value); }
      });


      if (clean_array.length === 0) { clean_array = answerArr; memory_array = []; }
      let answer_rnd = clean_array[Math.floor(Math.random() * clean_array.length)];

      memory_array.push(answer_rnd);
      $('#memory').val(memory_array);

      resultQuestion = answers[answer_rnd];
      $('.p' + coinId[index]).html('<img src="img/coin-active.png">');
      swal({
        text: resultQuestion,
        className: ['animated', 'tada'],
        button: 'Close'
      });
    }, 6000);
  }

  let css = '-webkit-transform: rotate(' + desiredAngle + 'deg);transform: rotate(' + desiredAngle + 'deg);';
  $(".bottle").attr("style", css);
  i++;
}