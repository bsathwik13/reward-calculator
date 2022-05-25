const calcualteReward = (txnAmount) => {
    if (!txnAmount || txnAmount <= 50) {
      return 0;
    } else if (txnAmount <= 100) {
      return (txnAmount - 50) * 1;
    } else {
      return 50 + (txnAmount - 100) * 2;
    }
  };
  
  export default calcualteReward;
  