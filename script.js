// Function to display countdown from 10 to 1
const countdown = (callback) => {
    setTimeout(() => {
      document.getElementById('countdown').textContent = '10';
      setTimeout(() => {
        document.getElementById('countdown').textContent = '9';
        setTimeout(() => {
          document.getElementById('countdown').textContent = '8';
          setTimeout(() => {
            document.getElementById('countdown').textContent = '7';
            setTimeout(() => {
              document.getElementById('countdown').textContent = '6';
              setTimeout(() => {
                document.getElementById('countdown').textContent = '5';
                setTimeout(() => {
                  document.getElementById('countdown').textContent = '4';
                  setTimeout(() => {
                    document.getElementById('countdown').textContent = '3';
                    setTimeout(() => {
                      document.getElementById('countdown').textContent = '2';
                      setTimeout(() => {
                        document.getElementById('countdown').textContent = '1';
                        callback();
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  };
  
  // Function to display "Happy Independence Day" after countdown
  const displayMessage = () => {
    setTimeout(() => {
      document.getElementById('countdown').textContent = 'Happy Independence Day';
    }, 1000);
  };
  
  // Call countdown function with displayMessage as callback
  countdown(displayMessage);
  