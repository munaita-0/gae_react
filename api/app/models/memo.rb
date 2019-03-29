class Memo < ApplicationRecord 
  def send_mail
    # Define necessary information for a new email
    from    = SendGrid::Email.new email: SENDGRID_SENDER
    to      = SendGrid::Email.new email: params[:recipient]
    subject = "Hello from Google Cloud Ruby SendGrid Sample"
    content = SendGrid::Content.new type:  "text/plain",
      value: "Congratulations it works!"

    # Define the new email with provided information
    mail = SendGrid::Mail.new(from, subject, to, content)

    # Create a new API Client to send the new email
    sendgrid = SendGrid::API.new api_key: SENDGRID_API_KEY

    begin
      # Send request to "mail/send"
      response = sendgrid.client.mail._('send').post request_body: mail.to_json

      "Email sent. #{response.status_code} #{response.body}"
    rescue Exception => ex
      "An error occurred: #{ex.message}"
    end
  end
end
