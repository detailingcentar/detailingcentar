<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = htmlspecialchars(trim($_POST['name']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $automobil = htmlspecialchars(trim($_POST['automobil']));
    $usluga = htmlspecialchars(trim($_POST['usluga']));
    
    // Validate input
    if (empty($name) || empty($phone) || empty($automobil) || empty($usluga)) {
        echo "All fields are required.";
        exit;
    }

    // Validate phone number format (10 digits)
    if (!preg_match("/^[0-9]{10}$/", $phone)) {
        echo "Invalid phone number format. Please enter 10 digits.";
        exit;
    }
    
    // Client email address
    $to = "detailingcentar505@gmail.com"; // Replace with your client's email address
    
    // Subject of the email
    $subject = "Klijent - Poruka";
    
    // Message content
    $message = "
    <html>
    <head>
        <title>New Contact Form Submission</title>
    </head>
    <body>
        <h2>Contact Form Submission</h2>
        <p><strong>Ime i prezime:</strong> $name</p>
        <p><strong>Broj telefona:</strong> $phone</p>
        <p><strong>Automobil:</strong> $automobil</p>
        <p><strong>Usluga koja vam treba:</strong> $usluga</p>
    </body>
    </html>
    ";
    
    // Email headers
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: noreply@yourdomain.com" . "\r\n"; // Replace with your domain
    
    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email. Please check your server configuration.";
    }
} else {
    echo "Invalid request.";
}
?>
