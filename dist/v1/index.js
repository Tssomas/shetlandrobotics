let modal = document.querySelector(".mmodal");

let isModalVisible = false;

function toggleModal(serviceName) {
    // toggle visibility
    if (isModalVisible) {
        modal.classList.remove("mshow-modal");
    } else {
        modal.classList.add("mshow-modal");

        let mModalTitle = document.getElementById("mmodal-title");
        let mModalContent = document.getElementById("mmodal-content");

        // display the correct info for what the user clicked on
        if (serviceName === "aquaculture") {
            mModalTitle.innerText = "Aquaculture";

            mModalContent.innerHTML = "<u><b>Grid Inspections</b></u><br>" +
                "We can offer cost effective and regular inspections of grid installations. The moorings and anchors securing the grid should be checked often to ensure the cages are secured properly.<br>" +
                "This is important when the new grid is installed as you want to be sure it has been done properly.<br>" +
                "In rough weather the strain on the chains and moorings could cause a breakage. We can give you eyes under the water to see exactly what is going on. We can ensure that your fish are safe and secure.<br>" +
                "<br>" +
                "<u><b>Net Inspections</b></u><br>" +
                "Our net inspections check for any holes that might allow fish to escape or predators to enter the cage. Checking regularly for damage to the net ensures that a small hole doesn’t develop into a large one.<br>" +
                "<br>" +
                "<u><b>Husbandry & Feeding Assessments</b></u><br>" +
                "Live footage to monitor the feeding process. We can check on the fish stock and observe the behaviour of the animals. We have many years of experience in the Aquaculture industry, so we know what to look out for. Odd behaviour could be a sign of predators, disease, low oxygen levels and more.";
        } else if (serviceName === "shipping") {
            mModalTitle.innerText = "Shipping";

            mModalContent.innerText = "Reliable and fast inspections of ships and small boats. We can check for any damage to the hull or propellers. We can give you visual footage so can see for yourself what the vessel looks like below the waterline.";
        } else if (serviceName === "infrastructure") {
            mModalTitle.innerText = "Infrastructure";

            mModalContent.innerText = "We carry out inspections of Bridges, Piers and Dams. These partly submerged structures can have areas difficult to inspect. Our ROV is perfect for the job as it can carry it out without safety risks. Regular inspections are important but might be neglected due to the cost of Divers. Our inspections are cost effective, thorough and safe. \n" +
                "\n" +
                "We also carry out inspections of large water tanks.";
        } else if (serviceName === "energy") {
            mModalTitle.innerText = "Energy";

            mModalContent.innerHTML = "Easy, logical and safe inspections for the offshore sector. We can give you inspections of offshore structures such as sea chests, ballast tanks and moorings.<br>" +
                "<br>" +
                "<u><b>Renewables</b></u><br>" +
                "Inspections of offshore wind farms and tidal power installations. Our ROV is designed to cope with high currents. Therefore it is the perfect tool to carry out underwater inspections in areas with strong tides. We record the footage and can offer that to any client if they want to check it out for themselves.<br>" +
                "<br>" +
                "We are extremely keen to offer our services to the renewable sector.";
        } else if (serviceName === "marine-science") {
            mModalTitle.innerText = "Marine Science";

            mModalContent.innerHTML = "Inspections that give you visual footage of the seabed.<br>" +
                "<br>Pollution, dredging and shipping can affect the seabed and marine habitats. With our ROV you can watch the fish behaviour and activities. You can also monitor the health of plant life and check for invading species.";
        } else if (serviceName === "exploration") {
            mModalTitle.innerText = "Exploration";

            mModalContent.innerText = "";
        }
    }

    isModalVisible = !isModalVisible;
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

window.addEventListener("click", windowOnClick);