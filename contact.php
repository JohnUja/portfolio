<?php
if(isset($_POST['submit'])) {
  $to = "johnc.uja@gmail.com"; // Enter your email address here
  $subject = "Contact Form Submission";
  $name = $_POST['name'];
  $company = $_POST['company'];
  $reason = $_POST['reason'];
  $details = $_POST['details'];
  
  // Create the email message
  $message = "Name: ".$name."\n";
  if(!empty($company)) {
    $message .= "Company Name: ".$company."\n";
  }
  $message .= "Reason for Contact: ".$reason."\n";
  $message .= "Contact Details: ".$details."\n";
  
  // Set the headers
  $headers = "From: ".$name." <".$to.">\r\n";
  $headers .= "Reply-To: ".$to."\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
  
  // Send the email
  if(mail($to, $subject, $message, $headers)) {
    echo "Thank you for your message. We will be in touch soon.";
  } else {
    echo "Sorry, there was an error sending your message. Please try again later.";
  }
}
?>
