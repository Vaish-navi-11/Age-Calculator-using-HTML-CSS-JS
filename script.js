function calculateAge() {
    const birthYear = document.getElementById("birth-year").value;
    const currentYear = document.getElementById("current-year").value;
    const age = currentYear - birthYear;
    document.getElementById("result").innerHTML = `You are ${age} years old.`;
}