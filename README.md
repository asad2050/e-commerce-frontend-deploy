### Project Information
This project is part of an assessment for a Web Developer Internship at Hermaig Jewelers.

### Demo
   - **Primary Demo Link**:  https://d2abqopzf80zfd.cloudfront.net
   - **Alternative Link** (if the primary link is inactive): [https://har-ans8.onrender.com](https://har-ans8.onrender.com)

# Deployment Documentation for E-commerce Platform

## Overview
This document provides a brief overview of the deployment process for the e-commerce platform, which is a React app hosted on AWS.

## Services Used
- **Amazon S3**: Used to store the static files of the React app (dist folder).
- **Amazon CloudFront**: Utilized as a content delivery network (CDN) to serve the app globally and improve loading speeds.

## Deployment Steps

1. **Build the React App**
   - Created an optimized production build using:
     ```bash
     npm run build
     ```
   - This command generated the `dist` folder containing the static files.

2. **Upload to S3**
   - Created an S3 bucket to store the contents of the `dist` folder.
   - Uploaded all files from the `dist` folder to the S3 bucket.

3. **Configure CloudFront**
   - Created a CloudFront distribution with the S3 bucket as the origin.
   - Set up caching and enabled HTTPS to serve the app securely.
   - Copy the bucket policy from CloudFront Distrubution after it has done been created and paste it in S3 Bucket Policy section.

4. **Custom Domain (Optional)**
   - **Recommendation**: If you want to use a custom domain, you must first own the domain.
   - Once you have your domain, create an SSL certificate using **AWS Certificate Manager (ACM)** to enable HTTPS for your CloudFront distribution.

5. **Live Link**
   - **Primary Demo Link**:  https://d2abqopzf80zfd.cloudfront.net
   - **Alternative Link** (if the primary link is inactive): [https://har-ans8.onrender.com](https://har-ans8.onrender.com)

## Conclusion
The deployment of the e-commerce platform on AWS is complete, with static files stored in S3 and served via CloudFront. For any questions or further assistance, feel free to reach out.
