## Bucket Policy
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::ec2practicefrontend/*"
    }
  ]
}
```

## CORS headers for lambda
```javascript
export const handler = async (event) => {
  const response = {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // allow all origins
      "Access-Control-Allow-Headers": "*", // allow any headers
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // allow specific methods
    },
    body: JSON.stringify({
      username: "shreyash",
      password: "Pass@1234",
      imageURL: "https://s3.ap-south-1.amazonaws.com/cclab.shreyash.bucket/rr.gif"
    }),
  };
  return response;
};
```
