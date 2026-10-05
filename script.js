const form = document.getElementById("appointmentForm");
const appointmentList = document.getElementById("appointmentList");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const fullName = document.getElementById("fullName").value;
    const contact = document.getElementById("contact").value;
    const purpose = document.getElementById("purpose").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const appointmentTime = document.getElementById("appointmentTime").value;
    const details = document.getElementById("details").value;

    if (
        fullName === "" ||
        contact === "" ||
        purpose === "" ||
        appointmentDate === "" ||
        appointmentTime === ""
    ) {
        alert("Please complete all required fields.");
        return;
    }

    if (appointmentList.querySelector(".empty")) {
        appointmentList.innerHTML = "";
    }

    const newRow = document.createElement("tr");

    newRow.innerHTML = `
        <td>${fullName}</td>
        <td>${appointmentDate}</td>
        <td>${appointmentTime}</td>
        <td>${purpose}</td>
        <td>
            <span class="status-pending">Pending</span>
        </td>
    `;

    appointmentList.appendChild(newRow);

    alert("Appointment request submitted successfully.");

    form.reset();
});