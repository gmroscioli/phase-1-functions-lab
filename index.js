function distanceFromHqInBlocks (pickUp) {
    const hqLocation = 42;
    return Math.abs(pickUp - hqLocation);
}

function distanceFromHqInFeet (someValue) {
    let blocks = distanceFromHqInBlocks(someValue);
    let feet = blocks * 264;
    return Math.abs(feet);
}

function distanceTravelledInFeet(start, destination) {
    let distance = ((destination - start)*264);
    return Math.abs(distance);
}

function calculatesFarePrice(start, destination) {
    let distance = Math.abs(destination - start);
    let distanceInFeet = (distance * 264);
        if (distanceInFeet < 400) {
            return 0;
        }
        else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
            return Math.abs(((distanceInFeet)-400) *.02);
        }
        else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
            return 25;
        }
        else if (distanceInFeet > 2500) {
            return `cannot travel that far`;
        }
}