<?php
// ini_set('display_errors', 1);
// include 'TwitterAPIExchange.php';


/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
// $settings = array(
//     'oauth_access_token' => "91253095-NE8C5vyVXGI7dAUbSLFUjLN4NpzRmpQe1e7SlFOnG",
//     'oauth_access_token_secret' => "fmPoty0KhVFSzgcZ8jLeGpQLJf8T7C1mwPHgl3U90YiV5",
//     'consumer_key' => "Th9cmM5wCK3s5CgNwtaYEHR8B",
//     'consumer_secret' => "tgejvpCSePA3gH135IlxavN8gL9WvWEsd8aFpoUGk2oPsoBrCY"
// );

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
// $url = 'https://api.twitter.com/1.1/blocks/create.json';
// $requestMethod = 'POST';


/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
// $url = 'https://api.twitter.com/1.1/followers/ids.json';
// $getfield = '?from:FintechUnltd+OR+from:NeverEverLtd';
// $requestMethod = 'GET';
// $twitter = new TwitterAPIExchange($settings);
// echo $twitter->setGetfield($getfield)
//              ->buildOauth($url, $requestMethod)
//              ->performRequest();
//
//
//              foreach($tweets as $tweet){
//     echo "Tweet: " . $tweet["text"] . "<br>";
//   }


function buildBaseString($baseURI, $method, $params) {
    $r = array();
    ksort($params);
    foreach($params as $key=>$value){
        $r[] = "$key=" . rawurlencode($value);
    }
    return $method."&" . rawurlencode($baseURI) . '&' . rawurlencode(implode('&', $r));
}

function buildAuthorizationHeader($oauth) {
    $r = 'Authorization: OAuth ';
    $values = array();
    foreach($oauth as $key=>$value)
        $values[] = "$key=\"" . rawurlencode($value) . "\"";
    $r .= implode(', ', $values);
    return $r;
}

function returnTweet(){
      $oauth_access_token = "91253095-NE8C5vyVXGI7dAUbSLFUjLN4NpzRmpQe1e7SlFOnG";
      $oauth_access_token_secret = "fmPoty0KhVFSzgcZ8jLeGpQLJf8T7C1mwPHgl3U90YiV5";
      $consumer_key = "Th9cmM5wCK3s5CgNwtaYEHR8B";
      $consumer_secret = "tgejvpCSePA3gH135IlxavN8gL9WvWEsd8aFpoUGk2oPsoBrCY" ;

      $twitter_timeline = "user_timeline";  //  mentions_timeline / user_timeline / home_timeline / retweets_of_me

    //  create request
        $request = array(
            'screen_name'       => 'suprisaac',
            'count'             => '1'
        );

    $oauth = array(
        'oauth_consumer_key'        => $consumer_key,
        'oauth_nonce'               => time(),
        'oauth_signature_method'    => 'HMAC-SHA1',
        'oauth_token'               => $oauth_access_token,
        'oauth_timestamp'           => time(),
        'oauth_version'             => '1.0'
    );

    //  merge request and oauth to one array
        $oauth = array_merge($oauth, $request);

    //  do some magic
        $base_info              = buildBaseString("https://api.twitter.com/1.1/statuses/$twitter_timeline.json", 'GET', $oauth);
        $composite_key          = rawurlencode($consumer_secret) . '&' . rawurlencode($oauth_access_token_secret);
        $oauth_signature            = base64_encode(hash_hmac('sha1', $base_info, $composite_key, true));
        $oauth['oauth_signature']   = $oauth_signature;

    //  make request
        $header = array(buildAuthorizationHeader($oauth), 'Expect:');
        $options = array( CURLOPT_HTTPHEADER => $header,
                          CURLOPT_HEADER => false,
                          CURLOPT_URL => "https://api.twitter.com/1.1/statuses/$twitter_timeline.json?". http_build_query($request),
                          CURLOPT_RETURNTRANSFER => true,
                          CURLOPT_SSL_VERIFYPEER => false);

        $feed = curl_init();
        curl_setopt_array($feed, $options);
        $json = curl_exec($feed);
        curl_close($feed);

    return json_decode($json, true);
}

?>
