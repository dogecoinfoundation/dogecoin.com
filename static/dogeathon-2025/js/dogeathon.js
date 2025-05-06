// Check if jQuery is loaded
if (typeof jQuery === 'undefined') {
    console.error('jQuery is not loaded!');
} else {
    // Wait for both jQuery and DOM to be ready
    jQuery(document).ready(function($) {
        // Add real-time validation for Dogecoin address
        $('#doge-address').on('input', function() {
            const dogecoinAdd = $(this).val();
            const isValid = bs58caddr.validateCoinAddress('DOGE', dogecoinAdd);
            
            if (dogecoinAdd.length > 0) {
                if (isValid) {
                    $(this).removeClass('w-form-error').addClass('w-form-success');
                } else {
                    $(this).removeClass('w-form-success').addClass('w-form-error');
                }
            } else {
                $(this).removeClass('w-form-error w-form-success');
            }
        });

        $('#wf-form-Register-2').on('submit', function (event) {
            event.preventDefault(); // Stop default form submission

            const dogecoinAdd = $('#doge-address').val();
            if (!bs58caddr.validateCoinAddress('DOGE', dogecoinAdd)) {
                alert('Sorry Shibe, that Dogecoin address is not valid! Please check and try again.');
                return;
            }

            // Proceed with AJAX submission
            sendtoGigaWallet();
        });

        async function sendtoGigaWallet() {
            // Get form values
            const name = $('#name').val().trim();
            const email = $('#email-address').val().trim();
            const country = $('#country').val().trim();
            const github = $('#github-username').val().trim();
            const x = $('#x-username').val().trim();
            const dogeAddress = $('#doge-address').val().trim();
            const attendance = $('#attendance').val();

            // Basic validation
            if (!name || !email || !country || !dogeAddress) {
                alert('Please fill in all required fields!');
                return;
            }

            const formData = {
                name: name,
                email: email,
                attendance: attendance,
                country: country,
                github: github || null,            
                x: x || null,
                dogeAddress: dogeAddress,
                sku: 'dogeathon-2025',
                amount: 269 // Fixed amount for registration
            };

            try {
                // Show loading state
                $('#submit-button').prop('disabled', true).text('Processing...');

                console.log('Sending request with data:', formData);

                const response = await $.ajax({
                    url: 'https://what-is-dogecoin.com/foundation/dogeathon2025/inc/vendors/gigawallet-api.php',
                    type: 'POST',
                    data: JSON.stringify(formData),
                    contentType: 'application/json',
                    timeout: 30000, // 30 second timeout
                    dataType: 'json'
                });

                console.log('Server response:', response);

                // Handle successful response
                if (response.success && response.GigaQR && response.PaytoDogeAddress) {
                    // Store the payment address in localStorage
                    localStorage.setItem('PaytoDogeAddress', response.PaytoDogeAddress);
                    
                    // Hide the form immediately
                    $('#registration-form').hide();
                    
                    // Show success message
                    $('.w-form-done').show();
                    $('.w-form-error').hide();
                    
                    // Show QR code and payment address in modal
                    $('#modal-fee-success .qr-code').attr('src', 'data:image/png;base64,' + response.GigaQR);
                    $('#payment-address').val(response.PaytoDogeAddress);
                    
                    // Show the modal immediately
                    $('#modal-fee-success').show();
                } else {
                    console.error('Invalid response format:', response);
                    throw new Error('Invalid response format from server');
                }
            } catch (error) {
                console.error('Error details:', error);
                console.error('Error status:', error.status);
                console.error('Error statusText:', error.statusText);
                console.error('Error responseText:', error.responseText);
                
                let errorMessage = 'An error occurred while processing your registration.';
                
                if (error.responseJSON) {
                    // Server returned a JSON error response
                    errorMessage = error.responseJSON.error || errorMessage;
                    if (error.responseJSON.details) {
                        console.error('Server error details:', error.responseJSON.details);
                    }
                } else if (error.statusText) {
                    // HTTP error
                    errorMessage = `HTTP Error: ${error.status} ${error.statusText}`;
                } else if (error.message) {
                    // Other error
                    errorMessage = error.message;
                }
                
                // Show error message
                $('.w-form-done').hide();
                $('.w-form-error').show().find('div').text(errorMessage);
                
                // Re-enable the submit button
                $('#submit-button').prop('disabled', false).text('Register Now');
            }
        }

        // Modal close logic
        $('.modal-close').on('click', function (e) {
            e.preventDefault();
            $('#modal-fee-success').fadeOut();
        });
    });
}
