# Webhook logger

Display requests in the command line output (`stdout`) and as a JSON response

Based on: https://gist.github.com/joyrexus/7898e57be3478b4522ec5654c3cb572e

## Usage

Run `npm run serve`. You can use the local url (http://localhost:8080) or the ngrok forwarding url for target. You can see the input data in the terminal, but also in the ngrok interface (http://127.0.0.1:4040).

Alternatively you can run the two underlinign command separately. Open two terminal run `npm run app` on one, and `npm run ngrok` on the other.
