## Flow
1. S3 Bucket
2. Lambda Function
3. EC2 Instance


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
      "Access-Control-Allow-Origin": "*", 
      "Access-Control-Allow-Headers": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
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

## Nodejs installation
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.2/install.sh | bash
\. "$HOME/.nvm/nvm.sh"
nvm install 22
node -v # Should print "v22.14.0".
nvm current # Should print "v22.14.0".
npm -v # Should print "10.9.2".

```
