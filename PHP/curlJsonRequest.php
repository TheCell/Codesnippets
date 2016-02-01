<?
// Array to send
$data = array("name" => "TheCell", "repository" => "Codesnippets");

// make json String
$dataString = json_encode($data);

// Init Curl
$curlInstance = curl_init('http://api.local/rest/users');

// prepare options
$options = array
(
	// customrequest Post because real POST expects form fields
	CURLOPT_CUSTOMREQUEST => "POST",
	// simply write the string requestbody
	CURLOPT_POSTFIELDS => $dataString,
	// return String instead of a direct dump
	CURLOPT_RETURNTRANSFER => true,
	// set Header info for Json
	CURLOPT_HTTPHEADER => array
		(
			'Content-Type: application/json',
			'Content-Length: ' . strlen($dataString)
		)
);

// prepare Curl with the options
curl_setopt_array($curlInstance, $options)

// exec and fetch result
$result = curl_exec($curlInstance);
?>