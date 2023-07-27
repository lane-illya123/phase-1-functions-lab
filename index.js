function distanceFromHqInBlocks(pickUp){

if(pickUp > 42){

    return pickUp - 42;
}
else {

    return 42 - pickUp
}

}

function distanceFromHqInFeet(feetValue){
    return distanceFromHqInBlocks(feetValue) * 264;  
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled

    if (start > destination){

        return (start - destination) * 264;
    }
    else
        return (destination - start) * 264;
  }

  function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return .02 * (distance - 400);
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
    }
        