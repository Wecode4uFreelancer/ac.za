function getBotResponse(input) {
    // Information about services and price plans
    if (input.includes("services")) {
        return "We provide the following services:\n" +
               "1. Cyber Security Consulting \n" +
               "2. Web Development and Web Design \n" +
               "3. Mobile Application Development -\n" +
               "4. Computer Repair and Software installation - \n\n" +
               "For more details or to inquire about a specific service, please contact us through our website or WhatsApp at 0694238317.";
    }

    // Responses based on user input
    if (input.includes("1")  || input.includes("Cyber")) {
        return "If you have questions about our Cyber Security Consulting service or want to proceed, you can use the contact section on our website or contact us on WhatsApp at 0694238317. The cost is R2500, and we'll protect you from hackers.";
    } 
    else if (input.includes("2") || input.includes("Web")) {
        return "Website development costs R1500, website design costs R1000, portfolio website costs R1500 , blog website costs R1500 ";
    }

    else if (input.includes("Portfolio") || input.includes("Ecommerce")) {
        return "portfolio website costs R1500, Ecommerce websites costs R6500 ";
    }

    else if (input.includes("3") || input.includes("Mobile")) {
        return "Mobile app design costs R2000 , Mobile app development costs R3000";
    } 
    else if (input.includes("4")) {
        return "Microsoft installation package costs R400 if installing for more than 3 Devices R150 Each, Installing Windows costs R500 ,Antivirus installation costs R300. Computer Repair price depends on the damage";
    }
    
    else if (input.includes("hello")) {
        return "Hi! How can I assist you ?";
    } else if (input.includes("hey") || input.includes("hi") || input.includes("hy") ) {
        return "Hello! How can I help you ?";
    } else if (input.includes("goodbye") || input.includes("ok") || input.includes("bye")){
        return "Take care of yourself. If you have more questions about our services, feel free to ask later!";
    } else {
        return "I am sorry, Nyakama Mahle is still in the process of creating me. To learn more about our services and pricing, visit our website or contact us.";
    }
}
