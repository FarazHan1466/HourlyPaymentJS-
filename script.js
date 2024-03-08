// Write  a program in Which takes two values from the user (hours and rate) if user give hours more than 8 than payment should be (1.5) times more of those extra hours above 8

let hours = Number.parseInt(prompt("Enter the working Hours"));
let rate = Number.parseInt(prompt("Enter the Rate"))
if (hours > 8) {
    let extraHours = (hours - 8) * (rate * 1.5);
    let normalPay = 8 * rate;
    let pay = extraHours + normalPay;
    console.log("Your Payment is: ", pay);
}
else {
    let pay = hours * rate;
    console.log("Your Payment is: ", pay);

}