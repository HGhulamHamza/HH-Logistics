function sendEmail() {
    
    var email = 'khawajahamza566@gmail.com';

    var subject = encodeURIComponent('Inquiry from HH Logistics Website');
    var body = encodeURIComponent('Hello,\n\nI would like to know about your services.');

   
    var mailtoLink = 'mailto:' + email + '?subject=' + subject + '&body=' + body;
    window.location.href = mailtoLink;


  }



  function showBookingPrompt() {
    
    var userChoice = prompt('Which plan would you like to book? Enter "basic", "standard", or "premium".');

    
    if (userChoice) {
      userChoice = userChoice.toLowerCase(); // Convert to lowercase for case-insensitivity

      switch (userChoice) {
        case 'basic':
          alert('You have chosen the Basic Plan. Please proceed to book.');
          break;
        case 'standard':
          alert('You have chosen the Standard Plan. Please proceed to book.');
          break;
        case 'premium':
          alert('You have chosen the Premium Plan. Please proceed to book.');
          break;
        default:
          alert('Invalid choice. Please enter "basic", "standard", or "premium".');
      }
    } else {
      alert('Booking canceled. Please choose a plan when you are ready.');
    }
  }

  function joinNow(category) {
    var message;

    switch (category) {
      case 'Fast':
        message = 'Surely! You have joined the fast moving logistics company.';
        break;
      case 'Efficient':
        message = 'Surely! You have joined the most efficient company in the town.';
        break;
      case 'Economical':
        message='Yeah!HH Logistics-The Most economical one '
        break;
       case'Trustable':
        message='HH-Logistics name of a trustable company' 
        break; 
    default:
        message = 'Welcome to HH Logistics!'; // Default message if category is not matched
    }

    alert(message);
  }

  function buyPlan(plan) {
    var email = 'khawajahamza566@gmail.com';
    var subject = encodeURIComponent('Booking ' + plan + ' Plan');
    var message = 'You have bought a ' +plan + ' Plan.\n'+'Kindly depoait the money on Acc:0909.\n'+'Send us email on '+email+'\nwith a screenshot of the payment.\n'+'Subject of the mail should be the Plan You have choosen' ;
                  
    alert(message);
  }